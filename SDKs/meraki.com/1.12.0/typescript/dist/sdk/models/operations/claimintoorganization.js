"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimIntoOrganizationResponse = exports.ClaimIntoOrganizationRequest = exports.ClaimIntoOrganizationRequestBody = exports.ClaimIntoOrganizationRequestBodyLicenses = exports.ClaimIntoOrganizationRequestBodyLicensesModeEnum = exports.ClaimIntoOrganizationPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ClaimIntoOrganizationPathParams = /** @class */ (function (_super) {
    __extends(ClaimIntoOrganizationPathParams, _super);
    function ClaimIntoOrganizationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], ClaimIntoOrganizationPathParams.prototype, "organizationId", void 0);
    return ClaimIntoOrganizationPathParams;
}(utils_1.SpeakeasyBase));
exports.ClaimIntoOrganizationPathParams = ClaimIntoOrganizationPathParams;
var ClaimIntoOrganizationRequestBodyLicensesModeEnum;
(function (ClaimIntoOrganizationRequestBodyLicensesModeEnum) {
    ClaimIntoOrganizationRequestBodyLicensesModeEnum["AddDevices"] = "addDevices";
    ClaimIntoOrganizationRequestBodyLicensesModeEnum["Renew"] = "renew";
})(ClaimIntoOrganizationRequestBodyLicensesModeEnum = exports.ClaimIntoOrganizationRequestBodyLicensesModeEnum || (exports.ClaimIntoOrganizationRequestBodyLicensesModeEnum = {}));
var ClaimIntoOrganizationRequestBodyLicenses = /** @class */ (function (_super) {
    __extends(ClaimIntoOrganizationRequestBodyLicenses, _super);
    function ClaimIntoOrganizationRequestBodyLicenses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ClaimIntoOrganizationRequestBodyLicenses.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], ClaimIntoOrganizationRequestBodyLicenses.prototype, "mode", void 0);
    return ClaimIntoOrganizationRequestBodyLicenses;
}(utils_1.SpeakeasyBase));
exports.ClaimIntoOrganizationRequestBodyLicenses = ClaimIntoOrganizationRequestBodyLicenses;
var ClaimIntoOrganizationRequestBody = /** @class */ (function (_super) {
    __extends(ClaimIntoOrganizationRequestBody, _super);
    function ClaimIntoOrganizationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=licenses", elemType: ClaimIntoOrganizationRequestBodyLicenses }),
        __metadata("design:type", Array)
    ], ClaimIntoOrganizationRequestBody.prototype, "licenses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orders" }),
        __metadata("design:type", Array)
    ], ClaimIntoOrganizationRequestBody.prototype, "orders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serials" }),
        __metadata("design:type", Array)
    ], ClaimIntoOrganizationRequestBody.prototype, "serials", void 0);
    return ClaimIntoOrganizationRequestBody;
}(utils_1.SpeakeasyBase));
exports.ClaimIntoOrganizationRequestBody = ClaimIntoOrganizationRequestBody;
var ClaimIntoOrganizationRequest = /** @class */ (function (_super) {
    __extends(ClaimIntoOrganizationRequest, _super);
    function ClaimIntoOrganizationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClaimIntoOrganizationPathParams)
    ], ClaimIntoOrganizationRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ClaimIntoOrganizationRequestBody)
    ], ClaimIntoOrganizationRequest.prototype, "request", void 0);
    return ClaimIntoOrganizationRequest;
}(utils_1.SpeakeasyBase));
exports.ClaimIntoOrganizationRequest = ClaimIntoOrganizationRequest;
var ClaimIntoOrganizationResponse = /** @class */ (function (_super) {
    __extends(ClaimIntoOrganizationResponse, _super);
    function ClaimIntoOrganizationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClaimIntoOrganizationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClaimIntoOrganizationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ClaimIntoOrganizationResponse.prototype, "claimIntoOrganization200ApplicationJSONObject", void 0);
    return ClaimIntoOrganizationResponse;
}(utils_1.SpeakeasyBase));
exports.ClaimIntoOrganizationResponse = ClaimIntoOrganizationResponse;
