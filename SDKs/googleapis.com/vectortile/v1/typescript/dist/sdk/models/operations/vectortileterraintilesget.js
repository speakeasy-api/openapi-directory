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
exports.VectortileTerraintilesGetResponse = exports.VectortileTerraintilesGetRequest = exports.VectortileTerraintilesGetQueryParams = exports.VectortileTerraintilesGetTerrainFormatsEnum = exports.VectortileTerraintilesGetClientInfoPlatformEnum = exports.VectortileTerraintilesGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var VectortileTerraintilesGetPathParams = /** @class */ (function (_super) {
    __extends(VectortileTerraintilesGetPathParams, _super);
    function VectortileTerraintilesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetPathParams.prototype, "name", void 0);
    return VectortileTerraintilesGetPathParams;
}(utils_1.SpeakeasyBase));
exports.VectortileTerraintilesGetPathParams = VectortileTerraintilesGetPathParams;
var VectortileTerraintilesGetClientInfoPlatformEnum;
(function (VectortileTerraintilesGetClientInfoPlatformEnum) {
    VectortileTerraintilesGetClientInfoPlatformEnum["PlatformUnspecified"] = "PLATFORM_UNSPECIFIED";
    VectortileTerraintilesGetClientInfoPlatformEnum["Editor"] = "EDITOR";
    VectortileTerraintilesGetClientInfoPlatformEnum["MacOs"] = "MAC_OS";
    VectortileTerraintilesGetClientInfoPlatformEnum["Windows"] = "WINDOWS";
    VectortileTerraintilesGetClientInfoPlatformEnum["Linux"] = "LINUX";
    VectortileTerraintilesGetClientInfoPlatformEnum["Android"] = "ANDROID";
    VectortileTerraintilesGetClientInfoPlatformEnum["Ios"] = "IOS";
    VectortileTerraintilesGetClientInfoPlatformEnum["WebGl"] = "WEB_GL";
})(VectortileTerraintilesGetClientInfoPlatformEnum = exports.VectortileTerraintilesGetClientInfoPlatformEnum || (exports.VectortileTerraintilesGetClientInfoPlatformEnum = {}));
var VectortileTerraintilesGetTerrainFormatsEnum;
(function (VectortileTerraintilesGetTerrainFormatsEnum) {
    VectortileTerraintilesGetTerrainFormatsEnum["TerrainFormatUnknown"] = "TERRAIN_FORMAT_UNKNOWN";
    VectortileTerraintilesGetTerrainFormatsEnum["FirstDerivative"] = "FIRST_DERIVATIVE";
    VectortileTerraintilesGetTerrainFormatsEnum["SecondDerivative"] = "SECOND_DERIVATIVE";
})(VectortileTerraintilesGetTerrainFormatsEnum = exports.VectortileTerraintilesGetTerrainFormatsEnum || (exports.VectortileTerraintilesGetTerrainFormatsEnum = {}));
var VectortileTerraintilesGetQueryParams = /** @class */ (function (_super) {
    __extends(VectortileTerraintilesGetQueryParams, _super);
    function VectortileTerraintilesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=altitudePrecisionCentimeters" }),
        __metadata("design:type", Number)
    ], VectortileTerraintilesGetQueryParams.prototype, "altitudePrecisionCentimeters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=clientInfo.apiClient" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "clientInfoApiClient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=clientInfo.applicationId" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "clientInfoApplicationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=clientInfo.applicationVersion" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "clientInfoApplicationVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=clientInfo.deviceModel" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "clientInfoDeviceModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=clientInfo.operatingSystem" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "clientInfoOperatingSystem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=clientInfo.platform" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "clientInfoPlatform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=clientInfo.userId" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "clientInfoUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=enableModeledVolumes" }),
        __metadata("design:type", Boolean)
    ], VectortileTerraintilesGetQueryParams.prototype, "enableModeledVolumes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=enablePoliticalFeatures" }),
        __metadata("design:type", Boolean)
    ], VectortileTerraintilesGetQueryParams.prototype, "enablePoliticalFeatures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=enablePrivateRoads" }),
        __metadata("design:type", Boolean)
    ], VectortileTerraintilesGetQueryParams.prototype, "enablePrivateRoads", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=enableUnclippedBuildings" }),
        __metadata("design:type", Boolean)
    ], VectortileTerraintilesGetQueryParams.prototype, "enableUnclippedBuildings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=languageCode" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxElevationResolutionCells" }),
        __metadata("design:type", Number)
    ], VectortileTerraintilesGetQueryParams.prototype, "maxElevationResolutionCells", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=minElevationResolutionCells" }),
        __metadata("design:type", Number)
    ], VectortileTerraintilesGetQueryParams.prototype, "minElevationResolutionCells", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VectortileTerraintilesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=regionCode" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "regionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=terrainFormats" }),
        __metadata("design:type", Array)
    ], VectortileTerraintilesGetQueryParams.prototype, "terrainFormats", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetQueryParams.prototype, "uploadProtocol", void 0);
    return VectortileTerraintilesGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.VectortileTerraintilesGetQueryParams = VectortileTerraintilesGetQueryParams;
var VectortileTerraintilesGetRequest = /** @class */ (function (_super) {
    __extends(VectortileTerraintilesGetRequest, _super);
    function VectortileTerraintilesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VectortileTerraintilesGetPathParams)
    ], VectortileTerraintilesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VectortileTerraintilesGetQueryParams)
    ], VectortileTerraintilesGetRequest.prototype, "queryParams", void 0);
    return VectortileTerraintilesGetRequest;
}(utils_1.SpeakeasyBase));
exports.VectortileTerraintilesGetRequest = VectortileTerraintilesGetRequest;
var VectortileTerraintilesGetResponse = /** @class */ (function (_super) {
    __extends(VectortileTerraintilesGetResponse, _super);
    function VectortileTerraintilesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], VectortileTerraintilesGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], VectortileTerraintilesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TerrainTile)
    ], VectortileTerraintilesGetResponse.prototype, "terrainTile", void 0);
    return VectortileTerraintilesGetResponse;
}(utils_1.SpeakeasyBase));
exports.VectortileTerraintilesGetResponse = VectortileTerraintilesGetResponse;
