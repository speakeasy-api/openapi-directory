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
exports.EndpointGetUsersSavedAlbumsResponse = exports.EndpointGetUsersSavedAlbumsRequest = exports.EndpointGetUsersSavedAlbums200ApplicationJson = exports.EndpointGetUsersSavedAlbumsSecurity = exports.EndpointGetUsersSavedAlbumsHeaders = exports.EndpointGetUsersSavedAlbumsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointGetUsersSavedAlbumsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedAlbumsQueryParams, _super);
    function EndpointGetUsersSavedAlbumsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedAlbumsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=market" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedAlbumsQueryParams.prototype, "market", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedAlbumsQueryParams.prototype, "offset", void 0);
    return EndpointGetUsersSavedAlbumsQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetUsersSavedAlbumsQueryParams = EndpointGetUsersSavedAlbumsQueryParams;
var EndpointGetUsersSavedAlbumsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedAlbumsHeaders, _super);
    function EndpointGetUsersSavedAlbumsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedAlbumsHeaders.prototype, "authorization", void 0);
    return EndpointGetUsersSavedAlbumsHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointGetUsersSavedAlbumsHeaders = EndpointGetUsersSavedAlbumsHeaders;
var EndpointGetUsersSavedAlbumsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedAlbumsSecurity, _super);
    function EndpointGetUsersSavedAlbumsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetUsersSavedAlbumsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetUsersSavedAlbumsSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointGetUsersSavedAlbumsSecurity = EndpointGetUsersSavedAlbumsSecurity;
// EndpointGetUsersSavedAlbums200ApplicationJson
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
var EndpointGetUsersSavedAlbums200ApplicationJson = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedAlbums200ApplicationJson, _super);
    function EndpointGetUsersSavedAlbums200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedAlbums200ApplicationJson.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items", elemType: shared.SavedAlbumObject }),
        __metadata("design:type", Array)
    ], EndpointGetUsersSavedAlbums200ApplicationJson.prototype, "items", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedAlbums200ApplicationJson.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedAlbums200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedAlbums200ApplicationJson.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedAlbums200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedAlbums200ApplicationJson.prototype, "total", void 0);
    return EndpointGetUsersSavedAlbums200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.EndpointGetUsersSavedAlbums200ApplicationJson = EndpointGetUsersSavedAlbums200ApplicationJson;
var EndpointGetUsersSavedAlbumsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedAlbumsRequest, _super);
    function EndpointGetUsersSavedAlbumsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetUsersSavedAlbumsQueryParams)
    ], EndpointGetUsersSavedAlbumsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetUsersSavedAlbumsHeaders)
    ], EndpointGetUsersSavedAlbumsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetUsersSavedAlbumsSecurity)
    ], EndpointGetUsersSavedAlbumsRequest.prototype, "security", void 0);
    return EndpointGetUsersSavedAlbumsRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointGetUsersSavedAlbumsRequest = EndpointGetUsersSavedAlbumsRequest;
var EndpointGetUsersSavedAlbumsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetUsersSavedAlbumsResponse, _super);
    function EndpointGetUsersSavedAlbumsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointGetUsersSavedAlbumsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetUsersSavedAlbumsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointGetUsersSavedAlbumsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetUsersSavedAlbums200ApplicationJson)
    ], EndpointGetUsersSavedAlbumsResponse.prototype, "endpointGetUsersSavedAlbums200ApplicationJSONObject", void 0);
    return EndpointGetUsersSavedAlbumsResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointGetUsersSavedAlbumsResponse = EndpointGetUsersSavedAlbumsResponse;
