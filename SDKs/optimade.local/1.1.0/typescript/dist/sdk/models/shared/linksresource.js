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
exports.LinksResource = exports.LinksResourceEntryRelationships = exports.LinksResourceEntryRelationshipsStructureRelationship = exports.LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks = exports.LinksResourceEntryRelationshipsReferenceRelationship = exports.LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = exports.LinksResourceResourceLinks = exports.LinksResourceLinksResourceAttributes = void 0;
var utils_1 = require("../../../internal/utils");
// LinksResourceLinksResourceAttributes
/**
 * Links endpoint resource object attributes
**/
var LinksResourceLinksResourceAttributes = /** @class */ (function (_super) {
    __extends(LinksResourceLinksResourceAttributes, _super);
    function LinksResourceLinksResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aggregate" }),
        __metadata("design:type", Object)
    ], LinksResourceLinksResourceAttributes.prototype, "aggregate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=base_url" }),
        __metadata("design:type", Object)
    ], LinksResourceLinksResourceAttributes.prototype, "baseUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LinksResourceLinksResourceAttributes.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], LinksResourceLinksResourceAttributes.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link_type" }),
        __metadata("design:type", Object)
    ], LinksResourceLinksResourceAttributes.prototype, "linkType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LinksResourceLinksResourceAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=no_aggregate_reason" }),
        __metadata("design:type", String)
    ], LinksResourceLinksResourceAttributes.prototype, "noAggregateReason", void 0);
    return LinksResourceLinksResourceAttributes;
}(utils_1.SpeakeasyBase));
exports.LinksResourceLinksResourceAttributes = LinksResourceLinksResourceAttributes;
// LinksResourceResourceLinks
/**
 * A Resource Links object
**/
var LinksResourceResourceLinks = /** @class */ (function (_super) {
    __extends(LinksResourceResourceLinks, _super);
    function LinksResourceResourceLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], LinksResourceResourceLinks.prototype, "self", void 0);
    return LinksResourceResourceLinks;
}(utils_1.SpeakeasyBase));
exports.LinksResourceResourceLinks = LinksResourceResourceLinks;
// LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
var LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = /** @class */ (function (_super) {
    __extends(LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks, _super);
    function LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks.prototype, "self", void 0);
    return LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
}(utils_1.SpeakeasyBase));
exports.LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
// LinksResourceEntryRelationshipsReferenceRelationship
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
var LinksResourceEntryRelationshipsReferenceRelationship = /** @class */ (function (_super) {
    __extends(LinksResourceEntryRelationshipsReferenceRelationship, _super);
    function LinksResourceEntryRelationshipsReferenceRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], LinksResourceEntryRelationshipsReferenceRelationship.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", LinksResourceEntryRelationshipsReferenceRelationshipRelationshipLinks)
    ], LinksResourceEntryRelationshipsReferenceRelationship.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], LinksResourceEntryRelationshipsReferenceRelationship.prototype, "meta", void 0);
    return LinksResourceEntryRelationshipsReferenceRelationship;
}(utils_1.SpeakeasyBase));
exports.LinksResourceEntryRelationshipsReferenceRelationship = LinksResourceEntryRelationshipsReferenceRelationship;
// LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
var LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks = /** @class */ (function (_super) {
    __extends(LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks, _super);
    function LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks.prototype, "self", void 0);
    return LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
}(utils_1.SpeakeasyBase));
exports.LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks = LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
// LinksResourceEntryRelationshipsStructureRelationship
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
var LinksResourceEntryRelationshipsStructureRelationship = /** @class */ (function (_super) {
    __extends(LinksResourceEntryRelationshipsStructureRelationship, _super);
    function LinksResourceEntryRelationshipsStructureRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], LinksResourceEntryRelationshipsStructureRelationship.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", LinksResourceEntryRelationshipsStructureRelationshipRelationshipLinks)
    ], LinksResourceEntryRelationshipsStructureRelationship.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], LinksResourceEntryRelationshipsStructureRelationship.prototype, "meta", void 0);
    return LinksResourceEntryRelationshipsStructureRelationship;
}(utils_1.SpeakeasyBase));
exports.LinksResourceEntryRelationshipsStructureRelationship = LinksResourceEntryRelationshipsStructureRelationship;
// LinksResourceEntryRelationships
/**
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
var LinksResourceEntryRelationships = /** @class */ (function (_super) {
    __extends(LinksResourceEntryRelationships, _super);
    function LinksResourceEntryRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=references" }),
        __metadata("design:type", LinksResourceEntryRelationshipsReferenceRelationship)
    ], LinksResourceEntryRelationships.prototype, "references", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=structures" }),
        __metadata("design:type", LinksResourceEntryRelationshipsStructureRelationship)
    ], LinksResourceEntryRelationships.prototype, "structures", void 0);
    return LinksResourceEntryRelationships;
}(utils_1.SpeakeasyBase));
exports.LinksResourceEntryRelationships = LinksResourceEntryRelationships;
// LinksResource
/**
 * A Links endpoint resource object
**/
var LinksResource = /** @class */ (function (_super) {
    __extends(LinksResource, _super);
    function LinksResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", LinksResourceLinksResourceAttributes)
    ], LinksResource.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LinksResource.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", LinksResourceResourceLinks)
    ], LinksResource.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], LinksResource.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", LinksResourceEntryRelationships)
    ], LinksResource.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], LinksResource.prototype, "type", void 0);
    return LinksResource;
}(utils_1.SpeakeasyBase));
exports.LinksResource = LinksResource;
