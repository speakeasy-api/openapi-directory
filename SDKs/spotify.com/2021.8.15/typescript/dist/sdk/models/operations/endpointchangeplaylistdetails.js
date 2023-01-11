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
exports.EndpointChangePlaylistDetailsResponse = exports.EndpointChangePlaylistDetailsRequest = exports.EndpointChangePlaylistDetailsSecurity = exports.EndpointChangePlaylistDetailsRequestBody = exports.EndpointChangePlaylistDetailsHeaders = exports.EndpointChangePlaylistDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointChangePlaylistDetailsPathParams = /** @class */ (function (_super) {
    __extends(EndpointChangePlaylistDetailsPathParams, _super);
    function EndpointChangePlaylistDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointChangePlaylistDetailsPathParams.prototype, "playlistId", void 0);
    return EndpointChangePlaylistDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.EndpointChangePlaylistDetailsPathParams = EndpointChangePlaylistDetailsPathParams;
var EndpointChangePlaylistDetailsHeaders = /** @class */ (function (_super) {
    __extends(EndpointChangePlaylistDetailsHeaders, _super);
    function EndpointChangePlaylistDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointChangePlaylistDetailsHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointChangePlaylistDetailsHeaders.prototype, "contentType", void 0);
    return EndpointChangePlaylistDetailsHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointChangePlaylistDetailsHeaders = EndpointChangePlaylistDetailsHeaders;
var EndpointChangePlaylistDetailsRequestBody = /** @class */ (function (_super) {
    __extends(EndpointChangePlaylistDetailsRequestBody, _super);
    function EndpointChangePlaylistDetailsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collaborative" }),
        __metadata("design:type", Boolean)
    ], EndpointChangePlaylistDetailsRequestBody.prototype, "collaborative", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EndpointChangePlaylistDetailsRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EndpointChangePlaylistDetailsRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], EndpointChangePlaylistDetailsRequestBody.prototype, "public", void 0);
    return EndpointChangePlaylistDetailsRequestBody;
}(utils_1.SpeakeasyBase));
exports.EndpointChangePlaylistDetailsRequestBody = EndpointChangePlaylistDetailsRequestBody;
var EndpointChangePlaylistDetailsSecurity = /** @class */ (function (_super) {
    __extends(EndpointChangePlaylistDetailsSecurity, _super);
    function EndpointChangePlaylistDetailsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointChangePlaylistDetailsSecurity.prototype, "spotifyAuth", void 0);
    return EndpointChangePlaylistDetailsSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointChangePlaylistDetailsSecurity = EndpointChangePlaylistDetailsSecurity;
var EndpointChangePlaylistDetailsRequest = /** @class */ (function (_super) {
    __extends(EndpointChangePlaylistDetailsRequest, _super);
    function EndpointChangePlaylistDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointChangePlaylistDetailsPathParams)
    ], EndpointChangePlaylistDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointChangePlaylistDetailsHeaders)
    ], EndpointChangePlaylistDetailsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointChangePlaylistDetailsRequestBody)
    ], EndpointChangePlaylistDetailsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointChangePlaylistDetailsSecurity)
    ], EndpointChangePlaylistDetailsRequest.prototype, "security", void 0);
    return EndpointChangePlaylistDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointChangePlaylistDetailsRequest = EndpointChangePlaylistDetailsRequest;
var EndpointChangePlaylistDetailsResponse = /** @class */ (function (_super) {
    __extends(EndpointChangePlaylistDetailsResponse, _super);
    function EndpointChangePlaylistDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointChangePlaylistDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointChangePlaylistDetailsResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointChangePlaylistDetailsResponse.prototype, "statusCode", void 0);
    return EndpointChangePlaylistDetailsResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointChangePlaylistDetailsResponse = EndpointChangePlaylistDetailsResponse;
