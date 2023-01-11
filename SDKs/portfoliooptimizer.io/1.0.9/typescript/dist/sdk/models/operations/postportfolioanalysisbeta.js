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
exports.PostPortfolioAnalysisBetaResponse = exports.PostPortfolioAnalysisBetaRequest = exports.PostPortfolioAnalysisBeta200ApplicationJson = exports.PostPortfolioAnalysisBeta200ApplicationJsonPortfolios = void 0;
var utils_1 = require("../../../internal/utils");
var PostPortfolioAnalysisBeta200ApplicationJsonPortfolios = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisBeta200ApplicationJsonPortfolios, _super);
    function PostPortfolioAnalysisBeta200ApplicationJsonPortfolios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolioBeta" }),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisBeta200ApplicationJsonPortfolios.prototype, "portfolioBeta", void 0);
    return PostPortfolioAnalysisBeta200ApplicationJsonPortfolios;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisBeta200ApplicationJsonPortfolios = PostPortfolioAnalysisBeta200ApplicationJsonPortfolios;
var PostPortfolioAnalysisBeta200ApplicationJson = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisBeta200ApplicationJson, _super);
    function PostPortfolioAnalysisBeta200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portfolios", elemType: PostPortfolioAnalysisBeta200ApplicationJsonPortfolios }),
        __metadata("design:type", Array)
    ], PostPortfolioAnalysisBeta200ApplicationJson.prototype, "portfolios", void 0);
    return PostPortfolioAnalysisBeta200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisBeta200ApplicationJson = PostPortfolioAnalysisBeta200ApplicationJson;
var PostPortfolioAnalysisBetaRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisBetaRequest, _super);
    function PostPortfolioAnalysisBetaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], PostPortfolioAnalysisBetaRequest.prototype, "request", void 0);
    return PostPortfolioAnalysisBetaRequest;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisBetaRequest = PostPortfolioAnalysisBetaRequest;
var PostPortfolioAnalysisBetaResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioAnalysisBetaResponse, _super);
    function PostPortfolioAnalysisBetaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPortfolioAnalysisBetaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPortfolioAnalysisBetaResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPortfolioAnalysisBeta200ApplicationJson)
    ], PostPortfolioAnalysisBetaResponse.prototype, "postPortfolioAnalysisBeta200ApplicationJSONObject", void 0);
    return PostPortfolioAnalysisBetaResponse;
}(utils_1.SpeakeasyBase));
exports.PostPortfolioAnalysisBetaResponse = PostPortfolioAnalysisBetaResponse;
