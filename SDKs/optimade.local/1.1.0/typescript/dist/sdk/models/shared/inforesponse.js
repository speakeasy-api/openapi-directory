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
exports.InfoResponse = exports.InfoResponseResponseMeta = exports.InfoResponseResponseMetaResponseMetaQuery = exports.InfoResponseResponseMetaProvider = exports.InfoResponseResponseMetaImplementation = exports.InfoResponseResponseMetaImplementationImplementationMaintainer = exports.InfoResponseToplevelLinks = exports.InfoResponseJsonApi = exports.InfoResponseBaseInfoResource = exports.InfoResponseBaseInfoResourceResourceLinks = void 0;
var utils_1 = require("../../../internal/utils");
var baseinfoattributes_1 = require("./baseinfoattributes");
var warnings_1 = require("./warnings");
var error_1 = require("./error");
var resource_1 = require("./resource");
// InfoResponseBaseInfoResourceResourceLinks
/**
 * A Resource Links object
**/
var InfoResponseBaseInfoResourceResourceLinks = /** @class */ (function (_super) {
    __extends(InfoResponseBaseInfoResourceResourceLinks, _super);
    function InfoResponseBaseInfoResourceResourceLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], InfoResponseBaseInfoResourceResourceLinks.prototype, "self", void 0);
    return InfoResponseBaseInfoResourceResourceLinks;
}(utils_1.SpeakeasyBase));
exports.InfoResponseBaseInfoResourceResourceLinks = InfoResponseBaseInfoResourceResourceLinks;
// InfoResponseBaseInfoResource
/**
 * Resource objects appear in a JSON API document to represent resources.
**/
var InfoResponseBaseInfoResource = /** @class */ (function (_super) {
    __extends(InfoResponseBaseInfoResource, _super);
    function InfoResponseBaseInfoResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", baseinfoattributes_1.BaseInfoAttributes)
    ], InfoResponseBaseInfoResource.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], InfoResponseBaseInfoResource.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", InfoResponseBaseInfoResourceResourceLinks)
    ], InfoResponseBaseInfoResource.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], InfoResponseBaseInfoResource.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", Object)
    ], InfoResponseBaseInfoResource.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InfoResponseBaseInfoResource.prototype, "type", void 0);
    return InfoResponseBaseInfoResource;
}(utils_1.SpeakeasyBase));
exports.InfoResponseBaseInfoResource = InfoResponseBaseInfoResource;
// InfoResponseJsonApi
/**
 * An object describing the server's implementation
**/
var InfoResponseJsonApi = /** @class */ (function (_super) {
    __extends(InfoResponseJsonApi, _super);
    function InfoResponseJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], InfoResponseJsonApi.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], InfoResponseJsonApi.prototype, "version", void 0);
    return InfoResponseJsonApi;
}(utils_1.SpeakeasyBase));
exports.InfoResponseJsonApi = InfoResponseJsonApi;
// InfoResponseToplevelLinks
/**
 * A set of Links objects, possibly including pagination
**/
var InfoResponseToplevelLinks = /** @class */ (function (_super) {
    __extends(InfoResponseToplevelLinks, _super);
    function InfoResponseToplevelLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", Object)
    ], InfoResponseToplevelLinks.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", Object)
    ], InfoResponseToplevelLinks.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", Object)
    ], InfoResponseToplevelLinks.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", Object)
    ], InfoResponseToplevelLinks.prototype, "prev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], InfoResponseToplevelLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], InfoResponseToplevelLinks.prototype, "self", void 0);
    return InfoResponseToplevelLinks;
}(utils_1.SpeakeasyBase));
exports.InfoResponseToplevelLinks = InfoResponseToplevelLinks;
// InfoResponseResponseMetaImplementationImplementationMaintainer
/**
 * Details about the maintainer of the implementation
**/
var InfoResponseResponseMetaImplementationImplementationMaintainer = /** @class */ (function (_super) {
    __extends(InfoResponseResponseMetaImplementationImplementationMaintainer, _super);
    function InfoResponseResponseMetaImplementationImplementationMaintainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], InfoResponseResponseMetaImplementationImplementationMaintainer.prototype, "email", void 0);
    return InfoResponseResponseMetaImplementationImplementationMaintainer;
}(utils_1.SpeakeasyBase));
exports.InfoResponseResponseMetaImplementationImplementationMaintainer = InfoResponseResponseMetaImplementationImplementationMaintainer;
// InfoResponseResponseMetaImplementation
/**
 * Information on the server implementation
**/
var InfoResponseResponseMetaImplementation = /** @class */ (function (_super) {
    __extends(InfoResponseResponseMetaImplementation, _super);
    function InfoResponseResponseMetaImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], InfoResponseResponseMetaImplementation.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_tracker" }),
        __metadata("design:type", Object)
    ], InfoResponseResponseMetaImplementation.prototype, "issueTracker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintainer" }),
        __metadata("design:type", InfoResponseResponseMetaImplementationImplementationMaintainer)
    ], InfoResponseResponseMetaImplementation.prototype, "maintainer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InfoResponseResponseMetaImplementation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_url" }),
        __metadata("design:type", Object)
    ], InfoResponseResponseMetaImplementation.prototype, "sourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], InfoResponseResponseMetaImplementation.prototype, "version", void 0);
    return InfoResponseResponseMetaImplementation;
}(utils_1.SpeakeasyBase));
exports.InfoResponseResponseMetaImplementation = InfoResponseResponseMetaImplementation;
// InfoResponseResponseMetaProvider
/**
 * Information on the database provider of the implementation.
**/
var InfoResponseResponseMetaProvider = /** @class */ (function (_super) {
    __extends(InfoResponseResponseMetaProvider, _super);
    function InfoResponseResponseMetaProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InfoResponseResponseMetaProvider.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], InfoResponseResponseMetaProvider.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InfoResponseResponseMetaProvider.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], InfoResponseResponseMetaProvider.prototype, "prefix", void 0);
    return InfoResponseResponseMetaProvider;
}(utils_1.SpeakeasyBase));
exports.InfoResponseResponseMetaProvider = InfoResponseResponseMetaProvider;
// InfoResponseResponseMetaResponseMetaQuery
/**
 * Information on the query that was requested.
**/
var InfoResponseResponseMetaResponseMetaQuery = /** @class */ (function (_super) {
    __extends(InfoResponseResponseMetaResponseMetaQuery, _super);
    function InfoResponseResponseMetaResponseMetaQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=representation" }),
        __metadata("design:type", String)
    ], InfoResponseResponseMetaResponseMetaQuery.prototype, "representation", void 0);
    return InfoResponseResponseMetaResponseMetaQuery;
}(utils_1.SpeakeasyBase));
exports.InfoResponseResponseMetaResponseMetaQuery = InfoResponseResponseMetaResponseMetaQuery;
// InfoResponseResponseMeta
/**
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 *
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
var InfoResponseResponseMeta = /** @class */ (function (_super) {
    __extends(InfoResponseResponseMeta, _super);
    function InfoResponseResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], InfoResponseResponseMeta.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_available" }),
        __metadata("design:type", Number)
    ], InfoResponseResponseMeta.prototype, "dataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_returned" }),
        __metadata("design:type", Number)
    ], InfoResponseResponseMeta.prototype, "dataReturned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=implementation" }),
        __metadata("design:type", InfoResponseResponseMetaImplementation)
    ], InfoResponseResponseMeta.prototype, "implementation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_id" }),
        __metadata("design:type", String)
    ], InfoResponseResponseMeta.prototype, "lastId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=more_data_available" }),
        __metadata("design:type", Boolean)
    ], InfoResponseResponseMeta.prototype, "moreDataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", InfoResponseResponseMetaProvider)
    ], InfoResponseResponseMeta.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", InfoResponseResponseMetaResponseMetaQuery)
    ], InfoResponseResponseMeta.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_message" }),
        __metadata("design:type", String)
    ], InfoResponseResponseMeta.prototype, "responseMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", Object)
    ], InfoResponseResponseMeta.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_stamp" }),
        __metadata("design:type", Date)
    ], InfoResponseResponseMeta.prototype, "timeStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings", elemType: warnings_1.Warnings }),
        __metadata("design:type", Array)
    ], InfoResponseResponseMeta.prototype, "warnings", void 0);
    return InfoResponseResponseMeta;
}(utils_1.SpeakeasyBase));
exports.InfoResponseResponseMeta = InfoResponseResponseMeta;
// InfoResponse
/**
 * errors are not allowed
**/
var InfoResponse = /** @class */ (function (_super) {
    __extends(InfoResponse, _super);
    function InfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", InfoResponseBaseInfoResource)
    ], InfoResponse.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], InfoResponse.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included", elemType: resource_1.Resource }),
        __metadata("design:type", Array)
    ], InfoResponse.prototype, "included", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jsonapi" }),
        __metadata("design:type", InfoResponseJsonApi)
    ], InfoResponse.prototype, "jsonapi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", InfoResponseToplevelLinks)
    ], InfoResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", InfoResponseResponseMeta)
    ], InfoResponse.prototype, "meta", void 0);
    return InfoResponse;
}(utils_1.SpeakeasyBase));
exports.InfoResponse = InfoResponse;
