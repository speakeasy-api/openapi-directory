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
exports.GetCaptionsResponse = exports.GetCaptionsRequest = exports.GetCaptions409ApplicationProblemPlusJson = exports.GetCaptions406ApplicationProblemPlusJson = exports.GetCaptions405ApplicationProblemPlusJson = exports.GetCaptions404ApplicationProblemPlusJson = exports.GetCaptionsHeaders = exports.GetCaptionsQueryParams = exports.GetCaptionsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetCaptionsPathParams = /** @class */ (function (_super) {
    __extends(GetCaptionsPathParams, _super);
    function GetCaptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetCaptionsPathParams.prototype, "id", void 0);
    return GetCaptionsPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCaptionsPathParams = GetCaptionsPathParams;
var GetCaptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetCaptionsQueryParams, _super);
    function GetCaptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=speaker_channel" }),
        __metadata("design:type", Number)
    ], GetCaptionsQueryParams.prototype, "speakerChannel", void 0);
    return GetCaptionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCaptionsQueryParams = GetCaptionsQueryParams;
var GetCaptionsHeaders = /** @class */ (function (_super) {
    __extends(GetCaptionsHeaders, _super);
    function GetCaptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], GetCaptionsHeaders.prototype, "accept", void 0);
    return GetCaptionsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetCaptionsHeaders = GetCaptionsHeaders;
// GetCaptions404ApplicationProblemPlusJson
/**
 * Problem details object returned on errors
**/
var GetCaptions404ApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(GetCaptions404ApplicationProblemPlusJson, _super);
    function GetCaptions404ApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetCaptions404ApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCaptions404ApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCaptions404ApplicationProblemPlusJson.prototype, "type", void 0);
    return GetCaptions404ApplicationProblemPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetCaptions404ApplicationProblemPlusJson = GetCaptions404ApplicationProblemPlusJson;
// GetCaptions405ApplicationProblemPlusJson
/**
 * Problem details object returned on errors
**/
var GetCaptions405ApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(GetCaptions405ApplicationProblemPlusJson, _super);
    function GetCaptions405ApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetCaptions405ApplicationProblemPlusJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetCaptions405ApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCaptions405ApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCaptions405ApplicationProblemPlusJson.prototype, "type", void 0);
    return GetCaptions405ApplicationProblemPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetCaptions405ApplicationProblemPlusJson = GetCaptions405ApplicationProblemPlusJson;
// GetCaptions406ApplicationProblemPlusJson
/**
 * Problem details object returned on errors
**/
var GetCaptions406ApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(GetCaptions406ApplicationProblemPlusJson, _super);
    function GetCaptions406ApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], GetCaptions406ApplicationProblemPlusJson.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_value" }),
        __metadata("design:type", String)
    ], GetCaptions406ApplicationProblemPlusJson.prototype, "currentValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetCaptions406ApplicationProblemPlusJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetCaptions406ApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCaptions406ApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCaptions406ApplicationProblemPlusJson.prototype, "type", void 0);
    return GetCaptions406ApplicationProblemPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetCaptions406ApplicationProblemPlusJson = GetCaptions406ApplicationProblemPlusJson;
// GetCaptions409ApplicationProblemPlusJson
/**
 * Problem details object returned on errors
**/
var GetCaptions409ApplicationProblemPlusJson = /** @class */ (function (_super) {
    __extends(GetCaptions409ApplicationProblemPlusJson, _super);
    function GetCaptions409ApplicationProblemPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_values" }),
        __metadata("design:type", Array)
    ], GetCaptions409ApplicationProblemPlusJson.prototype, "allowedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_value" }),
        __metadata("design:type", String)
    ], GetCaptions409ApplicationProblemPlusJson.prototype, "currentValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetCaptions409ApplicationProblemPlusJson.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetCaptions409ApplicationProblemPlusJson.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCaptions409ApplicationProblemPlusJson.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCaptions409ApplicationProblemPlusJson.prototype, "type", void 0);
    return GetCaptions409ApplicationProblemPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetCaptions409ApplicationProblemPlusJson = GetCaptions409ApplicationProblemPlusJson;
var GetCaptionsRequest = /** @class */ (function (_super) {
    __extends(GetCaptionsRequest, _super);
    function GetCaptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCaptionsPathParams)
    ], GetCaptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCaptionsQueryParams)
    ], GetCaptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCaptionsHeaders)
    ], GetCaptionsRequest.prototype, "headers", void 0);
    return GetCaptionsRequest;
}(utils_1.SpeakeasyBase));
exports.GetCaptionsRequest = GetCaptionsRequest;
var GetCaptionsResponse = /** @class */ (function (_super) {
    __extends(GetCaptionsResponse, _super);
    function GetCaptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCaptionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCaptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetCaptionsResponse.prototype, "getCaptions401ApplicationProblemPlusJsonAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCaptions404ApplicationProblemPlusJson)
    ], GetCaptionsResponse.prototype, "getCaptions404ApplicationProblemPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCaptions405ApplicationProblemPlusJson)
    ], GetCaptionsResponse.prototype, "getCaptions405ApplicationProblemPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCaptions406ApplicationProblemPlusJson)
    ], GetCaptionsResponse.prototype, "getCaptions406ApplicationProblemPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCaptions409ApplicationProblemPlusJson)
    ], GetCaptionsResponse.prototype, "getCaptions409ApplicationProblemPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCaptionsResponse.prototype, "statusCode", void 0);
    return GetCaptionsResponse;
}(utils_1.SpeakeasyBase));
exports.GetCaptionsResponse = GetCaptionsResponse;
