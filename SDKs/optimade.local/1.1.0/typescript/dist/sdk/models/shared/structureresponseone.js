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
exports.StructureResponseOne = exports.StructureResponseOneResponseMeta = exports.StructureResponseOneResponseMetaResponseMetaQuery = exports.StructureResponseOneResponseMetaProvider = exports.StructureResponseOneResponseMetaImplementation = exports.StructureResponseOneResponseMetaImplementationImplementationMaintainer = exports.StructureResponseOneToplevelLinks = exports.StructureResponseOneJsonApi = void 0;
var utils_1 = require("../../../internal/utils");
var warnings_1 = require("./warnings");
var error_1 = require("./error");
// StructureResponseOneJsonApi
/**
 * An object describing the server's implementation
**/
var StructureResponseOneJsonApi = /** @class */ (function (_super) {
    __extends(StructureResponseOneJsonApi, _super);
    function StructureResponseOneJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], StructureResponseOneJsonApi.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], StructureResponseOneJsonApi.prototype, "version", void 0);
    return StructureResponseOneJsonApi;
}(utils_1.SpeakeasyBase));
exports.StructureResponseOneJsonApi = StructureResponseOneJsonApi;
// StructureResponseOneToplevelLinks
/**
 * A set of Links objects, possibly including pagination
**/
var StructureResponseOneToplevelLinks = /** @class */ (function (_super) {
    __extends(StructureResponseOneToplevelLinks, _super);
    function StructureResponseOneToplevelLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", Object)
    ], StructureResponseOneToplevelLinks.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", Object)
    ], StructureResponseOneToplevelLinks.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", Object)
    ], StructureResponseOneToplevelLinks.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", Object)
    ], StructureResponseOneToplevelLinks.prototype, "prev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], StructureResponseOneToplevelLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], StructureResponseOneToplevelLinks.prototype, "self", void 0);
    return StructureResponseOneToplevelLinks;
}(utils_1.SpeakeasyBase));
exports.StructureResponseOneToplevelLinks = StructureResponseOneToplevelLinks;
// StructureResponseOneResponseMetaImplementationImplementationMaintainer
/**
 * Details about the maintainer of the implementation
**/
var StructureResponseOneResponseMetaImplementationImplementationMaintainer = /** @class */ (function (_super) {
    __extends(StructureResponseOneResponseMetaImplementationImplementationMaintainer, _super);
    function StructureResponseOneResponseMetaImplementationImplementationMaintainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], StructureResponseOneResponseMetaImplementationImplementationMaintainer.prototype, "email", void 0);
    return StructureResponseOneResponseMetaImplementationImplementationMaintainer;
}(utils_1.SpeakeasyBase));
exports.StructureResponseOneResponseMetaImplementationImplementationMaintainer = StructureResponseOneResponseMetaImplementationImplementationMaintainer;
// StructureResponseOneResponseMetaImplementation
/**
 * Information on the server implementation
**/
var StructureResponseOneResponseMetaImplementation = /** @class */ (function (_super) {
    __extends(StructureResponseOneResponseMetaImplementation, _super);
    function StructureResponseOneResponseMetaImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], StructureResponseOneResponseMetaImplementation.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_tracker" }),
        __metadata("design:type", Object)
    ], StructureResponseOneResponseMetaImplementation.prototype, "issueTracker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintainer" }),
        __metadata("design:type", StructureResponseOneResponseMetaImplementationImplementationMaintainer)
    ], StructureResponseOneResponseMetaImplementation.prototype, "maintainer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], StructureResponseOneResponseMetaImplementation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_url" }),
        __metadata("design:type", Object)
    ], StructureResponseOneResponseMetaImplementation.prototype, "sourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], StructureResponseOneResponseMetaImplementation.prototype, "version", void 0);
    return StructureResponseOneResponseMetaImplementation;
}(utils_1.SpeakeasyBase));
exports.StructureResponseOneResponseMetaImplementation = StructureResponseOneResponseMetaImplementation;
// StructureResponseOneResponseMetaProvider
/**
 * Information on the database provider of the implementation.
**/
var StructureResponseOneResponseMetaProvider = /** @class */ (function (_super) {
    __extends(StructureResponseOneResponseMetaProvider, _super);
    function StructureResponseOneResponseMetaProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], StructureResponseOneResponseMetaProvider.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], StructureResponseOneResponseMetaProvider.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], StructureResponseOneResponseMetaProvider.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], StructureResponseOneResponseMetaProvider.prototype, "prefix", void 0);
    return StructureResponseOneResponseMetaProvider;
}(utils_1.SpeakeasyBase));
exports.StructureResponseOneResponseMetaProvider = StructureResponseOneResponseMetaProvider;
// StructureResponseOneResponseMetaResponseMetaQuery
/**
 * Information on the query that was requested.
**/
var StructureResponseOneResponseMetaResponseMetaQuery = /** @class */ (function (_super) {
    __extends(StructureResponseOneResponseMetaResponseMetaQuery, _super);
    function StructureResponseOneResponseMetaResponseMetaQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=representation" }),
        __metadata("design:type", String)
    ], StructureResponseOneResponseMetaResponseMetaQuery.prototype, "representation", void 0);
    return StructureResponseOneResponseMetaResponseMetaQuery;
}(utils_1.SpeakeasyBase));
exports.StructureResponseOneResponseMetaResponseMetaQuery = StructureResponseOneResponseMetaResponseMetaQuery;
// StructureResponseOneResponseMeta
/**
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 *
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
var StructureResponseOneResponseMeta = /** @class */ (function (_super) {
    __extends(StructureResponseOneResponseMeta, _super);
    function StructureResponseOneResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], StructureResponseOneResponseMeta.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_available" }),
        __metadata("design:type", Number)
    ], StructureResponseOneResponseMeta.prototype, "dataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_returned" }),
        __metadata("design:type", Number)
    ], StructureResponseOneResponseMeta.prototype, "dataReturned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=implementation" }),
        __metadata("design:type", StructureResponseOneResponseMetaImplementation)
    ], StructureResponseOneResponseMeta.prototype, "implementation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_id" }),
        __metadata("design:type", String)
    ], StructureResponseOneResponseMeta.prototype, "lastId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=more_data_available" }),
        __metadata("design:type", Boolean)
    ], StructureResponseOneResponseMeta.prototype, "moreDataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", StructureResponseOneResponseMetaProvider)
    ], StructureResponseOneResponseMeta.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", StructureResponseOneResponseMetaResponseMetaQuery)
    ], StructureResponseOneResponseMeta.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_message" }),
        __metadata("design:type", String)
    ], StructureResponseOneResponseMeta.prototype, "responseMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", Object)
    ], StructureResponseOneResponseMeta.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_stamp" }),
        __metadata("design:type", Date)
    ], StructureResponseOneResponseMeta.prototype, "timeStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings", elemType: warnings_1.Warnings }),
        __metadata("design:type", Array)
    ], StructureResponseOneResponseMeta.prototype, "warnings", void 0);
    return StructureResponseOneResponseMeta;
}(utils_1.SpeakeasyBase));
exports.StructureResponseOneResponseMeta = StructureResponseOneResponseMeta;
// StructureResponseOne
/**
 * errors are not allowed
**/
var StructureResponseOne = /** @class */ (function (_super) {
    __extends(StructureResponseOne, _super);
    function StructureResponseOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], StructureResponseOne.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], StructureResponseOne.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included" }),
        __metadata("design:type", Object)
    ], StructureResponseOne.prototype, "included", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jsonapi" }),
        __metadata("design:type", StructureResponseOneJsonApi)
    ], StructureResponseOne.prototype, "jsonapi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", StructureResponseOneToplevelLinks)
    ], StructureResponseOne.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", StructureResponseOneResponseMeta)
    ], StructureResponseOne.prototype, "meta", void 0);
    return StructureResponseOne;
}(utils_1.SpeakeasyBase));
exports.StructureResponseOne = StructureResponseOne;
