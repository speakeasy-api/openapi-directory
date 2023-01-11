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
exports.GetYearMonthJsonResponse = exports.GetYearMonthJsonRequest = exports.GetYearMonthJson200ApplicationJson = exports.GetYearMonthJson200ApplicationJsonResponse = exports.GetYearMonthJson200ApplicationJsonResponseMeta = exports.GetYearMonthJsonPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetYearMonthJsonPathParams = /** @class */ (function (_super) {
    __extends(GetYearMonthJsonPathParams, _super);
    function GetYearMonthJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=month" }),
        __metadata("design:type", Number)
    ], GetYearMonthJsonPathParams.prototype, "month", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetYearMonthJsonPathParams.prototype, "year", void 0);
    return GetYearMonthJsonPathParams;
}(utils_1.SpeakeasyBase));
exports.GetYearMonthJsonPathParams = GetYearMonthJsonPathParams;
var GetYearMonthJson200ApplicationJsonResponseMeta = /** @class */ (function (_super) {
    __extends(GetYearMonthJson200ApplicationJsonResponseMeta, _super);
    function GetYearMonthJson200ApplicationJsonResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hits" }),
        __metadata("design:type", Number)
    ], GetYearMonthJson200ApplicationJsonResponseMeta.prototype, "hits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], GetYearMonthJson200ApplicationJsonResponseMeta.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], GetYearMonthJson200ApplicationJsonResponseMeta.prototype, "time", void 0);
    return GetYearMonthJson200ApplicationJsonResponseMeta;
}(utils_1.SpeakeasyBase));
exports.GetYearMonthJson200ApplicationJsonResponseMeta = GetYearMonthJson200ApplicationJsonResponseMeta;
var GetYearMonthJson200ApplicationJsonResponse = /** @class */ (function (_super) {
    __extends(GetYearMonthJson200ApplicationJsonResponse, _super);
    function GetYearMonthJson200ApplicationJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=docs", elemType: shared.Doc }),
        __metadata("design:type", Array)
    ], GetYearMonthJson200ApplicationJsonResponse.prototype, "docs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", GetYearMonthJson200ApplicationJsonResponseMeta)
    ], GetYearMonthJson200ApplicationJsonResponse.prototype, "meta", void 0);
    return GetYearMonthJson200ApplicationJsonResponse;
}(utils_1.SpeakeasyBase));
exports.GetYearMonthJson200ApplicationJsonResponse = GetYearMonthJson200ApplicationJsonResponse;
var GetYearMonthJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetYearMonthJson200ApplicationJson, _super);
    function GetYearMonthJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response" }),
        __metadata("design:type", GetYearMonthJson200ApplicationJsonResponse)
    ], GetYearMonthJson200ApplicationJson.prototype, "response", void 0);
    return GetYearMonthJson200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetYearMonthJson200ApplicationJson = GetYearMonthJson200ApplicationJson;
var GetYearMonthJsonRequest = /** @class */ (function (_super) {
    __extends(GetYearMonthJsonRequest, _super);
    function GetYearMonthJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetYearMonthJsonPathParams)
    ], GetYearMonthJsonRequest.prototype, "pathParams", void 0);
    return GetYearMonthJsonRequest;
}(utils_1.SpeakeasyBase));
exports.GetYearMonthJsonRequest = GetYearMonthJsonRequest;
var GetYearMonthJsonResponse = /** @class */ (function (_super) {
    __extends(GetYearMonthJsonResponse, _super);
    function GetYearMonthJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetYearMonthJsonResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetYearMonthJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetYearMonthJson200ApplicationJson)
    ], GetYearMonthJsonResponse.prototype, "getYearMonthJSON200ApplicationJSONObject", void 0);
    return GetYearMonthJsonResponse;
}(utils_1.SpeakeasyBase));
exports.GetYearMonthJsonResponse = GetYearMonthJsonResponse;
