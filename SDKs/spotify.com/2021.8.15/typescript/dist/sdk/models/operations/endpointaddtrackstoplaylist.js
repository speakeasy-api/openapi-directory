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
exports.EndpointAddTracksToPlaylistResponse = exports.EndpointAddTracksToPlaylistRequest = exports.EndpointAddTracksToPlaylistSecurity = exports.EndpointAddTracksToPlaylistRequestBody = exports.EndpointAddTracksToPlaylistHeaders = exports.EndpointAddTracksToPlaylistQueryParams = exports.EndpointAddTracksToPlaylistPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointAddTracksToPlaylistPathParams = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistPathParams, _super);
    function EndpointAddTracksToPlaylistPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointAddTracksToPlaylistPathParams.prototype, "playlistId", void 0);
    return EndpointAddTracksToPlaylistPathParams;
}(utils_1.SpeakeasyBase));
exports.EndpointAddTracksToPlaylistPathParams = EndpointAddTracksToPlaylistPathParams;
var EndpointAddTracksToPlaylistQueryParams = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistQueryParams, _super);
    function EndpointAddTracksToPlaylistQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=position" }),
        __metadata("design:type", Number)
    ], EndpointAddTracksToPlaylistQueryParams.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uris" }),
        __metadata("design:type", String)
    ], EndpointAddTracksToPlaylistQueryParams.prototype, "uris", void 0);
    return EndpointAddTracksToPlaylistQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointAddTracksToPlaylistQueryParams = EndpointAddTracksToPlaylistQueryParams;
var EndpointAddTracksToPlaylistHeaders = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistHeaders, _super);
    function EndpointAddTracksToPlaylistHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointAddTracksToPlaylistHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointAddTracksToPlaylistHeaders.prototype, "contentType", void 0);
    return EndpointAddTracksToPlaylistHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointAddTracksToPlaylistHeaders = EndpointAddTracksToPlaylistHeaders;
var EndpointAddTracksToPlaylistRequestBody = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistRequestBody, _super);
    function EndpointAddTracksToPlaylistRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=position" }),
        __metadata("design:type", Number)
    ], EndpointAddTracksToPlaylistRequestBody.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uris" }),
        __metadata("design:type", Array)
    ], EndpointAddTracksToPlaylistRequestBody.prototype, "uris", void 0);
    return EndpointAddTracksToPlaylistRequestBody;
}(utils_1.SpeakeasyBase));
exports.EndpointAddTracksToPlaylistRequestBody = EndpointAddTracksToPlaylistRequestBody;
var EndpointAddTracksToPlaylistSecurity = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistSecurity, _super);
    function EndpointAddTracksToPlaylistSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointAddTracksToPlaylistSecurity.prototype, "spotifyAuth", void 0);
    return EndpointAddTracksToPlaylistSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointAddTracksToPlaylistSecurity = EndpointAddTracksToPlaylistSecurity;
var EndpointAddTracksToPlaylistRequest = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistRequest, _super);
    function EndpointAddTracksToPlaylistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointAddTracksToPlaylistPathParams)
    ], EndpointAddTracksToPlaylistRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointAddTracksToPlaylistQueryParams)
    ], EndpointAddTracksToPlaylistRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointAddTracksToPlaylistHeaders)
    ], EndpointAddTracksToPlaylistRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointAddTracksToPlaylistRequestBody)
    ], EndpointAddTracksToPlaylistRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointAddTracksToPlaylistSecurity)
    ], EndpointAddTracksToPlaylistRequest.prototype, "security", void 0);
    return EndpointAddTracksToPlaylistRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointAddTracksToPlaylistRequest = EndpointAddTracksToPlaylistRequest;
var EndpointAddTracksToPlaylistResponse = /** @class */ (function (_super) {
    __extends(EndpointAddTracksToPlaylistResponse, _super);
    function EndpointAddTracksToPlaylistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointAddTracksToPlaylistResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointAddTracksToPlaylistResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SnapshotIdObject)
    ], EndpointAddTracksToPlaylistResponse.prototype, "snapshotIdObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointAddTracksToPlaylistResponse.prototype, "statusCode", void 0);
    return EndpointAddTracksToPlaylistResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointAddTracksToPlaylistResponse = EndpointAddTracksToPlaylistResponse;
