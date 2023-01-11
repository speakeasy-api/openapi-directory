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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogArticle = exports.BlogArticleAnnouncementTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var blogarticlelinks_1 = require("./blogarticlelinks");
var BlogArticleAnnouncementTypeEnum;
(function (BlogArticleAnnouncementTypeEnum) {
    BlogArticleAnnouncementTypeEnum["Article"] = "article";
    BlogArticleAnnouncementTypeEnum["Case"] = "case";
    BlogArticleAnnouncementTypeEnum["FamousTranslators"] = "famous-translators";
    BlogArticleAnnouncementTypeEnum["Sales"] = "sales";
})(BlogArticleAnnouncementTypeEnum = exports.BlogArticleAnnouncementTypeEnum || (exports.BlogArticleAnnouncementTypeEnum = {}));
var BlogArticle = /** @class */ (function (_super) {
    __extends(BlogArticle, _super);
    function BlogArticle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=announcement_type" }),
        __metadata("design:type", String)
    ], BlogArticle.prototype, "announcementType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], BlogArticle.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], BlogArticle.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], BlogArticle.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=excerpt" }),
        __metadata("design:type", String)
    ], BlogArticle.prototype, "excerpt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], BlogArticle.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], BlogArticle.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", blogarticlelinks_1.BlogArticleLinks)
    ], BlogArticle.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], BlogArticle.prototype, "slug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], BlogArticle.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topic" }),
        __metadata("design:type", String)
    ], BlogArticle.prototype, "topic", void 0);
    return BlogArticle;
}(utils_1.SpeakeasyBase));
exports.BlogArticle = BlogArticle;
