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
exports.GetEventMatchesSimpleResponse = exports.GetEventMatchesSimpleRequest = exports.GetEventMatchesSimpleSecurity = exports.GetEventMatchesSimpleHeaders = exports.GetEventMatchesSimplePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetEventMatchesSimplePathParams = /** @class */ (function (_super) {
    __extends(GetEventMatchesSimplePathParams, _super);
    function GetEventMatchesSimplePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventMatchesSimplePathParams.prototype, "eventKey", void 0);
    return GetEventMatchesSimplePathParams;
}(utils_1.SpeakeasyBase));
exports.GetEventMatchesSimplePathParams = GetEventMatchesSimplePathParams;
var GetEventMatchesSimpleHeaders = /** @class */ (function (_super) {
    __extends(GetEventMatchesSimpleHeaders, _super);
    function GetEventMatchesSimpleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventMatchesSimpleHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventMatchesSimpleHeaders;
}(utils_1.SpeakeasyBase));
exports.GetEventMatchesSimpleHeaders = GetEventMatchesSimpleHeaders;
var GetEventMatchesSimpleSecurity = /** @class */ (function (_super) {
    __extends(GetEventMatchesSimpleSecurity, _super);
    function GetEventMatchesSimpleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventMatchesSimpleSecurity.prototype, "apiKey", void 0);
    return GetEventMatchesSimpleSecurity;
}(utils_1.SpeakeasyBase));
exports.GetEventMatchesSimpleSecurity = GetEventMatchesSimpleSecurity;
var GetEventMatchesSimpleRequest = /** @class */ (function (_super) {
    __extends(GetEventMatchesSimpleRequest, _super);
    function GetEventMatchesSimpleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEventMatchesSimplePathParams)
    ], GetEventMatchesSimpleRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEventMatchesSimpleHeaders)
    ], GetEventMatchesSimpleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEventMatchesSimpleSecurity)
    ], GetEventMatchesSimpleRequest.prototype, "security", void 0);
    return GetEventMatchesSimpleRequest;
}(utils_1.SpeakeasyBase));
exports.GetEventMatchesSimpleRequest = GetEventMatchesSimpleRequest;
var GetEventMatchesSimpleResponse = /** @class */ (function (_super) {
    __extends(GetEventMatchesSimpleResponse, _super);
    function GetEventMatchesSimpleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEventMatchesSimpleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetEventMatchesSimpleResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.MatchSimple }),
        __metadata("design:type", Array)
    ], GetEventMatchesSimpleResponse.prototype, "matchSimples", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEventMatchesSimpleResponse.prototype, "statusCode", void 0);
    return GetEventMatchesSimpleResponse;
}(utils_1.SpeakeasyBase));
exports.GetEventMatchesSimpleResponse = GetEventMatchesSimpleResponse;
