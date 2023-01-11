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
exports.LinksResponse = exports.LinksResponseResponseMeta = exports.LinksResponseResponseMetaResponseMetaQuery = exports.LinksResponseResponseMetaProvider = exports.LinksResponseResponseMetaImplementation = exports.LinksResponseResponseMetaImplementationImplementationMaintainer = exports.LinksResponseToplevelLinks = exports.LinksResponseJsonApi = void 0;
var utils_1 = require("../../../internal/utils");
var warnings_1 = require("./warnings");
var error_1 = require("./error");
// LinksResponseJsonApi
/**
 * An object describing the server's implementation
**/
var LinksResponseJsonApi = /** @class */ (function (_super) {
    __extends(LinksResponseJsonApi, _super);
    function LinksResponseJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], LinksResponseJsonApi.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], LinksResponseJsonApi.prototype, "version", void 0);
    return LinksResponseJsonApi;
}(utils_1.SpeakeasyBase));
exports.LinksResponseJsonApi = LinksResponseJsonApi;
// LinksResponseToplevelLinks
/**
 * A set of Links objects, possibly including pagination
**/
var LinksResponseToplevelLinks = /** @class */ (function (_super) {
    __extends(LinksResponseToplevelLinks, _super);
    function LinksResponseToplevelLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", Object)
    ], LinksResponseToplevelLinks.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", Object)
    ], LinksResponseToplevelLinks.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", Object)
    ], LinksResponseToplevelLinks.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", Object)
    ], LinksResponseToplevelLinks.prototype, "prev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], LinksResponseToplevelLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], LinksResponseToplevelLinks.prototype, "self", void 0);
    return LinksResponseToplevelLinks;
}(utils_1.SpeakeasyBase));
exports.LinksResponseToplevelLinks = LinksResponseToplevelLinks;
// LinksResponseResponseMetaImplementationImplementationMaintainer
/**
 * Details about the maintainer of the implementation
**/
var LinksResponseResponseMetaImplementationImplementationMaintainer = /** @class */ (function (_super) {
    __extends(LinksResponseResponseMetaImplementationImplementationMaintainer, _super);
    function LinksResponseResponseMetaImplementationImplementationMaintainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], LinksResponseResponseMetaImplementationImplementationMaintainer.prototype, "email", void 0);
    return LinksResponseResponseMetaImplementationImplementationMaintainer;
}(utils_1.SpeakeasyBase));
exports.LinksResponseResponseMetaImplementationImplementationMaintainer = LinksResponseResponseMetaImplementationImplementationMaintainer;
// LinksResponseResponseMetaImplementation
/**
 * Information on the server implementation
**/
var LinksResponseResponseMetaImplementation = /** @class */ (function (_super) {
    __extends(LinksResponseResponseMetaImplementation, _super);
    function LinksResponseResponseMetaImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], LinksResponseResponseMetaImplementation.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_tracker" }),
        __metadata("design:type", Object)
    ], LinksResponseResponseMetaImplementation.prototype, "issueTracker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintainer" }),
        __metadata("design:type", LinksResponseResponseMetaImplementationImplementationMaintainer)
    ], LinksResponseResponseMetaImplementation.prototype, "maintainer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LinksResponseResponseMetaImplementation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_url" }),
        __metadata("design:type", Object)
    ], LinksResponseResponseMetaImplementation.prototype, "sourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], LinksResponseResponseMetaImplementation.prototype, "version", void 0);
    return LinksResponseResponseMetaImplementation;
}(utils_1.SpeakeasyBase));
exports.LinksResponseResponseMetaImplementation = LinksResponseResponseMetaImplementation;
// LinksResponseResponseMetaProvider
/**
 * Information on the database provider of the implementation.
**/
var LinksResponseResponseMetaProvider = /** @class */ (function (_super) {
    __extends(LinksResponseResponseMetaProvider, _super);
    function LinksResponseResponseMetaProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LinksResponseResponseMetaProvider.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], LinksResponseResponseMetaProvider.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LinksResponseResponseMetaProvider.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], LinksResponseResponseMetaProvider.prototype, "prefix", void 0);
    return LinksResponseResponseMetaProvider;
}(utils_1.SpeakeasyBase));
exports.LinksResponseResponseMetaProvider = LinksResponseResponseMetaProvider;
// LinksResponseResponseMetaResponseMetaQuery
/**
 * Information on the query that was requested.
**/
var LinksResponseResponseMetaResponseMetaQuery = /** @class */ (function (_super) {
    __extends(LinksResponseResponseMetaResponseMetaQuery, _super);
    function LinksResponseResponseMetaResponseMetaQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=representation" }),
        __metadata("design:type", String)
    ], LinksResponseResponseMetaResponseMetaQuery.prototype, "representation", void 0);
    return LinksResponseResponseMetaResponseMetaQuery;
}(utils_1.SpeakeasyBase));
exports.LinksResponseResponseMetaResponseMetaQuery = LinksResponseResponseMetaResponseMetaQuery;
// LinksResponseResponseMeta
/**
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 *
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
var LinksResponseResponseMeta = /** @class */ (function (_super) {
    __extends(LinksResponseResponseMeta, _super);
    function LinksResponseResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], LinksResponseResponseMeta.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_available" }),
        __metadata("design:type", Number)
    ], LinksResponseResponseMeta.prototype, "dataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_returned" }),
        __metadata("design:type", Number)
    ], LinksResponseResponseMeta.prototype, "dataReturned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=implementation" }),
        __metadata("design:type", LinksResponseResponseMetaImplementation)
    ], LinksResponseResponseMeta.prototype, "implementation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_id" }),
        __metadata("design:type", String)
    ], LinksResponseResponseMeta.prototype, "lastId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=more_data_available" }),
        __metadata("design:type", Boolean)
    ], LinksResponseResponseMeta.prototype, "moreDataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", LinksResponseResponseMetaProvider)
    ], LinksResponseResponseMeta.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", LinksResponseResponseMetaResponseMetaQuery)
    ], LinksResponseResponseMeta.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_message" }),
        __metadata("design:type", String)
    ], LinksResponseResponseMeta.prototype, "responseMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", Object)
    ], LinksResponseResponseMeta.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_stamp" }),
        __metadata("design:type", Date)
    ], LinksResponseResponseMeta.prototype, "timeStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings", elemType: warnings_1.Warnings }),
        __metadata("design:type", Array)
    ], LinksResponseResponseMeta.prototype, "warnings", void 0);
    return LinksResponseResponseMeta;
}(utils_1.SpeakeasyBase));
exports.LinksResponseResponseMeta = LinksResponseResponseMeta;
// LinksResponse
/**
 * errors are not allowed
**/
var LinksResponse = /** @class */ (function (_super) {
    __extends(LinksResponse, _super);
    function LinksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], LinksResponse.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], LinksResponse.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included" }),
        __metadata("design:type", Object)
    ], LinksResponse.prototype, "included", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jsonapi" }),
        __metadata("design:type", LinksResponseJsonApi)
    ], LinksResponse.prototype, "jsonapi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", LinksResponseToplevelLinks)
    ], LinksResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", LinksResponseResponseMeta)
    ], LinksResponse.prototype, "meta", void 0);
    return LinksResponse;
}(utils_1.SpeakeasyBase));
exports.LinksResponse = LinksResponse;
