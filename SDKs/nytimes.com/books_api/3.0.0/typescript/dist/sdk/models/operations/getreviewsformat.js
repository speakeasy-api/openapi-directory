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
exports.GetReviewsFormatResponse = exports.GetReviewsFormatRequest = exports.GetReviewsFormat200ApplicationJson = exports.GetReviewsFormat200ApplicationJsonResults = exports.GetReviewsFormatSecurity = exports.GetReviewsFormatQueryParams = exports.GetReviewsFormatPathParams = exports.GetReviewsFormatFormatEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetReviewsFormatFormatEnum;
(function (GetReviewsFormatFormatEnum) {
    GetReviewsFormatFormatEnum["Json"] = "json";
    GetReviewsFormatFormatEnum["Jsonp"] = "jsonp";
})(GetReviewsFormatFormatEnum = exports.GetReviewsFormatFormatEnum || (exports.GetReviewsFormatFormatEnum = {}));
var GetReviewsFormatPathParams = /** @class */ (function (_super) {
    __extends(GetReviewsFormatPathParams, _super);
    function GetReviewsFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=format" }),
        __metadata("design:type", String)
    ], GetReviewsFormatPathParams.prototype, "format", void 0);
    return GetReviewsFormatPathParams;
}(utils_1.SpeakeasyBase));
exports.GetReviewsFormatPathParams = GetReviewsFormatPathParams;
var GetReviewsFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetReviewsFormatQueryParams, _super);
    function GetReviewsFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api-key" }),
        __metadata("design:type", String)
    ], GetReviewsFormatQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=author" }),
        __metadata("design:type", String)
    ], GetReviewsFormatQueryParams.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=isbn" }),
        __metadata("design:type", Number)
    ], GetReviewsFormatQueryParams.prototype, "isbn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=title" }),
        __metadata("design:type", String)
    ], GetReviewsFormatQueryParams.prototype, "title", void 0);
    return GetReviewsFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetReviewsFormatQueryParams = GetReviewsFormatQueryParams;
var GetReviewsFormatSecurity = /** @class */ (function (_super) {
    __extends(GetReviewsFormatSecurity, _super);
    function GetReviewsFormatSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetReviewsFormatSecurity.prototype, "apiKey", void 0);
    return GetReviewsFormatSecurity;
}(utils_1.SpeakeasyBase));
exports.GetReviewsFormatSecurity = GetReviewsFormatSecurity;
var GetReviewsFormat200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetReviewsFormat200ApplicationJsonResults, _super);
    function GetReviewsFormat200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=book_author" }),
        __metadata("design:type", String)
    ], GetReviewsFormat200ApplicationJsonResults.prototype, "bookAuthor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=book_title" }),
        __metadata("design:type", String)
    ], GetReviewsFormat200ApplicationJsonResults.prototype, "bookTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=byline" }),
        __metadata("design:type", String)
    ], GetReviewsFormat200ApplicationJsonResults.prototype, "byline", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isbn13" }),
        __metadata("design:type", Array)
    ], GetReviewsFormat200ApplicationJsonResults.prototype, "isbn13", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publication_dt" }),
        __metadata("design:type", String)
    ], GetReviewsFormat200ApplicationJsonResults.prototype, "publicationDt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], GetReviewsFormat200ApplicationJsonResults.prototype, "summary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetReviewsFormat200ApplicationJsonResults.prototype, "url", void 0);
    return GetReviewsFormat200ApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.GetReviewsFormat200ApplicationJsonResults = GetReviewsFormat200ApplicationJsonResults;
var GetReviewsFormat200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetReviewsFormat200ApplicationJson, _super);
    function GetReviewsFormat200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetReviewsFormat200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetReviewsFormat200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: GetReviewsFormat200ApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetReviewsFormat200ApplicationJson.prototype, "results", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetReviewsFormat200ApplicationJson.prototype, "status", void 0);
    return GetReviewsFormat200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetReviewsFormat200ApplicationJson = GetReviewsFormat200ApplicationJson;
var GetReviewsFormatRequest = /** @class */ (function (_super) {
    __extends(GetReviewsFormatRequest, _super);
    function GetReviewsFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReviewsFormatPathParams)
    ], GetReviewsFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReviewsFormatQueryParams)
    ], GetReviewsFormatRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReviewsFormatSecurity)
    ], GetReviewsFormatRequest.prototype, "security", void 0);
    return GetReviewsFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetReviewsFormatRequest = GetReviewsFormatRequest;
var GetReviewsFormatResponse = /** @class */ (function (_super) {
    __extends(GetReviewsFormatResponse, _super);
    function GetReviewsFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetReviewsFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReviewsFormat200ApplicationJson)
    ], GetReviewsFormatResponse.prototype, "getReviewsFormat200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetReviewsFormatResponse.prototype, "statusCode", void 0);
    return GetReviewsFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetReviewsFormatResponse = GetReviewsFormatResponse;
