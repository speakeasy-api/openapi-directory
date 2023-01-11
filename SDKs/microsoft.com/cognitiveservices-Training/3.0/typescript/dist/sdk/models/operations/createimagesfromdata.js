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
exports.CreateImagesFromDataResponse = exports.CreateImagesFromDataRequest = exports.CreateImagesFromDataRequestBody = exports.CreateImagesFromDataRequestBodyImageData = exports.CreateImagesFromDataHeaders = exports.CreateImagesFromDataQueryParams = exports.CreateImagesFromDataPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateImagesFromDataPathParams = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataPathParams, _super);
    function CreateImagesFromDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CreateImagesFromDataPathParams.prototype, "projectId", void 0);
    return CreateImagesFromDataPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateImagesFromDataPathParams = CreateImagesFromDataPathParams;
var CreateImagesFromDataQueryParams = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataQueryParams, _super);
    function CreateImagesFromDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=tagIds" }),
        __metadata("design:type", Array)
    ], CreateImagesFromDataQueryParams.prototype, "tagIds", void 0);
    return CreateImagesFromDataQueryParams;
}(utils_1.SpeakeasyBase));
exports.CreateImagesFromDataQueryParams = CreateImagesFromDataQueryParams;
var CreateImagesFromDataHeaders = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataHeaders, _super);
    function CreateImagesFromDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], CreateImagesFromDataHeaders.prototype, "trainingKey", void 0);
    return CreateImagesFromDataHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateImagesFromDataHeaders = CreateImagesFromDataHeaders;
var CreateImagesFromDataRequestBodyImageData = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataRequestBodyImageData, _super);
    function CreateImagesFromDataRequestBodyImageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], CreateImagesFromDataRequestBodyImageData.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=imageData" }),
        __metadata("design:type", String)
    ], CreateImagesFromDataRequestBodyImageData.prototype, "imageData", void 0);
    return CreateImagesFromDataRequestBodyImageData;
}(utils_1.SpeakeasyBase));
exports.CreateImagesFromDataRequestBodyImageData = CreateImagesFromDataRequestBodyImageData;
var CreateImagesFromDataRequestBody = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataRequestBody, _super);
    function CreateImagesFromDataRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", CreateImagesFromDataRequestBodyImageData)
    ], CreateImagesFromDataRequestBody.prototype, "imageData", void 0);
    return CreateImagesFromDataRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateImagesFromDataRequestBody = CreateImagesFromDataRequestBody;
var CreateImagesFromDataRequest = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataRequest, _super);
    function CreateImagesFromDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateImagesFromDataPathParams)
    ], CreateImagesFromDataRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateImagesFromDataQueryParams)
    ], CreateImagesFromDataRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateImagesFromDataHeaders)
    ], CreateImagesFromDataRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreateImagesFromDataRequestBody)
    ], CreateImagesFromDataRequest.prototype, "request", void 0);
    return CreateImagesFromDataRequest;
}(utils_1.SpeakeasyBase));
exports.CreateImagesFromDataRequest = CreateImagesFromDataRequest;
var CreateImagesFromDataResponse = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataResponse, _super);
    function CreateImagesFromDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], CreateImagesFromDataResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateImagesFromDataResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomVisionError)
    ], CreateImagesFromDataResponse.prototype, "customVisionError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImageCreateSummary)
    ], CreateImagesFromDataResponse.prototype, "imageCreateSummary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateImagesFromDataResponse.prototype, "statusCode", void 0);
    return CreateImagesFromDataResponse;
}(utils_1.SpeakeasyBase));
exports.CreateImagesFromDataResponse = CreateImagesFromDataResponse;
