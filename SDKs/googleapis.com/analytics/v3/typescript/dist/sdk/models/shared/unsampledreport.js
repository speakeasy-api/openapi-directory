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
exports.UnsampledReportInput = exports.UnsampledReport = exports.UnsampledReportDriveDownloadDetails = exports.UnsampledReportCloudStorageDownloadDetails = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * Download details for a file stored in Google Cloud Storage.
 */
var UnsampledReportCloudStorageDownloadDetails = /** @class */ (function (_super) {
    __extends(UnsampledReportCloudStorageDownloadDetails, _super);
    function UnsampledReportCloudStorageDownloadDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "bucketId" }),
        __metadata("design:type", String)
    ], UnsampledReportCloudStorageDownloadDetails.prototype, "bucketId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "objectId" }),
        __metadata("design:type", String)
    ], UnsampledReportCloudStorageDownloadDetails.prototype, "objectId", void 0);
    return UnsampledReportCloudStorageDownloadDetails;
}(utils_1.SpeakeasyBase));
exports.UnsampledReportCloudStorageDownloadDetails = UnsampledReportCloudStorageDownloadDetails;
/**
 * Download details for a file stored in Google Drive.
 */
var UnsampledReportDriveDownloadDetails = /** @class */ (function (_super) {
    __extends(UnsampledReportDriveDownloadDetails, _super);
    function UnsampledReportDriveDownloadDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "documentId" }),
        __metadata("design:type", String)
    ], UnsampledReportDriveDownloadDetails.prototype, "documentId", void 0);
    return UnsampledReportDriveDownloadDetails;
}(utils_1.SpeakeasyBase));
exports.UnsampledReportDriveDownloadDetails = UnsampledReportDriveDownloadDetails;
/**
 * JSON template for Analytics unsampled report resource.
 */
var UnsampledReport = /** @class */ (function (_super) {
    __extends(UnsampledReport, _super);
    function UnsampledReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "accountId" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cloudStorageDownloadDetails" }),
        (0, class_transformer_1.Type)(function () { return UnsampledReportCloudStorageDownloadDetails; }),
        __metadata("design:type", UnsampledReportCloudStorageDownloadDetails)
    ], UnsampledReport.prototype, "cloudStorageDownloadDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "created" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], UnsampledReport.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "dimensions" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "downloadType" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "downloadType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "driveDownloadDetails" }),
        (0, class_transformer_1.Type)(function () { return UnsampledReportDriveDownloadDetails; }),
        __metadata("design:type", UnsampledReportDriveDownloadDetails)
    ], UnsampledReport.prototype, "driveDownloadDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "end-date" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filters" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "metrics" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "profileId" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "segment" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "segment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "selfLink" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "start-date" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updated" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], UnsampledReport.prototype, "updated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "webPropertyId" }),
        __metadata("design:type", String)
    ], UnsampledReport.prototype, "webPropertyId", void 0);
    return UnsampledReport;
}(utils_1.SpeakeasyBase));
exports.UnsampledReport = UnsampledReport;
/**
 * JSON template for Analytics unsampled report resource.
 */
var UnsampledReportInput = /** @class */ (function (_super) {
    __extends(UnsampledReportInput, _super);
    function UnsampledReportInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "accountId" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "dimensions" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "end-date" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filters" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "metrics" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "profileId" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "profileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "segment" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "segment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "start-date" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "webPropertyId" }),
        __metadata("design:type", String)
    ], UnsampledReportInput.prototype, "webPropertyId", void 0);
    return UnsampledReportInput;
}(utils_1.SpeakeasyBase));
exports.UnsampledReportInput = UnsampledReportInput;
