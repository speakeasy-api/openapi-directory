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
exports.GetTracksTrackIdStreamsResponse = exports.GetTracksTrackIdStreamsRequest = exports.GetTracksTrackIdStreamsSecurity = exports.GetTracksTrackIdStreamsQueryParams = exports.GetTracksTrackIdStreamsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTracksTrackIdStreamsPathParams = /** @class */ (function (_super) {
    __extends(GetTracksTrackIdStreamsPathParams, _super);
    function GetTracksTrackIdStreamsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=track_id" }),
        __metadata("design:type", Number)
    ], GetTracksTrackIdStreamsPathParams.prototype, "trackId", void 0);
    return GetTracksTrackIdStreamsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTracksTrackIdStreamsPathParams = GetTracksTrackIdStreamsPathParams;
var GetTracksTrackIdStreamsQueryParams = /** @class */ (function (_super) {
    __extends(GetTracksTrackIdStreamsQueryParams, _super);
    function GetTracksTrackIdStreamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=secret_token" }),
        __metadata("design:type", String)
    ], GetTracksTrackIdStreamsQueryParams.prototype, "secretToken", void 0);
    return GetTracksTrackIdStreamsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTracksTrackIdStreamsQueryParams = GetTracksTrackIdStreamsQueryParams;
var GetTracksTrackIdStreamsSecurity = /** @class */ (function (_super) {
    __extends(GetTracksTrackIdStreamsSecurity, _super);
    function GetTracksTrackIdStreamsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeClientId)
    ], GetTracksTrackIdStreamsSecurity.prototype, "clientId", void 0);
    return GetTracksTrackIdStreamsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetTracksTrackIdStreamsSecurity = GetTracksTrackIdStreamsSecurity;
var GetTracksTrackIdStreamsRequest = /** @class */ (function (_super) {
    __extends(GetTracksTrackIdStreamsRequest, _super);
    function GetTracksTrackIdStreamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTracksTrackIdStreamsPathParams)
    ], GetTracksTrackIdStreamsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTracksTrackIdStreamsQueryParams)
    ], GetTracksTrackIdStreamsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTracksTrackIdStreamsSecurity)
    ], GetTracksTrackIdStreamsRequest.prototype, "security", void 0);
    return GetTracksTrackIdStreamsRequest;
}(utils_1.SpeakeasyBase));
exports.GetTracksTrackIdStreamsRequest = GetTracksTrackIdStreamsRequest;
var GetTracksTrackIdStreamsResponse = /** @class */ (function (_super) {
    __extends(GetTracksTrackIdStreamsResponse, _super);
    function GetTracksTrackIdStreamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTracksTrackIdStreamsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetTracksTrackIdStreamsResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTracksTrackIdStreamsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Streams)
    ], GetTracksTrackIdStreamsResponse.prototype, "streams", void 0);
    return GetTracksTrackIdStreamsResponse;
}(utils_1.SpeakeasyBase));
exports.GetTracksTrackIdStreamsResponse = GetTracksTrackIdStreamsResponse;
