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
exports.GetBatchByIdResponseBody = exports.GetBatchByIdResponseBodyLabelDownload = exports.GetBatchByIdResponseBodyOptionalLink = void 0;
var utils_1 = require("../../../internal/utils");
var optionallink_1 = require("./optionallink");
// GetBatchByIdResponseBodyOptionalLink
/**
 * A link to a related resource, or an empty object if there is no resource to link to
**/
var GetBatchByIdResponseBodyOptionalLink = /** @class */ (function (_super) {
    __extends(GetBatchByIdResponseBodyOptionalLink, _super);
    function GetBatchByIdResponseBodyOptionalLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetBatchByIdResponseBodyOptionalLink.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetBatchByIdResponseBodyOptionalLink.prototype, "type", void 0);
    return GetBatchByIdResponseBodyOptionalLink;
}(utils_1.SpeakeasyBase));
exports.GetBatchByIdResponseBodyOptionalLink = GetBatchByIdResponseBodyOptionalLink;
// GetBatchByIdResponseBodyLabelDownload
/**
 * Reference to the various downloadable file formats for the generated label
 *
**/
var GetBatchByIdResponseBodyLabelDownload = /** @class */ (function (_super) {
    __extends(GetBatchByIdResponseBodyLabelDownload, _super);
    function GetBatchByIdResponseBodyLabelDownload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetBatchByIdResponseBodyLabelDownload.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pdf" }),
        __metadata("design:type", String)
    ], GetBatchByIdResponseBodyLabelDownload.prototype, "pdf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=png" }),
        __metadata("design:type", String)
    ], GetBatchByIdResponseBodyLabelDownload.prototype, "png", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zpl" }),
        __metadata("design:type", String)
    ], GetBatchByIdResponseBodyLabelDownload.prototype, "zpl", void 0);
    return GetBatchByIdResponseBodyLabelDownload;
}(utils_1.SpeakeasyBase));
exports.GetBatchByIdResponseBodyLabelDownload = GetBatchByIdResponseBodyLabelDownload;
// GetBatchByIdResponseBody
/**
 * Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
 * thousands of labels at a time.
 *
**/
var GetBatchByIdResponseBody = /** @class */ (function (_super) {
    __extends(GetBatchByIdResponseBody, _super);
    function GetBatchByIdResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_errors_url" }),
        __metadata("design:type", GetBatchByIdResponseBodyOptionalLink)
    ], GetBatchByIdResponseBody.prototype, "batchErrorsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_id" }),
        __metadata("design:type", Object)
    ], GetBatchByIdResponseBody.prototype, "batchId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_labels_url" }),
        __metadata("design:type", optionallink_1.OptionalLink)
    ], GetBatchByIdResponseBody.prototype, "batchLabelsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_notes" }),
        __metadata("design:type", String)
    ], GetBatchByIdResponseBody.prototype, "batchNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_shipments_url" }),
        __metadata("design:type", optionallink_1.OptionalLink)
    ], GetBatchByIdResponseBody.prototype, "batchShipmentsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed" }),
        __metadata("design:type", Number)
    ], GetBatchByIdResponseBody.prototype, "completed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], GetBatchByIdResponseBody.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Object)
    ], GetBatchByIdResponseBody.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", Number)
    ], GetBatchByIdResponseBody.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_batch_id" }),
        __metadata("design:type", String)
    ], GetBatchByIdResponseBody.prototype, "externalBatchId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_download" }),
        __metadata("design:type", GetBatchByIdResponseBodyOptionalLink)
    ], GetBatchByIdResponseBody.prototype, "formDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forms" }),
        __metadata("design:type", Number)
    ], GetBatchByIdResponseBody.prototype, "forms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_download" }),
        __metadata("design:type", GetBatchByIdResponseBodyLabelDownload)
    ], GetBatchByIdResponseBody.prototype, "labelDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_format" }),
        __metadata("design:type", Object)
    ], GetBatchByIdResponseBody.prototype, "labelFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_layout" }),
        __metadata("design:type", Object)
    ], GetBatchByIdResponseBody.prototype, "labelLayout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processed_at" }),
        __metadata("design:type", Object)
    ], GetBatchByIdResponseBody.prototype, "processedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Object)
    ], GetBatchByIdResponseBody.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings" }),
        __metadata("design:type", Number)
    ], GetBatchByIdResponseBody.prototype, "warnings", void 0);
    return GetBatchByIdResponseBody;
}(utils_1.SpeakeasyBase));
exports.GetBatchByIdResponseBody = GetBatchByIdResponseBody;
