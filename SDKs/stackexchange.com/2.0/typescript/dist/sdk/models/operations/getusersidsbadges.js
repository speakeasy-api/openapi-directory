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
exports.GetUsersIdsBadgesResponse = exports.GetUsersIdsBadgesRequest = exports.GetUsersIdsBadgesQueryParams = exports.GetUsersIdsBadgesSortEnum = exports.GetUsersIdsBadgesOrderEnum = exports.GetUsersIdsBadgesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetUsersIdsBadgesPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsBadgesPathParams, _super);
    function GetUsersIdsBadgesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsBadgesPathParams.prototype, "ids", void 0);
    return GetUsersIdsBadgesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdsBadgesPathParams = GetUsersIdsBadgesPathParams;
var GetUsersIdsBadgesOrderEnum;
(function (GetUsersIdsBadgesOrderEnum) {
    GetUsersIdsBadgesOrderEnum["Desc"] = "desc";
    GetUsersIdsBadgesOrderEnum["Asc"] = "asc";
})(GetUsersIdsBadgesOrderEnum = exports.GetUsersIdsBadgesOrderEnum || (exports.GetUsersIdsBadgesOrderEnum = {}));
var GetUsersIdsBadgesSortEnum;
(function (GetUsersIdsBadgesSortEnum) {
    GetUsersIdsBadgesSortEnum["Rank"] = "rank";
    GetUsersIdsBadgesSortEnum["Name"] = "name";
    GetUsersIdsBadgesSortEnum["Type"] = "type";
    GetUsersIdsBadgesSortEnum["Awarded"] = "awarded";
})(GetUsersIdsBadgesSortEnum = exports.GetUsersIdsBadgesSortEnum || (exports.GetUsersIdsBadgesSortEnum = {}));
var GetUsersIdsBadgesQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsBadgesQueryParams, _super);
    function GetUsersIdsBadgesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsBadgesQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsBadgesQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsBadgesQueryParams.prototype, "fromdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdsBadgesQueryParams.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdsBadgesQueryParams.prototype, "min", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdsBadgesQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsBadgesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsBadgesQueryParams.prototype, "pagesize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsBadgesQueryParams.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdsBadgesQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsBadgesQueryParams.prototype, "todate", void 0);
    return GetUsersIdsBadgesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdsBadgesQueryParams = GetUsersIdsBadgesQueryParams;
var GetUsersIdsBadgesRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsBadgesRequest, _super);
    function GetUsersIdsBadgesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersIdsBadgesPathParams)
    ], GetUsersIdsBadgesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersIdsBadgesQueryParams)
    ], GetUsersIdsBadgesRequest.prototype, "queryParams", void 0);
    return GetUsersIdsBadgesRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdsBadgesRequest = GetUsersIdsBadgesRequest;
var GetUsersIdsBadgesResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsBadgesResponse, _super);
    function GetUsersIdsBadgesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsBadgesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersIdsBadgesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersIdsBadgesResponse.prototype, "statusCode", void 0);
    return GetUsersIdsBadgesResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdsBadgesResponse = GetUsersIdsBadgesResponse;
