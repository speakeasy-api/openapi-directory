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
exports.EndpointGetAnArtistsAlbumsResponse = exports.EndpointGetAnArtistsAlbumsRequest = exports.EndpointGetAnArtistsAlbums200ApplicationJson = exports.EndpointGetAnArtistsAlbumsSecurity = exports.EndpointGetAnArtistsAlbumsHeaders = exports.EndpointGetAnArtistsAlbumsQueryParams = exports.EndpointGetAnArtistsAlbumsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointGetAnArtistsAlbumsPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsAlbumsPathParams, _super);
    function EndpointGetAnArtistsAlbumsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsAlbumsPathParams.prototype, "id", void 0);
    return EndpointGetAnArtistsAlbumsPathParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnArtistsAlbumsPathParams = EndpointGetAnArtistsAlbumsPathParams;
var EndpointGetAnArtistsAlbumsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsAlbumsQueryParams, _super);
    function EndpointGetAnArtistsAlbumsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include_groups" }),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsAlbumsQueryParams.prototype, "includeGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetAnArtistsAlbumsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsAlbumsQueryParams.prototype, "market", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetAnArtistsAlbumsQueryParams.prototype, "offset", void 0);
    return EndpointGetAnArtistsAlbumsQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnArtistsAlbumsQueryParams = EndpointGetAnArtistsAlbumsQueryParams;
var EndpointGetAnArtistsAlbumsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsAlbumsHeaders, _super);
    function EndpointGetAnArtistsAlbumsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsAlbumsHeaders.prototype, "authorization", void 0);
    return EndpointGetAnArtistsAlbumsHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnArtistsAlbumsHeaders = EndpointGetAnArtistsAlbumsHeaders;
var EndpointGetAnArtistsAlbumsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsAlbumsSecurity, _super);
    function EndpointGetAnArtistsAlbumsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetAnArtistsAlbumsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetAnArtistsAlbumsSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnArtistsAlbumsSecurity = EndpointGetAnArtistsAlbumsSecurity;
// EndpointGetAnArtistsAlbums200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetAnArtistsAlbums200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsAlbums200ApplicationJson, _super);
    function EndpointGetAnArtistsAlbums200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsAlbums200ApplicationJson.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shared.SimplifiedAlbumObject }),
        __metadata("design:type", Array)
    ], EndpointGetAnArtistsAlbums200ApplicationJson.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetAnArtistsAlbums200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsAlbums200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetAnArtistsAlbums200ApplicationJson.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsAlbums200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetAnArtistsAlbums200ApplicationJson.prototype, "total", void 0);
    return EndpointGetAnArtistsAlbums200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnArtistsAlbums200ApplicationJson = EndpointGetAnArtistsAlbums200ApplicationJson;
var EndpointGetAnArtistsAlbumsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsAlbumsRequest, _super);
    function EndpointGetAnArtistsAlbumsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetAnArtistsAlbumsPathParams)
    ], EndpointGetAnArtistsAlbumsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetAnArtistsAlbumsQueryParams)
    ], EndpointGetAnArtistsAlbumsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetAnArtistsAlbumsHeaders)
    ], EndpointGetAnArtistsAlbumsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetAnArtistsAlbumsSecurity)
    ], EndpointGetAnArtistsAlbumsRequest.prototype, "security", void 0);
    return EndpointGetAnArtistsAlbumsRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnArtistsAlbumsRequest = EndpointGetAnArtistsAlbumsRequest;
var EndpointGetAnArtistsAlbumsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetAnArtistsAlbumsResponse, _super);
    function EndpointGetAnArtistsAlbumsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointGetAnArtistsAlbumsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetAnArtistsAlbumsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointGetAnArtistsAlbumsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetAnArtistsAlbums200ApplicationJson)
    ], EndpointGetAnArtistsAlbumsResponse.prototype, "endpointGetAnArtistsAlbums200ApplicationJSONObject", void 0);
    return EndpointGetAnArtistsAlbumsResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointGetAnArtistsAlbumsResponse = EndpointGetAnArtistsAlbumsResponse;
