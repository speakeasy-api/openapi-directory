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
exports.CreateManifestResponseBody = exports.CreateManifestResponseBodyManifestDownload = void 0;
var utils_1 = require("../../../internal/utils");
var manifest_1 = require("./manifest");
// CreateManifestResponseBodyManifestDownload
/**
 * Object containing the href link to download the manifest file
**/
var CreateManifestResponseBodyManifestDownload = /** @class */ (function (_super) {
    __extends(CreateManifestResponseBodyManifestDownload, _super);
    function CreateManifestResponseBodyManifestDownload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], CreateManifestResponseBodyManifestDownload.prototype, "href", void 0);
    return CreateManifestResponseBodyManifestDownload;
}(utils_1.SpeakeasyBase));
exports.CreateManifestResponseBodyManifestDownload = CreateManifestResponseBodyManifestDownload;
// CreateManifestResponseBody
/**
 * Deprecated manifest resource
**/
var CreateManifestResponseBody = /** @class */ (function (_super) {
    __extends(CreateManifestResponseBody, _super);
    function CreateManifestResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", Object)
    ], CreateManifestResponseBody.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], CreateManifestResponseBody.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_id" }),
        __metadata("design:type", Object)
    ], CreateManifestResponseBody.prototype, "formId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manifest_download" }),
        __metadata("design:type", CreateManifestResponseBodyManifestDownload)
    ], CreateManifestResponseBody.prototype, "manifestDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manifest_id" }),
        __metadata("design:type", Object)
    ], CreateManifestResponseBody.prototype, "manifestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manifests", elemType: manifest_1.Manifest }),
        __metadata("design:type", Array)
    ], CreateManifestResponseBody.prototype, "manifests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Date)
    ], CreateManifestResponseBody.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipments" }),
        __metadata("design:type", Number)
    ], CreateManifestResponseBody.prototype, "shipments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submission_id" }),
        __metadata("design:type", String)
    ], CreateManifestResponseBody.prototype, "submissionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouse_id" }),
        __metadata("design:type", Object)
    ], CreateManifestResponseBody.prototype, "warehouseId", void 0);
    return CreateManifestResponseBody;
}(utils_1.SpeakeasyBase));
exports.CreateManifestResponseBody = CreateManifestResponseBody;
