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
exports.GetMatchTimeseriesResponse = exports.GetMatchTimeseriesRequest = exports.GetMatchTimeseriesSecurity = exports.GetMatchTimeseriesHeaders = exports.GetMatchTimeseriesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetMatchTimeseriesPathParams = /** @class */ (function (_super) {
    __extends(GetMatchTimeseriesPathParams, _super);
    function GetMatchTimeseriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=match_key" }),
        __metadata("design:type", String)
    ], GetMatchTimeseriesPathParams.prototype, "matchKey", void 0);
    return GetMatchTimeseriesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetMatchTimeseriesPathParams = GetMatchTimeseriesPathParams;
var GetMatchTimeseriesHeaders = /** @class */ (function (_super) {
    __extends(GetMatchTimeseriesHeaders, _super);
    function GetMatchTimeseriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetMatchTimeseriesHeaders.prototype, "ifModifiedSince", void 0);
    return GetMatchTimeseriesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetMatchTimeseriesHeaders = GetMatchTimeseriesHeaders;
var GetMatchTimeseriesSecurity = /** @class */ (function (_super) {
    __extends(GetMatchTimeseriesSecurity, _super);
    function GetMatchTimeseriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetMatchTimeseriesSecurity.prototype, "apiKey", void 0);
    return GetMatchTimeseriesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetMatchTimeseriesSecurity = GetMatchTimeseriesSecurity;
var GetMatchTimeseriesRequest = /** @class */ (function (_super) {
    __extends(GetMatchTimeseriesRequest, _super);
    function GetMatchTimeseriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMatchTimeseriesPathParams)
    ], GetMatchTimeseriesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMatchTimeseriesHeaders)
    ], GetMatchTimeseriesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetMatchTimeseriesSecurity)
    ], GetMatchTimeseriesRequest.prototype, "security", void 0);
    return GetMatchTimeseriesRequest;
}(utils_1.SpeakeasyBase));
exports.GetMatchTimeseriesRequest = GetMatchTimeseriesRequest;
var GetMatchTimeseriesResponse = /** @class */ (function (_super) {
    __extends(GetMatchTimeseriesResponse, _super);
    function GetMatchTimeseriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetMatchTimeseriesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetMatchTimeseriesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetMatchTimeseriesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], GetMatchTimeseriesResponse.prototype, "getMatchTimeseries200ApplicationJSONObjects", void 0);
    return GetMatchTimeseriesResponse;
}(utils_1.SpeakeasyBase));
exports.GetMatchTimeseriesResponse = GetMatchTimeseriesResponse;
