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
exports.GetPostsIdsResponse = exports.GetPostsIdsRequest = exports.GetPostsIdsQueryParams = exports.GetPostsIdsSortEnum = exports.GetPostsIdsOrderEnum = exports.GetPostsIdsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetPostsIdsPathParams = /** @class */ (function (_super) {
    __extends(GetPostsIdsPathParams, _super);
    function GetPostsIdsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetPostsIdsPathParams.prototype, "ids", void 0);
    return GetPostsIdsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPostsIdsPathParams = GetPostsIdsPathParams;
var GetPostsIdsOrderEnum;
(function (GetPostsIdsOrderEnum) {
    GetPostsIdsOrderEnum["Desc"] = "desc";
    GetPostsIdsOrderEnum["Asc"] = "asc";
})(GetPostsIdsOrderEnum = exports.GetPostsIdsOrderEnum || (exports.GetPostsIdsOrderEnum = {}));
var GetPostsIdsSortEnum;
(function (GetPostsIdsSortEnum) {
    GetPostsIdsSortEnum["Activity"] = "activity";
    GetPostsIdsSortEnum["Creation"] = "creation";
    GetPostsIdsSortEnum["Votes"] = "votes";
})(GetPostsIdsSortEnum = exports.GetPostsIdsSortEnum || (exports.GetPostsIdsSortEnum = {}));
var GetPostsIdsQueryParams = /** @class */ (function (_super) {
    __extends(GetPostsIdsQueryParams, _super);
    function GetPostsIdsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetPostsIdsQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetPostsIdsQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetPostsIdsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetPostsIdsQueryParams.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetPostsIdsQueryParams.prototype, "min", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetPostsIdsQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetPostsIdsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetPostsIdsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetPostsIdsQueryParams.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetPostsIdsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetPostsIdsQueryParams.prototype, "todate", void 0);
    return GetPostsIdsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPostsIdsQueryParams = GetPostsIdsQueryParams;
var GetPostsIdsRequest = /** @class */ (function (_super) {
    __extends(GetPostsIdsRequest, _super);
    function GetPostsIdsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPostsIdsPathParams)
    ], GetPostsIdsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPostsIdsQueryParams)
    ], GetPostsIdsRequest.prototype, "queryParams", void 0);
    return GetPostsIdsRequest;
}(utils_1.SpeakeasyBase));
exports.GetPostsIdsRequest = GetPostsIdsRequest;
var GetPostsIdsResponse = /** @class */ (function (_super) {
    __extends(GetPostsIdsResponse, _super);
    function GetPostsIdsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetPostsIdsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPostsIdsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPostsIdsResponse.prototype, "statusCode", void 0);
    return GetPostsIdsResponse;
}(utils_1.SpeakeasyBase));
exports.GetPostsIdsResponse = GetPostsIdsResponse;
