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
exports.ApkManifest = void 0;
var utils_1 = require("../../../internal/utils");
var intentfilter_1 = require("./intentfilter");
var metadata_1 = require("./metadata");
var usesfeature_1 = require("./usesfeature");
// ApkManifest
/**
 * An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
**/
var ApkManifest = /** @class */ (function (_super) {
    __extends(ApkManifest, _super);
    function ApkManifest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applicationLabel" }),
        __metadata("design:type", String)
    ], ApkManifest.prototype, "applicationLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=intentFilters", elemType: intentfilter_1.IntentFilter }),
        __metadata("design:type", Array)
    ], ApkManifest.prototype, "intentFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxSdkVersion" }),
        __metadata("design:type", Number)
    ], ApkManifest.prototype, "maxSdkVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata", elemType: metadata_1.Metadata }),
        __metadata("design:type", Array)
    ], ApkManifest.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minSdkVersion" }),
        __metadata("design:type", Number)
    ], ApkManifest.prototype, "minSdkVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], ApkManifest.prototype, "packageName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetSdkVersion" }),
        __metadata("design:type", Number)
    ], ApkManifest.prototype, "targetSdkVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usesFeature", elemType: usesfeature_1.UsesFeature }),
        __metadata("design:type", Array)
    ], ApkManifest.prototype, "usesFeature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usesPermission" }),
        __metadata("design:type", Array)
    ], ApkManifest.prototype, "usesPermission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=versionCode" }),
        __metadata("design:type", String)
    ], ApkManifest.prototype, "versionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=versionName" }),
        __metadata("design:type", String)
    ], ApkManifest.prototype, "versionName", void 0);
    return ApkManifest;
}(utils_1.SpeakeasyBase));
exports.ApkManifest = ApkManifest;
