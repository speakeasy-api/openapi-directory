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
exports.CreateBatchResponseBody = exports.CreateBatchResponseBodyLabelDownload = exports.CreateBatchResponseBodyOptionalLink = void 0;
var utils_1 = require("../../../internal/utils");
var optionallink_1 = require("./optionallink");
// CreateBatchResponseBodyOptionalLink
/**
 * A link to a related resource, or an empty object if there is no resource to link to
**/
var CreateBatchResponseBodyOptionalLink = /** @class */ (function (_super) {
    __extends(CreateBatchResponseBodyOptionalLink, _super);
    function CreateBatchResponseBodyOptionalLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], CreateBatchResponseBodyOptionalLink.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateBatchResponseBodyOptionalLink.prototype, "type", void 0);
    return CreateBatchResponseBodyOptionalLink;
}(utils_1.SpeakeasyBase));
exports.CreateBatchResponseBodyOptionalLink = CreateBatchResponseBodyOptionalLink;
// CreateBatchResponseBodyLabelDownload
/**
 * Reference to the various downloadable file formats for the generated label
 *
**/
var CreateBatchResponseBodyLabelDownload = /** @class */ (function (_super) {
    __extends(CreateBatchResponseBodyLabelDownload, _super);
    function CreateBatchResponseBodyLabelDownload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], CreateBatchResponseBodyLabelDownload.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pdf" }),
        __metadata("design:type", String)
    ], CreateBatchResponseBodyLabelDownload.prototype, "pdf", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=png" }),
        __metadata("design:type", String)
    ], CreateBatchResponseBodyLabelDownload.prototype, "png", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zpl" }),
        __metadata("design:type", String)
    ], CreateBatchResponseBodyLabelDownload.prototype, "zpl", void 0);
    return CreateBatchResponseBodyLabelDownload;
}(utils_1.SpeakeasyBase));
exports.CreateBatchResponseBodyLabelDownload = CreateBatchResponseBodyLabelDownload;
// CreateBatchResponseBody
/**
 * Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or
 * thousands of labels at a time.
 *
**/
var CreateBatchResponseBody = /** @class */ (function (_super) {
    __extends(CreateBatchResponseBody, _super);
    function CreateBatchResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_errors_url" }),
        __metadata("design:type", CreateBatchResponseBodyOptionalLink)
    ], CreateBatchResponseBody.prototype, "batchErrorsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_id" }),
        __metadata("design:type", Object)
    ], CreateBatchResponseBody.prototype, "batchId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_labels_url" }),
        __metadata("design:type", optionallink_1.OptionalLink)
    ], CreateBatchResponseBody.prototype, "batchLabelsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_notes" }),
        __metadata("design:type", String)
    ], CreateBatchResponseBody.prototype, "batchNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batch_shipments_url" }),
        __metadata("design:type", optionallink_1.OptionalLink)
    ], CreateBatchResponseBody.prototype, "batchShipmentsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed" }),
        __metadata("design:type", Number)
    ], CreateBatchResponseBody.prototype, "completed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], CreateBatchResponseBody.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Object)
    ], CreateBatchResponseBody.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors" }),
        __metadata("design:type", Number)
    ], CreateBatchResponseBody.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_batch_id" }),
        __metadata("design:type", String)
    ], CreateBatchResponseBody.prototype, "externalBatchId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_download" }),
        __metadata("design:type", CreateBatchResponseBodyOptionalLink)
    ], CreateBatchResponseBody.prototype, "formDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forms" }),
        __metadata("design:type", Number)
    ], CreateBatchResponseBody.prototype, "forms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_download" }),
        __metadata("design:type", CreateBatchResponseBodyLabelDownload)
    ], CreateBatchResponseBody.prototype, "labelDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_format" }),
        __metadata("design:type", Object)
    ], CreateBatchResponseBody.prototype, "labelFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label_layout" }),
        __metadata("design:type", Object)
    ], CreateBatchResponseBody.prototype, "labelLayout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processed_at" }),
        __metadata("design:type", Object)
    ], CreateBatchResponseBody.prototype, "processedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Object)
    ], CreateBatchResponseBody.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings" }),
        __metadata("design:type", Number)
    ], CreateBatchResponseBody.prototype, "warnings", void 0);
    return CreateBatchResponseBody;
}(utils_1.SpeakeasyBase));
exports.CreateBatchResponseBody = CreateBatchResponseBody;
