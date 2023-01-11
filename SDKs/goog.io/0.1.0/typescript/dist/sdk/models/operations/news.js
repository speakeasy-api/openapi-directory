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
exports.NewsResponse = exports.NewsRequest = exports.News200ApplicationJson = exports.News200ApplicationJsonFeed = exports.News200ApplicationJsonEntries = exports.NewsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var NewsPathParams = /** @class */ (function (_super) {
    __extends(NewsPathParams, _super);
    function NewsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=query" }),
        __metadata("design:type", String)
    ], NewsPathParams.prototype, "query", void 0);
    return NewsPathParams;
}(utils_1.SpeakeasyBase));
exports.NewsPathParams = NewsPathParams;
var News200ApplicationJsonEntries = /** @class */ (function (_super) {
    __extends(News200ApplicationJsonEntries, _super);
    function News200ApplicationJsonEntries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=guidislink" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "guidislink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "published", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published_parsed" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "publishedParsed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sub_articles" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "subArticles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "summary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=summary_detail" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "summaryDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title_detail" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonEntries.prototype, "titleDetail", void 0);
    return News200ApplicationJsonEntries;
}(utils_1.SpeakeasyBase));
exports.News200ApplicationJsonEntries = News200ApplicationJsonEntries;
var News200ApplicationJsonFeed = /** @class */ (function (_super) {
    __extends(News200ApplicationJsonFeed, _super);
    function News200ApplicationJsonFeed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=generator" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "generator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=generator_detail" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "generatorDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher_detail" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "publisherDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rights" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "rights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rights_detail" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "rightsDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subtitle" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "subtitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subtitle_detail" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "subtitleDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "updated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_parsed" }),
        __metadata("design:type", String)
    ], News200ApplicationJsonFeed.prototype, "updatedParsed", void 0);
    return News200ApplicationJsonFeed;
}(utils_1.SpeakeasyBase));
exports.News200ApplicationJsonFeed = News200ApplicationJsonFeed;
var News200ApplicationJson = /** @class */ (function (_super) {
    __extends(News200ApplicationJson, _super);
    function News200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entries", elemType: News200ApplicationJsonEntries }),
        __metadata("design:type", Array)
    ], News200ApplicationJson.prototype, "entries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feed" }),
        __metadata("design:type", News200ApplicationJsonFeed)
    ], News200ApplicationJson.prototype, "feed", void 0);
    return News200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.News200ApplicationJson = News200ApplicationJson;
var NewsRequest = /** @class */ (function (_super) {
    __extends(NewsRequest, _super);
    function NewsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", NewsPathParams)
    ], NewsRequest.prototype, "pathParams", void 0);
    return NewsRequest;
}(utils_1.SpeakeasyBase));
exports.NewsRequest = NewsRequest;
var NewsResponse = /** @class */ (function (_super) {
    __extends(NewsResponse, _super);
    function NewsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], NewsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.HttpValidationError)
    ], NewsResponse.prototype, "httpValidationError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", News200ApplicationJson)
    ], NewsResponse.prototype, "news200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], NewsResponse.prototype, "statusCode", void 0);
    return NewsResponse;
}(utils_1.SpeakeasyBase));
exports.NewsResponse = NewsResponse;
