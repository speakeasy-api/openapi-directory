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
exports.ReferenceResource = exports.ReferenceResourceEntryRelationships = exports.ReferenceResourceEntryRelationshipsStructureRelationship = exports.ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks = exports.ReferenceResourceEntryRelationshipsReferenceRelationship = exports.ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = exports.ReferenceResourceResourceLinks = void 0;
var utils_1 = require("../../../internal/utils");
var referenceresourceattributes_1 = require("./referenceresourceattributes");
// ReferenceResourceResourceLinks
/**
 * A Resource Links object
**/
var ReferenceResourceResourceLinks = /** @class */ (function (_super) {
    __extends(ReferenceResourceResourceLinks, _super);
    function ReferenceResourceResourceLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], ReferenceResourceResourceLinks.prototype, "self", void 0);
    return ReferenceResourceResourceLinks;
}(utils_1.SpeakeasyBase));
exports.ReferenceResourceResourceLinks = ReferenceResourceResourceLinks;
// ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
var ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = /** @class */ (function (_super) {
    __extends(ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks, _super);
    function ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks.prototype, "self", void 0);
    return ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
}(utils_1.SpeakeasyBase));
exports.ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
// ReferenceResourceEntryRelationshipsReferenceRelationship
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
var ReferenceResourceEntryRelationshipsReferenceRelationship = /** @class */ (function (_super) {
    __extends(ReferenceResourceEntryRelationshipsReferenceRelationship, _super);
    function ReferenceResourceEntryRelationshipsReferenceRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ReferenceResourceEntryRelationshipsReferenceRelationship.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ReferenceResourceEntryRelationshipsReferenceRelationshipRelationshipLinks)
    ], ReferenceResourceEntryRelationshipsReferenceRelationship.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], ReferenceResourceEntryRelationshipsReferenceRelationship.prototype, "meta", void 0);
    return ReferenceResourceEntryRelationshipsReferenceRelationship;
}(utils_1.SpeakeasyBase));
exports.ReferenceResourceEntryRelationshipsReferenceRelationship = ReferenceResourceEntryRelationshipsReferenceRelationship;
// ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
var ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks = /** @class */ (function (_super) {
    __extends(ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks, _super);
    function ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks.prototype, "self", void 0);
    return ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
}(utils_1.SpeakeasyBase));
exports.ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks = ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
// ReferenceResourceEntryRelationshipsStructureRelationship
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
var ReferenceResourceEntryRelationshipsStructureRelationship = /** @class */ (function (_super) {
    __extends(ReferenceResourceEntryRelationshipsStructureRelationship, _super);
    function ReferenceResourceEntryRelationshipsStructureRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ReferenceResourceEntryRelationshipsStructureRelationship.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ReferenceResourceEntryRelationshipsStructureRelationshipRelationshipLinks)
    ], ReferenceResourceEntryRelationshipsStructureRelationship.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], ReferenceResourceEntryRelationshipsStructureRelationship.prototype, "meta", void 0);
    return ReferenceResourceEntryRelationshipsStructureRelationship;
}(utils_1.SpeakeasyBase));
exports.ReferenceResourceEntryRelationshipsStructureRelationship = ReferenceResourceEntryRelationshipsStructureRelationship;
// ReferenceResourceEntryRelationships
/**
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
var ReferenceResourceEntryRelationships = /** @class */ (function (_super) {
    __extends(ReferenceResourceEntryRelationships, _super);
    function ReferenceResourceEntryRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=references" }),
        __metadata("design:type", ReferenceResourceEntryRelationshipsReferenceRelationship)
    ], ReferenceResourceEntryRelationships.prototype, "references", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=structures" }),
        __metadata("design:type", ReferenceResourceEntryRelationshipsStructureRelationship)
    ], ReferenceResourceEntryRelationships.prototype, "structures", void 0);
    return ReferenceResourceEntryRelationships;
}(utils_1.SpeakeasyBase));
exports.ReferenceResourceEntryRelationships = ReferenceResourceEntryRelationships;
// ReferenceResource
/**
 * The `references` entries describe bibliographic references.
 *
 * The following properties are used to provide the bibliographic details:
 *
 * - **address**, **annote**, **booktitle**, **chapter**, **crossref**, **edition**, **howpublished**, **institution**, **journal**, **key**, **month**, **note**, **number**, **organization**, **pages**, **publisher**, **school**, **series**, **title**, **volume**, **year**: meanings of these properties match the [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf), values are strings;
 * - **bib_type**: type of the reference, corresponding to **type** property in the BibTeX specification, value is string;
 * - **authors** and **editors**: lists of *person objects* which are dictionaries with the following keys:
 *     - **name**: Full name of the person, REQUIRED.
 *     - **firstname**, **lastname**: Parts of the person's name, OPTIONAL.
 * - **doi** and **url**: values are strings.
 * - **Requirements/Conventions**:
 *     - **Support**: OPTIONAL support in implementations, i.e., any of the properties MAY be `null`.
 *     - **Query**: Support for queries on any of these properties is OPTIONAL.
 *         If supported, filters MAY support only a subset of comparison operators.
 *     - Every references entry MUST contain at least one of the properties.
**/
var ReferenceResource = /** @class */ (function (_super) {
    __extends(ReferenceResource, _super);
    function ReferenceResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", referenceresourceattributes_1.ReferenceResourceAttributes)
    ], ReferenceResource.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ReferenceResource.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ReferenceResourceResourceLinks)
    ], ReferenceResource.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], ReferenceResource.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", ReferenceResourceEntryRelationships)
    ], ReferenceResource.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ReferenceResource.prototype, "type", void 0);
    return ReferenceResource;
}(utils_1.SpeakeasyBase));
exports.ReferenceResource = ReferenceResource;
