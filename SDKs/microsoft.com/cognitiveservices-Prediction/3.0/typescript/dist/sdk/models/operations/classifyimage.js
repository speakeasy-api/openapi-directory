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
exports.ClassifyImageResponse = exports.ClassifyImageRequest = exports.ClassifyImageRequestBody = exports.ClassifyImageRequestBodyImageData = exports.ClassifyImageQueryParams = exports.ClassifyImagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ClassifyImagePathParams = /** @class */ (function (_super) {
    __extends(ClassifyImagePathParams, _super);
    function ClassifyImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ClassifyImagePathParams.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=publishedName" }),
        __metadata("design:type", String)
    ], ClassifyImagePathParams.prototype, "publishedName", void 0);
    return ClassifyImagePathParams;
}(utils_1.SpeakeasyBase));
exports.ClassifyImagePathParams = ClassifyImagePathParams;
var ClassifyImageQueryParams = /** @class */ (function (_super) {
    __extends(ClassifyImageQueryParams, _super);
    function ClassifyImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=application" }),
        __metadata("design:type", String)
    ], ClassifyImageQueryParams.prototype, "application", void 0);
    return ClassifyImageQueryParams;
}(utils_1.SpeakeasyBase));
exports.ClassifyImageQueryParams = ClassifyImageQueryParams;
var ClassifyImageRequestBodyImageData = /** @class */ (function (_super) {
    __extends(ClassifyImageRequestBodyImageData, _super);
    function ClassifyImageRequestBodyImageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ClassifyImageRequestBodyImageData.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=imageData" }),
        __metadata("design:type", String)
    ], ClassifyImageRequestBodyImageData.prototype, "imageData", void 0);
    return ClassifyImageRequestBodyImageData;
}(utils_1.SpeakeasyBase));
exports.ClassifyImageRequestBodyImageData = ClassifyImageRequestBodyImageData;
var ClassifyImageRequestBody = /** @class */ (function (_super) {
    __extends(ClassifyImageRequestBody, _super);
    function ClassifyImageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", ClassifyImageRequestBodyImageData)
    ], ClassifyImageRequestBody.prototype, "imageData", void 0);
    return ClassifyImageRequestBody;
}(utils_1.SpeakeasyBase));
exports.ClassifyImageRequestBody = ClassifyImageRequestBody;
var ClassifyImageRequest = /** @class */ (function (_super) {
    __extends(ClassifyImageRequest, _super);
    function ClassifyImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassifyImagePathParams)
    ], ClassifyImageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassifyImageQueryParams)
    ], ClassifyImageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ClassifyImageRequestBody)
    ], ClassifyImageRequest.prototype, "request", void 0);
    return ClassifyImageRequest;
}(utils_1.SpeakeasyBase));
exports.ClassifyImageRequest = ClassifyImageRequest;
var ClassifyImageResponse = /** @class */ (function (_super) {
    __extends(ClassifyImageResponse, _super);
    function ClassifyImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ClassifyImageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClassifyImageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomVisionError)
    ], ClassifyImageResponse.prototype, "customVisionError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImagePrediction)
    ], ClassifyImageResponse.prototype, "imagePrediction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClassifyImageResponse.prototype, "statusCode", void 0);
    return ClassifyImageResponse;
}(utils_1.SpeakeasyBase));
exports.ClassifyImageResponse = ClassifyImageResponse;
