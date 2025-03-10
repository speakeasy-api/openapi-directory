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
exports.DriveItemReference = void 0;
var utils_1 = require("../../../internal/utils");
var drivefolder_1 = require("./drivefolder");
var folder_1 = require("./folder");
var class_transformer_1 = require("class-transformer");
/**
 * A lightweight reference to a Drive item, such as a file or folder.
 */
var DriveItemReference = /** @class */ (function (_super) {
    __extends(DriveItemReference, _super);
    function DriveItemReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "driveFile" }),
        __metadata("design:type", Object)
    ], DriveItemReference.prototype, "driveFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "driveFolder" }),
        (0, class_transformer_1.Type)(function () { return drivefolder_1.DriveFolder; }),
        __metadata("design:type", drivefolder_1.DriveFolder)
    ], DriveItemReference.prototype, "driveFolder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "file" }),
        __metadata("design:type", Object)
    ], DriveItemReference.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "folder" }),
        (0, class_transformer_1.Type)(function () { return folder_1.Folder; }),
        __metadata("design:type", folder_1.Folder)
    ], DriveItemReference.prototype, "folder", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], DriveItemReference.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "title" }),
        __metadata("design:type", String)
    ], DriveItemReference.prototype, "title", void 0);
    return DriveItemReference;
}(utils_1.SpeakeasyBase));
exports.DriveItemReference = DriveItemReference;
