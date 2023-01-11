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
exports.PostPortfolioOptimizationMeanVarianceEfficientResponse = exports.PostPortfolioOptimizationMeanVarianceEfficientRequest = exports.PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson = exports.PostPortfolioOptimizationMeanVarianceEfficientRequestBody = exports.PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints = void 0;
var utils_1 = require("../../../internal/utils");
var PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints, _super);
    function PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints.prototype, "assetsGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsGroupsMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints.prototype, "assetsGroupsMatrix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumAssetsGroupsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints.prototype, "maximumAssetsGroupsWeights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints.prototype, "maximumAssetsWeights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints.prototype, "maximumPortfolioExposure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints.prototype, "minimumAssetsWeights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints.prototype, "minimumPortfolioExposure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolioReturn" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints.prototype, "portfolioReturn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolioVolatility" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints.prototype, "portfolioVolatility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=riskTolerance" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints.prototype, "riskTolerance", void 0);
    return PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints = PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints;
var PostPortfolioOptimizationMeanVarianceEfficientRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMeanVarianceEfficientRequestBody, _super);
    function PostPortfolioOptimizationMeanVarianceEfficientRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBody.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsReturns" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBody.prototype, "assetsReturns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=constraints" }),
        __metadata("design:type", PostPortfolioOptimizationMeanVarianceEfficientRequestBodyConstraints)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequestBody.prototype, "constraints", void 0);
    return PostPortfolioOptimizationMeanVarianceEfficientRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMeanVarianceEfficientRequestBody = PostPortfolioOptimizationMeanVarianceEfficientRequestBody;
var PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson, _super);
    function PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson = PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson;
var PostPortfolioOptimizationMeanVarianceEfficientRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMeanVarianceEfficientRequest, _super);
    function PostPortfolioOptimizationMeanVarianceEfficientRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioOptimizationMeanVarianceEfficientRequestBody)
    ], PostPortfolioOptimizationMeanVarianceEfficientRequest.prototype, "request", void 0);
    return PostPortfolioOptimizationMeanVarianceEfficientRequest;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMeanVarianceEfficientRequest = PostPortfolioOptimizationMeanVarianceEfficientRequest;
var PostPortfolioOptimizationMeanVarianceEfficientResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMeanVarianceEfficientResponse, _super);
    function PostPortfolioOptimizationMeanVarianceEfficientResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPortfolioOptimizationMeanVarianceEfficientResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMeanVarianceEfficientResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson)
    ], PostPortfolioOptimizationMeanVarianceEfficientResponse.prototype, "postPortfolioOptimizationMeanVarianceEfficient200ApplicationJSONObject", void 0);
    return PostPortfolioOptimizationMeanVarianceEfficientResponse;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMeanVarianceEfficientResponse = PostPortfolioOptimizationMeanVarianceEfficientResponse;
