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
exports.DetectImageUrlWithNoStoreResponse = exports.DetectImageUrlWithNoStoreRequest = exports.DetectImageUrlWithNoStoreRequests = exports.DetectImageUrlWithNoStoreQueryParams = exports.DetectImageUrlWithNoStorePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DetectImageUrlWithNoStorePathParams = /** @class */ (function (_super) {
    __extends(DetectImageUrlWithNoStorePathParams, _super);
    function DetectImageUrlWithNoStorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DetectImageUrlWithNoStorePathParams.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=publishedName" }),
        __metadata("design:type", String)
    ], DetectImageUrlWithNoStorePathParams.prototype, "publishedName", void 0);
    return DetectImageUrlWithNoStorePathParams;
}(utils_1.SpeakeasyBase));
exports.DetectImageUrlWithNoStorePathParams = DetectImageUrlWithNoStorePathParams;
var DetectImageUrlWithNoStoreQueryParams = /** @class */ (function (_super) {
    __extends(DetectImageUrlWithNoStoreQueryParams, _super);
    function DetectImageUrlWithNoStoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=application" }),
        __metadata("design:type", String)
    ], DetectImageUrlWithNoStoreQueryParams.prototype, "application", void 0);
    return DetectImageUrlWithNoStoreQueryParams;
}(utils_1.SpeakeasyBase));
exports.DetectImageUrlWithNoStoreQueryParams = DetectImageUrlWithNoStoreQueryParams;
var DetectImageUrlWithNoStoreRequests = /** @class */ (function (_super) {
    __extends(DetectImageUrlWithNoStoreRequests, _super);
    function DetectImageUrlWithNoStoreRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], DetectImageUrlWithNoStoreRequests.prototype, "applicationXML", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImageUrl)
    ], DetectImageUrlWithNoStoreRequests.prototype, "imageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ImageUrl)
    ], DetectImageUrlWithNoStoreRequests.prototype, "imageUrl1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], DetectImageUrlWithNoStoreRequests.prototype, "textXML", void 0);
    return DetectImageUrlWithNoStoreRequests;
}(utils_1.SpeakeasyBase));
exports.DetectImageUrlWithNoStoreRequests = DetectImageUrlWithNoStoreRequests;
var DetectImageUrlWithNoStoreRequest = /** @class */ (function (_super) {
    __extends(DetectImageUrlWithNoStoreRequest, _super);
    function DetectImageUrlWithNoStoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DetectImageUrlWithNoStorePathParams)
    ], DetectImageUrlWithNoStoreRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DetectImageUrlWithNoStoreQueryParams)
    ], DetectImageUrlWithNoStoreRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DetectImageUrlWithNoStoreRequests)
    ], DetectImageUrlWithNoStoreRequest.prototype, "request", void 0);
    return DetectImageUrlWithNoStoreRequest;
}(utils_1.SpeakeasyBase));
exports.DetectImageUrlWithNoStoreRequest = DetectImageUrlWithNoStoreRequest;
var DetectImageUrlWithNoStoreResponse = /** @class */ (function (_super) {
    __extends(DetectImageUrlWithNoStoreResponse, _super);
    function DetectImageUrlWithNoStoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], DetectImageUrlWithNoStoreResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DetectImageUrlWithNoStoreResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomVisionError)
    ], DetectImageUrlWithNoStoreResponse.prototype, "customVisionError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImagePrediction)
    ], DetectImageUrlWithNoStoreResponse.prototype, "imagePrediction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DetectImageUrlWithNoStoreResponse.prototype, "statusCode", void 0);
    return DetectImageUrlWithNoStoreResponse;
}(utils_1.SpeakeasyBase));
exports.DetectImageUrlWithNoStoreResponse = DetectImageUrlWithNoStoreResponse;
