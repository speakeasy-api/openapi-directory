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
exports.GistsGetResponse = exports.GistsGetRequest = exports.GistsGet403ApplicationJson = exports.GistsGet403ApplicationJsonBlock = exports.GistsGetPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GistsGetPathParams = /** @class */ (function (_super) {
    __extends(GistsGetPathParams, _super);
    function GistsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=gist_id" }),
        __metadata("design:type", String)
    ], GistsGetPathParams.prototype, "gistId", void 0);
    return GistsGetPathParams;
}(utils_1.SpeakeasyBase));
exports.GistsGetPathParams = GistsGetPathParams;
var GistsGet403ApplicationJsonBlock = /** @class */ (function (_super) {
    __extends(GistsGet403ApplicationJsonBlock, _super);
    function GistsGet403ApplicationJsonBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GistsGet403ApplicationJsonBlock.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], GistsGet403ApplicationJsonBlock.prototype, "htmlUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], GistsGet403ApplicationJsonBlock.prototype, "reason", void 0);
    return GistsGet403ApplicationJsonBlock;
}(utils_1.SpeakeasyBase));
exports.GistsGet403ApplicationJsonBlock = GistsGet403ApplicationJsonBlock;
var GistsGet403ApplicationJson = /** @class */ (function (_super) {
    __extends(GistsGet403ApplicationJson, _super);
    function GistsGet403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=block" }),
        __metadata("design:type", GistsGet403ApplicationJsonBlock)
    ], GistsGet403ApplicationJson.prototype, "block", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], GistsGet403ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GistsGet403ApplicationJson.prototype, "message", void 0);
    return GistsGet403ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GistsGet403ApplicationJson = GistsGet403ApplicationJson;
var GistsGetRequest = /** @class */ (function (_super) {
    __extends(GistsGetRequest, _super);
    function GistsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GistsGetPathParams)
    ], GistsGetRequest.prototype, "pathParams", void 0);
    return GistsGetRequest;
}(utils_1.SpeakeasyBase));
exports.GistsGetRequest = GistsGetRequest;
var GistsGetResponse = /** @class */ (function (_super) {
    __extends(GistsGetResponse, _super);
    function GistsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GistsGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GistsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], GistsGetResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GistSimple)
    ], GistsGetResponse.prototype, "gistSimple", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GistsGet403ApplicationJson)
    ], GistsGetResponse.prototype, "gistsGet403ApplicationJSONObject", void 0);
    return GistsGetResponse;
}(utils_1.SpeakeasyBase));
exports.GistsGetResponse = GistsGetResponse;
