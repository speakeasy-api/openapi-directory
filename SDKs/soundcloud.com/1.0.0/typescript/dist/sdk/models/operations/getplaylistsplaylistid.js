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
exports.GetPlaylistsPlaylistIdResponse = exports.GetPlaylistsPlaylistIdRequest = exports.GetPlaylistsPlaylistIdSecurity = exports.GetPlaylistsPlaylistIdQueryParams = exports.GetPlaylistsPlaylistIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetPlaylistsPlaylistIdPathParams = /** @class */ (function (_super) {
    __extends(GetPlaylistsPlaylistIdPathParams, _super);
    function GetPlaylistsPlaylistIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=playlist_id" }),
        __metadata("design:type", Number)
    ], GetPlaylistsPlaylistIdPathParams.prototype, "playlistId", void 0);
    return GetPlaylistsPlaylistIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetPlaylistsPlaylistIdPathParams = GetPlaylistsPlaylistIdPathParams;
var GetPlaylistsPlaylistIdQueryParams = /** @class */ (function (_super) {
    __extends(GetPlaylistsPlaylistIdQueryParams, _super);
    function GetPlaylistsPlaylistIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=access" }),
        __metadata("design:type", Array)
    ], GetPlaylistsPlaylistIdQueryParams.prototype, "access", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=secret_token" }),
        __metadata("design:type", String)
    ], GetPlaylistsPlaylistIdQueryParams.prototype, "secretToken", void 0);
    return GetPlaylistsPlaylistIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetPlaylistsPlaylistIdQueryParams = GetPlaylistsPlaylistIdQueryParams;
var GetPlaylistsPlaylistIdSecurity = /** @class */ (function (_super) {
    __extends(GetPlaylistsPlaylistIdSecurity, _super);
    function GetPlaylistsPlaylistIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeAuthHeader)
    ], GetPlaylistsPlaylistIdSecurity.prototype, "authHeader", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetPlaylistsPlaylistIdSecurity.prototype, "clientId", void 0);
    return GetPlaylistsPlaylistIdSecurity;
}(utils_1.SpeakeasyBase));
exports.GetPlaylistsPlaylistIdSecurity = GetPlaylistsPlaylistIdSecurity;
var GetPlaylistsPlaylistIdRequest = /** @class */ (function (_super) {
    __extends(GetPlaylistsPlaylistIdRequest, _super);
    function GetPlaylistsPlaylistIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPlaylistsPlaylistIdPathParams)
    ], GetPlaylistsPlaylistIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPlaylistsPlaylistIdQueryParams)
    ], GetPlaylistsPlaylistIdRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetPlaylistsPlaylistIdSecurity)
    ], GetPlaylistsPlaylistIdRequest.prototype, "security", void 0);
    return GetPlaylistsPlaylistIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetPlaylistsPlaylistIdRequest = GetPlaylistsPlaylistIdRequest;
var GetPlaylistsPlaylistIdResponse = /** @class */ (function (_super) {
    __extends(GetPlaylistsPlaylistIdResponse, _super);
    function GetPlaylistsPlaylistIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetPlaylistsPlaylistIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetPlaylistsPlaylistIdResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Playlist)
    ], GetPlaylistsPlaylistIdResponse.prototype, "playlist", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetPlaylistsPlaylistIdResponse.prototype, "statusCode", void 0);
    return GetPlaylistsPlaylistIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetPlaylistsPlaylistIdResponse = GetPlaylistsPlaylistIdResponse;
