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
exports.ReferenceResponseMany = exports.ReferenceResponseManyResponseMeta = exports.ReferenceResponseManyResponseMetaResponseMetaQuery = exports.ReferenceResponseManyResponseMetaProvider = exports.ReferenceResponseManyResponseMetaImplementation = exports.ReferenceResponseManyResponseMetaImplementationImplementationMaintainer = exports.ReferenceResponseManyToplevelLinks = exports.ReferenceResponseManyJsonApi = void 0;
var utils_1 = require("../../../internal/utils");
var warnings_1 = require("./warnings");
var error_1 = require("./error");
// ReferenceResponseManyJsonApi
/**
 * An object describing the server's implementation
**/
var ReferenceResponseManyJsonApi = /** @class */ (function (_super) {
    __extends(ReferenceResponseManyJsonApi, _super);
    function ReferenceResponseManyJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyJsonApi.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyJsonApi.prototype, "version", void 0);
    return ReferenceResponseManyJsonApi;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseManyJsonApi = ReferenceResponseManyJsonApi;
// ReferenceResponseManyToplevelLinks
/**
 * A set of Links objects, possibly including pagination
**/
var ReferenceResponseManyToplevelLinks = /** @class */ (function (_super) {
    __extends(ReferenceResponseManyToplevelLinks, _super);
    function ReferenceResponseManyToplevelLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyToplevelLinks.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyToplevelLinks.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyToplevelLinks.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyToplevelLinks.prototype, "prev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyToplevelLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyToplevelLinks.prototype, "self", void 0);
    return ReferenceResponseManyToplevelLinks;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseManyToplevelLinks = ReferenceResponseManyToplevelLinks;
// ReferenceResponseManyResponseMetaImplementationImplementationMaintainer
/**
 * Details about the maintainer of the implementation
**/
var ReferenceResponseManyResponseMetaImplementationImplementationMaintainer = /** @class */ (function (_super) {
    __extends(ReferenceResponseManyResponseMetaImplementationImplementationMaintainer, _super);
    function ReferenceResponseManyResponseMetaImplementationImplementationMaintainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyResponseMetaImplementationImplementationMaintainer.prototype, "email", void 0);
    return ReferenceResponseManyResponseMetaImplementationImplementationMaintainer;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseManyResponseMetaImplementationImplementationMaintainer = ReferenceResponseManyResponseMetaImplementationImplementationMaintainer;
// ReferenceResponseManyResponseMetaImplementation
/**
 * Information on the server implementation
**/
var ReferenceResponseManyResponseMetaImplementation = /** @class */ (function (_super) {
    __extends(ReferenceResponseManyResponseMetaImplementation, _super);
    function ReferenceResponseManyResponseMetaImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyResponseMetaImplementation.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_tracker" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyResponseMetaImplementation.prototype, "issueTracker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintainer" }),
        __metadata("design:type", ReferenceResponseManyResponseMetaImplementationImplementationMaintainer)
    ], ReferenceResponseManyResponseMetaImplementation.prototype, "maintainer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyResponseMetaImplementation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_url" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyResponseMetaImplementation.prototype, "sourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyResponseMetaImplementation.prototype, "version", void 0);
    return ReferenceResponseManyResponseMetaImplementation;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseManyResponseMetaImplementation = ReferenceResponseManyResponseMetaImplementation;
// ReferenceResponseManyResponseMetaProvider
/**
 * Information on the database provider of the implementation.
**/
var ReferenceResponseManyResponseMetaProvider = /** @class */ (function (_super) {
    __extends(ReferenceResponseManyResponseMetaProvider, _super);
    function ReferenceResponseManyResponseMetaProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyResponseMetaProvider.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyResponseMetaProvider.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyResponseMetaProvider.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyResponseMetaProvider.prototype, "prefix", void 0);
    return ReferenceResponseManyResponseMetaProvider;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseManyResponseMetaProvider = ReferenceResponseManyResponseMetaProvider;
// ReferenceResponseManyResponseMetaResponseMetaQuery
/**
 * Information on the query that was requested.
**/
var ReferenceResponseManyResponseMetaResponseMetaQuery = /** @class */ (function (_super) {
    __extends(ReferenceResponseManyResponseMetaResponseMetaQuery, _super);
    function ReferenceResponseManyResponseMetaResponseMetaQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=representation" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyResponseMetaResponseMetaQuery.prototype, "representation", void 0);
    return ReferenceResponseManyResponseMetaResponseMetaQuery;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseManyResponseMetaResponseMetaQuery = ReferenceResponseManyResponseMetaResponseMetaQuery;
// ReferenceResponseManyResponseMeta
/**
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 *
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
var ReferenceResponseManyResponseMeta = /** @class */ (function (_super) {
    __extends(ReferenceResponseManyResponseMeta, _super);
    function ReferenceResponseManyResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyResponseMeta.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_available" }),
        __metadata("design:type", Number)
    ], ReferenceResponseManyResponseMeta.prototype, "dataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_returned" }),
        __metadata("design:type", Number)
    ], ReferenceResponseManyResponseMeta.prototype, "dataReturned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=implementation" }),
        __metadata("design:type", ReferenceResponseManyResponseMetaImplementation)
    ], ReferenceResponseManyResponseMeta.prototype, "implementation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_id" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyResponseMeta.prototype, "lastId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=more_data_available" }),
        __metadata("design:type", Boolean)
    ], ReferenceResponseManyResponseMeta.prototype, "moreDataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", ReferenceResponseManyResponseMetaProvider)
    ], ReferenceResponseManyResponseMeta.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", ReferenceResponseManyResponseMetaResponseMetaQuery)
    ], ReferenceResponseManyResponseMeta.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_message" }),
        __metadata("design:type", String)
    ], ReferenceResponseManyResponseMeta.prototype, "responseMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", Object)
    ], ReferenceResponseManyResponseMeta.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_stamp" }),
        __metadata("design:type", Date)
    ], ReferenceResponseManyResponseMeta.prototype, "timeStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings", elemType: warnings_1.Warnings }),
        __metadata("design:type", Array)
    ], ReferenceResponseManyResponseMeta.prototype, "warnings", void 0);
    return ReferenceResponseManyResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseManyResponseMeta = ReferenceResponseManyResponseMeta;
// ReferenceResponseMany
/**
 * errors are not allowed
**/
var ReferenceResponseMany = /** @class */ (function (_super) {
    __extends(ReferenceResponseMany, _super);
    function ReferenceResponseMany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ReferenceResponseMany.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], ReferenceResponseMany.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included" }),
        __metadata("design:type", Object)
    ], ReferenceResponseMany.prototype, "included", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jsonapi" }),
        __metadata("design:type", ReferenceResponseManyJsonApi)
    ], ReferenceResponseMany.prototype, "jsonapi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ReferenceResponseManyToplevelLinks)
    ], ReferenceResponseMany.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ReferenceResponseManyResponseMeta)
    ], ReferenceResponseMany.prototype, "meta", void 0);
    return ReferenceResponseMany;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseMany = ReferenceResponseMany;
