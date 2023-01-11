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
exports.PostPortfolioOptimizationEqualWeightedResponse = exports.PostPortfolioOptimizationEqualWeightedRequest = exports.PostPortfolioOptimizationEqualWeighted200ApplicationJson = exports.PostPortfolioOptimizationEqualWeightedRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var PostPortfolioOptimizationEqualWeightedRequestBody = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualWeightedRequestBody, _super);
    function PostPortfolioOptimizationEqualWeightedRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assets" }),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationEqualWeightedRequestBody.prototype, "assets", void 0);
    return PostPortfolioOptimizationEqualWeightedRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationEqualWeightedRequestBody = PostPortfolioOptimizationEqualWeightedRequestBody;
var PostPortfolioOptimizationEqualWeighted200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualWeighted200ApplicationJson, _super);
    function PostPortfolioOptimizationEqualWeighted200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assetsWeights" }),
        __metadata("design:type", Array)
    ], PostPortfolioOptimizationEqualWeighted200ApplicationJson.prototype, "assetsWeights", void 0);
    return PostPortfolioOptimizationEqualWeighted200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationEqualWeighted200ApplicationJson = PostPortfolioOptimizationEqualWeighted200ApplicationJson;
var PostPortfolioOptimizationEqualWeightedRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualWeightedRequest, _super);
    function PostPortfolioOptimizationEqualWeightedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostPortfolioOptimizationEqualWeightedRequestBody)
    ], PostPortfolioOptimizationEqualWeightedRequest.prototype, "request", void 0);
    return PostPortfolioOptimizationEqualWeightedRequest;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationEqualWeightedRequest = PostPortfolioOptimizationEqualWeightedRequest;
var PostPortfolioOptimizationEqualWeightedResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioOptimizationEqualWeightedResponse, _super);
    function PostPortfolioOptimizationEqualWeightedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPortfolioOptimizationEqualWeightedResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPortfolioOptimizationEqualWeightedResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPortfolioOptimizationEqualWeighted200ApplicationJson)
    ], PostPortfolioOptimizationEqualWeightedResponse.prototype, "postPortfolioOptimizationEqualWeighted200ApplicationJSONObject", void 0);
    return PostPortfolioOptimizationEqualWeightedResponse;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioOptimizationEqualWeightedResponse = PostPortfolioOptimizationEqualWeightedResponse;
