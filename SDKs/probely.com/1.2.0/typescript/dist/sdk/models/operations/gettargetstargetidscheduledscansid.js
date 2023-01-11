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
exports.GetTargetsTargetIdScheduledscansIdResponse = exports.GetTargetsTargetIdScheduledscansIdRequest = exports.GetTargetsTargetIdScheduledscansId404ApplicationJson = exports.GetTargetsTargetIdScheduledscansId401ApplicationJson = exports.GetTargetsTargetIdScheduledscansIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTargetsTargetIdScheduledscansIdPathParams = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscansIdPathParams, _super);
    function GetTargetsTargetIdScheduledscansIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscansIdPathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=target_id" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscansIdPathParams.prototype, "targetId", void 0);
    return GetTargetsTargetIdScheduledscansIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscansIdPathParams = GetTargetsTargetIdScheduledscansIdPathParams;
var GetTargetsTargetIdScheduledscansId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscansId401ApplicationJson, _super);
    function GetTargetsTargetIdScheduledscansId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscansId401ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScheduledscansId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscansId401ApplicationJson = GetTargetsTargetIdScheduledscansId401ApplicationJson;
var GetTargetsTargetIdScheduledscansId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscansId404ApplicationJson, _super);
    function GetTargetsTargetIdScheduledscansId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscansId404ApplicationJson.prototype, "detail", void 0);
    return GetTargetsTargetIdScheduledscansId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscansId404ApplicationJson = GetTargetsTargetIdScheduledscansId404ApplicationJson;
var GetTargetsTargetIdScheduledscansIdRequest = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscansIdRequest, _super);
    function GetTargetsTargetIdScheduledscansIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScheduledscansIdPathParams)
    ], GetTargetsTargetIdScheduledscansIdRequest.prototype, "pathParams", void 0);
    return GetTargetsTargetIdScheduledscansIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscansIdRequest = GetTargetsTargetIdScheduledscansIdRequest;
var GetTargetsTargetIdScheduledscansIdResponse = /** @class */ (function (_super) {
    __extends(GetTargetsTargetIdScheduledscansIdResponse, _super);
    function GetTargetsTargetIdScheduledscansIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTargetsTargetIdScheduledscansIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Scheduled)
    ], GetTargetsTargetIdScheduledscansIdResponse.prototype, "scheduled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTargetsTargetIdScheduledscansIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScheduledscansId401ApplicationJson)
    ], GetTargetsTargetIdScheduledscansIdResponse.prototype, "getTargetsTargetIdScheduledscansId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTargetsTargetIdScheduledscansId404ApplicationJson)
    ], GetTargetsTargetIdScheduledscansIdResponse.prototype, "getTargetsTargetIdScheduledscansId404ApplicationJSONObject", void 0);
    return GetTargetsTargetIdScheduledscansIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetTargetsTargetIdScheduledscansIdResponse = GetTargetsTargetIdScheduledscansIdResponse;
