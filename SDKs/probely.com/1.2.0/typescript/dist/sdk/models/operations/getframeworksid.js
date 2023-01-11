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
exports.GetFrameworksIdResponse = exports.GetFrameworksIdRequest = exports.GetFrameworksId404ApplicationJson = exports.GetFrameworksId401ApplicationJson = exports.GetFrameworksIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetFrameworksIdPathParams = /** @class */ (function (_super) {
    __extends(GetFrameworksIdPathParams, _super);
    function GetFrameworksIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetFrameworksIdPathParams.prototype, "id", void 0);
    return GetFrameworksIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetFrameworksIdPathParams = GetFrameworksIdPathParams;
var GetFrameworksId401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFrameworksId401ApplicationJson, _super);
    function GetFrameworksId401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetFrameworksId401ApplicationJson.prototype, "detail", void 0);
    return GetFrameworksId401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetFrameworksId401ApplicationJson = GetFrameworksId401ApplicationJson;
var GetFrameworksId404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFrameworksId404ApplicationJson, _super);
    function GetFrameworksId404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetFrameworksId404ApplicationJson.prototype, "detail", void 0);
    return GetFrameworksId404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetFrameworksId404ApplicationJson = GetFrameworksId404ApplicationJson;
var GetFrameworksIdRequest = /** @class */ (function (_super) {
    __extends(GetFrameworksIdRequest, _super);
    function GetFrameworksIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFrameworksIdPathParams)
    ], GetFrameworksIdRequest.prototype, "pathParams", void 0);
    return GetFrameworksIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetFrameworksIdRequest = GetFrameworksIdRequest;
var GetFrameworksIdResponse = /** @class */ (function (_super) {
    __extends(GetFrameworksIdResponse, _super);
    function GetFrameworksIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFrameworksIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Framework)
    ], GetFrameworksIdResponse.prototype, "framework", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFrameworksIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFrameworksId401ApplicationJson)
    ], GetFrameworksIdResponse.prototype, "getFrameworksId401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFrameworksId404ApplicationJson)
    ], GetFrameworksIdResponse.prototype, "getFrameworksId404ApplicationJSONObject", void 0);
    return GetFrameworksIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetFrameworksIdResponse = GetFrameworksIdResponse;
