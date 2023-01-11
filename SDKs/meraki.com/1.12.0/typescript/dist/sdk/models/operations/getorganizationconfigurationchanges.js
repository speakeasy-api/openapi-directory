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
exports.GetOrganizationConfigurationChangesResponse = exports.GetOrganizationConfigurationChangesRequest = exports.GetOrganizationConfigurationChangesQueryParams = exports.GetOrganizationConfigurationChangesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetOrganizationConfigurationChangesPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigurationChangesPathParams, _super);
    function GetOrganizationConfigurationChangesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigurationChangesPathParams.prototype, "organizationId", void 0);
    return GetOrganizationConfigurationChangesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationConfigurationChangesPathParams = GetOrganizationConfigurationChangesPathParams;
var GetOrganizationConfigurationChangesQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigurationChangesQueryParams, _super);
    function GetOrganizationConfigurationChangesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=adminId" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigurationChangesQueryParams.prototype, "adminId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigurationChangesQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=networkId" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigurationChangesQueryParams.prototype, "networkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationConfigurationChangesQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigurationChangesQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigurationChangesQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigurationChangesQueryParams.prototype, "t1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetOrganizationConfigurationChangesQueryParams.prototype, "timespan", void 0);
    return GetOrganizationConfigurationChangesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationConfigurationChangesQueryParams = GetOrganizationConfigurationChangesQueryParams;
var GetOrganizationConfigurationChangesRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigurationChangesRequest, _super);
    function GetOrganizationConfigurationChangesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationConfigurationChangesPathParams)
    ], GetOrganizationConfigurationChangesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationConfigurationChangesQueryParams)
    ], GetOrganizationConfigurationChangesRequest.prototype, "queryParams", void 0);
    return GetOrganizationConfigurationChangesRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationConfigurationChangesRequest = GetOrganizationConfigurationChangesRequest;
var GetOrganizationConfigurationChangesResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigurationChangesResponse, _super);
    function GetOrganizationConfigurationChangesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrganizationConfigurationChangesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationConfigurationChangesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrganizationConfigurationChangesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationConfigurationChangesResponse.prototype, "getOrganizationConfigurationChanges200ApplicationJSONObject", void 0);
    return GetOrganizationConfigurationChangesResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationConfigurationChangesResponse = GetOrganizationConfigurationChangesResponse;
