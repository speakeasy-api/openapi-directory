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
exports.GetOrganizationApplianceUplinkStatusesResponse = exports.GetOrganizationApplianceUplinkStatusesRequest = exports.GetOrganizationApplianceUplinkStatusesQueryParams = exports.GetOrganizationApplianceUplinkStatusesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetOrganizationApplianceUplinkStatusesPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceUplinkStatusesPathParams, _super);
    function GetOrganizationApplianceUplinkStatusesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceUplinkStatusesPathParams.prototype, "organizationId", void 0);
    return GetOrganizationApplianceUplinkStatusesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationApplianceUplinkStatusesPathParams = GetOrganizationApplianceUplinkStatusesPathParams;
var GetOrganizationApplianceUplinkStatusesQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceUplinkStatusesQueryParams, _super);
    function GetOrganizationApplianceUplinkStatusesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceUplinkStatusesQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=iccids" }),
        __metadata("design:type", Array)
    ], GetOrganizationApplianceUplinkStatusesQueryParams.prototype, "iccids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=networkIds" }),
        __metadata("design:type", Array)
    ], GetOrganizationApplianceUplinkStatusesQueryParams.prototype, "networkIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationApplianceUplinkStatusesQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=serials" }),
        __metadata("design:type", Array)
    ], GetOrganizationApplianceUplinkStatusesQueryParams.prototype, "serials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceUplinkStatusesQueryParams.prototype, "startingAfter", void 0);
    return GetOrganizationApplianceUplinkStatusesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationApplianceUplinkStatusesQueryParams = GetOrganizationApplianceUplinkStatusesQueryParams;
var GetOrganizationApplianceUplinkStatusesRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceUplinkStatusesRequest, _super);
    function GetOrganizationApplianceUplinkStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationApplianceUplinkStatusesPathParams)
    ], GetOrganizationApplianceUplinkStatusesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationApplianceUplinkStatusesQueryParams)
    ], GetOrganizationApplianceUplinkStatusesRequest.prototype, "queryParams", void 0);
    return GetOrganizationApplianceUplinkStatusesRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationApplianceUplinkStatusesRequest = GetOrganizationApplianceUplinkStatusesRequest;
var GetOrganizationApplianceUplinkStatusesResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceUplinkStatusesResponse, _super);
    function GetOrganizationApplianceUplinkStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrganizationApplianceUplinkStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationApplianceUplinkStatusesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrganizationApplianceUplinkStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationApplianceUplinkStatusesResponse.prototype, "getOrganizationApplianceUplinkStatuses200ApplicationJSONObject", void 0);
    return GetOrganizationApplianceUplinkStatusesResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationApplianceUplinkStatusesResponse = GetOrganizationApplianceUplinkStatusesResponse;
