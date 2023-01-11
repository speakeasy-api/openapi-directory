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
exports.ListManifestsResponseBody = exports.ListManifestsResponseBodyManifest = exports.ListManifestsResponseBodyManifestManifestDownload = exports.ListManifestsResponseBodyPaginationLink = void 0;
var utils_1 = require("../../../internal/utils");
var link_1 = require("./link");
var optionallink_1 = require("./optionallink");
// ListManifestsResponseBodyPaginationLink
/**
 * Helpful links to other pages of results
**/
var ListManifestsResponseBodyPaginationLink = /** @class */ (function (_super) {
    __extends(ListManifestsResponseBodyPaginationLink, _super);
    function ListManifestsResponseBodyPaginationLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", link_1.Link)
    ], ListManifestsResponseBodyPaginationLink.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", link_1.Link)
    ], ListManifestsResponseBodyPaginationLink.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", optionallink_1.OptionalLink)
    ], ListManifestsResponseBodyPaginationLink.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", optionallink_1.OptionalLink)
    ], ListManifestsResponseBodyPaginationLink.prototype, "prev", void 0);
    return ListManifestsResponseBodyPaginationLink;
}(utils_1.SpeakeasyBase));
exports.ListManifestsResponseBodyPaginationLink = ListManifestsResponseBodyPaginationLink;
// ListManifestsResponseBodyManifestManifestDownload
/**
 * Object containing the href link to download the manifest file
**/
var ListManifestsResponseBodyManifestManifestDownload = /** @class */ (function (_super) {
    __extends(ListManifestsResponseBodyManifestManifestDownload, _super);
    function ListManifestsResponseBodyManifestManifestDownload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ListManifestsResponseBodyManifestManifestDownload.prototype, "href", void 0);
    return ListManifestsResponseBodyManifestManifestDownload;
}(utils_1.SpeakeasyBase));
exports.ListManifestsResponseBodyManifestManifestDownload = ListManifestsResponseBodyManifestManifestDownload;
// ListManifestsResponseBodyManifest
/**
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 * number of shipments
 *
**/
var ListManifestsResponseBodyManifest = /** @class */ (function (_super) {
    __extends(ListManifestsResponseBodyManifest, _super);
    function ListManifestsResponseBodyManifest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", Object)
    ], ListManifestsResponseBodyManifest.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListManifestsResponseBodyManifest.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_id" }),
        __metadata("design:type", Object)
    ], ListManifestsResponseBodyManifest.prototype, "formId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manifest_download" }),
        __metadata("design:type", ListManifestsResponseBodyManifestManifestDownload)
    ], ListManifestsResponseBodyManifest.prototype, "manifestDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manifest_id" }),
        __metadata("design:type", Object)
    ], ListManifestsResponseBodyManifest.prototype, "manifestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Date)
    ], ListManifestsResponseBodyManifest.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipments" }),
        __metadata("design:type", Number)
    ], ListManifestsResponseBodyManifest.prototype, "shipments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submission_id" }),
        __metadata("design:type", String)
    ], ListManifestsResponseBodyManifest.prototype, "submissionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouse_id" }),
        __metadata("design:type", Object)
    ], ListManifestsResponseBodyManifest.prototype, "warehouseId", void 0);
    return ListManifestsResponseBodyManifest;
}(utils_1.SpeakeasyBase));
exports.ListManifestsResponseBodyManifest = ListManifestsResponseBodyManifest;
// ListManifestsResponseBody
/**
 * A list manifests response body
**/
var ListManifestsResponseBody = /** @class */ (function (_super) {
    __extends(ListManifestsResponseBody, _super);
    function ListManifestsResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListManifestsResponseBodyPaginationLink)
    ], ListManifestsResponseBody.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manifests", elemType: ListManifestsResponseBodyManifest }),
        __metadata("design:type", Array)
    ], ListManifestsResponseBody.prototype, "manifests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListManifestsResponseBody.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], ListManifestsResponseBody.prototype, "pages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListManifestsResponseBody.prototype, "total", void 0);
    return ListManifestsResponseBody;
}(utils_1.SpeakeasyBase));
exports.ListManifestsResponseBody = ListManifestsResponseBody;
