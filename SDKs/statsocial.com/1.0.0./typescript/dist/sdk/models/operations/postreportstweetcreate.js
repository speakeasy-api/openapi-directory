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
exports.PostReportsTweetCreateResponse = exports.PostReportsTweetCreateRequest = exports.PostReportsTweetCreateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostReportsTweetCreateQueryParams = /** @class */ (function (_super) {
    __extends(PostReportsTweetCreateQueryParams, _super);
    function PostReportsTweetCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", Number)
    ], PostReportsTweetCreateQueryParams.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], PostReportsTweetCreateQueryParams.prototype, "filter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=report_name" }),
        __metadata("design:type", String)
    ], PostReportsTweetCreateQueryParams.prototype, "reportName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", Number)
    ], PostReportsTweetCreateQueryParams.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=terms" }),
        __metadata("design:type", String)
    ], PostReportsTweetCreateQueryParams.prototype, "terms", void 0);
    return PostReportsTweetCreateQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostReportsTweetCreateQueryParams = PostReportsTweetCreateQueryParams;
var PostReportsTweetCreateRequest = /** @class */ (function (_super) {
    __extends(PostReportsTweetCreateRequest, _super);
    function PostReportsTweetCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostReportsTweetCreateQueryParams)
    ], PostReportsTweetCreateRequest.prototype, "queryParams", void 0);
    return PostReportsTweetCreateRequest;
}(utils_1.SpeakeasyBase));
exports.PostReportsTweetCreateRequest = PostReportsTweetCreateRequest;
var PostReportsTweetCreateResponse = /** @class */ (function (_super) {
    __extends(PostReportsTweetCreateResponse, _super);
    function PostReportsTweetCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsTweetCreateResponse.prototype, "fourHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsTweetCreateResponse.prototype, "fourHundredAndOneError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsTweetCreateResponse.prototype, "fourHundredAndThreeError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsTweetCreateResponse.prototype, "fiveHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostReportsTweetCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsTweetCreateResponse.prototype, "createTweet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostReportsTweetCreateResponse.prototype, "statusCode", void 0);
    return PostReportsTweetCreateResponse;
}(utils_1.SpeakeasyBase));
exports.PostReportsTweetCreateResponse = PostReportsTweetCreateResponse;
