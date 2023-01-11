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
exports.ClassifyImageUrlWithNoStoreResponse = exports.ClassifyImageUrlWithNoStoreRequest = exports.ClassifyImageUrlWithNoStoreRequests = exports.ClassifyImageUrlWithNoStoreQueryParams = exports.ClassifyImageUrlWithNoStorePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ClassifyImageUrlWithNoStorePathParams = /** @class */ (function (_super) {
    __extends(ClassifyImageUrlWithNoStorePathParams, _super);
    function ClassifyImageUrlWithNoStorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], ClassifyImageUrlWithNoStorePathParams.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=publishedName" }),
        __metadata("design:type", String)
    ], ClassifyImageUrlWithNoStorePathParams.prototype, "publishedName", void 0);
    return ClassifyImageUrlWithNoStorePathParams;
}(utils_1.SpeakeasyBase));
exports.ClassifyImageUrlWithNoStorePathParams = ClassifyImageUrlWithNoStorePathParams;
var ClassifyImageUrlWithNoStoreQueryParams = /** @class */ (function (_super) {
    __extends(ClassifyImageUrlWithNoStoreQueryParams, _super);
    function ClassifyImageUrlWithNoStoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=application" }),
        __metadata("design:type", String)
    ], ClassifyImageUrlWithNoStoreQueryParams.prototype, "application", void 0);
    return ClassifyImageUrlWithNoStoreQueryParams;
}(utils_1.SpeakeasyBase));
exports.ClassifyImageUrlWithNoStoreQueryParams = ClassifyImageUrlWithNoStoreQueryParams;
var ClassifyImageUrlWithNoStoreRequests = /** @class */ (function (_super) {
    __extends(ClassifyImageUrlWithNoStoreRequests, _super);
    function ClassifyImageUrlWithNoStoreRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], ClassifyImageUrlWithNoStoreRequests.prototype, "applicationXML", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImageUrl)
    ], ClassifyImageUrlWithNoStoreRequests.prototype, "imageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ImageUrl)
    ], ClassifyImageUrlWithNoStoreRequests.prototype, "imageUrl1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], ClassifyImageUrlWithNoStoreRequests.prototype, "textXML", void 0);
    return ClassifyImageUrlWithNoStoreRequests;
}(utils_1.SpeakeasyBase));
exports.ClassifyImageUrlWithNoStoreRequests = ClassifyImageUrlWithNoStoreRequests;
var ClassifyImageUrlWithNoStoreRequest = /** @class */ (function (_super) {
    __extends(ClassifyImageUrlWithNoStoreRequest, _super);
    function ClassifyImageUrlWithNoStoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassifyImageUrlWithNoStorePathParams)
    ], ClassifyImageUrlWithNoStoreRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassifyImageUrlWithNoStoreQueryParams)
    ], ClassifyImageUrlWithNoStoreRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClassifyImageUrlWithNoStoreRequests)
    ], ClassifyImageUrlWithNoStoreRequest.prototype, "request", void 0);
    return ClassifyImageUrlWithNoStoreRequest;
}(utils_1.SpeakeasyBase));
exports.ClassifyImageUrlWithNoStoreRequest = ClassifyImageUrlWithNoStoreRequest;
var ClassifyImageUrlWithNoStoreResponse = /** @class */ (function (_super) {
    __extends(ClassifyImageUrlWithNoStoreResponse, _super);
    function ClassifyImageUrlWithNoStoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ClassifyImageUrlWithNoStoreResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClassifyImageUrlWithNoStoreResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CustomVisionError)
    ], ClassifyImageUrlWithNoStoreResponse.prototype, "customVisionError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImagePrediction)
    ], ClassifyImageUrlWithNoStoreResponse.prototype, "imagePrediction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClassifyImageUrlWithNoStoreResponse.prototype, "statusCode", void 0);
    return ClassifyImageUrlWithNoStoreResponse;
}(utils_1.SpeakeasyBase));
exports.ClassifyImageUrlWithNoStoreResponse = ClassifyImageUrlWithNoStoreResponse;
