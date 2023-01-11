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
exports.GetOrganizationApplianceSecurityEventsResponse = exports.GetOrganizationApplianceSecurityEventsRequest = exports.GetOrganizationApplianceSecurityEventsQueryParams = exports.GetOrganizationApplianceSecurityEventsSortOrderEnum = exports.GetOrganizationApplianceSecurityEventsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetOrganizationApplianceSecurityEventsPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceSecurityEventsPathParams, _super);
    function GetOrganizationApplianceSecurityEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceSecurityEventsPathParams.prototype, "organizationId", void 0);
    return GetOrganizationApplianceSecurityEventsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationApplianceSecurityEventsPathParams = GetOrganizationApplianceSecurityEventsPathParams;
var GetOrganizationApplianceSecurityEventsSortOrderEnum;
(function (GetOrganizationApplianceSecurityEventsSortOrderEnum) {
    GetOrganizationApplianceSecurityEventsSortOrderEnum["Ascending"] = "ascending";
    GetOrganizationApplianceSecurityEventsSortOrderEnum["Descending"] = "descending";
})(GetOrganizationApplianceSecurityEventsSortOrderEnum = exports.GetOrganizationApplianceSecurityEventsSortOrderEnum || (exports.GetOrganizationApplianceSecurityEventsSortOrderEnum = {}));
var GetOrganizationApplianceSecurityEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceSecurityEventsQueryParams, _super);
    function GetOrganizationApplianceSecurityEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceSecurityEventsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetOrganizationApplianceSecurityEventsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceSecurityEventsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceSecurityEventsQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceSecurityEventsQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetOrganizationApplianceSecurityEventsQueryParams.prototype, "t1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetOrganizationApplianceSecurityEventsQueryParams.prototype, "timespan", void 0);
    return GetOrganizationApplianceSecurityEventsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationApplianceSecurityEventsQueryParams = GetOrganizationApplianceSecurityEventsQueryParams;
var GetOrganizationApplianceSecurityEventsRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceSecurityEventsRequest, _super);
    function GetOrganizationApplianceSecurityEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationApplianceSecurityEventsPathParams)
    ], GetOrganizationApplianceSecurityEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetOrganizationApplianceSecurityEventsQueryParams)
    ], GetOrganizationApplianceSecurityEventsRequest.prototype, "queryParams", void 0);
    return GetOrganizationApplianceSecurityEventsRequest;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationApplianceSecurityEventsRequest = GetOrganizationApplianceSecurityEventsRequest;
var GetOrganizationApplianceSecurityEventsResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationApplianceSecurityEventsResponse, _super);
    function GetOrganizationApplianceSecurityEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetOrganizationApplianceSecurityEventsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationApplianceSecurityEventsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetOrganizationApplianceSecurityEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetOrganizationApplianceSecurityEventsResponse.prototype, "getOrganizationApplianceSecurityEvents200ApplicationJSONObject", void 0);
    return GetOrganizationApplianceSecurityEventsResponse;
}(utils_1.SpeakeasyBase));
exports.GetOrganizationApplianceSecurityEventsResponse = GetOrganizationApplianceSecurityEventsResponse;
