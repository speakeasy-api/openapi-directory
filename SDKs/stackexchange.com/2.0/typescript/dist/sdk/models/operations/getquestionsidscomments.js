"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GetQuestionsIdsCommentsResponse = exports.GetQuestionsIdsCommentsRequest = exports.GetQuestionsIdsCommentsSortEnum = exports.GetQuestionsIdsCommentsOrderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetQuestionsIdsCommentsOrderEnum;
(function (GetQuestionsIdsCommentsOrderEnum) {
    GetQuestionsIdsCommentsOrderEnum["Desc"] = "desc";
    GetQuestionsIdsCommentsOrderEnum["Asc"] = "asc";
})(GetQuestionsIdsCommentsOrderEnum = exports.GetQuestionsIdsCommentsOrderEnum || (exports.GetQuestionsIdsCommentsOrderEnum = {}));
var GetQuestionsIdsCommentsSortEnum;
(function (GetQuestionsIdsCommentsSortEnum) {
    GetQuestionsIdsCommentsSortEnum["Creation"] = "creation";
    GetQuestionsIdsCommentsSortEnum["Votes"] = "votes";
})(GetQuestionsIdsCommentsSortEnum = exports.GetQuestionsIdsCommentsSortEnum || (exports.GetQuestionsIdsCommentsSortEnum = {}));
var GetQuestionsIdsCommentsRequest = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsCommentsRequest, _super);
    function GetQuestionsIdsCommentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=callback",
        }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsRequest.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=filter",
        }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsRequest.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=fromdate",
        }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsCommentsRequest.prototype, "fromdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ids" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsRequest.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsRequest.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsRequest.prototype, "min", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsRequest.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsCommentsRequest.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=pagesize",
        }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsCommentsRequest.prototype, "pagesize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsRequest.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsRequest.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=todate",
        }),
        __metadata("design:type", Number)
    ], GetQuestionsIdsCommentsRequest.prototype, "todate", void 0);
    return GetQuestionsIdsCommentsRequest;
}(utils_1.SpeakeasyBase));
exports.GetQuestionsIdsCommentsRequest = GetQuestionsIdsCommentsRequest;
var GetQuestionsIdsCommentsResponse = /** @class */ (function (_super) {
    __extends(GetQuestionsIdsCommentsResponse, _super);
    function GetQuestionsIdsCommentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetQuestionsIdsCommentsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetQuestionsIdsCommentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetQuestionsIdsCommentsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetQuestionsIdsCommentsResponse.prototype, "rawResponse", void 0);
    return GetQuestionsIdsCommentsResponse;
}(utils_1.SpeakeasyBase));
exports.GetQuestionsIdsCommentsResponse = GetQuestionsIdsCommentsResponse;
