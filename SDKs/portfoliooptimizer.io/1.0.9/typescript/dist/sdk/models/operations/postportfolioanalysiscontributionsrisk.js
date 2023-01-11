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
exports.PostPortfolioAnalysisContributionsRiskResponse = exports.PostPortfolioAnalysisContributionsRiskRequest = exports.PostPortfolioAnalysisContributionsRisk200ApplicationJson = exports.PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios = exports.PostPortfolioAnalysisContributionsRiskRequestBody = exports.PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios = void 0;
var utils_1 = require("../../../internal/utils");
var PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios, _super);
    function PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios.prototype, "assetsWeights", void 0);
    return PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios = PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios;
var PostPortfolioAnalysisContributionsRiskRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsRiskRequestBody, _super);
    function PostPortfolioAnalysisContributionsRiskRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisContributionsRiskRequestBody.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsRiskRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsRiskRequestBody.prototype, "assetsGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsRiskRequestBody.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisContributionsRiskRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsRiskRequestBody = PostPortfolioAnalysisContributionsRiskRequestBody;
var PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsGroupsRiskContributions" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios.prototype, "assetsGroupsRiskContributions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsRiskContributions" }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios.prototype, "assetsRiskContributions", void 0);
    return PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios = PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios;
var PostPortfolioAnalysisContributionsRisk200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsRisk200ApplicationJson, _super);
    function PostPortfolioAnalysisContributionsRisk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisContributionsRisk200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisContributionsRisk200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisContributionsRisk200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsRisk200ApplicationJson = PostPortfolioAnalysisContributionsRisk200ApplicationJson;
var PostPortfolioAnalysisContributionsRiskRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsRiskRequest, _super);
    function PostPortfolioAnalysisContributionsRiskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioAnalysisContributionsRiskRequestBody)
    ], PostPortfolioAnalysisContributionsRiskRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisContributionsRiskRequest;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsRiskRequest = PostPortfolioAnalysisContributionsRiskRequest;
var PostPortfolioAnalysisContributionsRiskResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisContributionsRiskResponse, _super);
    function PostPortfolioAnalysisContributionsRiskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisContributionsRiskResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisContributionsRiskResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPortfolioAnalysisContributionsRisk200ApplicationJson)
    ], PostPortfolioAnalysisContributionsRiskResponse.prototype, "postPortfolioAnalysisContributionsRisk200ApplicationJSONObject", void 0);
    return PostPortfolioAnalysisContributionsRiskResponse;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisContributionsRiskResponse = PostPortfolioAnalysisContributionsRiskResponse;
