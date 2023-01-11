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
exports.EndpointGetMultipleArtistsResponse = exports.EndpointGetMultipleArtistsRequest = exports.EndpointGetMultipleArtistsSecurity = exports.EndpointGetMultipleArtistsHeaders = exports.EndpointGetMultipleArtistsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointGetMultipleArtistsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleArtistsQueryParams, _super);
    function EndpointGetMultipleArtistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleArtistsQueryParams.prototype, "ids", void 0);
    return EndpointGetMultipleArtistsQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetMultipleArtistsQueryParams = EndpointGetMultipleArtistsQueryParams;
var EndpointGetMultipleArtistsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleArtistsHeaders, _super);
    function EndpointGetMultipleArtistsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetMultipleArtistsHeaders.prototype, "authorization", void 0);
    return EndpointGetMultipleArtistsHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointGetMultipleArtistsHeaders = EndpointGetMultipleArtistsHeaders;
var EndpointGetMultipleArtistsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleArtistsSecurity, _super);
    function EndpointGetMultipleArtistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetMultipleArtistsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetMultipleArtistsSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointGetMultipleArtistsSecurity = EndpointGetMultipleArtistsSecurity;
var EndpointGetMultipleArtistsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleArtistsRequest, _super);
    function EndpointGetMultipleArtistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetMultipleArtistsQueryParams)
    ], EndpointGetMultipleArtistsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetMultipleArtistsHeaders)
    ], EndpointGetMultipleArtistsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetMultipleArtistsSecurity)
    ], EndpointGetMultipleArtistsRequest.prototype, "security", void 0);
    return EndpointGetMultipleArtistsRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointGetMultipleArtistsRequest = EndpointGetMultipleArtistsRequest;
var EndpointGetMultipleArtistsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetMultipleArtistsResponse, _super);
    function EndpointGetMultipleArtistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ArtistsObject)
    ], EndpointGetMultipleArtistsResponse.prototype, "artistsObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointGetMultipleArtistsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetMultipleArtistsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointGetMultipleArtistsResponse.prototype, "statusCode", void 0);
    return EndpointGetMultipleArtistsResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointGetMultipleArtistsResponse = EndpointGetMultipleArtistsResponse;
