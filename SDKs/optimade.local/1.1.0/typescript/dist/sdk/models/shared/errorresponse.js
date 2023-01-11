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
exports.ErrorResponse = exports.ErrorResponseResponseMeta = exports.ErrorResponseResponseMetaResponseMetaQuery = exports.ErrorResponseResponseMetaProvider = exports.ErrorResponseResponseMetaImplementation = exports.ErrorResponseResponseMetaImplementationImplementationMaintainer = exports.ErrorResponseToplevelLinks = exports.ErrorResponseJsonApi = void 0;
var utils_1 = require("../../../internal/utils");
var warnings_1 = require("./warnings");
var resource_1 = require("./resource");
var optimadeerror_1 = require("./optimadeerror");
// ErrorResponseJsonApi
/**
 * An object describing the server's implementation
**/
var ErrorResponseJsonApi = /** @class */ (function (_super) {
    __extends(ErrorResponseJsonApi, _super);
    function ErrorResponseJsonApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], ErrorResponseJsonApi.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ErrorResponseJsonApi.prototype, "version", void 0);
    return ErrorResponseJsonApi;
}(utils_1.SpeakeasyBase));
exports.ErrorResponseJsonApi = ErrorResponseJsonApi;
// ErrorResponseToplevelLinks
/**
 * A set of Links objects, possibly including pagination
**/
var ErrorResponseToplevelLinks = /** @class */ (function (_super) {
    __extends(ErrorResponseToplevelLinks, _super);
    function ErrorResponseToplevelLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", Object)
    ], ErrorResponseToplevelLinks.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", Object)
    ], ErrorResponseToplevelLinks.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", Object)
    ], ErrorResponseToplevelLinks.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", Object)
    ], ErrorResponseToplevelLinks.prototype, "prev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", Object)
    ], ErrorResponseToplevelLinks.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", Object)
    ], ErrorResponseToplevelLinks.prototype, "self", void 0);
    return ErrorResponseToplevelLinks;
}(utils_1.SpeakeasyBase));
exports.ErrorResponseToplevelLinks = ErrorResponseToplevelLinks;
// ErrorResponseResponseMetaImplementationImplementationMaintainer
/**
 * Details about the maintainer of the implementation
**/
var ErrorResponseResponseMetaImplementationImplementationMaintainer = /** @class */ (function (_super) {
    __extends(ErrorResponseResponseMetaImplementationImplementationMaintainer, _super);
    function ErrorResponseResponseMetaImplementationImplementationMaintainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ErrorResponseResponseMetaImplementationImplementationMaintainer.prototype, "email", void 0);
    return ErrorResponseResponseMetaImplementationImplementationMaintainer;
}(utils_1.SpeakeasyBase));
exports.ErrorResponseResponseMetaImplementationImplementationMaintainer = ErrorResponseResponseMetaImplementationImplementationMaintainer;
// ErrorResponseResponseMetaImplementation
/**
 * Information on the server implementation
**/
var ErrorResponseResponseMetaImplementation = /** @class */ (function (_super) {
    __extends(ErrorResponseResponseMetaImplementation, _super);
    function ErrorResponseResponseMetaImplementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], ErrorResponseResponseMetaImplementation.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue_tracker" }),
        __metadata("design:type", Object)
    ], ErrorResponseResponseMetaImplementation.prototype, "issueTracker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintainer" }),
        __metadata("design:type", ErrorResponseResponseMetaImplementationImplementationMaintainer)
    ], ErrorResponseResponseMetaImplementation.prototype, "maintainer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ErrorResponseResponseMetaImplementation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_url" }),
        __metadata("design:type", Object)
    ], ErrorResponseResponseMetaImplementation.prototype, "sourceUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ErrorResponseResponseMetaImplementation.prototype, "version", void 0);
    return ErrorResponseResponseMetaImplementation;
}(utils_1.SpeakeasyBase));
exports.ErrorResponseResponseMetaImplementation = ErrorResponseResponseMetaImplementation;
// ErrorResponseResponseMetaProvider
/**
 * Information on the database provider of the implementation.
**/
var ErrorResponseResponseMetaProvider = /** @class */ (function (_super) {
    __extends(ErrorResponseResponseMetaProvider, _super);
    function ErrorResponseResponseMetaProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ErrorResponseResponseMetaProvider.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=homepage" }),
        __metadata("design:type", Object)
    ], ErrorResponseResponseMetaProvider.prototype, "homepage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ErrorResponseResponseMetaProvider.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], ErrorResponseResponseMetaProvider.prototype, "prefix", void 0);
    return ErrorResponseResponseMetaProvider;
}(utils_1.SpeakeasyBase));
exports.ErrorResponseResponseMetaProvider = ErrorResponseResponseMetaProvider;
// ErrorResponseResponseMetaResponseMetaQuery
/**
 * Information on the query that was requested.
**/
var ErrorResponseResponseMetaResponseMetaQuery = /** @class */ (function (_super) {
    __extends(ErrorResponseResponseMetaResponseMetaQuery, _super);
    function ErrorResponseResponseMetaResponseMetaQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=representation" }),
        __metadata("design:type", String)
    ], ErrorResponseResponseMetaResponseMetaQuery.prototype, "representation", void 0);
    return ErrorResponseResponseMetaResponseMetaQuery;
}(utils_1.SpeakeasyBase));
exports.ErrorResponseResponseMetaResponseMetaQuery = ErrorResponseResponseMetaResponseMetaQuery;
// ErrorResponseResponseMeta
/**
 * A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
 * that contains JSON API meta objects of non-standard
 * meta-information.
 *
 * OPTIONAL additional information global to the query that is not
 * specified in this document, MUST start with a
 * database-provider-specific prefix.
**/
var ErrorResponseResponseMeta = /** @class */ (function (_super) {
    __extends(ErrorResponseResponseMeta, _super);
    function ErrorResponseResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=api_version" }),
        __metadata("design:type", String)
    ], ErrorResponseResponseMeta.prototype, "apiVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_available" }),
        __metadata("design:type", Number)
    ], ErrorResponseResponseMeta.prototype, "dataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_returned" }),
        __metadata("design:type", Number)
    ], ErrorResponseResponseMeta.prototype, "dataReturned", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=implementation" }),
        __metadata("design:type", ErrorResponseResponseMetaImplementation)
    ], ErrorResponseResponseMeta.prototype, "implementation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_id" }),
        __metadata("design:type", String)
    ], ErrorResponseResponseMeta.prototype, "lastId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=more_data_available" }),
        __metadata("design:type", Boolean)
    ], ErrorResponseResponseMeta.prototype, "moreDataAvailable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", ErrorResponseResponseMetaProvider)
    ], ErrorResponseResponseMeta.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=query" }),
        __metadata("design:type", ErrorResponseResponseMetaResponseMetaQuery)
    ], ErrorResponseResponseMeta.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=response_message" }),
        __metadata("design:type", String)
    ], ErrorResponseResponseMeta.prototype, "responseMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schema" }),
        __metadata("design:type", Object)
    ], ErrorResponseResponseMeta.prototype, "schema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_stamp" }),
        __metadata("design:type", Date)
    ], ErrorResponseResponseMeta.prototype, "timeStamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings", elemType: warnings_1.Warnings }),
        __metadata("design:type", Array)
    ], ErrorResponseResponseMeta.prototype, "warnings", void 0);
    return ErrorResponseResponseMeta;
}(utils_1.SpeakeasyBase));
exports.ErrorResponseResponseMeta = ErrorResponseResponseMeta;
// ErrorResponse
/**
 * errors MUST be present and data MUST be skipped
**/
var ErrorResponse = /** @class */ (function (_super) {
    __extends(ErrorResponse, _super);
    function ErrorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], ErrorResponse.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: optimadeerror_1.OptimadeError }),
        __metadata("design:type", Array)
    ], ErrorResponse.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=included", elemType: resource_1.Resource }),
        __metadata("design:type", Array)
    ], ErrorResponse.prototype, "included", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jsonapi" }),
        __metadata("design:type", ErrorResponseJsonApi)
    ], ErrorResponse.prototype, "jsonapi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ErrorResponseToplevelLinks)
    ], ErrorResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ErrorResponseResponseMeta)
    ], ErrorResponse.prototype, "meta", void 0);
    return ErrorResponse;
}(utils_1.SpeakeasyBase));
exports.ErrorResponse = ErrorResponse;
