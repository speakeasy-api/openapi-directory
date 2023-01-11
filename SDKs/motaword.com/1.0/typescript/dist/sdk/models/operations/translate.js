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
exports.TranslateResponse = exports.TranslateRequest = exports.Translate200ApplicationJson = exports.TranslateRequestBody = exports.TranslatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TranslatePathParams = /** @class */ (function (_super) {
    __extends(TranslatePathParams, _super);
    function TranslatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], TranslatePathParams.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=targetLanguage" }),
        __metadata("design:type", String)
    ], TranslatePathParams.prototype, "targetLanguage", void 0);
    return TranslatePathParams;
}(utils_1.SpeakeasyBase));
exports.TranslatePathParams = TranslatePathParams;
var TranslateRequestBody = /** @class */ (function (_super) {
    __extends(TranslateRequestBody, _super);
    function TranslateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contents" }),
        __metadata("design:type", Array)
    ], TranslateRequestBody.prototype, "contents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documents", elemType: shared.FileAsData }),
        __metadata("design:type", Array)
    ], TranslateRequestBody.prototype, "documents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], TranslateRequestBody.prototype, "meta", void 0);
    return TranslateRequestBody;
}(utils_1.SpeakeasyBase));
exports.TranslateRequestBody = TranslateRequestBody;
var Translate200ApplicationJson = /** @class */ (function (_super) {
    __extends(Translate200ApplicationJson, _super);
    function Translate200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results" }),
        __metadata("design:type", Object)
    ], Translate200ApplicationJson.prototype, "results", void 0);
    return Translate200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Translate200ApplicationJson = Translate200ApplicationJson;
var TranslateRequest = /** @class */ (function (_super) {
    __extends(TranslateRequest, _super);
    function TranslateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TranslatePathParams)
    ], TranslateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TranslateRequestBody)
    ], TranslateRequest.prototype, "request", void 0);
    return TranslateRequest;
}(utils_1.SpeakeasyBase));
exports.TranslateRequest = TranslateRequest;
var TranslateResponse = /** @class */ (function (_super) {
    __extends(TranslateResponse, _super);
    function TranslateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TranslateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TranslateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Translate200ApplicationJson)
    ], TranslateResponse.prototype, "translate200ApplicationJSONObject", void 0);
    return TranslateResponse;
}(utils_1.SpeakeasyBase));
exports.TranslateResponse = TranslateResponse;
