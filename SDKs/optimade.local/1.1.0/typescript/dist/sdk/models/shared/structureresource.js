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
exports.StructureResource = exports.StructureResourceEntryRelationships = exports.StructureResourceEntryRelationshipsStructureRelationship = exports.StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks = exports.StructureResourceEntryRelationshipsReferenceRelationship = exports.StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = exports.StructureResourceResourceLinks = void 0;
var utils_1 = require("../../../internal/utils");
var structureresourceattributes_1 = require("./structureresourceattributes");
// StructureResourceResourceLinks
/**
 * A Resource Links object
**/
var StructureResourceResourceLinks = /** @class */ (function (_super) {
    __extends(StructureResourceResourceLinks, _super);
    function StructureResourceResourceLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], StructureResourceResourceLinks.prototype, "self", void 0);
    return StructureResourceResourceLinks;
}(utils_1.SpeakeasyBase));
exports.StructureResourceResourceLinks = StructureResourceResourceLinks;
// StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
var StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = /** @class */ (function (_super) {
    __extends(StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks, _super);
    function StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks.prototype, "self", void 0);
    return StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
}(utils_1.SpeakeasyBase));
exports.StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks = StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks;
// StructureResourceEntryRelationshipsReferenceRelationship
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
var StructureResourceEntryRelationshipsReferenceRelationship = /** @class */ (function (_super) {
    __extends(StructureResourceEntryRelationshipsReferenceRelationship, _super);
    function StructureResourceEntryRelationshipsReferenceRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], StructureResourceEntryRelationshipsReferenceRelationship.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", StructureResourceEntryRelationshipsReferenceRelationshipRelationshipLinks)
    ], StructureResourceEntryRelationshipsReferenceRelationship.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], StructureResourceEntryRelationshipsReferenceRelationship.prototype, "meta", void 0);
    return StructureResourceEntryRelationshipsReferenceRelationship;
}(utils_1.SpeakeasyBase));
exports.StructureResourceEntryRelationshipsReferenceRelationship = StructureResourceEntryRelationshipsReferenceRelationship;
// StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks
/**
 * A resource object **MAY** contain references to other resource objects ("relationships").
 * Relationships may be to-one or to-many.
 * Relationships can be specified by including a member in a resource's links object.
**/
var StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks = /** @class */ (function (_super) {
    __extends(StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks, _super);
    function StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks.prototype, "self", void 0);
    return StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
}(utils_1.SpeakeasyBase));
exports.StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks = StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks;
// StructureResourceEntryRelationshipsStructureRelationship
/**
 * Similar to normal JSON API relationship, but with addition of OPTIONAL meta field for a resource
**/
var StructureResourceEntryRelationshipsStructureRelationship = /** @class */ (function (_super) {
    __extends(StructureResourceEntryRelationshipsStructureRelationship, _super);
    function StructureResourceEntryRelationshipsStructureRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], StructureResourceEntryRelationshipsStructureRelationship.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", StructureResourceEntryRelationshipsStructureRelationshipRelationshipLinks)
    ], StructureResourceEntryRelationshipsStructureRelationship.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], StructureResourceEntryRelationshipsStructureRelationship.prototype, "meta", void 0);
    return StructureResourceEntryRelationshipsStructureRelationship;
}(utils_1.SpeakeasyBase));
exports.StructureResourceEntryRelationshipsStructureRelationship = StructureResourceEntryRelationshipsStructureRelationship;
// StructureResourceEntryRelationships
/**
 * This model wraps the JSON API Relationships to include type-specific top level keys.
**/
var StructureResourceEntryRelationships = /** @class */ (function (_super) {
    __extends(StructureResourceEntryRelationships, _super);
    function StructureResourceEntryRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=references" }),
        __metadata("design:type", StructureResourceEntryRelationshipsReferenceRelationship)
    ], StructureResourceEntryRelationships.prototype, "references", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=structures" }),
        __metadata("design:type", StructureResourceEntryRelationshipsStructureRelationship)
    ], StructureResourceEntryRelationships.prototype, "structures", void 0);
    return StructureResourceEntryRelationships;
}(utils_1.SpeakeasyBase));
exports.StructureResourceEntryRelationships = StructureResourceEntryRelationships;
// StructureResource
/**
 * Representing a structure.
**/
var StructureResource = /** @class */ (function (_super) {
    __extends(StructureResource, _super);
    function StructureResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", structureresourceattributes_1.StructureResourceAttributes)
    ], StructureResource.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], StructureResource.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", StructureResourceResourceLinks)
    ], StructureResource.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], StructureResource.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", StructureResourceEntryRelationships)
    ], StructureResource.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], StructureResource.prototype, "type", void 0);
    return StructureResource;
}(utils_1.SpeakeasyBase));
exports.StructureResource = StructureResource;
