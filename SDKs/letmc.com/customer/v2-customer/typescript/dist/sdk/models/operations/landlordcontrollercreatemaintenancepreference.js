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
exports.LandlordControllerCreateMaintenancePreferenceResponse = exports.LandlordControllerCreateMaintenancePreferenceRequest = exports.LandlordControllerCreateMaintenancePreferenceQueryParams = exports.LandlordControllerCreateMaintenancePreferencePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var LandlordControllerCreateMaintenancePreferencePathParams = /** @class */ (function (_super) {
    __extends(LandlordControllerCreateMaintenancePreferencePathParams, _super);
    function LandlordControllerCreateMaintenancePreferencePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], LandlordControllerCreateMaintenancePreferencePathParams.prototype, "shortName", void 0);
    return LandlordControllerCreateMaintenancePreferencePathParams;
}(utils_1.SpeakeasyBase));
exports.LandlordControllerCreateMaintenancePreferencePathParams = LandlordControllerCreateMaintenancePreferencePathParams;
var LandlordControllerCreateMaintenancePreferenceQueryParams = /** @class */ (function (_super) {
    __extends(LandlordControllerCreateMaintenancePreferenceQueryParams, _super);
    function LandlordControllerCreateMaintenancePreferenceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], LandlordControllerCreateMaintenancePreferenceQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=notes" }),
        __metadata("design:type", String)
    ], LandlordControllerCreateMaintenancePreferenceQueryParams.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tenancyID" }),
        __metadata("design:type", String)
    ], LandlordControllerCreateMaintenancePreferenceQueryParams.prototype, "tenancyID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=token" }),
        __metadata("design:type", String)
    ], LandlordControllerCreateMaintenancePreferenceQueryParams.prototype, "token", void 0);
    return LandlordControllerCreateMaintenancePreferenceQueryParams;
}(utils_1.SpeakeasyBase));
exports.LandlordControllerCreateMaintenancePreferenceQueryParams = LandlordControllerCreateMaintenancePreferenceQueryParams;
var LandlordControllerCreateMaintenancePreferenceRequest = /** @class */ (function (_super) {
    __extends(LandlordControllerCreateMaintenancePreferenceRequest, _super);
    function LandlordControllerCreateMaintenancePreferenceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LandlordControllerCreateMaintenancePreferencePathParams)
    ], LandlordControllerCreateMaintenancePreferenceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", LandlordControllerCreateMaintenancePreferenceQueryParams)
    ], LandlordControllerCreateMaintenancePreferenceRequest.prototype, "queryParams", void 0);
    return LandlordControllerCreateMaintenancePreferenceRequest;
}(utils_1.SpeakeasyBase));
exports.LandlordControllerCreateMaintenancePreferenceRequest = LandlordControllerCreateMaintenancePreferenceRequest;
var LandlordControllerCreateMaintenancePreferenceResponse = /** @class */ (function (_super) {
    __extends(LandlordControllerCreateMaintenancePreferenceResponse, _super);
    function LandlordControllerCreateMaintenancePreferenceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LandlordControllerCreateMaintenancePreferenceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LandlordControllerCreateMaintenancePreferenceResponse.prototype, "landlordControllerCreateMaintenancePreference200ApplicationJSONString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LandlordControllerCreateMaintenancePreferenceResponse.prototype, "landlordControllerCreateMaintenancePreference200ApplicationXMLString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LandlordControllerCreateMaintenancePreferenceResponse.prototype, "landlordControllerCreateMaintenancePreference200TextJSONString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], LandlordControllerCreateMaintenancePreferenceResponse.prototype, "landlordControllerCreateMaintenancePreference200TextXMLString", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], LandlordControllerCreateMaintenancePreferenceResponse.prototype, "statusCode", void 0);
    return LandlordControllerCreateMaintenancePreferenceResponse;
}(utils_1.SpeakeasyBase));
exports.LandlordControllerCreateMaintenancePreferenceResponse = LandlordControllerCreateMaintenancePreferenceResponse;
