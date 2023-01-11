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
exports.GetV2CvSimilarImagesResponse = exports.GetV2CvSimilarImagesRequest = exports.GetV2CvSimilarImagesSecurity = exports.GetV2CvSimilarImagesQueryParams = exports.GetV2CvSimilarImagesViewEnum = exports.GetV2CvSimilarImagesLicenseEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetV2CvSimilarImagesLicenseEnum;
(function (GetV2CvSimilarImagesLicenseEnum) {
    GetV2CvSimilarImagesLicenseEnum["Commercial"] = "commercial";
    GetV2CvSimilarImagesLicenseEnum["Editorial"] = "editorial";
})(GetV2CvSimilarImagesLicenseEnum = exports.GetV2CvSimilarImagesLicenseEnum || (exports.GetV2CvSimilarImagesLicenseEnum = {}));
var GetV2CvSimilarImagesViewEnum;
(function (GetV2CvSimilarImagesViewEnum) {
    GetV2CvSimilarImagesViewEnum["Minimal"] = "minimal";
    GetV2CvSimilarImagesViewEnum["Full"] = "full";
})(GetV2CvSimilarImagesViewEnum = exports.GetV2CvSimilarImagesViewEnum || (exports.GetV2CvSimilarImagesViewEnum = {}));
var GetV2CvSimilarImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetV2CvSimilarImagesQueryParams, _super);
    function GetV2CvSimilarImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=asset_id" }),
        __metadata("design:type", String)
    ], GetV2CvSimilarImagesQueryParams.prototype, "assetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetV2CvSimilarImagesQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", Array)
    ], GetV2CvSimilarImagesQueryParams.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV2CvSimilarImagesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetV2CvSimilarImagesQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=safe" }),
        __metadata("design:type", Boolean)
    ], GetV2CvSimilarImagesQueryParams.prototype, "safe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetV2CvSimilarImagesQueryParams.prototype, "view", void 0);
    return GetV2CvSimilarImagesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetV2CvSimilarImagesQueryParams = GetV2CvSimilarImagesQueryParams;
var GetV2CvSimilarImagesSecurity = /** @class */ (function (_super) {
    __extends(GetV2CvSimilarImagesSecurity, _super);
    function GetV2CvSimilarImagesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetV2CvSimilarImagesSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], GetV2CvSimilarImagesSecurity.prototype, "customerAccessCode", void 0);
    return GetV2CvSimilarImagesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetV2CvSimilarImagesSecurity = GetV2CvSimilarImagesSecurity;
var GetV2CvSimilarImagesRequest = /** @class */ (function (_super) {
    __extends(GetV2CvSimilarImagesRequest, _super);
    function GetV2CvSimilarImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV2CvSimilarImagesQueryParams)
    ], GetV2CvSimilarImagesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV2CvSimilarImagesSecurity)
    ], GetV2CvSimilarImagesRequest.prototype, "security", void 0);
    return GetV2CvSimilarImagesRequest;
}(utils_1.SpeakeasyBase));
exports.GetV2CvSimilarImagesRequest = GetV2CvSimilarImagesRequest;
var GetV2CvSimilarImagesResponse = /** @class */ (function (_super) {
    __extends(GetV2CvSimilarImagesResponse, _super);
    function GetV2CvSimilarImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetV2CvSimilarImagesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ImageSearchResults)
    ], GetV2CvSimilarImagesResponse.prototype, "imageSearchResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetV2CvSimilarImagesResponse.prototype, "statusCode", void 0);
    return GetV2CvSimilarImagesResponse;
}(utils_1.SpeakeasyBase));
exports.GetV2CvSimilarImagesResponse = GetV2CvSimilarImagesResponse;
