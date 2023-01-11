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
exports.GetCallsResponse = exports.GetCallsResponseLinks = exports.GetCallsResponseLinksSelf = exports.GetCallsResponseEmbedded = void 0;
var utils_1 = require("../../../internal/utils");
var getcallresponse_1 = require("./getcallresponse");
// GetCallsResponseEmbedded
/**
 * A list of call objects. See the [get details of a specific call](#getCall) response fields for a description of the nested objects
**/
var GetCallsResponseEmbedded = /** @class */ (function (_super) {
    __extends(GetCallsResponseEmbedded, _super);
    function GetCallsResponseEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calls", elemType: getcallresponse_1.GetCallResponse }),
        __metadata("design:type", Array)
    ], GetCallsResponseEmbedded.prototype, "calls", void 0);
    return GetCallsResponseEmbedded;
}(utils_1.SpeakeasyBase));
exports.GetCallsResponseEmbedded = GetCallsResponseEmbedded;
var GetCallsResponseLinksSelf = /** @class */ (function (_super) {
    __extends(GetCallsResponseLinksSelf, _super);
    function GetCallsResponseLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetCallsResponseLinksSelf.prototype, "href", void 0);
    return GetCallsResponseLinksSelf;
}(utils_1.SpeakeasyBase));
exports.GetCallsResponseLinksSelf = GetCallsResponseLinksSelf;
var GetCallsResponseLinks = /** @class */ (function (_super) {
    __extends(GetCallsResponseLinks, _super);
    function GetCallsResponseLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", GetCallsResponseLinksSelf)
    ], GetCallsResponseLinks.prototype, "self", void 0);
    return GetCallsResponseLinks;
}(utils_1.SpeakeasyBase));
exports.GetCallsResponseLinks = GetCallsResponseLinks;
var GetCallsResponse = /** @class */ (function (_super) {
    __extends(GetCallsResponse, _super);
    function GetCallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_embedded" }),
        __metadata("design:type", GetCallsResponseEmbedded)
    ], GetCallsResponse.prototype, "embedded", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", GetCallsResponseLinks)
    ], GetCallsResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetCallsResponse.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetCallsResponse.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=record_index" }),
        __metadata("design:type", Number)
    ], GetCallsResponse.prototype, "recordIndex", void 0);
    return GetCallsResponse;
}(utils_1.SpeakeasyBase));
exports.GetCallsResponse = GetCallsResponse;
