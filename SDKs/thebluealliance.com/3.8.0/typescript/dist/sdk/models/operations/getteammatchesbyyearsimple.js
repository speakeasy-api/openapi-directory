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
exports.GetTeamMatchesByYearSimpleResponse = exports.GetTeamMatchesByYearSimpleRequest = exports.GetTeamMatchesByYearSimpleSecurity = exports.GetTeamMatchesByYearSimpleHeaders = exports.GetTeamMatchesByYearSimplePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTeamMatchesByYearSimplePathParams = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSimplePathParams, _super);
    function GetTeamMatchesByYearSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearSimplePathParams.prototype, "teamKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamMatchesByYearSimplePathParams.prototype, "year", void 0);
    return GetTeamMatchesByYearSimplePathParams;
}(utils_1.SpeakeasyBase));
exports.GetTeamMatchesByYearSimplePathParams = GetTeamMatchesByYearSimplePathParams;
var GetTeamMatchesByYearSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSimpleHeaders, _super);
    function GetTeamMatchesByYearSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamMatchesByYearSimpleHeaders;
}(utils_1.SpeakeasyBase));
exports.GetTeamMatchesByYearSimpleHeaders = GetTeamMatchesByYearSimpleHeaders;
var GetTeamMatchesByYearSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSimpleSecurity, _super);
    function GetTeamMatchesByYearSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamMatchesByYearSimpleSecurity.prototype, "apiKey", void 0);
    return GetTeamMatchesByYearSimpleSecurity;
}(utils_1.SpeakeasyBase));
exports.GetTeamMatchesByYearSimpleSecurity = GetTeamMatchesByYearSimpleSecurity;
var GetTeamMatchesByYearSimpleRequest = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSimpleRequest, _super);
    function GetTeamMatchesByYearSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamMatchesByYearSimplePathParams)
    ], GetTeamMatchesByYearSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamMatchesByYearSimpleHeaders)
    ], GetTeamMatchesByYearSimpleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamMatchesByYearSimpleSecurity)
    ], GetTeamMatchesByYearSimpleRequest.prototype, "security", void 0);
    return GetTeamMatchesByYearSimpleRequest;
}(utils_1.SpeakeasyBase));
exports.GetTeamMatchesByYearSimpleRequest = GetTeamMatchesByYearSimpleRequest;
var GetTeamMatchesByYearSimpleResponse = /** @class */ (function (_super) {
    __extends(GetTeamMatchesByYearSimpleResponse, _super);
    function GetTeamMatchesByYearSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTeamMatchesByYearSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetTeamMatchesByYearSimpleResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.MatchSimple }),
        __metadata("design:type", Array)
    ], GetTeamMatchesByYearSimpleResponse.prototype, "matchSimples", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTeamMatchesByYearSimpleResponse.prototype, "statusCode", void 0);
    return GetTeamMatchesByYearSimpleResponse;
}(utils_1.SpeakeasyBase));
exports.GetTeamMatchesByYearSimpleResponse = GetTeamMatchesByYearSimpleResponse;
