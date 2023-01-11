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
exports.GetUsersIdsCommentsResponse = exports.GetUsersIdsCommentsRequest = exports.GetUsersIdsCommentsQueryParams = exports.GetUsersIdsCommentsSortEnum = exports.GetUsersIdsCommentsOrderEnum = exports.GetUsersIdsCommentsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetUsersIdsCommentsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsCommentsPathParams, _super);
    function GetUsersIdsCommentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsPathParams.prototype, "ids", void 0);
    return GetUsersIdsCommentsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdsCommentsPathParams = GetUsersIdsCommentsPathParams;
var GetUsersIdsCommentsOrderEnum;
(function (GetUsersIdsCommentsOrderEnum) {
    GetUsersIdsCommentsOrderEnum["Desc"] = "desc";
    GetUsersIdsCommentsOrderEnum["Asc"] = "asc";
})(GetUsersIdsCommentsOrderEnum = exports.GetUsersIdsCommentsOrderEnum || (exports.GetUsersIdsCommentsOrderEnum = {}));
var GetUsersIdsCommentsSortEnum;
(function (GetUsersIdsCommentsSortEnum) {
    GetUsersIdsCommentsSortEnum["Creation"] = "creation";
    GetUsersIdsCommentsSortEnum["Votes"] = "votes";
})(GetUsersIdsCommentsSortEnum = exports.GetUsersIdsCommentsSortEnum || (exports.GetUsersIdsCommentsSortEnum = {}));
var GetUsersIdsCommentsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdsCommentsQueryParams, _super);
    function GetUsersIdsCommentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsQueryParams.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsQueryParams.prototype, "min", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsQueryParams.prototype, "pagesize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsQueryParams.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsQueryParams.prototype, "todate", void 0);
    return GetUsersIdsCommentsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdsCommentsQueryParams = GetUsersIdsCommentsQueryParams;
var GetUsersIdsCommentsRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdsCommentsRequest, _super);
    function GetUsersIdsCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersIdsCommentsPathParams)
    ], GetUsersIdsCommentsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUsersIdsCommentsQueryParams)
    ], GetUsersIdsCommentsRequest.prototype, "queryParams", void 0);
    return GetUsersIdsCommentsRequest;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdsCommentsRequest = GetUsersIdsCommentsRequest;
var GetUsersIdsCommentsResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdsCommentsResponse, _super);
    function GetUsersIdsCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUsersIdsCommentsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUsersIdsCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUsersIdsCommentsResponse.prototype, "statusCode", void 0);
    return GetUsersIdsCommentsResponse;
}(utils_1.SpeakeasyBase));
exports.GetUsersIdsCommentsResponse = GetUsersIdsCommentsResponse;
