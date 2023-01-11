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
exports.PostPortfolioAnalysisContributionsReturnResponse = exports.PostPortfolioAnalysisContributionsReturnRequest = exports.PostPortfolioAnalysisContributionsReturn200ApplicationJson = exports.PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios = exports.PostPortfolioAnalysisContributionsReturnRequestBody = exports.PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios = void 0;
var utils_1 = require("../../../internal/utils");
var PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios, _super);
    function PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios.prototype, "assetsWeights", void 0);
    return PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios = PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios;
var PostPortfolioAnalysisContributionsReturnRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturnRequestBody, _super);
    function PostPortfolioAnalysisContributionsReturnRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisContributionsReturnRequestBody.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturnRequestBody.prototype, "assetsGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturnRequestBody.prototype, "assetsReturns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturnRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisContributionsReturnRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsReturnRequestBody = PostPortfolioAnalysisContributionsReturnRequestBody;
var PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsGroupsReturnContributions" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios.prototype, "assetsGroupsReturnContributions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsReturnContributions" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios.prototype, "assetsReturnContributions", void 0);
    return PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios = PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios;
var PostPortfolioAnalysisContributionsReturn200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturn200ApplicationJson, _super);
    function PostPortfolioAnalysisContributionsReturn200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisContributionsReturn200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsReturn200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisContributionsReturn200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsReturn200ApplicationJson = PostPortfolioAnalysisContributionsReturn200ApplicationJson;
var PostPortfolioAnalysisContributionsReturnRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturnRequest, _super);
    function PostPortfolioAnalysisContributionsReturnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisContributionsReturnRequestBody)
    ], PostPortfolioAnalysisContributionsReturnRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisContributionsReturnRequest;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsReturnRequest = PostPortfolioAnalysisContributionsReturnRequest;
var PostPortfolioAnalysisContributionsReturnResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsReturnResponse, _super);
    function PostPortfolioAnalysisContributionsReturnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisContributionsReturnResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisContributionsReturnResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPortfolioAnalysisContributionsReturn200ApplicationJson)
    ], PostPortfolioAnalysisContributionsReturnResponse.prototype, "postPortfolioAnalysisContributionsReturn200ApplicationJSONObject", void 0);
    return PostPortfolioAnalysisContributionsReturnResponse;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsReturnResponse = PostPortfolioAnalysisContributionsReturnResponse;
