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
exports.Annotation = exports.AnnotationLayerSummary = exports.AnnotationCurrentVersionRanges = exports.AnnotationClientVersionRanges = void 0;
var utils_1 = require("../../../internal/utils");
var booksannotationsrange_1 = require("./booksannotationsrange");
// AnnotationClientVersionRanges
/**
 * Selection ranges sent from the client.
**/
var AnnotationClientVersionRanges = /** @class */ (function (_super) {
    __extends(AnnotationClientVersionRanges, _super);
    function AnnotationClientVersionRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cfiRange" }),
        __metadata("design:type", booksannotationsrange_1.BooksAnnotationsRange)
    ], AnnotationClientVersionRanges.prototype, "cfiRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentVersion" }),
        __metadata("design:type", String)
    ], AnnotationClientVersionRanges.prototype, "contentVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gbImageRange" }),
        __metadata("design:type", booksannotationsrange_1.BooksAnnotationsRange)
    ], AnnotationClientVersionRanges.prototype, "gbImageRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gbTextRange" }),
        __metadata("design:type", booksannotationsrange_1.BooksAnnotationsRange)
    ], AnnotationClientVersionRanges.prototype, "gbTextRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageCfiRange" }),
        __metadata("design:type", booksannotationsrange_1.BooksAnnotationsRange)
    ], AnnotationClientVersionRanges.prototype, "imageCfiRange", void 0);
    return AnnotationClientVersionRanges;
}(utils_1.SpeakeasyBase));
exports.AnnotationClientVersionRanges = AnnotationClientVersionRanges;
// AnnotationCurrentVersionRanges
/**
 * Selection ranges for the most recent content version.
**/
var AnnotationCurrentVersionRanges = /** @class */ (function (_super) {
    __extends(AnnotationCurrentVersionRanges, _super);
    function AnnotationCurrentVersionRanges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cfiRange" }),
        __metadata("design:type", booksannotationsrange_1.BooksAnnotationsRange)
    ], AnnotationCurrentVersionRanges.prototype, "cfiRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentVersion" }),
        __metadata("design:type", String)
    ], AnnotationCurrentVersionRanges.prototype, "contentVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gbImageRange" }),
        __metadata("design:type", booksannotationsrange_1.BooksAnnotationsRange)
    ], AnnotationCurrentVersionRanges.prototype, "gbImageRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gbTextRange" }),
        __metadata("design:type", booksannotationsrange_1.BooksAnnotationsRange)
    ], AnnotationCurrentVersionRanges.prototype, "gbTextRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageCfiRange" }),
        __metadata("design:type", booksannotationsrange_1.BooksAnnotationsRange)
    ], AnnotationCurrentVersionRanges.prototype, "imageCfiRange", void 0);
    return AnnotationCurrentVersionRanges;
}(utils_1.SpeakeasyBase));
exports.AnnotationCurrentVersionRanges = AnnotationCurrentVersionRanges;
var AnnotationLayerSummary = /** @class */ (function (_super) {
    __extends(AnnotationLayerSummary, _super);
    function AnnotationLayerSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedCharacterCount" }),
        __metadata("design:type", Number)
    ], AnnotationLayerSummary.prototype, "allowedCharacterCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitType" }),
        __metadata("design:type", String)
    ], AnnotationLayerSummary.prototype, "limitType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remainingCharacterCount" }),
        __metadata("design:type", Number)
    ], AnnotationLayerSummary.prototype, "remainingCharacterCount", void 0);
    return AnnotationLayerSummary;
}(utils_1.SpeakeasyBase));
exports.AnnotationLayerSummary = AnnotationLayerSummary;
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    function Annotation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=afterSelectedText" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "afterSelectedText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beforeSelectedText" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "beforeSelectedText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientVersionRanges" }),
        __metadata("design:type", AnnotationClientVersionRanges)
    ], Annotation.prototype, "clientVersionRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentVersionRanges" }),
        __metadata("design:type", AnnotationCurrentVersionRanges)
    ], Annotation.prototype, "currentVersionRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Annotation.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=highlightStyle" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "highlightStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=layerId" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "layerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=layerSummary" }),
        __metadata("design:type", AnnotationLayerSummary)
    ], Annotation.prototype, "layerSummary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageIds" }),
        __metadata("design:type", Array)
    ], Annotation.prototype, "pageIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selectedText" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "selectedText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "updated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volumeId" }),
        __metadata("design:type", String)
    ], Annotation.prototype, "volumeId", void 0);
    return Annotation;
}(utils_1.SpeakeasyBase));
exports.Annotation = Annotation;
