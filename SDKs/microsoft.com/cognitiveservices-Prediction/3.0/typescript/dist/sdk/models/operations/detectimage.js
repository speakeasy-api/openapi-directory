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
exports.DetectImageResponse = exports.DetectImageRequest = exports.DetectImageRequestBody = exports.DetectImageRequestBodyImageData = exports.DetectImageQueryParams = exports.DetectImagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DetectImagePathParams = /** @class */ (function (_super) {
    __extends(DetectImagePathParams, _super);
    function DetectImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DetectImagePathParams.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=publishedName" }),
        __metadata("design:type", String)
    ], DetectImagePathParams.prototype, "publishedName", void 0);
    return DetectImagePathParams;
}(utils_1.SpeakeasyBase));
exports.DetectImagePathParams = DetectImagePathParams;
var DetectImageQueryParams = /** @class */ (function (_super) {
    __extends(DetectImageQueryParams, _super);
    function DetectImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=application" }),
        __metadata("design:type", String)
    ], DetectImageQueryParams.prototype, "application", void 0);
    return DetectImageQueryParams;
}(utils_1.SpeakeasyBase));
exports.DetectImageQueryParams = DetectImageQueryParams;
var DetectImageRequestBodyImageData = /** @class */ (function (_super) {
    __extends(DetectImageRequestBodyImageData, _super);
    function DetectImageRequestBodyImageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], DetectImageRequestBodyImageData.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=imageData" }),
        __metadata("design:type", String)
    ], DetectImageRequestBodyImageData.prototype, "imageData", void 0);
    return DetectImageRequestBodyImageData;
}(utils_1.SpeakeasyBase));
exports.DetectImageRequestBodyImageData = DetectImageRequestBodyImageData;
var DetectImageRequestBody = /** @class */ (function (_super) {
    __extends(DetectImageRequestBody, _super);
    function DetectImageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", DetectImageRequestBodyImageData)
    ], DetectImageRequestBody.prototype, "imageData", void 0);
    return DetectImageRequestBody;
}(utils_1.SpeakeasyBase));
exports.DetectImageRequestBody = DetectImageRequestBody;
var DetectImageRequest = /** @class */ (function (_super) {
    __extends(DetectImageRequest, _super);
    function DetectImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DetectImagePathParams)
    ], DetectImageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DetectImageQueryParams)
    ], DetectImageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", DetectImageRequestBody)
    ], DetectImageRequest.prototype, "request", void 0);
    return DetectImageRequest;
}(utils_1.SpeakeasyBase));
exports.DetectImageRequest = DetectImageRequest;
var DetectImageResponse = /** @class */ (function (_super) {
    __extends(DetectImageResponse, _super);
    function DetectImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DetectImageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DetectImageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomVisionError)
    ], DetectImageResponse.prototype, "customVisionError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImagePrediction)
    ], DetectImageResponse.prototype, "imagePrediction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DetectImageResponse.prototype, "statusCode", void 0);
    return DetectImageResponse;
}(utils_1.SpeakeasyBase));
exports.DetectImageResponse = DetectImageResponse;
