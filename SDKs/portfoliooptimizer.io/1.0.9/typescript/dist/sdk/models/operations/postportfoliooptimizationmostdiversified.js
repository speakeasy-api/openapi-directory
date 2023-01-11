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
exports.PostPortfolioOptimizationMostDiversifiedResponse = exports.PostPortfolioOptimizationMostDiversifiedRequest = exports.PostPortfolioOptimizationMostDiversified200ApplicationJson = exports.PostPortfolioOptimizationMostDiversifiedRequestBody = exports.PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints = void 0;
var utils_1 = require("../../../internal/utils");
var PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints, _super);
    function PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsGroups" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints.prototype, "assetsGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsGroupsMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints.prototype, "assetsGroupsMatrix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumAssetsGroupsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints.prototype, "maximumAssetsGroupsWeights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints.prototype, "maximumAssetsWeights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints.prototype, "maximumPortfolioExposure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumAssetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints.prototype, "minimumAssetsWeights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minimumPortfolioExposure" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints.prototype, "minimumPortfolioExposure", void 0);
    return PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints = PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints;
var PostPortfolioOptimizationMostDiversifiedRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMostDiversifiedRequestBody, _super);
    function PostPortfolioOptimizationMostDiversifiedRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMostDiversifiedRequestBody.prototype, "assets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsCovarianceMatrix" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMostDiversifiedRequestBody.prototype, "assetsCovarianceMatrix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=constraints" }),
        __metadata("design:type", PostPortfolioOptimizationMostDiversifiedRequestBodyConstraints)
    ], PostPortfolioOptimizationMostDiversifiedRequestBody.prototype, "constraints", void 0);
    return PostPortfolioOptimizationMostDiversifiedRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMostDiversifiedRequestBody = PostPortfolioOptimizationMostDiversifiedRequestBody;
var PostPortfolioOptimizationMostDiversified200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMostDiversified200ApplicationJson, _super);
    function PostPortfolioOptimizationMostDiversified200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationMostDiversified200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioOptimizationMostDiversified200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMostDiversified200ApplicationJson = PostPortfolioOptimizationMostDiversified200ApplicationJson;
var PostPortfolioOptimizationMostDiversifiedRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMostDiversifiedRequest, _super);
    function PostPortfolioOptimizationMostDiversifiedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioOptimizationMostDiversifiedRequestBody)
    ], PostPortfolioOptimizationMostDiversifiedRequest.prototype, "request", void 0);
    return PostPortfolioOptimizationMostDiversifiedRequest;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMostDiversifiedRequest = PostPortfolioOptimizationMostDiversifiedRequest;
var PostPortfolioOptimizationMostDiversifiedResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationMostDiversifiedResponse, _super);
    function PostPortfolioOptimizationMostDiversifiedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPortfolioOptimizationMostDiversifiedResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationMostDiversifiedResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPortfolioOptimizationMostDiversified200ApplicationJson)
    ], PostPortfolioOptimizationMostDiversifiedResponse.prototype, "postPortfolioOptimizationMostDiversified200ApplicationJSONObject", void 0);
    return PostPortfolioOptimizationMostDiversifiedResponse;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationMostDiversifiedResponse = PostPortfolioOptimizationMostDiversifiedResponse;
