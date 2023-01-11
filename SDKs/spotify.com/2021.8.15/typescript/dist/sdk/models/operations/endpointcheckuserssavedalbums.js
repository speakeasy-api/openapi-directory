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
exports.EndpointCheckUsersSavedAlbumsResponse = exports.EndpointCheckUsersSavedAlbumsRequest = exports.EndpointCheckUsersSavedAlbumsSecurity = exports.EndpointCheckUsersSavedAlbumsHeaders = exports.EndpointCheckUsersSavedAlbumsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointCheckUsersSavedAlbumsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedAlbumsQueryParams, _super);
    function EndpointCheckUsersSavedAlbumsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedAlbumsQueryParams.prototype, "ids", void 0);
    return EndpointCheckUsersSavedAlbumsQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckUsersSavedAlbumsQueryParams = EndpointCheckUsersSavedAlbumsQueryParams;
var EndpointCheckUsersSavedAlbumsHeaders = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedAlbumsHeaders, _super);
    function EndpointCheckUsersSavedAlbumsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedAlbumsHeaders.prototype, "authorization", void 0);
    return EndpointCheckUsersSavedAlbumsHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckUsersSavedAlbumsHeaders = EndpointCheckUsersSavedAlbumsHeaders;
var EndpointCheckUsersSavedAlbumsSecurity = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedAlbumsSecurity, _super);
    function EndpointCheckUsersSavedAlbumsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointCheckUsersSavedAlbumsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointCheckUsersSavedAlbumsSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckUsersSavedAlbumsSecurity = EndpointCheckUsersSavedAlbumsSecurity;
var EndpointCheckUsersSavedAlbumsRequest = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedAlbumsRequest, _super);
    function EndpointCheckUsersSavedAlbumsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointCheckUsersSavedAlbumsQueryParams)
    ], EndpointCheckUsersSavedAlbumsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointCheckUsersSavedAlbumsHeaders)
    ], EndpointCheckUsersSavedAlbumsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointCheckUsersSavedAlbumsSecurity)
    ], EndpointCheckUsersSavedAlbumsRequest.prototype, "security", void 0);
    return EndpointCheckUsersSavedAlbumsRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckUsersSavedAlbumsRequest = EndpointCheckUsersSavedAlbumsRequest;
var EndpointCheckUsersSavedAlbumsResponse = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedAlbumsResponse, _super);
    function EndpointCheckUsersSavedAlbumsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedAlbumsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointCheckUsersSavedAlbumsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointCheckUsersSavedAlbumsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], EndpointCheckUsersSavedAlbumsResponse.prototype, "endpointCheckUsersSavedAlbums200ApplicationJSONBooleans", void 0);
    return EndpointCheckUsersSavedAlbumsResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckUsersSavedAlbumsResponse = EndpointCheckUsersSavedAlbumsResponse;
