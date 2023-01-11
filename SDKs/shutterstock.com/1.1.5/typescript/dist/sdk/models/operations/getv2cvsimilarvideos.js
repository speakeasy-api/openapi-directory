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
exports.GetV2CvSimilarVideosResponse = exports.GetV2CvSimilarVideosRequest = exports.GetV2CvSimilarVideosSecurity = exports.GetV2CvSimilarVideosQueryParams = exports.GetV2CvSimilarVideosViewEnum = exports.GetV2CvSimilarVideosLicenseEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetV2CvSimilarVideosLicenseEnum;
(function (GetV2CvSimilarVideosLicenseEnum) {
    GetV2CvSimilarVideosLicenseEnum["Commercial"] = "commercial";
    GetV2CvSimilarVideosLicenseEnum["Editorial"] = "editorial";
})(GetV2CvSimilarVideosLicenseEnum = exports.GetV2CvSimilarVideosLicenseEnum || (exports.GetV2CvSimilarVideosLicenseEnum = {}));
var GetV2CvSimilarVideosViewEnum;
(function (GetV2CvSimilarVideosViewEnum) {
    GetV2CvSimilarVideosViewEnum["Minimal"] = "minimal";
    GetV2CvSimilarVideosViewEnum["Full"] = "full";
})(GetV2CvSimilarVideosViewEnum = exports.GetV2CvSimilarVideosViewEnum || (exports.GetV2CvSimilarVideosViewEnum = {}));
var GetV2CvSimilarVideosQueryParams = /** @class */ (function (_super) {
    __extends(GetV2CvSimilarVideosQueryParams, _super);
    function GetV2CvSimilarVideosQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=asset_id" }),
        __metadata("design:type", String)
    ], GetV2CvSimilarVideosQueryParams.prototype, "assetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", String)
    ], GetV2CvSimilarVideosQueryParams.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", Array)
    ], GetV2CvSimilarVideosQueryParams.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV2CvSimilarVideosQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetV2CvSimilarVideosQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=safe" }),
        __metadata("design:type", Boolean)
    ], GetV2CvSimilarVideosQueryParams.prototype, "safe", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], GetV2CvSimilarVideosQueryParams.prototype, "view", void 0);
    return GetV2CvSimilarVideosQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetV2CvSimilarVideosQueryParams = GetV2CvSimilarVideosQueryParams;
var GetV2CvSimilarVideosSecurity = /** @class */ (function (_super) {
    __extends(GetV2CvSimilarVideosSecurity, _super);
    function GetV2CvSimilarVideosSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetV2CvSimilarVideosSecurity.prototype, "basic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeCustomerAccessCode)
    ], GetV2CvSimilarVideosSecurity.prototype, "customerAccessCode", void 0);
    return GetV2CvSimilarVideosSecurity;
}(utils_1.SpeakeasyBase));
exports.GetV2CvSimilarVideosSecurity = GetV2CvSimilarVideosSecurity;
var GetV2CvSimilarVideosRequest = /** @class */ (function (_super) {
    __extends(GetV2CvSimilarVideosRequest, _super);
    function GetV2CvSimilarVideosRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV2CvSimilarVideosQueryParams)
    ], GetV2CvSimilarVideosRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetV2CvSimilarVideosSecurity)
    ], GetV2CvSimilarVideosRequest.prototype, "security", void 0);
    return GetV2CvSimilarVideosRequest;
}(utils_1.SpeakeasyBase));
exports.GetV2CvSimilarVideosRequest = GetV2CvSimilarVideosRequest;
var GetV2CvSimilarVideosResponse = /** @class */ (function (_super) {
    __extends(GetV2CvSimilarVideosResponse, _super);
    function GetV2CvSimilarVideosResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetV2CvSimilarVideosResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetV2CvSimilarVideosResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.VideoSearchResults)
    ], GetV2CvSimilarVideosResponse.prototype, "videoSearchResults", void 0);
    return GetV2CvSimilarVideosResponse;
}(utils_1.SpeakeasyBase));
exports.GetV2CvSimilarVideosResponse = GetV2CvSimilarVideosResponse;
