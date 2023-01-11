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
exports.EndpointSetVolumeForUsersPlaybackResponse = exports.EndpointSetVolumeForUsersPlaybackRequest = exports.EndpointSetVolumeForUsersPlaybackSecurity = exports.EndpointSetVolumeForUsersPlaybackHeaders = exports.EndpointSetVolumeForUsersPlaybackQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointSetVolumeForUsersPlaybackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointSetVolumeForUsersPlaybackQueryParams, _super);
    function EndpointSetVolumeForUsersPlaybackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointSetVolumeForUsersPlaybackQueryParams.prototype, "deviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=volume_percent" }),
        __metadata("design:type", Number)
    ], EndpointSetVolumeForUsersPlaybackQueryParams.prototype, "volumePercent", void 0);
    return EndpointSetVolumeForUsersPlaybackQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointSetVolumeForUsersPlaybackQueryParams = EndpointSetVolumeForUsersPlaybackQueryParams;
var EndpointSetVolumeForUsersPlaybackHeaders = /** @class */ (function (_super) {
    __extends(EndpointSetVolumeForUsersPlaybackHeaders, _super);
    function EndpointSetVolumeForUsersPlaybackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointSetVolumeForUsersPlaybackHeaders.prototype, "authorization", void 0);
    return EndpointSetVolumeForUsersPlaybackHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointSetVolumeForUsersPlaybackHeaders = EndpointSetVolumeForUsersPlaybackHeaders;
var EndpointSetVolumeForUsersPlaybackSecurity = /** @class */ (function (_super) {
    __extends(EndpointSetVolumeForUsersPlaybackSecurity, _super);
    function EndpointSetVolumeForUsersPlaybackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointSetVolumeForUsersPlaybackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointSetVolumeForUsersPlaybackSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointSetVolumeForUsersPlaybackSecurity = EndpointSetVolumeForUsersPlaybackSecurity;
var EndpointSetVolumeForUsersPlaybackRequest = /** @class */ (function (_super) {
    __extends(EndpointSetVolumeForUsersPlaybackRequest, _super);
    function EndpointSetVolumeForUsersPlaybackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointSetVolumeForUsersPlaybackQueryParams)
    ], EndpointSetVolumeForUsersPlaybackRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointSetVolumeForUsersPlaybackHeaders)
    ], EndpointSetVolumeForUsersPlaybackRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointSetVolumeForUsersPlaybackSecurity)
    ], EndpointSetVolumeForUsersPlaybackRequest.prototype, "security", void 0);
    return EndpointSetVolumeForUsersPlaybackRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointSetVolumeForUsersPlaybackRequest = EndpointSetVolumeForUsersPlaybackRequest;
var EndpointSetVolumeForUsersPlaybackResponse = /** @class */ (function (_super) {
    __extends(EndpointSetVolumeForUsersPlaybackResponse, _super);
    function EndpointSetVolumeForUsersPlaybackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointSetVolumeForUsersPlaybackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointSetVolumeForUsersPlaybackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointSetVolumeForUsersPlaybackResponse.prototype, "statusCode", void 0);
    return EndpointSetVolumeForUsersPlaybackResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointSetVolumeForUsersPlaybackResponse = EndpointSetVolumeForUsersPlaybackResponse;
