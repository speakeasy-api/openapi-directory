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
exports.GetEventMatchesResponse = exports.GetEventMatchesRequest = exports.GetEventMatchesSecurity = exports.GetEventMatchesHeaders = exports.GetEventMatchesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetEventMatchesPathParams = /** @class */ (function (_super) {
    __extends(GetEventMatchesPathParams, _super);
    function GetEventMatchesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventMatchesPathParams.prototype, "eventKey", void 0);
    return GetEventMatchesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetEventMatchesPathParams = GetEventMatchesPathParams;
var GetEventMatchesHeaders = /** @class */ (function (_super) {
    __extends(GetEventMatchesHeaders, _super);
    function GetEventMatchesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventMatchesHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventMatchesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetEventMatchesHeaders = GetEventMatchesHeaders;
var GetEventMatchesSecurity = /** @class */ (function (_super) {
    __extends(GetEventMatchesSecurity, _super);
    function GetEventMatchesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventMatchesSecurity.prototype, "apiKey", void 0);
    return GetEventMatchesSecurity;
}(utils_1.SpeakeasyBase));
exports.GetEventMatchesSecurity = GetEventMatchesSecurity;
var GetEventMatchesRequest = /** @class */ (function (_super) {
    __extends(GetEventMatchesRequest, _super);
    function GetEventMatchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEventMatchesPathParams)
    ], GetEventMatchesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEventMatchesHeaders)
    ], GetEventMatchesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEventMatchesSecurity)
    ], GetEventMatchesRequest.prototype, "security", void 0);
    return GetEventMatchesRequest;
}(utils_1.SpeakeasyBase));
exports.GetEventMatchesRequest = GetEventMatchesRequest;
var GetEventMatchesResponse = /** @class */ (function (_super) {
    __extends(GetEventMatchesResponse, _super);
    function GetEventMatchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEventMatchesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetEventMatchesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Match }),
        __metadata("design:type", Array)
    ], GetEventMatchesResponse.prototype, "matches", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEventMatchesResponse.prototype, "statusCode", void 0);
    return GetEventMatchesResponse;
}(utils_1.SpeakeasyBase));
exports.GetEventMatchesResponse = GetEventMatchesResponse;
