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
exports.EntryResource = exports.EntryResourceEntryRelationships = exports.EntryResourceEntryRelationshipsStructureRelationship = exports.EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks = exports.EntryResourceEntryRelationshipsReferenceRelationship = exports.EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = exports.EntryResourceResourceLinks = exports.EntryResourceEntryResourceAttributes = void 0;
var utils_1 = require("../../../internal/utils");
// EntryResourceEntryResourceAttributes
/**
 * Contains key-value pairs representing the entry's properties.
**/
var EntryResourceEntryResourceAttributes = /** @class */ (function (_super) {
    __extends(EntryResourceEntryResourceAttributes, _super);
    function EntryResourceEntryResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=immutable_id" }),
        __metadata("design:type", String)
    ], EntryResourceEntryResourceAttributes.prototype, "immutableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_modified" }),
        __metadata("design:type", Date)
    ], EntryResourceEntryResourceAttributes.prototype, "lastModified", void 0);
    return EntryResourceEntryResourceAttributes;
}(utils_1.SpeakeasyBase));
exports.EntryResourceEntryResourceAttributes = EntryResourceEntryResourceAttributes;
// EntryResourceResourceLinks
/**
 * A Resource Links object
**/
var EntryResourceResourceLinks = /** @class */ (function (_super) {
    __extends(EntryResourceResourceLinks, _super);
    function EntryResourceResourceLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], EntryResourceResourceLinks.prototype, "self", void 0);
    return EntryResourceResourceLinks;
}(utils_1.SpeakeasyBase));
exports.EntryResourceResourceLinks = EntryResourceResourceLinks;
// EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
var EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = /** @class */ (function (_super) {
    __extends(EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks, _super);
    function EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks.prototype, "self", void 0);
    return EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
}(utils_1.SpeakeasyBase));
exports.EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
// EntryResourceEntryRelationshipsReferenceRelationship
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
var EntryResourceEntryRelationshipsReferenceRelationship = /** @class */ (function (_super) {
    __extends(EntryResourceEntryRelationshipsReferenceRelationship, _super);
    function EntryResourceEntryRelationshipsReferenceRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], EntryResourceEntryRelationshipsReferenceRelationship.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", EntryResourceEntryRelationshipsReferenceRelationshipRelationshipLinks)
    ], EntryResourceEntryRelationshipsReferenceRelationship.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], EntryResourceEntryRelationshipsReferenceRelationship.prototype, "meta", void 0);
    return EntryResourceEntryRelationshipsReferenceRelationship;
}(utils_1.SpeakeasyBase));
exports.EntryResourceEntryRelationshipsReferenceRelationship = EntryResourceEntryRelationshipsReferenceRelationship;
// EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
var EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks = /** @class */ (function (_super) {
    __extends(EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks, _super);
    function EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks.prototype, "self", void 0);
    return EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
}(utils_1.SpeakeasyBase));
exports.EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks = EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
// EntryResourceEntryRelationshipsStructureRelationship
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
var EntryResourceEntryRelationshipsStructureRelationship = /** @class */ (function (_super) {
    __extends(EntryResourceEntryRelationshipsStructureRelationship, _super);
    function EntryResourceEntryRelationshipsStructureRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], EntryResourceEntryRelationshipsStructureRelationship.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", EntryResourceEntryRelationshipsStructureRelationshipRelationshipLinks)
    ], EntryResourceEntryRelationshipsStructureRelationship.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], EntryResourceEntryRelationshipsStructureRelationship.prototype, "meta", void 0);
    return EntryResourceEntryRelationshipsStructureRelationship;
}(utils_1.SpeakeasyBase));
exports.EntryResourceEntryRelationshipsStructureRelationship = EntryResourceEntryRelationshipsStructureRelationship;
// EntryResourceEntryRelationships
/**
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
var EntryResourceEntryRelationships = /** @class */ (function (_super) {
    __extends(EntryResourceEntryRelationships, _super);
    function EntryResourceEntryRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=references" }),
        __metadata("design:type", EntryResourceEntryRelationshipsReferenceRelationship)
    ], EntryResourceEntryRelationships.prototype, "references", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=structures" }),
        __metadata("design:type", EntryResourceEntryRelationshipsStructureRelationship)
    ], EntryResourceEntryRelationships.prototype, "structures", void 0);
    return EntryResourceEntryRelationships;
}(utils_1.SpeakeasyBase));
exports.EntryResourceEntryRelationships = EntryResourceEntryRelationships;
// EntryResource
/**
 * The base model for an entry resource.
**/
var EntryResource = /** @class */ (function (_super) {
    __extends(EntryResource, _super);
    function EntryResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", EntryResourceEntryResourceAttributes)
    ], EntryResource.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EntryResource.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", EntryResourceResourceLinks)
    ], EntryResource.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], EntryResource.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", EntryResourceEntryRelationships)
    ], EntryResource.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EntryResource.prototype, "type", void 0);
    return EntryResource;
}(utils_1.SpeakeasyBase));
exports.EntryResource = EntryResource;
