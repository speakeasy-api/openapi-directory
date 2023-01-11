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
exports.GetEventsByYearKeysResponse = exports.GetEventsByYearKeysRequest = exports.GetEventsByYearKeysSecurity = exports.GetEventsByYearKeysHeaders = exports.GetEventsByYearKeysPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetEventsByYearKeysPathParams = /** @class */ (function (_super) {
    __extends(GetEventsByYearKeysPathParams, _super);
    function GetEventsByYearKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetEventsByYearKeysPathParams.prototype, "year", void 0);
    return GetEventsByYearKeysPathParams;
}(utils_1.SpeakeasyBase));
exports.GetEventsByYearKeysPathParams = GetEventsByYearKeysPathParams;
var GetEventsByYearKeysHeaders = /** @class */ (function (_super) {
    __extends(GetEventsByYearKeysHeaders, _super);
    function GetEventsByYearKeysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventsByYearKeysHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventsByYearKeysHeaders;
}(utils_1.SpeakeasyBase));
exports.GetEventsByYearKeysHeaders = GetEventsByYearKeysHeaders;
var GetEventsByYearKeysSecurity = /** @class */ (function (_super) {
    __extends(GetEventsByYearKeysSecurity, _super);
    function GetEventsByYearKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventsByYearKeysSecurity.prototype, "apiKey", void 0);
    return GetEventsByYearKeysSecurity;
}(utils_1.SpeakeasyBase));
exports.GetEventsByYearKeysSecurity = GetEventsByYearKeysSecurity;
var GetEventsByYearKeysRequest = /** @class */ (function (_super) {
    __extends(GetEventsByYearKeysRequest, _super);
    function GetEventsByYearKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEventsByYearKeysPathParams)
    ], GetEventsByYearKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEventsByYearKeysHeaders)
    ], GetEventsByYearKeysRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEventsByYearKeysSecurity)
    ], GetEventsByYearKeysRequest.prototype, "security", void 0);
    return GetEventsByYearKeysRequest;
}(utils_1.SpeakeasyBase));
exports.GetEventsByYearKeysRequest = GetEventsByYearKeysRequest;
var GetEventsByYearKeysResponse = /** @class */ (function (_super) {
    __extends(GetEventsByYearKeysResponse, _super);
    function GetEventsByYearKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEventsByYearKeysResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetEventsByYearKeysResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEventsByYearKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], GetEventsByYearKeysResponse.prototype, "getEventsByYearKeys200ApplicationJSONStrings", void 0);
    return GetEventsByYearKeysResponse;
}(utils_1.SpeakeasyBase));
exports.GetEventsByYearKeysResponse = GetEventsByYearKeysResponse;
