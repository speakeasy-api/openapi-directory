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
exports.EndpointSkipUsersPlaybackToNextTrackResponse = exports.EndpointSkipUsersPlaybackToNextTrackRequest = exports.EndpointSkipUsersPlaybackToNextTrackSecurity = exports.EndpointSkipUsersPlaybackToNextTrackHeaders = exports.EndpointSkipUsersPlaybackToNextTrackQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointSkipUsersPlaybackToNextTrackQueryParams = /** @class */ (function (_super) {
    __extends(EndpointSkipUsersPlaybackToNextTrackQueryParams, _super);
    function EndpointSkipUsersPlaybackToNextTrackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], EndpointSkipUsersPlaybackToNextTrackQueryParams.prototype, "deviceId", void 0);
    return EndpointSkipUsersPlaybackToNextTrackQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointSkipUsersPlaybackToNextTrackQueryParams = EndpointSkipUsersPlaybackToNextTrackQueryParams;
var EndpointSkipUsersPlaybackToNextTrackHeaders = /** @class */ (function (_super) {
    __extends(EndpointSkipUsersPlaybackToNextTrackHeaders, _super);
    function EndpointSkipUsersPlaybackToNextTrackHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointSkipUsersPlaybackToNextTrackHeaders.prototype, "authorization", void 0);
    return EndpointSkipUsersPlaybackToNextTrackHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointSkipUsersPlaybackToNextTrackHeaders = EndpointSkipUsersPlaybackToNextTrackHeaders;
var EndpointSkipUsersPlaybackToNextTrackSecurity = /** @class */ (function (_super) {
    __extends(EndpointSkipUsersPlaybackToNextTrackSecurity, _super);
    function EndpointSkipUsersPlaybackToNextTrackSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointSkipUsersPlaybackToNextTrackSecurity.prototype, "spotifyAuth", void 0);
    return EndpointSkipUsersPlaybackToNextTrackSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointSkipUsersPlaybackToNextTrackSecurity = EndpointSkipUsersPlaybackToNextTrackSecurity;
var EndpointSkipUsersPlaybackToNextTrackRequest = /** @class */ (function (_super) {
    __extends(EndpointSkipUsersPlaybackToNextTrackRequest, _super);
    function EndpointSkipUsersPlaybackToNextTrackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointSkipUsersPlaybackToNextTrackQueryParams)
    ], EndpointSkipUsersPlaybackToNextTrackRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointSkipUsersPlaybackToNextTrackHeaders)
    ], EndpointSkipUsersPlaybackToNextTrackRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointSkipUsersPlaybackToNextTrackSecurity)
    ], EndpointSkipUsersPlaybackToNextTrackRequest.prototype, "security", void 0);
    return EndpointSkipUsersPlaybackToNextTrackRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointSkipUsersPlaybackToNextTrackRequest = EndpointSkipUsersPlaybackToNextTrackRequest;
var EndpointSkipUsersPlaybackToNextTrackResponse = /** @class */ (function (_super) {
    __extends(EndpointSkipUsersPlaybackToNextTrackResponse, _super);
    function EndpointSkipUsersPlaybackToNextTrackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointSkipUsersPlaybackToNextTrackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointSkipUsersPlaybackToNextTrackResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointSkipUsersPlaybackToNextTrackResponse.prototype, "statusCode", void 0);
    return EndpointSkipUsersPlaybackToNextTrackResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointSkipUsersPlaybackToNextTrackResponse = EndpointSkipUsersPlaybackToNextTrackResponse;
