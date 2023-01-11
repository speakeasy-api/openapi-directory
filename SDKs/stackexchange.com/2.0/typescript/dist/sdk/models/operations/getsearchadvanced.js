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
exports.GetSearchAdvancedResponse = exports.GetSearchAdvancedRequest = exports.GetSearchAdvancedQueryParams = exports.GetSearchAdvancedWikiEnum = exports.GetSearchAdvancedSortEnum = exports.GetSearchAdvancedOrderEnum = exports.GetSearchAdvancedNoticeEnum = exports.GetSearchAdvancedMigratedEnum = exports.GetSearchAdvancedClosedEnum = exports.GetSearchAdvancedAcceptedEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetSearchAdvancedAcceptedEnum;
(function (GetSearchAdvancedAcceptedEnum) {
    GetSearchAdvancedAcceptedEnum["True"] = "true";
    GetSearchAdvancedAcceptedEnum["False"] = "false";
})(GetSearchAdvancedAcceptedEnum = exports.GetSearchAdvancedAcceptedEnum || (exports.GetSearchAdvancedAcceptedEnum = {}));
var GetSearchAdvancedClosedEnum;
(function (GetSearchAdvancedClosedEnum) {
    GetSearchAdvancedClosedEnum["True"] = "true";
    GetSearchAdvancedClosedEnum["False"] = "false";
})(GetSearchAdvancedClosedEnum = exports.GetSearchAdvancedClosedEnum || (exports.GetSearchAdvancedClosedEnum = {}));
var GetSearchAdvancedMigratedEnum;
(function (GetSearchAdvancedMigratedEnum) {
    GetSearchAdvancedMigratedEnum["True"] = "true";
    GetSearchAdvancedMigratedEnum["False"] = "false";
})(GetSearchAdvancedMigratedEnum = exports.GetSearchAdvancedMigratedEnum || (exports.GetSearchAdvancedMigratedEnum = {}));
var GetSearchAdvancedNoticeEnum;
(function (GetSearchAdvancedNoticeEnum) {
    GetSearchAdvancedNoticeEnum["True"] = "true";
    GetSearchAdvancedNoticeEnum["False"] = "false";
})(GetSearchAdvancedNoticeEnum = exports.GetSearchAdvancedNoticeEnum || (exports.GetSearchAdvancedNoticeEnum = {}));
var GetSearchAdvancedOrderEnum;
(function (GetSearchAdvancedOrderEnum) {
    GetSearchAdvancedOrderEnum["Desc"] = "desc";
    GetSearchAdvancedOrderEnum["Asc"] = "asc";
})(GetSearchAdvancedOrderEnum = exports.GetSearchAdvancedOrderEnum || (exports.GetSearchAdvancedOrderEnum = {}));
var GetSearchAdvancedSortEnum;
(function (GetSearchAdvancedSortEnum) {
    GetSearchAdvancedSortEnum["Activity"] = "activity";
    GetSearchAdvancedSortEnum["Creation"] = "creation";
    GetSearchAdvancedSortEnum["Votes"] = "votes";
    GetSearchAdvancedSortEnum["Relevance"] = "relevance";
})(GetSearchAdvancedSortEnum = exports.GetSearchAdvancedSortEnum || (exports.GetSearchAdvancedSortEnum = {}));
var GetSearchAdvancedWikiEnum;
(function (GetSearchAdvancedWikiEnum) {
    GetSearchAdvancedWikiEnum["True"] = "true";
    GetSearchAdvancedWikiEnum["False"] = "false";
})(GetSearchAdvancedWikiEnum = exports.GetSearchAdvancedWikiEnum || (exports.GetSearchAdvancedWikiEnum = {}));
var GetSearchAdvancedQueryParams = /** @class */ (function (_super) {
    __extends(GetSearchAdvancedQueryParams, _super);
    function GetSearchAdvancedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=accepted" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "accepted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=answers" }),
        __metadata("design:type", Number)
    ], GetSearchAdvancedQueryParams.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=body" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=closed" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "closed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetSearchAdvancedQueryParams.prototype, "fromdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=migrated" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "migrated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "min", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=notice" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "notice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nottagged" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "nottagged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSearchAdvancedQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetSearchAdvancedQueryParams.prototype, "pagesize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tagged" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "tagged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=title" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetSearchAdvancedQueryParams.prototype, "todate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", Number)
    ], GetSearchAdvancedQueryParams.prototype, "user", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=views" }),
        __metadata("design:type", Number)
    ], GetSearchAdvancedQueryParams.prototype, "views", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=wiki" }),
        __metadata("design:type", String)
    ], GetSearchAdvancedQueryParams.prototype, "wiki", void 0);
    return GetSearchAdvancedQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSearchAdvancedQueryParams = GetSearchAdvancedQueryParams;
var GetSearchAdvancedRequest = /** @class */ (function (_super) {
    __extends(GetSearchAdvancedRequest, _super);
    function GetSearchAdvancedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSearchAdvancedQueryParams)
    ], GetSearchAdvancedRequest.prototype, "queryParams", void 0);
    return GetSearchAdvancedRequest;
}(utils_1.SpeakeasyBase));
exports.GetSearchAdvancedRequest = GetSearchAdvancedRequest;
var GetSearchAdvancedResponse = /** @class */ (function (_super) {
    __extends(GetSearchAdvancedResponse, _super);
    function GetSearchAdvancedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetSearchAdvancedResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSearchAdvancedResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSearchAdvancedResponse.prototype, "statusCode", void 0);
    return GetSearchAdvancedResponse;
}(utils_1.SpeakeasyBase));
exports.GetSearchAdvancedResponse = GetSearchAdvancedResponse;
