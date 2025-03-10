"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.SchemaResponsePatchResponse = exports.SchemaResponsePatchSchemaResponses = exports.SchemaResponsePatchSchemaResponsesAttributes = exports.SchemaResponsePatchRequest = exports.SchemaResponsePatchSchemaResponsesInput = exports.SchemaResponsePatchSchemaResponsesRelationships = exports.SchemaResponsePatchSchemaResponsesLinks = exports.SchemaResponsePatchSchemaResponsesAttributesInput = exports.SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * A string that represents Schema Response state. `initial` is the state of a Schema Response on a newly registered Registration, to edit a Schema Response you must create a Schema Response Action that triggers a new submission.
 */
var SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum;
(function (SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum) {
    SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum["Initial"] = "initial";
    SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum["InProgress"] = "in_progress";
    SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum["Approved"] = "approved";
    SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum["PendingModeration"] = "pending_moderation";
})(SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum = exports.SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum || (exports.SchemaResponsePatchSchemaResponsesAttributesReviewsStateEnum = {}));
/**
 * The properties of the Schema Response.
 */
var SchemaResponsePatchSchemaResponsesAttributesInput = /** @class */ (function (_super) {
    __extends(SchemaResponsePatchSchemaResponsesAttributesInput, _super);
    function SchemaResponsePatchSchemaResponsesAttributesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "date_created" }),
        __metadata("design:type", Number)
    ], SchemaResponsePatchSchemaResponsesAttributesInput.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "date_modified" }),
        __metadata("design:type", Number)
    ], SchemaResponsePatchSchemaResponsesAttributesInput.prototype, "dateModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "date_submitted" }),
        __metadata("design:type", Number)
    ], SchemaResponsePatchSchemaResponsesAttributesInput.prototype, "dateSubmitted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "is_original_response" }),
        __metadata("design:type", Boolean)
    ], SchemaResponsePatchSchemaResponsesAttributesInput.prototype, "isOriginalResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "is_pending_current_user_approval" }),
        __metadata("design:type", Boolean)
    ], SchemaResponsePatchSchemaResponsesAttributesInput.prototype, "isPendingCurrentUserApproval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "reviews_state" }),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponsesAttributesInput.prototype, "reviewsState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "revision_justification" }),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponsesAttributesInput.prototype, "revisionJustification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "revision_responses" }),
        __metadata("design:type", Object)
    ], SchemaResponsePatchSchemaResponsesAttributesInput.prototype, "revisionResponses", void 0);
    return SchemaResponsePatchSchemaResponsesAttributesInput;
}(utils_1.SpeakeasyBase));
exports.SchemaResponsePatchSchemaResponsesAttributesInput = SchemaResponsePatchSchemaResponsesAttributesInput;
/**
 * URLs to alternative representations of the Schema Response entity.
 */
var SchemaResponsePatchSchemaResponsesLinks = /** @class */ (function (_super) {
    __extends(SchemaResponsePatchSchemaResponsesLinks, _super);
    function SchemaResponsePatchSchemaResponsesLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "self" }),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponsesLinks.prototype, "self", void 0);
    return SchemaResponsePatchSchemaResponsesLinks;
}(utils_1.SpeakeasyBase));
exports.SchemaResponsePatchSchemaResponsesLinks = SchemaResponsePatchSchemaResponsesLinks;
/**
 * Links to other entities or entity collections that have a relationship to the file entity.
 */
