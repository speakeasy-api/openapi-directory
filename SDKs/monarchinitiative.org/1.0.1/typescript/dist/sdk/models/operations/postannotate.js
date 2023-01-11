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
exports.PostAnnotateResponse = exports.PostAnnotateRequest = exports.PostAnnotateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var PostAnnotateQueryParams = /** @class */ (function (_super) {
    __extends(PostAnnotateQueryParams, _super);
    function PostAnnotateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=content" }),
        __metadata("design:type", String)
    ], PostAnnotateQueryParams.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=exclude_category" }),
        __metadata("design:type", Array)
    ], PostAnnotateQueryParams.prototype, "excludeCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_abbreviation" }),
        __metadata("design:type", Boolean)
    ], PostAnnotateQueryParams.prototype, "includeAbbreviation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_acronym" }),
        __metadata("design:type", Boolean)
    ], PostAnnotateQueryParams.prototype, "includeAcronym", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_category" }),
        __metadata("design:type", Array)
    ], PostAnnotateQueryParams.prototype, "includeCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_numbers" }),
        __metadata("design:type", Boolean)
    ], PostAnnotateQueryParams.prototype, "includeNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=longest_only" }),
        __metadata("design:type", Boolean)
    ], PostAnnotateQueryParams.prototype, "longestOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_length" }),
        __metadata("design:type", String)
    ], PostAnnotateQueryParams.prototype, "minLength", void 0);
    return PostAnnotateQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAnnotateQueryParams = PostAnnotateQueryParams;
var PostAnnotateRequest = /** @class */ (function (_super) {
    __extends(PostAnnotateRequest, _super);
    function PostAnnotateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAnnotateQueryParams)
    ], PostAnnotateRequest.prototype, "queryParams", void 0);
    return PostAnnotateRequest;
}(utils_1.SpeakeasyBase));
exports.PostAnnotateRequest = PostAnnotateRequest;
var PostAnnotateResponse = /** @class */ (function (_super) {
    __extends(PostAnnotateResponse, _super);
    function PostAnnotateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAnnotateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAnnotateResponse.prototype, "statusCode", void 0);
    return PostAnnotateResponse;
}(utils_1.SpeakeasyBase));
exports.PostAnnotateResponse = PostAnnotateResponse;
