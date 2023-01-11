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
exports.ImagesResponse = exports.ImagesRequest = exports.Images200ApplicationJson = exports.Images200ApplicationJsonImageResults = exports.Images200ApplicationJsonImageResultsLink = exports.Images200ApplicationJsonImageResultsImage = exports.ImagesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ImagesPathParams = /** @class */ (function (_super) {
    __extends(ImagesPathParams, _super);
    function ImagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], ImagesPathParams.prototype, "query", void 0);
    return ImagesPathParams;
}(utils_1.SpeakeasyBase));
exports.ImagesPathParams = ImagesPathParams;
var Images200ApplicationJsonImageResultsImage = /** @class */ (function (_super) {
    __extends(Images200ApplicationJsonImageResultsImage, _super);
    function Images200ApplicationJsonImageResultsImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alt" }),
        __metadata("design:type", String)
    ], Images200ApplicationJsonImageResultsImage.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=src" }),
        __metadata("design:type", String)
    ], Images200ApplicationJsonImageResultsImage.prototype, "src", void 0);
    return Images200ApplicationJsonImageResultsImage;
}(utils_1.SpeakeasyBase));
exports.Images200ApplicationJsonImageResultsImage = Images200ApplicationJsonImageResultsImage;
var Images200ApplicationJsonImageResultsLink = /** @class */ (function (_super) {
    __extends(Images200ApplicationJsonImageResultsLink, _super);
    function Images200ApplicationJsonImageResultsLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Images200ApplicationJsonImageResultsLink.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], Images200ApplicationJsonImageResultsLink.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Images200ApplicationJsonImageResultsLink.prototype, "title", void 0);
    return Images200ApplicationJsonImageResultsLink;
}(utils_1.SpeakeasyBase));
exports.Images200ApplicationJsonImageResultsLink = Images200ApplicationJsonImageResultsLink;
var Images200ApplicationJsonImageResults = /** @class */ (function (_super) {
    __extends(Images200ApplicationJsonImageResults, _super);
    function Images200ApplicationJsonImageResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", Images200ApplicationJsonImageResultsImage)
    ], Images200ApplicationJsonImageResults.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", Images200ApplicationJsonImageResultsLink)
    ], Images200ApplicationJsonImageResults.prototype, "link", void 0);
    return Images200ApplicationJsonImageResults;
}(utils_1.SpeakeasyBase));
exports.Images200ApplicationJsonImageResults = Images200ApplicationJsonImageResults;
var Images200ApplicationJson = /** @class */ (function (_super) {
    __extends(Images200ApplicationJson, _super);
    function Images200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=answers" }),
        __metadata("design:type", Array)
    ], Images200ApplicationJson.prototype, "answers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image_results", elemType: Images200ApplicationJsonImageResults }),
        __metadata("design:type", Array)
    ], Images200ApplicationJson.prototype, "imageResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results" }),
        __metadata("design:type", Array)
    ], Images200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], Images200ApplicationJson.prototype, "total", void 0);
    return Images200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Images200ApplicationJson = Images200ApplicationJson;
var ImagesRequest = /** @class */ (function (_super) {
    __extends(ImagesRequest, _super);
    function ImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ImagesPathParams)
    ], ImagesRequest.prototype, "pathParams", void 0);
    return ImagesRequest;
}(utils_1.SpeakeasyBase));
exports.ImagesRequest = ImagesRequest;
var ImagesResponse = /** @class */ (function (_super) {
    __extends(ImagesResponse, _super);
    function ImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ImagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.HttpValidationError)
    ], ImagesResponse.prototype, "httpValidationError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Images200ApplicationJson)
    ], ImagesResponse.prototype, "images200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ImagesResponse.prototype, "statusCode", void 0);
    return ImagesResponse;
}(utils_1.SpeakeasyBase));
exports.ImagesResponse = ImagesResponse;
