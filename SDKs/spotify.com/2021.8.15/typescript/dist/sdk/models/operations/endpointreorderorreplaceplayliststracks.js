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
exports.EndpointReorderOrReplacePlaylistsTracksResponse = exports.EndpointReorderOrReplacePlaylistsTracksRequest = exports.EndpointReorderOrReplacePlaylistsTracksSecurity = exports.EndpointReorderOrReplacePlaylistsTracksRequestBody = exports.EndpointReorderOrReplacePlaylistsTracksHeaders = exports.EndpointReorderOrReplacePlaylistsTracksQueryParams = exports.EndpointReorderOrReplacePlaylistsTracksPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointReorderOrReplacePlaylistsTracksPathParams = /** @class */ (function (_super) {
    __extends(EndpointReorderOrReplacePlaylistsTracksPathParams, _super);
    function EndpointReorderOrReplacePlaylistsTracksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", String)
    ], EndpointReorderOrReplacePlaylistsTracksPathParams.prototype, "playlistId", void 0);
    return EndpointReorderOrReplacePlaylistsTracksPathParams;
}(utils_1.SpeakeasyBase));
exports.EndpointReorderOrReplacePlaylistsTracksPathParams = EndpointReorderOrReplacePlaylistsTracksPathParams;
var EndpointReorderOrReplacePlaylistsTracksQueryParams = /** @class */ (function (_super) {
    __extends(EndpointReorderOrReplacePlaylistsTracksQueryParams, _super);
    function EndpointReorderOrReplacePlaylistsTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=uris" }),
        __metadata("design:type", String)
    ], EndpointReorderOrReplacePlaylistsTracksQueryParams.prototype, "uris", void 0);
    return EndpointReorderOrReplacePlaylistsTracksQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointReorderOrReplacePlaylistsTracksQueryParams = EndpointReorderOrReplacePlaylistsTracksQueryParams;
var EndpointReorderOrReplacePlaylistsTracksHeaders = /** @class */ (function (_super) {
    __extends(EndpointReorderOrReplacePlaylistsTracksHeaders, _super);
    function EndpointReorderOrReplacePlaylistsTracksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointReorderOrReplacePlaylistsTracksHeaders.prototype, "authorization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Content-Type" }),
        __metadata("design:type", String)
    ], EndpointReorderOrReplacePlaylistsTracksHeaders.prototype, "contentType", void 0);
    return EndpointReorderOrReplacePlaylistsTracksHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointReorderOrReplacePlaylistsTracksHeaders = EndpointReorderOrReplacePlaylistsTracksHeaders;
var EndpointReorderOrReplacePlaylistsTracksRequestBody = /** @class */ (function (_super) {
    __extends(EndpointReorderOrReplacePlaylistsTracksRequestBody, _super);
    function EndpointReorderOrReplacePlaylistsTracksRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insert_before" }),
        __metadata("design:type", Number)
    ], EndpointReorderOrReplacePlaylistsTracksRequestBody.prototype, "insertBefore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=range_length" }),
        __metadata("design:type", Number)
    ], EndpointReorderOrReplacePlaylistsTracksRequestBody.prototype, "rangeLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=range_start" }),
        __metadata("design:type", Number)
    ], EndpointReorderOrReplacePlaylistsTracksRequestBody.prototype, "rangeStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snapshot_id" }),
        __metadata("design:type", String)
    ], EndpointReorderOrReplacePlaylistsTracksRequestBody.prototype, "snapshotId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uris" }),
        __metadata("design:type", Array)
    ], EndpointReorderOrReplacePlaylistsTracksRequestBody.prototype, "uris", void 0);
    return EndpointReorderOrReplacePlaylistsTracksRequestBody;
}(utils_1.SpeakeasyBase));
exports.EndpointReorderOrReplacePlaylistsTracksRequestBody = EndpointReorderOrReplacePlaylistsTracksRequestBody;
var EndpointReorderOrReplacePlaylistsTracksSecurity = /** @class */ (function (_super) {
    __extends(EndpointReorderOrReplacePlaylistsTracksSecurity, _super);
    function EndpointReorderOrReplacePlaylistsTracksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointReorderOrReplacePlaylistsTracksSecurity.prototype, "spotifyAuth", void 0);
    return EndpointReorderOrReplacePlaylistsTracksSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointReorderOrReplacePlaylistsTracksSecurity = EndpointReorderOrReplacePlaylistsTracksSecurity;
var EndpointReorderOrReplacePlaylistsTracksRequest = /** @class */ (function (_super) {
    __extends(EndpointReorderOrReplacePlaylistsTracksRequest, _super);
    function EndpointReorderOrReplacePlaylistsTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointReorderOrReplacePlaylistsTracksPathParams)
    ], EndpointReorderOrReplacePlaylistsTracksRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointReorderOrReplacePlaylistsTracksQueryParams)
    ], EndpointReorderOrReplacePlaylistsTracksRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointReorderOrReplacePlaylistsTracksHeaders)
    ], EndpointReorderOrReplacePlaylistsTracksRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", EndpointReorderOrReplacePlaylistsTracksRequestBody)
    ], EndpointReorderOrReplacePlaylistsTracksRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointReorderOrReplacePlaylistsTracksSecurity)
    ], EndpointReorderOrReplacePlaylistsTracksRequest.prototype, "security", void 0);
    return EndpointReorderOrReplacePlaylistsTracksRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointReorderOrReplacePlaylistsTracksRequest = EndpointReorderOrReplacePlaylistsTracksRequest;
var EndpointReorderOrReplacePlaylistsTracksResponse = /** @class */ (function (_super) {
    __extends(EndpointReorderOrReplacePlaylistsTracksResponse, _super);
    function EndpointReorderOrReplacePlaylistsTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointReorderOrReplacePlaylistsTracksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointReorderOrReplacePlaylistsTracksResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.SnapshotIdObject)
    ], EndpointReorderOrReplacePlaylistsTracksResponse.prototype, "snapshotIdObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointReorderOrReplacePlaylistsTracksResponse.prototype, "statusCode", void 0);
    return EndpointReorderOrReplacePlaylistsTracksResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointReorderOrReplacePlaylistsTracksResponse = EndpointReorderOrReplacePlaylistsTracksResponse;
