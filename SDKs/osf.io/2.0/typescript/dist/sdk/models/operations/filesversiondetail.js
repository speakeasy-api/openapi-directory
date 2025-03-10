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
exports.FilesVersionDetailResponse = exports.FilesVersionDetailFileVersion = exports.FilesVersionDetailFileVersionLinks = exports.FilesVersionDetailFileVersionAttributes = exports.FilesVersionDetailRequest = void 0;
var utils_1 = require("../../../internal/utils");
var FilesVersionDetailRequest = /** @class */ (function (_super) {
    __extends(FilesVersionDetailRequest, _super);
    function FilesVersionDetailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=file_id",
        }),
        __metadata("design:type", String)
    ], FilesVersionDetailRequest.prototype, "fileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=version_id",
        }),
        __metadata("design:type", String)
    ], FilesVersionDetailRequest.prototype, "versionId", void 0);
    return FilesVersionDetailRequest;
}(utils_1.SpeakeasyBase));
exports.FilesVersionDetailRequest = FilesVersionDetailRequest;
/**
 * The properties of the file versions entity.
 */
var FilesVersionDetailFileVersionAttributes = /** @class */ (function (_super) {
    __extends(FilesVersionDetailFileVersionAttributes, _super);
    function FilesVersionDetailFileVersionAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FilesVersionDetailFileVersionAttributes.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], FilesVersionDetailFileVersionAttributes.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FilesVersionDetailFileVersionAttributes.prototype, "size", void 0);
    return FilesVersionDetailFileVersionAttributes;
}(utils_1.SpeakeasyBase));
exports.FilesVersionDetailFileVersionAttributes = FilesVersionDetailFileVersionAttributes;
/**
 * Links to alternative representations of the file version entity.
 */
var FilesVersionDetailFileVersionLinks = /** @class */ (function (_super) {
    __extends(FilesVersionDetailFileVersionLinks, _super);
    function FilesVersionDetailFileVersionLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FilesVersionDetailFileVersionLinks.prototype, "html", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FilesVersionDetailFileVersionLinks.prototype, "self", void 0);
    return FilesVersionDetailFileVersionLinks;
}(utils_1.SpeakeasyBase));
exports.FilesVersionDetailFileVersionLinks = FilesVersionDetailFileVersionLinks;
var FilesVersionDetailFileVersion = /** @class */ (function (_super) {
    __extends(FilesVersionDetailFileVersion, _super);
    function FilesVersionDetailFileVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FilesVersionDetailFileVersionAttributes)
    ], FilesVersionDetailFileVersion.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FilesVersionDetailFileVersion.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FilesVersionDetailFileVersionLinks)
    ], FilesVersionDetailFileVersion.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FilesVersionDetailFileVersion.prototype, "type", void 0);
    return FilesVersionDetailFileVersion;
}(utils_1.SpeakeasyBase));
exports.FilesVersionDetailFileVersion = FilesVersionDetailFileVersion;
var FilesVersionDetailResponse = /** @class */ (function (_super) {
    __extends(FilesVersionDetailResponse, _super);
    function FilesVersionDetailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], FilesVersionDetailResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FilesVersionDetailResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FilesVersionDetailResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], FilesVersionDetailResponse.prototype, "rawResponse", void 0);
    return FilesVersionDetailResponse;
}(utils_1.SpeakeasyBase));
exports.FilesVersionDetailResponse = FilesVersionDetailResponse;
