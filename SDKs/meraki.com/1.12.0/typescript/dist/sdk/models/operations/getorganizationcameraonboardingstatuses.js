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
exports.GetOrganizationCameraOnboardingStatusesResponse = exports.GetOrganizationCameraOnboardingStatusesRequest = exports.GetOrganizationCameraOnboardingStatusesQueryParams = exports.GetOrganizationCameraOnboardingStatusesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetOrganizationCameraOnboardingStatusesPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationCameraOnboardingStatusesPathParams, _super);
    function GetOrganizationCameraOnboardingStatusesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationCameraOnboardingStatusesPathParams.prototype, "organizationId", void 0);
    return GetOrganizationCameraOnboardingStatusesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationCameraOnboardingStatusesPathParams = GetOrganizationCameraOnboardingStatusesPathParams;
var GetOrganizationCameraOnboardingStatusesQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationCameraOnboardingStatusesQueryParams, _super);
    function GetOrganizationCameraOnboardingStatusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=networkIds" }),
        __metadata("design:type", Array)
    ], GetOrganizationCameraOnboardingStatusesQueryParams.prototype, "networkIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=serials" }),
        __metadata("design:type", Array)
    ], GetOrganizationCameraOnboardingStatusesQueryParams.prototype, "serials", void 0);
    return GetOrganizationCameraOnboardingStatusesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationCameraOnboardingStatusesQueryParams = GetOrganizationCameraOnboardingStatusesQueryParams;
var GetOrganizationCameraOnboardingStatusesRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationCameraOnboardingStatusesRequest, _super);
    function GetOrganizationCameraOnboardingStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationCameraOnboardingStatusesPathParams)
    ], GetOrganizationCameraOnboardingStatusesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationCameraOnboardingStatusesQueryParams)
    ], GetOrganizationCameraOnboardingStatusesRequest.prototype, "queryParams", void 0);
    return GetOrganizationCameraOnboardingStatusesRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationCameraOnboardingStatusesRequest = GetOrganizationCameraOnboardingStatusesRequest;
var GetOrganizationCameraOnboardingStatusesResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationCameraOnboardingStatusesResponse, _super);
    function GetOrganizationCameraOnboardingStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrganizationCameraOnboardingStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrganizationCameraOnboardingStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationCameraOnboardingStatusesResponse.prototype, "getOrganizationCameraOnboardingStatuses200ApplicationJSONObject", void 0);
    return GetOrganizationCameraOnboardingStatusesResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationCameraOnboardingStatusesResponse = GetOrganizationCameraOnboardingStatusesResponse;
