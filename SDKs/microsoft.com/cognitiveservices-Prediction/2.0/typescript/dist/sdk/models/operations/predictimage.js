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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredictImageResponse = exports.PredictImageRequest = exports.PredictImageRequestBody = exports.PredictImageRequestBodyImageData = exports.PredictImageHeaders = exports.PredictImageQueryParams = exports.PredictImagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PredictImagePathParams = /** @class */ (function (_super) {
    __extends(PredictImagePathParams, _super);
    function PredictImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], PredictImagePathParams.prototype, "projectId", void 0);
    return PredictImagePathParams;
}(utils_1.SpeakeasyBase));
exports.PredictImagePathParams = PredictImagePathParams;
var PredictImageQueryParams = /** @class */ (function (_super) {
    __extends(PredictImageQueryParams, _super);
    function PredictImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=application" }),
        __metadata("design:type", String)
    ], PredictImageQueryParams.prototype, "application", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=iterationId" }),
        __metadata("design:type", String)
    ], PredictImageQueryParams.prototype, "iterationId", void 0);
    return PredictImageQueryParams;
}(utils_1.SpeakeasyBase));
exports.PredictImageQueryParams = PredictImageQueryParams;
var PredictImageHeaders = /** @class */ (function (_super) {
    __extends(PredictImageHeaders, _super);
    function PredictImageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Prediction-Key" }),
        __metadata("design:type", String)
    ], PredictImageHeaders.prototype, "predictionKey", void 0);
    return PredictImageHeaders;
}(utils_1.SpeakeasyBase));
exports.PredictImageHeaders = PredictImageHeaders;
var PredictImageRequestBodyImageData = /** @class */ (function (_super) {
    __extends(PredictImageRequestBodyImageData, _super);
    function PredictImageRequestBodyImageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PredictImageRequestBodyImageData.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=imageData" }),
        __metadata("design:type", String)
    ], PredictImageRequestBodyImageData.prototype, "imageData", void 0);
    return PredictImageRequestBodyImageData;
}(utils_1.SpeakeasyBase));
exports.PredictImageRequestBodyImageData = PredictImageRequestBodyImageData;
var PredictImageRequestBody = /** @class */ (function (_super) {
    __extends(PredictImageRequestBody, _super);
    function PredictImageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", PredictImageRequestBodyImageData)
    ], PredictImageRequestBody.prototype, "imageData", void 0);
    return PredictImageRequestBody;
}(utils_1.SpeakeasyBase));
exports.PredictImageRequestBody = PredictImageRequestBody;
var PredictImageRequest = /** @class */ (function (_super) {
    __extends(PredictImageRequest, _super);
    function PredictImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PredictImagePathParams)
    ], PredictImageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PredictImageQueryParams)
    ], PredictImageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PredictImageHeaders)
    ], PredictImageRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PredictImageRequestBody)
    ], PredictImageRequest.prototype, "request", void 0);
    return PredictImageRequest;
}(utils_1.SpeakeasyBase));
exports.PredictImageRequest = PredictImageRequest;
var PredictImageResponse = /** @class */ (function (_super) {
    __extends(PredictImageResponse, _super);
    function PredictImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PredictImageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PredictImageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImagePrediction)
    ], PredictImageResponse.prototype, "imagePrediction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PredictImageResponse.prototype, "statusCode", void 0);
    return PredictImageResponse;
}(utils_1.SpeakeasyBase));
exports.PredictImageResponse = PredictImageResponse;
