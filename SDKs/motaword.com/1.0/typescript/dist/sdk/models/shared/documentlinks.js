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
exports.DocumentLinks = void 0;
var utils_1 = require("../../../internal/utils");
var href_1 = require("./href");
var DocumentLinks = /** @class */ (function (_super) {
    __extends(DocumentLinks, _super);
    function DocumentLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=admins", elemType: href_1.Href }),
        __metadata("design:type", Object)
    ], DocumentLinks.prototype, "admins", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download" }),
        __metadata("design:type", href_1.Href)
    ], DocumentLinks.prototype, "download", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=editors", elemType: href_1.Href }),
        __metadata("design:type", Object)
    ], DocumentLinks.prototype, "editors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preview-box" }),
        __metadata("design:type", href_1.Href)
    ], DocumentLinks.prototype, "previewBox", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preview-pdf" }),
        __metadata("design:type", href_1.Href)
    ], DocumentLinks.prototype, "previewPdf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preview-pdf-viewer" }),
        __metadata("design:type", href_1.Href)
    ], DocumentLinks.prototype, "previewPdfViewer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project" }),
        __metadata("design:type", href_1.Href)
    ], DocumentLinks.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", href_1.Href)
    ], DocumentLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbnail" }),
        __metadata("design:type", href_1.Href)
    ], DocumentLinks.prototype, "thumbnail", void 0);
    return DocumentLinks;
}(utils_1.SpeakeasyBase));
exports.DocumentLinks = DocumentLinks;
