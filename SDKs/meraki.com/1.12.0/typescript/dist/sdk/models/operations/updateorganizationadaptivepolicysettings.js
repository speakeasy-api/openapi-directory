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
exports.UpdateOrganizationAdaptivePolicySettingsResponse = exports.UpdateOrganizationAdaptivePolicySettingsRequest = exports.UpdateOrganizationAdaptivePolicySettingsRequestBody = exports.UpdateOrganizationAdaptivePolicySettingsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateOrganizationAdaptivePolicySettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdaptivePolicySettingsPathParams, _super);
    function UpdateOrganizationAdaptivePolicySettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicySettingsPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationAdaptivePolicySettingsPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateOrganizationAdaptivePolicySettingsPathParams = UpdateOrganizationAdaptivePolicySettingsPathParams;
var UpdateOrganizationAdaptivePolicySettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdaptivePolicySettingsRequestBody, _super);
    function UpdateOrganizationAdaptivePolicySettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabledNetworks" }),
        __metadata("design:type", Array)
    ], UpdateOrganizationAdaptivePolicySettingsRequestBody.prototype, "enabledNetworks", void 0);
    return UpdateOrganizationAdaptivePolicySettingsRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateOrganizationAdaptivePolicySettingsRequestBody = UpdateOrganizationAdaptivePolicySettingsRequestBody;
var UpdateOrganizationAdaptivePolicySettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdaptivePolicySettingsRequest, _super);
    function UpdateOrganizationAdaptivePolicySettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateOrganizationAdaptivePolicySettingsPathParams)
    ], UpdateOrganizationAdaptivePolicySettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationAdaptivePolicySettingsRequestBody)
    ], UpdateOrganizationAdaptivePolicySettingsRequest.prototype, "request", void 0);
    return UpdateOrganizationAdaptivePolicySettingsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateOrganizationAdaptivePolicySettingsRequest = UpdateOrganizationAdaptivePolicySettingsRequest;
var UpdateOrganizationAdaptivePolicySettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationAdaptivePolicySettingsResponse, _super);
    function UpdateOrganizationAdaptivePolicySettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateOrganizationAdaptivePolicySettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateOrganizationAdaptivePolicySettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateOrganizationAdaptivePolicySettingsResponse.prototype, "updateOrganizationAdaptivePolicySettings200ApplicationJSONObject", void 0);
    return UpdateOrganizationAdaptivePolicySettingsResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateOrganizationAdaptivePolicySettingsResponse = UpdateOrganizationAdaptivePolicySettingsResponse;
