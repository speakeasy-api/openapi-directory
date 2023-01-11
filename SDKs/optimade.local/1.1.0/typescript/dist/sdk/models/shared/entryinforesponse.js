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
exports.EntryInfoResponse = exports.EntryInfoResponseResponseMeta = exports.EntryInfoResponseResponseMetaResponseMetaQuery = exports.EntryInfoResponseResponseMetaProvider = exports.EntryInfoResponseResponseMetaImplementation = exports.EntryInfoResponseResponseMetaImplementationImplementationMaintainer = exports.EntryInfoResponseToplevelLinks = exports.EntryInfoResponseJsonApi = exports.EntryInfoResponseEntryInfoResource = void 0;
var utils_1 = require("../../../internal/utils");
var entryinfoproperty_1 = require("./entryinfoproperty");
var warnings_1 = require("./warnings");
var error_1 = require("./error");
var resource_1 = require("./resource");
// EntryInfoResponseEntryInfoResource
/**
 * OPTIMADE information for an entry endpoint
**/
var EntryInfoResponseEntryInfoResource = /** @class */ (function (_super) {
    __extends(EntryInfoResponseEntryInfoResource, _super);
    function EntryInfoResponseEntryInfoResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EntryInfoResponseEntryInfoResource.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formats" }),
        __metadata("design:type", Array)
    ], EntryInfoResponseEntryInfoResource.prototype, "formats", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=output_fields_by_format" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseEntryInfoResource.prototype, "outputFieldsByFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties", elemType: entryinfoproperty_1.EntryInfoProperty }),
        __metadata("design:type", Object)
    ], EntryInfoResponseEntryInfoResource.prototype, "properties", void 0);
    return EntryInfoResponseEntryInfoResource;
}(utils_1.SpeakeasyBase));
exports.EntryInfoResponseEntryInfoResource = EntryInfoResponseEntryInfoResource;
// EntryInfoResponseJsonApi
/**
 * An object describing the server's implementation
**/
var EntryInfoResponseJsonApi = /** @class */ (function (_super) {
    __extends(EntryInfoResponseJsonApi, _super);
    function EntryInfoResponseJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseJsonApi.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], EntryInfoResponseJsonApi.prototype, "version", void 0);
    return EntryInfoResponseJsonApi;
}(utils_1.SpeakeasyBase));
exports.EntryInfoResponseJsonApi = EntryInfoResponseJsonApi;
// EntryInfoResponseToplevelLinks
/**
 * A set of Links objects, possibly including pagination
**/
var EntryInfoResponseToplevelLinks = /** @class */ (function (_super) {
    __extends(EntryInfoResponseToplevelLinks, _super);
    function EntryInfoResponseToplevelLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseToplevelLinks.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseToplevelLinks.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseToplevelLinks.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseToplevelLinks.prototype, "prev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseToplevelLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseToplevelLinks.prototype, "self", void 0);
    return EntryInfoResponseToplevelLinks;
}(utils_1.SpeakeasyBase));
exports.EntryInfoResponseToplevelLinks = EntryInfoResponseToplevelLinks;
// EntryInfoResponseResponseMetaImplementationImplementationMaintainer
/**
 * Details about the maintainer of the implementation
**/
var EntryInfoResponseResponseMetaImplementationImplementationMaintainer = /** @class */ (function (_super) {
    __extends(EntryInfoResponseResponseMetaImplementationImplementationMaintainer, _super);
    function EntryInfoResponseResponseMetaImplementationImplementationMaintainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], EntryInfoResponseResponseMetaImplementationImplementationMaintainer.prototype, "email", void 0);
    return EntryInfoResponseResponseMetaImplementationImplementationMaintainer;
}(utils_1.SpeakeasyBase));
exports.EntryInfoResponseResponseMetaImplementationImplementationMaintainer = EntryInfoResponseResponseMetaImplementationImplementationMaintainer;
// EntryInfoResponseResponseMetaImplementation
/**
 * Information on the server implementation
**/
var EntryInfoResponseResponseMetaImplementation = /** @class */ (function (_super) {
    __extends(EntryInfoResponseResponseMetaImplementation, _super);
    function EntryInfoResponseResponseMetaImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseResponseMetaImplementation.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_tracker" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseResponseMetaImplementation.prototype, "issueTracker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintainer" }),
        __metadata("design:type", EntryInfoResponseResponseMetaImplementationImplementationMaintainer)
    ], EntryInfoResponseResponseMetaImplementation.prototype, "maintainer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EntryInfoResponseResponseMetaImplementation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_url" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseResponseMetaImplementation.prototype, "sourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], EntryInfoResponseResponseMetaImplementation.prototype, "version", void 0);
    return EntryInfoResponseResponseMetaImplementation;
}(utils_1.SpeakeasyBase));
exports.EntryInfoResponseResponseMetaImplementation = EntryInfoResponseResponseMetaImplementation;
// EntryInfoResponseResponseMetaProvider
/**
 * Information on the database provider of the implementation.
**/
var EntryInfoResponseResponseMetaProvider = /** @class */ (function (_super) {
    __extends(EntryInfoResponseResponseMetaProvider, _super);
    function EntryInfoResponseResponseMetaProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EntryInfoResponseResponseMetaProvider.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseResponseMetaProvider.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EntryInfoResponseResponseMetaProvider.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], EntryInfoResponseResponseMetaProvider.prototype, "prefix", void 0);
    return EntryInfoResponseResponseMetaProvider;
}(utils_1.SpeakeasyBase));
exports.EntryInfoResponseResponseMetaProvider = EntryInfoResponseResponseMetaProvider;
// EntryInfoResponseResponseMetaResponseMetaQuery
/**
 * Information on the query that was requested.
**/
var EntryInfoResponseResponseMetaResponseMetaQuery = /** @class */ (function (_super) {
    __extends(EntryInfoResponseResponseMetaResponseMetaQuery, _super);
    function EntryInfoResponseResponseMetaResponseMetaQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=representation" }),
        __metadata("design:type", String)
    ], EntryInfoResponseResponseMetaResponseMetaQuery.prototype, "representation", void 0);
    return EntryInfoResponseResponseMetaResponseMetaQuery;
}(utils_1.SpeakeasyBase));
exports.EntryInfoResponseResponseMetaResponseMetaQuery = EntryInfoResponseResponseMetaResponseMetaQuery;
// EntryInfoResponseResponseMeta
/**
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 *
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
var EntryInfoResponseResponseMeta = /** @class */ (function (_super) {
    __extends(EntryInfoResponseResponseMeta, _super);
    function EntryInfoResponseResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], EntryInfoResponseResponseMeta.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_available" }),
        __metadata("design:type", Number)
    ], EntryInfoResponseResponseMeta.prototype, "dataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_returned" }),
        __metadata("design:type", Number)
    ], EntryInfoResponseResponseMeta.prototype, "dataReturned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=implementation" }),
        __metadata("design:type", EntryInfoResponseResponseMetaImplementation)
    ], EntryInfoResponseResponseMeta.prototype, "implementation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_id" }),
        __metadata("design:type", String)
    ], EntryInfoResponseResponseMeta.prototype, "lastId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=more_data_available" }),
        __metadata("design:type", Boolean)
    ], EntryInfoResponseResponseMeta.prototype, "moreDataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", EntryInfoResponseResponseMetaProvider)
    ], EntryInfoResponseResponseMeta.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", EntryInfoResponseResponseMetaResponseMetaQuery)
    ], EntryInfoResponseResponseMeta.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_message" }),
        __metadata("design:type", String)
    ], EntryInfoResponseResponseMeta.prototype, "responseMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", Object)
    ], EntryInfoResponseResponseMeta.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_stamp" }),
        __metadata("design:type", Date)
    ], EntryInfoResponseResponseMeta.prototype, "timeStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings", elemType: warnings_1.Warnings }),
        __metadata("design:type", Array)
    ], EntryInfoResponseResponseMeta.prototype, "warnings", void 0);
    return EntryInfoResponseResponseMeta;
}(utils_1.SpeakeasyBase));
exports.EntryInfoResponseResponseMeta = EntryInfoResponseResponseMeta;
// EntryInfoResponse
/**
 * errors are not allowed
**/
var EntryInfoResponse = /** @class */ (function (_super) {
    __extends(EntryInfoResponse, _super);
    function EntryInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", EntryInfoResponseEntryInfoResource)
    ], EntryInfoResponse.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], EntryInfoResponse.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included", elemType: resource_1.Resource }),
        __metadata("design:type", Array)
    ], EntryInfoResponse.prototype, "included", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jsonapi" }),
        __metadata("design:type", EntryInfoResponseJsonApi)
    ], EntryInfoResponse.prototype, "jsonapi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", EntryInfoResponseToplevelLinks)
    ], EntryInfoResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", EntryInfoResponseResponseMeta)
    ], EntryInfoResponse.prototype, "meta", void 0);
    return EntryInfoResponse;
}(utils_1.SpeakeasyBase));
exports.EntryInfoResponse = EntryInfoResponse;
