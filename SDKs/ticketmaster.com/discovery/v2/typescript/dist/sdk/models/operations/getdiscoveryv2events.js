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
exports.GetDiscoveryV2EventsResponse = exports.GetDiscoveryV2EventsRequest = exports.GetDiscoveryV2EventsUnitEnum = exports.GetDiscoveryV2EventsSourceEnum = exports.GetDiscoveryV2EventsIncludeTestEnum = exports.GetDiscoveryV2EventsIncludeTbdEnum = exports.GetDiscoveryV2EventsIncludeTbaEnum = exports.GetDiscoveryV2EventsIncludeSpellcheckEnum = exports.GetDiscoveryV2EventsIncludeLicensedContentEnum = void 0;
var utils_1 = require("../../../internal/utils");
/**
 * Yes if you want to display licensed content
 */
var GetDiscoveryV2EventsIncludeLicensedContentEnum;
(function (GetDiscoveryV2EventsIncludeLicensedContentEnum) {
    GetDiscoveryV2EventsIncludeLicensedContentEnum["Yes"] = "yes";
    GetDiscoveryV2EventsIncludeLicensedContentEnum["No"] = " no";
})(GetDiscoveryV2EventsIncludeLicensedContentEnum = exports.GetDiscoveryV2EventsIncludeLicensedContentEnum || (exports.GetDiscoveryV2EventsIncludeLicensedContentEnum = {}));
/**
 * yes, to include spell check suggestions in the response.
 */
var GetDiscoveryV2EventsIncludeSpellcheckEnum;
(function (GetDiscoveryV2EventsIncludeSpellcheckEnum) {
    GetDiscoveryV2EventsIncludeSpellcheckEnum["Yes"] = "yes";
    GetDiscoveryV2EventsIncludeSpellcheckEnum["No"] = " no";
})(GetDiscoveryV2EventsIncludeSpellcheckEnum = exports.GetDiscoveryV2EventsIncludeSpellcheckEnum || (exports.GetDiscoveryV2EventsIncludeSpellcheckEnum = {}));
/**
 * True, to include events with date to be announce (TBA)
 */
var GetDiscoveryV2EventsIncludeTbaEnum;
(function (GetDiscoveryV2EventsIncludeTbaEnum) {
    GetDiscoveryV2EventsIncludeTbaEnum["Yes"] = "yes";
    GetDiscoveryV2EventsIncludeTbaEnum["No"] = " no";
    GetDiscoveryV2EventsIncludeTbaEnum["Only"] = " only";
})(GetDiscoveryV2EventsIncludeTbaEnum = exports.GetDiscoveryV2EventsIncludeTbaEnum || (exports.GetDiscoveryV2EventsIncludeTbaEnum = {}));
/**
 * True, to include event with a date to be defined (TBD)
 */
var GetDiscoveryV2EventsIncludeTbdEnum;
(function (GetDiscoveryV2EventsIncludeTbdEnum) {
    GetDiscoveryV2EventsIncludeTbdEnum["Yes"] = "yes";
    GetDiscoveryV2EventsIncludeTbdEnum["No"] = " no";
    GetDiscoveryV2EventsIncludeTbdEnum["Only"] = " only";
})(GetDiscoveryV2EventsIncludeTbdEnum = exports.GetDiscoveryV2EventsIncludeTbdEnum || (exports.GetDiscoveryV2EventsIncludeTbdEnum = {}));
/**
 * True if you want to have entities flag as test in the response. Only, if you only wanted test entities
 */
var GetDiscoveryV2EventsIncludeTestEnum;
(function (GetDiscoveryV2EventsIncludeTestEnum) {
    GetDiscoveryV2EventsIncludeTestEnum["Yes"] = "yes";
    GetDiscoveryV2EventsIncludeTestEnum["No"] = " no";
    GetDiscoveryV2EventsIncludeTestEnum["Only"] = " only";
})(GetDiscoveryV2EventsIncludeTestEnum = exports.GetDiscoveryV2EventsIncludeTestEnum || (exports.GetDiscoveryV2EventsIncludeTestEnum = {}));
/**
 * Filter entities by its source name
 */
var GetDiscoveryV2EventsSourceEnum;
(function (GetDiscoveryV2EventsSourceEnum) {
    GetDiscoveryV2EventsSourceEnum["Ticketmaster"] = "ticketmaster";
    GetDiscoveryV2EventsSourceEnum["Universe"] = " universe";
    GetDiscoveryV2EventsSourceEnum["Frontgate"] = " frontgate";
    GetDiscoveryV2EventsSourceEnum["Tmr"] = " tmr";
})(GetDiscoveryV2EventsSourceEnum = exports.GetDiscoveryV2EventsSourceEnum || (exports.GetDiscoveryV2EventsSourceEnum = {}));
/**
 * Unit of the radius
 */
var GetDiscoveryV2EventsUnitEnum;
(function (GetDiscoveryV2EventsUnitEnum) {
    GetDiscoveryV2EventsUnitEnum["Miles"] = "miles";
    GetDiscoveryV2EventsUnitEnum["Km"] = "km";
})(GetDiscoveryV2EventsUnitEnum = exports.GetDiscoveryV2EventsUnitEnum || (exports.GetDiscoveryV2EventsUnitEnum = {}));
var GetDiscoveryV2EventsRequest = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2EventsRequest, _super);
    function GetDiscoveryV2EventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=attractionId",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "attractionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=city" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=classificationId",
        }),
        __metadata("design:type", Array)
    ], GetDiscoveryV2EventsRequest.prototype, "classificationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=classificationName",
        }),
        __metadata("design:type", Array)
    ], GetDiscoveryV2EventsRequest.prototype, "classificationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=clientVisibility",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "clientVisibility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=countryCode",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "countryCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dmaId" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "dmaId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=endDateTime",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "endDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=geoPoint",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "geoPoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=includeLicensedContent",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "includeLicensedContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=includeSpellcheck",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "includeSpellcheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=includeTBA",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "includeTBA", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=includeTBD",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "includeTBD", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=includeTest",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "includeTest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=keyword",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "keyword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=latlong",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "latlong", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=locale",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=marketId",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "marketId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=onsaleEndDateTime",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "onsaleEndDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=onsaleOnAfterStartDate",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "onsaleOnAfterStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=onsaleOnStartDate",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "onsaleOnStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=onsaleStartDateTime",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "onsaleStartDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=postalCode",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "postalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=promoterId",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "promoterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=radius",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "radius", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=segmentId",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "segmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=segmentName",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "segmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=source",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=startDateTime",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "startDateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=stateCode",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "stateCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=unit" }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "unit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=venueId",
        }),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsRequest.prototype, "venueId", void 0);
    return GetDiscoveryV2EventsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2EventsRequest = GetDiscoveryV2EventsRequest;
var GetDiscoveryV2EventsResponse = /** @class */ (function (_super) {
    __extends(GetDiscoveryV2EventsResponse, _super);
    function GetDiscoveryV2EventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDiscoveryV2EventsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDiscoveryV2EventsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDiscoveryV2EventsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDiscoveryV2EventsResponse.prototype, "rawResponse", void 0);
    return GetDiscoveryV2EventsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDiscoveryV2EventsResponse = GetDiscoveryV2EventsResponse;
