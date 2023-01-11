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
exports.PostReportsDatesResponse = exports.PostReportsDatesRequest = exports.PostReportsDatesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostReportsDatesQueryParams = /** @class */ (function (_super) {
    __extends(PostReportsDatesQueryParams, _super);
    function PostReportsDatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=report_hash" }),
        __metadata("design:type", String)
    ], PostReportsDatesQueryParams.prototype, "reportHash", void 0);
    return PostReportsDatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostReportsDatesQueryParams = PostReportsDatesQueryParams;
var PostReportsDatesRequest = /** @class */ (function (_super) {
    __extends(PostReportsDatesRequest, _super);
    function PostReportsDatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostReportsDatesQueryParams)
    ], PostReportsDatesRequest.prototype, "queryParams", void 0);
    return PostReportsDatesRequest;
}(utils_1.SpeakeasyBase));
exports.PostReportsDatesRequest = PostReportsDatesRequest;
var PostReportsDatesResponse = /** @class */ (function (_super) {
    __extends(PostReportsDatesResponse, _super);
    function PostReportsDatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsDatesResponse.prototype, "fourHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsDatesResponse.prototype, "fourHundredAndOneError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsDatesResponse.prototype, "fourHundredAndThreeError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsDatesResponse.prototype, "fourHundredAndFourError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsDatesResponse.prototype, "fiveHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostReportsDatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsDatesResponse.prototype, "reportDates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostReportsDatesResponse.prototype, "statusCode", void 0);
    return PostReportsDatesResponse;
}(utils_1.SpeakeasyBase));
exports.PostReportsDatesResponse = PostReportsDatesResponse;
