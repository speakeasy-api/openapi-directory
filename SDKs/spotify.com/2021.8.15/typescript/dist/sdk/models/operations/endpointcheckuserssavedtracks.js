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
exports.EndpointCheckUsersSavedTracksResponse = exports.EndpointCheckUsersSavedTracksRequest = exports.EndpointCheckUsersSavedTracksSecurity = exports.EndpointCheckUsersSavedTracksHeaders = exports.EndpointCheckUsersSavedTracksQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EndpointCheckUsersSavedTracksQueryParams = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedTracksQueryParams, _super);
    function EndpointCheckUsersSavedTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedTracksQueryParams.prototype, "ids", void 0);
    return EndpointCheckUsersSavedTracksQueryParams;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckUsersSavedTracksQueryParams = EndpointCheckUsersSavedTracksQueryParams;
var EndpointCheckUsersSavedTracksHeaders = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedTracksHeaders, _super);
    function EndpointCheckUsersSavedTracksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedTracksHeaders.prototype, "authorization", void 0);
    return EndpointCheckUsersSavedTracksHeaders;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckUsersSavedTracksHeaders = EndpointCheckUsersSavedTracksHeaders;
var EndpointCheckUsersSavedTracksSecurity = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedTracksSecurity, _super);
    function EndpointCheckUsersSavedTracksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSpotifyAuth)
    ], EndpointCheckUsersSavedTracksSecurity.prototype, "spotifyAuth", void 0);
    return EndpointCheckUsersSavedTracksSecurity;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckUsersSavedTracksSecurity = EndpointCheckUsersSavedTracksSecurity;
var EndpointCheckUsersSavedTracksRequest = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedTracksRequest, _super);
    function EndpointCheckUsersSavedTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointCheckUsersSavedTracksQueryParams)
    ], EndpointCheckUsersSavedTracksRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointCheckUsersSavedTracksHeaders)
    ], EndpointCheckUsersSavedTracksRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EndpointCheckUsersSavedTracksSecurity)
    ], EndpointCheckUsersSavedTracksRequest.prototype, "security", void 0);
    return EndpointCheckUsersSavedTracksRequest;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckUsersSavedTracksRequest = EndpointCheckUsersSavedTracksRequest;
var EndpointCheckUsersSavedTracksResponse = /** @class */ (function (_super) {
    __extends(EndpointCheckUsersSavedTracksResponse, _super);
    function EndpointCheckUsersSavedTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EndpointCheckUsersSavedTracksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponseObject)
    ], EndpointCheckUsersSavedTracksResponse.prototype, "errorResponseObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EndpointCheckUsersSavedTracksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], EndpointCheckUsersSavedTracksResponse.prototype, "endpointCheckUsersSavedTracks200ApplicationJSONBooleans", void 0);
    return EndpointCheckUsersSavedTracksResponse;
}(utils_1.SpeakeasyBase));
exports.EndpointCheckUsersSavedTracksResponse = EndpointCheckUsersSavedTracksResponse;
