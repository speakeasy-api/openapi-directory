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
exports.GetTeamEventsByYearKeysResponse = exports.GetTeamEventsByYearKeysRequest = exports.GetTeamEventsByYearKeysSecurity = exports.GetTeamEventsByYearKeysHeaders = exports.GetTeamEventsByYearKeysPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTeamEventsByYearKeysPathParams = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearKeysPathParams, _super);
    function GetTeamEventsByYearKeysPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamEventsByYearKeysPathParams.prototype, "teamKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamEventsByYearKeysPathParams.prototype, "year", void 0);
    return GetTeamEventsByYearKeysPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTeamEventsByYearKeysPathParams = GetTeamEventsByYearKeysPathParams;
var GetTeamEventsByYearKeysHeaders = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearKeysHeaders, _super);
    function GetTeamEventsByYearKeysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamEventsByYearKeysHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamEventsByYearKeysHeaders;
}(utils_1.SpeakeasyBase));
exports.GetTeamEventsByYearKeysHeaders = GetTeamEventsByYearKeysHeaders;
var GetTeamEventsByYearKeysSecurity = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearKeysSecurity, _super);
    function GetTeamEventsByYearKeysSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamEventsByYearKeysSecurity.prototype, "apiKey", void 0);
    return GetTeamEventsByYearKeysSecurity;
}(utils_1.SpeakeasyBase));
exports.GetTeamEventsByYearKeysSecurity = GetTeamEventsByYearKeysSecurity;
var GetTeamEventsByYearKeysRequest = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearKeysRequest, _super);
    function GetTeamEventsByYearKeysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamEventsByYearKeysPathParams)
    ], GetTeamEventsByYearKeysRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamEventsByYearKeysHeaders)
    ], GetTeamEventsByYearKeysRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamEventsByYearKeysSecurity)
    ], GetTeamEventsByYearKeysRequest.prototype, "security", void 0);
    return GetTeamEventsByYearKeysRequest;
}(utils_1.SpeakeasyBase));
exports.GetTeamEventsByYearKeysRequest = GetTeamEventsByYearKeysRequest;
var GetTeamEventsByYearKeysResponse = /** @class */ (function (_super) {
    __extends(GetTeamEventsByYearKeysResponse, _super);
    function GetTeamEventsByYearKeysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTeamEventsByYearKeysResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTeamEventsByYearKeysResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTeamEventsByYearKeysResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], GetTeamEventsByYearKeysResponse.prototype, "getTeamEventsByYearKeys200ApplicationJSONStrings", void 0);
    return GetTeamEventsByYearKeysResponse;
}(utils_1.SpeakeasyBase));
exports.GetTeamEventsByYearKeysResponse = GetTeamEventsByYearKeysResponse;
