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
exports.DocumentInSearch = void 0;
var utils_1 = require("../../../internal/utils");
var documentlinks_1 = require("./documentlinks");
var manualfile_1 = require("./manualfile");
var DocumentInSearch = /** @class */ (function (_super) {
    __extends(DocumentInSearch, _super);
    function DocumentInSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_type" }),
        __metadata("design:type", String)
    ], DocumentInSearch.prototype, "fileType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_custom_package" }),
        __metadata("design:type", Boolean)
    ], DocumentInSearch.prototype, "hasCustomPackage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DocumentInSearch.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", documentlinks_1.DocumentLinks)
    ], DocumentInSearch.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manual_files", elemType: manualfile_1.ManualFile }),
        __metadata("design:type", Array)
    ], DocumentInSearch.prototype, "manualFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DocumentInSearch.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project_id" }),
        __metadata("design:type", Number)
    ], DocumentInSearch.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=review_in_manual_editor" }),
        __metadata("design:type", Boolean)
    ], DocumentInSearch.prototype, "reviewInManualEditor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheme" }),
        __metadata("design:type", Object)
    ], DocumentInSearch.prototype, "scheme", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_result_reason" }),
        __metadata("design:type", String)
    ], DocumentInSearch.prototype, "searchResultReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_score" }),
        __metadata("design:type", Number)
    ], DocumentInSearch.prototype, "searchScore", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_language" }),
        __metadata("design:type", String)
    ], DocumentInSearch.prototype, "sourceLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subject" }),
        __metadata("design:type", String)
    ], DocumentInSearch.prototype, "subject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=target_languages" }),
        __metadata("design:type", Array)
    ], DocumentInSearch.prototype, "targetLanguages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uploaded_at" }),
        __metadata("design:type", Number)
    ], DocumentInSearch.prototype, "uploadedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=word_count" }),
        __metadata("design:type", Number)
    ], DocumentInSearch.prototype, "wordCount", void 0);
    return DocumentInSearch;
}(utils_1.SpeakeasyBase));
exports.DocumentInSearch = DocumentInSearch;
