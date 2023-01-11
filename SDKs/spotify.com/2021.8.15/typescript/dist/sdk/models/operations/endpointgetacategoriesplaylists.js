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
exports.EndpointGetACategoriesPlaylistsResponse = exports.EndpointGetACategoriesPlaylistsRequest = exports.EndpointGetACategoriesPlaylistsSecurity = exports.EndpointGetACategoriesPlaylistsHeaders = exports.EndpointGetACategoriesPlaylistsQueryParams = exports.EndpointGetACategoriesPlaylistsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointGetACategoriesPlaylistsPathParams = /** @class */ (function (_super) {
    __extends(EndpointGetACategoriesPlaylistsPathParams, _super);
    function EndpointGetACategoriesPlaylistsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=category_id" }),
        __metadata("design:type", String)
    ], EndpointGetACategoriesPlaylistsPathParams.prototype, "categoryId", void 0);
    return EndpointGetACategoriesPlaylistsPathParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetACategoriesPlaylistsPathParams = EndpointGetACategoriesPlaylistsPathParams;
var EndpointGetACategoriesPlaylistsQueryParams = /** @class */ (function (_super) {
    __extends(EndpointGetACategoriesPlaylistsQueryParams, _super);
    function EndpointGetACategoriesPlaylistsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], EndpointGetACategoriesPlaylistsQueryParams.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], EndpointGetACategoriesPlaylistsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], EndpointGetACategoriesPlaylistsQueryParams.prototype, "offset", void 0);
    return EndpointGetACategoriesPlaylistsQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointGetACategoriesPlaylistsQueryParams = EndpointGetACategoriesPlaylistsQueryParams;
var EndpointGetACategoriesPlaylistsHeaders = /** @class */ (function (_super) {
    __extends(EndpointGetACategoriesPlaylistsHeaders, _super);
    function EndpointGetACategoriesPlaylistsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointGetACategoriesPlaylistsHeaders.prototype, "authorization", void 0);
    return EndpointGetACategoriesPlaylistsHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointGetACategoriesPlaylistsHeaders = EndpointGetACategoriesPlaylistsHeaders;
var EndpointGetACategoriesPlaylistsSecurity = /** @class */ (function (_super) {
    __extends(EndpointGetACategoriesPlaylistsSecurity, _super);
    function EndpointGetACategoriesPlaylistsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointGetACategoriesPlaylistsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointGetACategoriesPlaylistsSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointGetACategoriesPlaylistsSecurity = EndpointGetACategoriesPlaylistsSecurity;
var EndpointGetACategoriesPlaylistsRequest = /** @class */ (function (_super) {
    __extends(EndpointGetACategoriesPlaylistsRequest, _super);
    function EndpointGetACategoriesPlaylistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetACategoriesPlaylistsPathParams)
    ], EndpointGetACategoriesPlaylistsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetACategoriesPlaylistsQueryParams)
    ], EndpointGetACategoriesPlaylistsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetACategoriesPlaylistsHeaders)
    ], EndpointGetACategoriesPlaylistsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointGetACategoriesPlaylistsSecurity)
    ], EndpointGetACategoriesPlaylistsRequest.prototype, "security", void 0);
    return EndpointGetACategoriesPlaylistsRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointGetACategoriesPlaylistsRequest = EndpointGetACategoriesPlaylistsRequest;
var EndpointGetACategoriesPlaylistsResponse = /** @class */ (function (_super) {
    __extends(EndpointGetACategoriesPlaylistsResponse, _super);
    function EndpointGetACategoriesPlaylistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointGetACategoriesPlaylistsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointGetACategoriesPlaylistsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PlaylistPagingObject)
    ], EndpointGetACategoriesPlaylistsResponse.prototype, "playlistPagingObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointGetACategoriesPlaylistsResponse.prototype, "statusCode", void 0);
    return EndpointGetACategoriesPlaylistsResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointGetACategoriesPlaylistsResponse = EndpointGetACategoriesPlaylistsResponse;
