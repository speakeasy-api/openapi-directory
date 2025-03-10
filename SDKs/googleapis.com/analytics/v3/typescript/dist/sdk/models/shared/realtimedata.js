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
exports.RealtimeData = exports.RealtimeDataQuery = exports.RealtimeDataProfileInfo = exports.RealtimeDataColumnHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var RealtimeDataColumnHeaders = /** @class */ (function (_super) {
    __extends(RealtimeDataColumnHeaders, _super);
    function RealtimeDataColumnHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "columnType" }),
        __metadata("design:type", String)
    ], RealtimeDataColumnHeaders.prototype, "columnType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "dataType" }),
        __metadata("design:type", String)
    ], RealtimeDataColumnHeaders.prototype, "dataType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], RealtimeDataColumnHeaders.prototype, "name", void 0);
    return RealtimeDataColumnHeaders;
}(utils_1.SpeakeasyBase));
exports.RealtimeDataColumnHeaders = RealtimeDataColumnHeaders;
/**
 * Information for the view (profile), for which the real time data was requested.
 */
var RealtimeDataProfileInfo = /** @class */ (function (_super) {
    __extends(RealtimeDataProfileInfo, _super);
    function RealtimeDataProfileInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "accountId" }),
        __metadata("design:type", String)
    ], RealtimeDataProfileInfo.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "internalWebPropertyId" }),
        __metadata("design:type", String)
    ], RealtimeDataProfileInfo.prototype, "internalWebPropertyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "profileId" }),
        __metadata("design:type", String)
    ], RealtimeDataProfileInfo.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "profileName" }),
        __metadata("design:type", String)
    ], RealtimeDataProfileInfo.prototype, "profileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "tableId" }),
        __metadata("design:type", String)
    ], RealtimeDataProfileInfo.prototype, "tableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "webPropertyId" }),
        __metadata("design:type", String)
    ], RealtimeDataProfileInfo.prototype, "webPropertyId", void 0);
    return RealtimeDataProfileInfo;
}(utils_1.SpeakeasyBase));
exports.RealtimeDataProfileInfo = RealtimeDataProfileInfo;
/**
 * Real time data request query parameters.
 */
var RealtimeDataQuery = /** @class */ (function (_super) {
    __extends(RealtimeDataQuery, _super);
    function RealtimeDataQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "dimensions" }),
        __metadata("design:type", String)
    ], RealtimeDataQuery.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filters" }),
        __metadata("design:type", String)
    ], RealtimeDataQuery.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ids" }),
        __metadata("design:type", String)
    ], RealtimeDataQuery.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "max-results" }),
        __metadata("design:type", Number)
    ], RealtimeDataQuery.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "metrics" }),
        __metadata("design:type", Array)
    ], RealtimeDataQuery.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sort" }),
        __metadata("design:type", Array)
    ], RealtimeDataQuery.prototype, "sort", void 0);
    return RealtimeDataQuery;
}(utils_1.SpeakeasyBase));
exports.RealtimeDataQuery = RealtimeDataQuery;
/**
 * Real time data for a given view (profile).
 */
var RealtimeData = /** @class */ (function (_super) {
    __extends(RealtimeData, _super);
    function RealtimeData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: RealtimeDataColumnHeaders }),
        (0, class_transformer_1.Expose)({ name: "columnHeaders" }),
        (0, class_transformer_1.Type)(function () { return RealtimeDataColumnHeaders; }),
        __metadata("design:type", Array)
    ], RealtimeData.prototype, "columnHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], RealtimeData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], RealtimeData.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "profileInfo" }),
        (0, class_transformer_1.Type)(function () { return RealtimeDataProfileInfo; }),
        __metadata("design:type", RealtimeDataProfileInfo)
    ], RealtimeData.prototype, "profileInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "query" }),
        (0, class_transformer_1.Type)(function () { return RealtimeDataQuery; }),
        __metadata("design:type", RealtimeDataQuery)
    ], RealtimeData.prototype, "query", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "rows" }),
        __metadata("design:type", Array)
    ], RealtimeData.prototype, "rows", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "selfLink" }),
        __metadata("design:type", String)
    ], RealtimeData.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "totalResults" }),
        __metadata("design:type", Number)
    ], RealtimeData.prototype, "totalResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "totalsForAllResults" }),
        __metadata("design:type", Object)
    ], RealtimeData.prototype, "totalsForAllResults", void 0);
    return RealtimeData;
}(utils_1.SpeakeasyBase));
exports.RealtimeData = RealtimeData;
