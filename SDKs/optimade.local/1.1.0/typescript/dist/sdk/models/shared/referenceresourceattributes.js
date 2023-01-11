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
exports.ReferenceResourceAttributes = void 0;
var utils_1 = require("../../../internal/utils");
var person_1 = require("./person");
// ReferenceResourceAttributes
/**
 * Model that stores the attributes of a reference.
 *
 * Many properties match the meaning described in the
 * [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).
**/
var ReferenceResourceAttributes = /** @class */ (function (_super) {
    __extends(ReferenceResourceAttributes, _super);
    function ReferenceResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annote" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "annote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authors", elemType: person_1.Person }),
        __metadata("design:type", Array)
    ], ReferenceResourceAttributes.prototype, "authors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bib_type" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "bibType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=booktitle" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "booktitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chapter" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "chapter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=crossref" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "crossref", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doi" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "doi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=edition" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "edition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=editors", elemType: person_1.Person }),
        __metadata("design:type", Array)
    ], ReferenceResourceAttributes.prototype, "editors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=howpublished" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "howpublished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=immutable_id" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "immutableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=institution" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "institution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=journal" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "journal", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_modified" }),
        __metadata("design:type", Date)
    ], ReferenceResourceAttributes.prototype, "lastModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=month" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "month", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "note", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "organization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "pages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=school" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "school", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=series" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "series", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volume" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "volume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], ReferenceResourceAttributes.prototype, "year", void 0);
    return ReferenceResourceAttributes;
}(utils_1.SpeakeasyBase));
exports.ReferenceResourceAttributes = ReferenceResourceAttributes;
