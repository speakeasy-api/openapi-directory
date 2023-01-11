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
exports.StructureResponseMany = exports.StructureResponseManyResponseMeta = exports.StructureResponseManyResponseMetaResponseMetaQuery = exports.StructureResponseManyResponseMetaProvider = exports.StructureResponseManyResponseMetaImplementation = exports.StructureResponseManyResponseMetaImplementationImplementationMaintainer = exports.StructureResponseManyToplevelLinks = exports.StructureResponseManyJsonApi = void 0;
var utils_1 = require("../../../internal/utils");
var warnings_1 = require("./warnings");
var error_1 = require("./error");
// StructureResponseManyJsonApi
/**
 * An object describing the server's implementation
**/
var StructureResponseManyJsonApi = /** @class */ (function (_super) {
    __extends(StructureResponseManyJsonApi, _super);
    function StructureResponseManyJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], StructureResponseManyJsonApi.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], StructureResponseManyJsonApi.prototype, "version", void 0);
    return StructureResponseManyJsonApi;
}(utils_1.SpeakeasyBase));
exports.StructureResponseManyJsonApi = StructureResponseManyJsonApi;
// StructureResponseManyToplevelLinks
/**
 * A set of Links objects, possibly including pagination
**/
var StructureResponseManyToplevelLinks = /** @class */ (function (_super) {
    __extends(StructureResponseManyToplevelLinks, _super);
    function StructureResponseManyToplevelLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", Object)
    ], StructureResponseManyToplevelLinks.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", Object)
    ], StructureResponseManyToplevelLinks.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", Object)
    ], StructureResponseManyToplevelLinks.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", Object)
    ], StructureResponseManyToplevelLinks.prototype, "prev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], StructureResponseManyToplevelLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], StructureResponseManyToplevelLinks.prototype, "self", void 0);
    return StructureResponseManyToplevelLinks;
}(utils_1.SpeakeasyBase));
exports.StructureResponseManyToplevelLinks = StructureResponseManyToplevelLinks;
// StructureResponseManyResponseMetaImplementationImplementationMaintainer
/**
 * Details about the maintainer of the implementation
**/
var StructureResponseManyResponseMetaImplementationImplementationMaintainer = /** @class */ (function (_super) {
    __extends(StructureResponseManyResponseMetaImplementationImplementationMaintainer, _super);
    function StructureResponseManyResponseMetaImplementationImplementationMaintainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], StructureResponseManyResponseMetaImplementationImplementationMaintainer.prototype, "email", void 0);
    return StructureResponseManyResponseMetaImplementationImplementationMaintainer;
}(utils_1.SpeakeasyBase));
exports.StructureResponseManyResponseMetaImplementationImplementationMaintainer = StructureResponseManyResponseMetaImplementationImplementationMaintainer;
// StructureResponseManyResponseMetaImplementation
/**
 * Information on the server implementation
**/
var StructureResponseManyResponseMetaImplementation = /** @class */ (function (_super) {
    __extends(StructureResponseManyResponseMetaImplementation, _super);
    function StructureResponseManyResponseMetaImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], StructureResponseManyResponseMetaImplementation.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_tracker" }),
        __metadata("design:type", Object)
    ], StructureResponseManyResponseMetaImplementation.prototype, "issueTracker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintainer" }),
        __metadata("design:type", StructureResponseManyResponseMetaImplementationImplementationMaintainer)
    ], StructureResponseManyResponseMetaImplementation.prototype, "maintainer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], StructureResponseManyResponseMetaImplementation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_url" }),
        __metadata("design:type", Object)
    ], StructureResponseManyResponseMetaImplementation.prototype, "sourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], StructureResponseManyResponseMetaImplementation.prototype, "version", void 0);
    return StructureResponseManyResponseMetaImplementation;
}(utils_1.SpeakeasyBase));
exports.StructureResponseManyResponseMetaImplementation = StructureResponseManyResponseMetaImplementation;
// StructureResponseManyResponseMetaProvider
/**
 * Information on the database provider of the implementation.
**/
var StructureResponseManyResponseMetaProvider = /** @class */ (function (_super) {
    __extends(StructureResponseManyResponseMetaProvider, _super);
    function StructureResponseManyResponseMetaProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], StructureResponseManyResponseMetaProvider.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], StructureResponseManyResponseMetaProvider.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], StructureResponseManyResponseMetaProvider.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], StructureResponseManyResponseMetaProvider.prototype, "prefix", void 0);
    return StructureResponseManyResponseMetaProvider;
}(utils_1.SpeakeasyBase));
exports.StructureResponseManyResponseMetaProvider = StructureResponseManyResponseMetaProvider;
// StructureResponseManyResponseMetaResponseMetaQuery
/**
 * Information on the query that was requested.
**/
var StructureResponseManyResponseMetaResponseMetaQuery = /** @class */ (function (_super) {
    __extends(StructureResponseManyResponseMetaResponseMetaQuery, _super);
    function StructureResponseManyResponseMetaResponseMetaQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=representation" }),
        __metadata("design:type", String)
    ], StructureResponseManyResponseMetaResponseMetaQuery.prototype, "representation", void 0);
    return StructureResponseManyResponseMetaResponseMetaQuery;
}(utils_1.SpeakeasyBase));
exports.StructureResponseManyResponseMetaResponseMetaQuery = StructureResponseManyResponseMetaResponseMetaQuery;
// StructureResponseManyResponseMeta
/**
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 *
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
var StructureResponseManyResponseMeta = /** @class */ (function (_super) {
    __extends(StructureResponseManyResponseMeta, _super);
    function StructureResponseManyResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], StructureResponseManyResponseMeta.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_available" }),
        __metadata("design:type", Number)
    ], StructureResponseManyResponseMeta.prototype, "dataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_returned" }),
        __metadata("design:type", Number)
    ], StructureResponseManyResponseMeta.prototype, "dataReturned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=implementation" }),
        __metadata("design:type", StructureResponseManyResponseMetaImplementation)
    ], StructureResponseManyResponseMeta.prototype, "implementation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_id" }),
        __metadata("design:type", String)
    ], StructureResponseManyResponseMeta.prototype, "lastId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=more_data_available" }),
        __metadata("design:type", Boolean)
    ], StructureResponseManyResponseMeta.prototype, "moreDataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", StructureResponseManyResponseMetaProvider)
    ], StructureResponseManyResponseMeta.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", StructureResponseManyResponseMetaResponseMetaQuery)
    ], StructureResponseManyResponseMeta.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_message" }),
        __metadata("design:type", String)
    ], StructureResponseManyResponseMeta.prototype, "responseMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", Object)
    ], StructureResponseManyResponseMeta.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_stamp" }),
        __metadata("design:type", Date)
    ], StructureResponseManyResponseMeta.prototype, "timeStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings", elemType: warnings_1.Warnings }),
        __metadata("design:type", Array)
    ], StructureResponseManyResponseMeta.prototype, "warnings", void 0);
    return StructureResponseManyResponseMeta;
}(utils_1.SpeakeasyBase));
exports.StructureResponseManyResponseMeta = StructureResponseManyResponseMeta;
// StructureResponseMany
/**
 * errors are not allowed
**/
var StructureResponseMany = /** @class */ (function (_super) {
    __extends(StructureResponseMany, _super);
    function StructureResponseMany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], StructureResponseMany.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], StructureResponseMany.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included" }),
        __metadata("design:type", Object)
    ], StructureResponseMany.prototype, "included", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jsonapi" }),
        __metadata("design:type", StructureResponseManyJsonApi)
    ], StructureResponseMany.prototype, "jsonapi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", StructureResponseManyToplevelLinks)
    ], StructureResponseMany.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", StructureResponseManyResponseMeta)
    ], StructureResponseMany.prototype, "meta", void 0);
    return StructureResponseMany;
}(utils_1.SpeakeasyBase));
exports.StructureResponseMany = StructureResponseMany;
