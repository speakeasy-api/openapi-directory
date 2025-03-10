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
exports.GetNetworkApplianceSecurityEventsResponse = exports.GetNetworkApplianceSecurityEventsRequest = exports.GetNetworkApplianceSecurityEventsQueryParams = exports.GetNetworkApplianceSecurityEventsSortOrderEnum = exports.GetNetworkApplianceSecurityEventsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetNetworkApplianceSecurityEventsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceSecurityEventsPathParams, _super);
    function GetNetworkApplianceSecurityEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceSecurityEventsPathParams.prototype, "networkId", void 0);
    return GetNetworkApplianceSecurityEventsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkApplianceSecurityEventsPathParams = GetNetworkApplianceSecurityEventsPathParams;
var GetNetworkApplianceSecurityEventsSortOrderEnum;
(function (GetNetworkApplianceSecurityEventsSortOrderEnum) {
    GetNetworkApplianceSecurityEventsSortOrderEnum["Ascending"] = "ascending";
    GetNetworkApplianceSecurityEventsSortOrderEnum["Descending"] = "descending";
})(GetNetworkApplianceSecurityEventsSortOrderEnum = exports.GetNetworkApplianceSecurityEventsSortOrderEnum || (exports.GetNetworkApplianceSecurityEventsSortOrderEnum = {}));
var GetNetworkApplianceSecurityEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceSecurityEventsQueryParams, _super);
    function GetNetworkApplianceSecurityEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceSecurityEventsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkApplianceSecurityEventsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceSecurityEventsQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceSecurityEventsQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceSecurityEventsQueryParams.prototype, "t0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkApplianceSecurityEventsQueryParams.prototype, "t1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkApplianceSecurityEventsQueryParams.prototype, "timespan", void 0);
    return GetNetworkApplianceSecurityEventsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworkApplianceSecurityEventsQueryParams = GetNetworkApplianceSecurityEventsQueryParams;
var GetNetworkApplianceSecurityEventsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceSecurityEventsRequest, _super);
    function GetNetworkApplianceSecurityEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkApplianceSecurityEventsPathParams)
    ], GetNetworkApplianceSecurityEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworkApplianceSecurityEventsQueryParams)
    ], GetNetworkApplianceSecurityEventsRequest.prototype, "queryParams", void 0);
    return GetNetworkApplianceSecurityEventsRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworkApplianceSecurityEventsRequest = GetNetworkApplianceSecurityEventsRequest;
var GetNetworkApplianceSecurityEventsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkApplianceSecurityEventsResponse, _super);
    function GetNetworkApplianceSecurityEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworkApplianceSecurityEventsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkApplianceSecurityEventsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworkApplianceSecurityEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworkApplianceSecurityEventsResponse.prototype, "getNetworkApplianceSecurityEvents200ApplicationJSONObject", void 0);
    return GetNetworkApplianceSecurityEventsResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworkApplianceSecurityEventsResponse = GetNetworkApplianceSecurityEventsResponse;
