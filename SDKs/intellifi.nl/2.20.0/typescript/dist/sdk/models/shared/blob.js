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
exports.BlobInput = exports.Blob = void 0;
var utils_1 = require("../../../internal/utils");
var Blob = /** @class */ (function (_super) {
    __extends(Blob, _super);
    function Blob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blob_key" }),
        __metadata("design:type", String)
    ], Blob.prototype, "blobKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], Blob.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], Blob.prototype, "downloadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], Blob.prototype, "filename", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], Blob.prototype, "hash", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Blob.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_created" }),
        __metadata("design:type", String)
    ], Blob.prototype, "timeCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_last_accessed" }),
        __metadata("design:type", String)
    ], Blob.prototype, "timeLastAccessed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=time_updated" }),
        __metadata("design:type", String)
    ], Blob.prototype, "timeUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload_url" }),
        __metadata("design:type", String)
    ], Blob.prototype, "uploadUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Blob.prototype, "url", void 0);
    return Blob;
}(utils_1.SpeakeasyBase));
exports.Blob = Blob;
var BlobInput = /** @class */ (function (_super) {
    __extends(BlobInput, _super);
    function BlobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blob_key" }),
        __metadata("design:type", String)
    ], BlobInput.prototype, "blobKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content_type" }),
        __metadata("design:type", String)
    ], BlobInput.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filename" }),
        __metadata("design:type", String)
    ], BlobInput.prototype, "filename", void 0);
    return BlobInput;
}(utils_1.SpeakeasyBase));
exports.BlobInput = BlobInput;
