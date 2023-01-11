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
exports.GetSimilarImagesResponse = exports.GetSimilarImagesRequest = exports.GetSimilarImagesSecurity = exports.GetSimilarImagesQueryParams = exports.GetSimilarImagesViewEnum = exports.GetSimilarImagesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSimilarImagesPathParams = /** @class */ (function (_super) {
    __extends(GetSimilarImagesPathParams, _super);
    function GetSimilarImagesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSimilarImagesPathParams.prototype, "id", void 0);
    return GetSimilarImagesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSimilarImagesPathParams = GetSimilarImagesPathParams;
var GetSimilarImagesViewEnum;
(function (GetSimilarImagesViewEnum) {
    GetSimilarImagesViewEnum["Minimal"] = "minimal";
    GetSimilarImagesViewEnum["Full"] = "full";
})(GetSimilarImagesViewEnum = exports.GetSimilarImagesViewEnum || (exports.GetSimilarImagesViewEnum = {}));
var GetSimilarImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetSimilarImagesQueryParams, _super);
    function GetSimilarImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetSimilarImagesQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSimilarImagesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSimilarImagesQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetSimilarImagesQueryParams.prototype, "view", void 0);
    return GetSimilarImagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSimilarImagesQueryParams = GetSimilarImagesQueryParams;
var GetSimilarImagesSecurity = /** @class */ (function (_super) {
    __extends(GetSimilarImagesSecurity, _super);
    function GetSimilarImagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetSimilarImagesSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], GetSimilarImagesSecurity.prototype, "customerAccessCode", void 0);
    return GetSimilarImagesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetSimilarImagesSecurity = GetSimilarImagesSecurity;
var GetSimilarImagesRequest = /** @class */ (function (_super) {
    __extends(GetSimilarImagesRequest, _super);
    function GetSimilarImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSimilarImagesPathParams)
    ], GetSimilarImagesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSimilarImagesQueryParams)
    ], GetSimilarImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSimilarImagesSecurity)
    ], GetSimilarImagesRequest.prototype, "security", void 0);
    return GetSimilarImagesRequest;
}(utils_1.SpeakeasyBase));
exports.GetSimilarImagesRequest = GetSimilarImagesRequest;
var GetSimilarImagesResponse = /** @class */ (function (_super) {
    __extends(GetSimilarImagesResponse, _super);
    function GetSimilarImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSimilarImagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImageSearchResults)
    ], GetSimilarImagesResponse.prototype, "imageSearchResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSimilarImagesResponse.prototype, "statusCode", void 0);
    return GetSimilarImagesResponse;
}(utils_1.SpeakeasyBase));
exports.GetSimilarImagesResponse = GetSimilarImagesResponse;
