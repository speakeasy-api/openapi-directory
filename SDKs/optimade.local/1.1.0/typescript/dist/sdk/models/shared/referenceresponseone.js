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
exports.ReferenceResponseOne = exports.ReferenceResponseOneResponseMeta = exports.ReferenceResponseOneResponseMetaResponseMetaQuery = exports.ReferenceResponseOneResponseMetaProvider = exports.ReferenceResponseOneResponseMetaImplementation = exports.ReferenceResponseOneResponseMetaImplementationImplementationMaintainer = exports.ReferenceResponseOneToplevelLinks = exports.ReferenceResponseOneJsonApi = void 0;
var utils_1 = require("../../../internal/utils");
var warnings_1 = require("./warnings");
var error_1 = require("./error");
// ReferenceResponseOneJsonApi
/**
 * An object describing the server's implementation
**/
var ReferenceResponseOneJsonApi = /** @class */ (function (_super) {
    __extends(ReferenceResponseOneJsonApi, _super);
    function ReferenceResponseOneJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneJsonApi.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneJsonApi.prototype, "version", void 0);
    return ReferenceResponseOneJsonApi;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseOneJsonApi = ReferenceResponseOneJsonApi;
// ReferenceResponseOneToplevelLinks
/**
 * A set of Links objects, possibly including pagination
**/
var ReferenceResponseOneToplevelLinks = /** @class */ (function (_super) {
    __extends(ReferenceResponseOneToplevelLinks, _super);
    function ReferenceResponseOneToplevelLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneToplevelLinks.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneToplevelLinks.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneToplevelLinks.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneToplevelLinks.prototype, "prev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneToplevelLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneToplevelLinks.prototype, "self", void 0);
    return ReferenceResponseOneToplevelLinks;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseOneToplevelLinks = ReferenceResponseOneToplevelLinks;
// ReferenceResponseOneResponseMetaImplementationImplementationMaintainer
/**
 * Details about the maintainer of the implementation
**/
var ReferenceResponseOneResponseMetaImplementationImplementationMaintainer = /** @class */ (function (_super) {
    __extends(ReferenceResponseOneResponseMetaImplementationImplementationMaintainer, _super);
    function ReferenceResponseOneResponseMetaImplementationImplementationMaintainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneResponseMetaImplementationImplementationMaintainer.prototype, "email", void 0);
    return ReferenceResponseOneResponseMetaImplementationImplementationMaintainer;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseOneResponseMetaImplementationImplementationMaintainer = ReferenceResponseOneResponseMetaImplementationImplementationMaintainer;
// ReferenceResponseOneResponseMetaImplementation
/**
 * Information on the server implementation
**/
var ReferenceResponseOneResponseMetaImplementation = /** @class */ (function (_super) {
    __extends(ReferenceResponseOneResponseMetaImplementation, _super);
    function ReferenceResponseOneResponseMetaImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneResponseMetaImplementation.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_tracker" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneResponseMetaImplementation.prototype, "issueTracker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintainer" }),
        __metadata("design:type", ReferenceResponseOneResponseMetaImplementationImplementationMaintainer)
    ], ReferenceResponseOneResponseMetaImplementation.prototype, "maintainer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneResponseMetaImplementation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_url" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneResponseMetaImplementation.prototype, "sourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneResponseMetaImplementation.prototype, "version", void 0);
    return ReferenceResponseOneResponseMetaImplementation;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseOneResponseMetaImplementation = ReferenceResponseOneResponseMetaImplementation;
// ReferenceResponseOneResponseMetaProvider
/**
 * Information on the database provider of the implementation.
**/
var ReferenceResponseOneResponseMetaProvider = /** @class */ (function (_super) {
    __extends(ReferenceResponseOneResponseMetaProvider, _super);
    function ReferenceResponseOneResponseMetaProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneResponseMetaProvider.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneResponseMetaProvider.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneResponseMetaProvider.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneResponseMetaProvider.prototype, "prefix", void 0);
    return ReferenceResponseOneResponseMetaProvider;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseOneResponseMetaProvider = ReferenceResponseOneResponseMetaProvider;
// ReferenceResponseOneResponseMetaResponseMetaQuery
/**
 * Information on the query that was requested.
**/
var ReferenceResponseOneResponseMetaResponseMetaQuery = /** @class */ (function (_super) {
    __extends(ReferenceResponseOneResponseMetaResponseMetaQuery, _super);
    function ReferenceResponseOneResponseMetaResponseMetaQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=representation" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneResponseMetaResponseMetaQuery.prototype, "representation", void 0);
    return ReferenceResponseOneResponseMetaResponseMetaQuery;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseOneResponseMetaResponseMetaQuery = ReferenceResponseOneResponseMetaResponseMetaQuery;
// ReferenceResponseOneResponseMeta
/**
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 *
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
var ReferenceResponseOneResponseMeta = /** @class */ (function (_super) {
    __extends(ReferenceResponseOneResponseMeta, _super);
    function ReferenceResponseOneResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneResponseMeta.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_available" }),
        __metadata("design:type", Number)
    ], ReferenceResponseOneResponseMeta.prototype, "dataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_returned" }),
        __metadata("design:type", Number)
    ], ReferenceResponseOneResponseMeta.prototype, "dataReturned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=implementation" }),
        __metadata("design:type", ReferenceResponseOneResponseMetaImplementation)
    ], ReferenceResponseOneResponseMeta.prototype, "implementation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_id" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneResponseMeta.prototype, "lastId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=more_data_available" }),
        __metadata("design:type", Boolean)
    ], ReferenceResponseOneResponseMeta.prototype, "moreDataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", ReferenceResponseOneResponseMetaProvider)
    ], ReferenceResponseOneResponseMeta.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", ReferenceResponseOneResponseMetaResponseMetaQuery)
    ], ReferenceResponseOneResponseMeta.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_message" }),
        __metadata("design:type", String)
    ], ReferenceResponseOneResponseMeta.prototype, "responseMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOneResponseMeta.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_stamp" }),
        __metadata("design:type", Date)
    ], ReferenceResponseOneResponseMeta.prototype, "timeStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings", elemType: warnings_1.Warnings }),
        __metadata("design:type", Array)
    ], ReferenceResponseOneResponseMeta.prototype, "warnings", void 0);
    return ReferenceResponseOneResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseOneResponseMeta = ReferenceResponseOneResponseMeta;
// ReferenceResponseOne
/**
 * errors are not allowed
**/
var ReferenceResponseOne = /** @class */ (function (_super) {
    __extends(ReferenceResponseOne, _super);
    function ReferenceResponseOne() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOne.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], ReferenceResponseOne.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included" }),
        __metadata("design:type", Object)
    ], ReferenceResponseOne.prototype, "included", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jsonapi" }),
        __metadata("design:type", ReferenceResponseOneJsonApi)
    ], ReferenceResponseOne.prototype, "jsonapi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ReferenceResponseOneToplevelLinks)
    ], ReferenceResponseOne.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ReferenceResponseOneResponseMeta)
    ], ReferenceResponseOne.prototype, "meta", void 0);
    return ReferenceResponseOne;
}(utils_1.SpeakeasyBase));
exports.ReferenceResponseOne = ReferenceResponseOne;