var SchemaResponsePatchSchemaResponsesRelationships = /** @class */ (function (_super) {
    __extends(SchemaResponsePatchSchemaResponsesRelationships, _super);
    function SchemaResponsePatchSchemaResponsesRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "actions" }),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponsesRelationships.prototype, "actions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "initiated_by" }),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponsesRelationships.prototype, "initiatedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "registration" }),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponsesRelationships.prototype, "registration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "registration_schema" }),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponsesRelationships.prototype, "registrationSchema", void 0);
    return SchemaResponsePatchSchemaResponsesRelationships;
}(utils_1.SpeakeasyBase));
exports.SchemaResponsePatchSchemaResponsesRelationships = SchemaResponsePatchSchemaResponsesRelationships;
var SchemaResponsePatchSchemaResponsesInput = /** @class */ (function (_super) {
    __extends(SchemaResponsePatchSchemaResponsesInput, _super);
    function SchemaResponsePatchSchemaResponsesInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "attributes" }),
        (0, class_transformer_1.Type)(function () { return SchemaResponsePatchSchemaResponsesAttributesInput; }),
        __metadata("design:type", SchemaResponsePatchSchemaResponsesAttributesInput)
    ], SchemaResponsePatchSchemaResponsesInput.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "links" }),
        (0, class_transformer_1.Type)(function () { return SchemaResponsePatchSchemaResponsesLinks; }),
        __metadata("design:type", SchemaResponsePatchSchemaResponsesLinks)
    ], SchemaResponsePatchSchemaResponsesInput.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "relationships" }),
        (0, class_transformer_1.Type)(function () { return SchemaResponsePatchSchemaResponsesRelationships; }),
        __metadata("design:type", SchemaResponsePatchSchemaResponsesRelationships)
    ], SchemaResponsePatchSchemaResponsesInput.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponsesInput.prototype, "type", void 0);
    return SchemaResponsePatchSchemaResponsesInput;
}(utils_1.SpeakeasyBase));
exports.SchemaResponsePatchSchemaResponsesInput = SchemaResponsePatchSchemaResponsesInput;
var SchemaResponsePatchRequest = /** @class */ (function (_super) {
    __extends(SchemaResponsePatchRequest, _super);
    function SchemaResponsePatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", SchemaResponsePatchSchemaResponsesInput)
    ], SchemaResponsePatchRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=schema_response_id",
        }),
        __metadata("design:type", String)
    ], SchemaResponsePatchRequest.prototype, "schemaResponseId", void 0);
    return SchemaResponsePatchRequest;
}(utils_1.SpeakeasyBase));
exports.SchemaResponsePatchRequest = SchemaResponsePatchRequest;
/**
 * The properties of the Schema Response.
 */
var SchemaResponsePatchSchemaResponsesAttributes = /** @class */ (function (_super) {
    __extends(SchemaResponsePatchSchemaResponsesAttributes, _super);
    function SchemaResponsePatchSchemaResponsesAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SchemaResponsePatchSchemaResponsesAttributes.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SchemaResponsePatchSchemaResponsesAttributes.prototype, "dateModified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SchemaResponsePatchSchemaResponsesAttributes.prototype, "dateSubmitted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], SchemaResponsePatchSchemaResponsesAttributes.prototype, "isOriginalResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], SchemaResponsePatchSchemaResponsesAttributes.prototype, "isPendingCurrentUserApproval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponsesAttributes.prototype, "reviewsState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponsesAttributes.prototype, "revisionJustification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SchemaResponsePatchSchemaResponsesAttributes.prototype, "revisionResponses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], SchemaResponsePatchSchemaResponsesAttributes.prototype, "updatedResponseKeys", void 0);
    return SchemaResponsePatchSchemaResponsesAttributes;
}(utils_1.SpeakeasyBase));
exports.SchemaResponsePatchSchemaResponsesAttributes = SchemaResponsePatchSchemaResponsesAttributes;
/**
 * OK
 */
var SchemaResponsePatchSchemaResponses = /** @class */ (function (_super) {
    __extends(SchemaResponsePatchSchemaResponses, _super);
    function SchemaResponsePatchSchemaResponses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SchemaResponsePatchSchemaResponsesAttributes)
    ], SchemaResponsePatchSchemaResponses.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponses.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SchemaResponsePatchSchemaResponsesLinks)
    ], SchemaResponsePatchSchemaResponses.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", SchemaResponsePatchSchemaResponsesRelationships)
    ], SchemaResponsePatchSchemaResponses.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SchemaResponsePatchSchemaResponses.prototype, "type", void 0);
    return SchemaResponsePatchSchemaResponses;
}(utils_1.SpeakeasyBase));
exports.SchemaResponsePatchSchemaResponses = SchemaResponsePatchSchemaResponses;
var SchemaResponsePatchResponse = /** @class */ (function (_super) {
    __extends(SchemaResponsePatchResponse, _super);
    function SchemaResponsePatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], SchemaResponsePatchResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SchemaResponsePatchResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], SchemaResponsePatchResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], SchemaResponsePatchResponse.prototype, "rawResponse", void 0);
    return SchemaResponsePatchResponse;
}(utils_1.SpeakeasyBase));
exports.SchemaResponsePatchResponse = SchemaResponsePatchResponse;
