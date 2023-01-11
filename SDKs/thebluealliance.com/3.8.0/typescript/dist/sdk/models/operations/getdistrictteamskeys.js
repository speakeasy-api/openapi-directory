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
exports.GetDistrictTeamsKeysResponse = exports.GetDistrictTeamsKeysRequest = exports.GetDistrictTeamsKeysSecurity = exports.GetDistrictTeamsKeysHeaders = exports.GetDistrictTeamsKeysPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDistrictTeamsKeysPathParams = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsKeysPathParams, _super);
    function GetDistrictTeamsKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=district_key" }),
        __metadata("design:type", String)
    ], GetDistrictTeamsKeysPathParams.prototype, "districtKey", void 0);
    return GetDistrictTeamsKeysPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDistrictTeamsKeysPathParams = GetDistrictTeamsKeysPathParams;
var GetDistrictTeamsKeysHeaders = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsKeysHeaders, _super);
    function GetDistrictTeamsKeysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetDistrictTeamsKeysHeaders.prototype, "ifModifiedSince", void 0);
    return GetDistrictTeamsKeysHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDistrictTeamsKeysHeaders = GetDistrictTeamsKeysHeaders;
var GetDistrictTeamsKeysSecurity = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsKeysSecurity, _super);
    function GetDistrictTeamsKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetDistrictTeamsKeysSecurity.prototype, "apiKey", void 0);
    return GetDistrictTeamsKeysSecurity;
}(utils_1.SpeakeasyBase));
exports.GetDistrictTeamsKeysSecurity = GetDistrictTeamsKeysSecurity;
var GetDistrictTeamsKeysRequest = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsKeysRequest, _super);
    function GetDistrictTeamsKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDistrictTeamsKeysPathParams)
    ], GetDistrictTeamsKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDistrictTeamsKeysHeaders)
    ], GetDistrictTeamsKeysRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDistrictTeamsKeysSecurity)
    ], GetDistrictTeamsKeysRequest.prototype, "security", void 0);
    return GetDistrictTeamsKeysRequest;
}(utils_1.SpeakeasyBase));
exports.GetDistrictTeamsKeysRequest = GetDistrictTeamsKeysRequest;
var GetDistrictTeamsKeysResponse = /** @class */ (function (_super) {
    __extends(GetDistrictTeamsKeysResponse, _super);
    function GetDistrictTeamsKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDistrictTeamsKeysResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDistrictTeamsKeysResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDistrictTeamsKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], GetDistrictTeamsKeysResponse.prototype, "getDistrictTeamsKeys200ApplicationJSONStrings", void 0);
    return GetDistrictTeamsKeysResponse;
}(utils_1.SpeakeasyBase));
exports.GetDistrictTeamsKeysResponse = GetDistrictTeamsKeysResponse;
