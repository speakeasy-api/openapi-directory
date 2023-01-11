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
exports.GetManifestByIdResponseBody = exports.GetManifestByIdResponseBodyManifestDownload = void 0;
var utils_1 = require("../../../internal/utils");
// GetManifestByIdResponseBodyManifestDownload
/**
 * Object containing the href link to download the manifest file
**/
var GetManifestByIdResponseBodyManifestDownload = /** @class */ (function (_super) {
    __extends(GetManifestByIdResponseBodyManifestDownload, _super);
    function GetManifestByIdResponseBodyManifestDownload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], GetManifestByIdResponseBodyManifestDownload.prototype, "href", void 0);
    return GetManifestByIdResponseBodyManifestDownload;
}(utils_1.SpeakeasyBase));
exports.GetManifestByIdResponseBodyManifestDownload = GetManifestByIdResponseBodyManifestDownload;
// GetManifestByIdResponseBody
/**
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 * number of shipments
 *
**/
var GetManifestByIdResponseBody = /** @class */ (function (_super) {
    __extends(GetManifestByIdResponseBody, _super);
    function GetManifestByIdResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", Object)
    ], GetManifestByIdResponseBody.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], GetManifestByIdResponseBody.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_id" }),
        __metadata("design:type", Object)
    ], GetManifestByIdResponseBody.prototype, "formId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manifest_download" }),
        __metadata("design:type", GetManifestByIdResponseBodyManifestDownload)
    ], GetManifestByIdResponseBody.prototype, "manifestDownload", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manifest_id" }),
        __metadata("design:type", Object)
    ], GetManifestByIdResponseBody.prototype, "manifestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Date)
    ], GetManifestByIdResponseBody.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipments" }),
        __metadata("design:type", Number)
    ], GetManifestByIdResponseBody.prototype, "shipments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=submission_id" }),
        __metadata("design:type", String)
    ], GetManifestByIdResponseBody.prototype, "submissionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouse_id" }),
        __metadata("design:type", Object)
    ], GetManifestByIdResponseBody.prototype, "warehouseId", void 0);
    return GetManifestByIdResponseBody;
}(utils_1.SpeakeasyBase));
exports.GetManifestByIdResponseBody = GetManifestByIdResponseBody;
