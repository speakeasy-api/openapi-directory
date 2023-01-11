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
exports.EndpointGetFeaturedPlaylistsResponse = exports.EndpointGetFeaturedPlaylistsRequest = exports.EndpointGetFeaturedPlaylistsSecurity = exports.EndpointGetFeaturedPlaylistsHeaders = exports.EndpointGetFeaturedPlaylistsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointGetFeaturedPlaylistsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetFeaturedPlaylistsQueryParams, _super);
    function EndpointGetFeaturedPlaylistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], EndpointGetFeaturedPlaylistsQueryParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetFeaturedPlaylistsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], EndpointGetFeaturedPlaylistsQueryParams.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetFeaturedPlaylistsQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=timestamp" }),
        __metadata("design:type", String)
    ], EndpointGetFeaturedPlaylistsQueryParams.prototype, "timestamp", void 0);
    return EndpointGetFeaturedPlaylistsQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetFeaturedPlaylistsQueryParams = EndpointGetFeaturedPlaylistsQueryParams;
var EndpointGetFeaturedPlaylistsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetFeaturedPlaylistsHeaders, _super);
    function EndpointGetFeaturedPlaylistsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetFeaturedPlaylistsHeaders.prototype, "authorization", void 0);
    return EndpointGetFeaturedPlaylistsHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointGetFeaturedPlaylistsHeaders = EndpointGetFeaturedPlaylistsHeaders;
var EndpointGetFeaturedPlaylistsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetFeaturedPlaylistsSecurity, _super);
    function EndpointGetFeaturedPlaylistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetFeaturedPlaylistsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetFeaturedPlaylistsSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointGetFeaturedPlaylistsSecurity = EndpointGetFeaturedPlaylistsSecurity;
var EndpointGetFeaturedPlaylistsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetFeaturedPlaylistsRequest, _super);
    function EndpointGetFeaturedPlaylistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetFeaturedPlaylistsQueryParams)
    ], EndpointGetFeaturedPlaylistsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetFeaturedPlaylistsHeaders)
    ], EndpointGetFeaturedPlaylistsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetFeaturedPlaylistsSecurity)
    ], EndpointGetFeaturedPlaylistsRequest.prototype, "security", void 0);
    return EndpointGetFeaturedPlaylistsRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointGetFeaturedPlaylistsRequest = EndpointGetFeaturedPlaylistsRequest;
var EndpointGetFeaturedPlaylistsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetFeaturedPlaylistsResponse, _super);
    function EndpointGetFeaturedPlaylistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointGetFeaturedPlaylistsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetFeaturedPlaylistsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FeaturedPlaylistObject)
    ], EndpointGetFeaturedPlaylistsResponse.prototype, "featuredPlaylistObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointGetFeaturedPlaylistsResponse.prototype, "statusCode", void 0);
    return EndpointGetFeaturedPlaylistsResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointGetFeaturedPlaylistsResponse = EndpointGetFeaturedPlaylistsResponse;
