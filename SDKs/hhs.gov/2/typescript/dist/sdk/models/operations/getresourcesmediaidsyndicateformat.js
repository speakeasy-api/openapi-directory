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
exports.GetResourcesMediaIdSyndicateFormatResponse = exports.GetResourcesMediaIdSyndicateFormatRequest = exports.GetResourcesMediaIdSyndicateFormatQueryParams = exports.GetResourcesMediaIdSyndicateFormatPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetResourcesMediaIdSyndicateFormatPathParams = /** @class */ (function (_super) {
    __extends(GetResourcesMediaIdSyndicateFormatPathParams, _super);
    function GetResourcesMediaIdSyndicateFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetResourcesMediaIdSyndicateFormatPathParams.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaIdSyndicateFormatPathParams.prototype, "id", void 0);
    return GetResourcesMediaIdSyndicateFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetResourcesMediaIdSyndicateFormatPathParams = GetResourcesMediaIdSyndicateFormatPathParams;
var GetResourcesMediaIdSyndicateFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetResourcesMediaIdSyndicateFormatQueryParams, _super);
    function GetResourcesMediaIdSyndicateFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=autoplay" }),
        __metadata("design:type", Boolean)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "autoplay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=cssClass" }),
        __metadata("design:type", String)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "cssClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=font-size" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "fontSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=imageFloat" }),
        __metadata("design:type", String)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "imageFloat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=imageMargin" }),
        __metadata("design:type", String)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "imageMargin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=rel" }),
        __metadata("design:type", Boolean)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "rel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=stripBreaks" }),
        __metadata("design:type", Boolean)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "stripBreaks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=stripClasses" }),
        __metadata("design:type", Boolean)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "stripClasses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=stripImages" }),
        __metadata("design:type", Boolean)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "stripImages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=stripScripts" }),
        __metadata("design:type", Boolean)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "stripScripts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=stripStyles" }),
        __metadata("design:type", Boolean)
    ], GetResourcesMediaIdSyndicateFormatQueryParams.prototype, "stripStyles", void 0);
    return GetResourcesMediaIdSyndicateFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetResourcesMediaIdSyndicateFormatQueryParams = GetResourcesMediaIdSyndicateFormatQueryParams;
var GetResourcesMediaIdSyndicateFormatRequest = /** @class */ (function (_super) {
    __extends(GetResourcesMediaIdSyndicateFormatRequest, _super);
    function GetResourcesMediaIdSyndicateFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResourcesMediaIdSyndicateFormatPathParams)
    ], GetResourcesMediaIdSyndicateFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResourcesMediaIdSyndicateFormatQueryParams)
    ], GetResourcesMediaIdSyndicateFormatRequest.prototype, "queryParams", void 0);
    return GetResourcesMediaIdSyndicateFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetResourcesMediaIdSyndicateFormatRequest = GetResourcesMediaIdSyndicateFormatRequest;
var GetResourcesMediaIdSyndicateFormatResponse = /** @class */ (function (_super) {
    __extends(GetResourcesMediaIdSyndicateFormatResponse, _super);
    function GetResourcesMediaIdSyndicateFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetResourcesMediaIdSyndicateFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetResourcesMediaIdSyndicateFormatResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SyndicateMarshallerWrapped)
    ], GetResourcesMediaIdSyndicateFormatResponse.prototype, "syndicateMarshallerWrapped", void 0);
    return GetResourcesMediaIdSyndicateFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetResourcesMediaIdSyndicateFormatResponse = GetResourcesMediaIdSyndicateFormatResponse;
