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
exports.PostReportsCustomInsertResponse = exports.PostReportsCustomInsertRequest = exports.PostReportsCustomInsertQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostReportsCustomInsertQueryParams = /** @class */ (function (_super) {
    __extends(PostReportsCustomInsertQueryParams, _super);
    function PostReportsCustomInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], PostReportsCustomInsertQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_hash" }),
        __metadata("design:type", String)
    ], PostReportsCustomInsertQueryParams.prototype, "uploadHash", void 0);
    return PostReportsCustomInsertQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostReportsCustomInsertQueryParams = PostReportsCustomInsertQueryParams;
var PostReportsCustomInsertRequest = /** @class */ (function (_super) {
    __extends(PostReportsCustomInsertRequest, _super);
    function PostReportsCustomInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostReportsCustomInsertQueryParams)
    ], PostReportsCustomInsertRequest.prototype, "queryParams", void 0);
    return PostReportsCustomInsertRequest;
}(utils_1.SpeakeasyBase));
exports.PostReportsCustomInsertRequest = PostReportsCustomInsertRequest;
var PostReportsCustomInsertResponse = /** @class */ (function (_super) {
    __extends(PostReportsCustomInsertResponse, _super);
    function PostReportsCustomInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsCustomInsertResponse.prototype, "fourHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsCustomInsertResponse.prototype, "fourHundredAndOneError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsCustomInsertResponse.prototype, "fourHundredAndThreeError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsCustomInsertResponse.prototype, "fourHundredAndFourError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsCustomInsertResponse.prototype, "fiveHundredError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostReportsCustomInsertResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostReportsCustomInsertResponse.prototype, "customInsert", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostReportsCustomInsertResponse.prototype, "statusCode", void 0);
    return PostReportsCustomInsertResponse;
}(utils_1.SpeakeasyBase));
exports.PostReportsCustomInsertResponse = PostReportsCustomInsertResponse;
