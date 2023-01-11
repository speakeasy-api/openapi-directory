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
exports.GetMeAnswersResponse = exports.GetMeAnswersRequest = exports.GetMeAnswersQueryParams = exports.GetMeAnswersSortEnum = exports.GetMeAnswersOrderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetMeAnswersOrderEnum;
(function (GetMeAnswersOrderEnum) {
    GetMeAnswersOrderEnum["Desc"] = "desc";
    GetMeAnswersOrderEnum["Asc"] = "asc";
})(GetMeAnswersOrderEnum = exports.GetMeAnswersOrderEnum || (exports.GetMeAnswersOrderEnum = {}));
var GetMeAnswersSortEnum;
(function (GetMeAnswersSortEnum) {
    GetMeAnswersSortEnum["Activity"] = "activity";
    GetMeAnswersSortEnum["Creation"] = "creation";
    GetMeAnswersSortEnum["Votes"] = "votes";
})(GetMeAnswersSortEnum = exports.GetMeAnswersSortEnum || (exports.GetMeAnswersSortEnum = {}));
var GetMeAnswersQueryParams = /** @class */ (function (_super) {
    __extends(GetMeAnswersQueryParams, _super);
    function GetMeAnswersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GetMeAnswersQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetMeAnswersQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Number)
    ], GetMeAnswersQueryParams.prototype, "fromdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", String)
    ], GetMeAnswersQueryParams.prototype, "max", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min" }),
        __metadata("design:type", String)
    ], GetMeAnswersQueryParams.prototype, "min", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], GetMeAnswersQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetMeAnswersQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetMeAnswersQueryParams.prototype, "pagesize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], GetMeAnswersQueryParams.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetMeAnswersQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Number)
    ], GetMeAnswersQueryParams.prototype, "todate", void 0);
    return GetMeAnswersQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetMeAnswersQueryParams = GetMeAnswersQueryParams;
var GetMeAnswersRequest = /** @class */ (function (_super) {
    __extends(GetMeAnswersRequest, _super);
    function GetMeAnswersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMeAnswersQueryParams)
    ], GetMeAnswersRequest.prototype, "queryParams", void 0);
    return GetMeAnswersRequest;
}(utils_1.SpeakeasyBase));
exports.GetMeAnswersRequest = GetMeAnswersRequest;
var GetMeAnswersResponse = /** @class */ (function (_super) {
    __extends(GetMeAnswersResponse, _super);
    function GetMeAnswersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetMeAnswersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMeAnswersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMeAnswersResponse.prototype, "statusCode", void 0);
    return GetMeAnswersResponse;
}(utils_1.SpeakeasyBase));
exports.GetMeAnswersResponse = GetMeAnswersResponse;
