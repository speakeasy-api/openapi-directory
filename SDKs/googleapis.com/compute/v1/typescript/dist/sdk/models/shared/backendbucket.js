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
exports.BackendBucket = exports.BackendBucketCompressionModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var backendbucketcdnpolicy_1 = require("./backendbucketcdnpolicy");
var class_transformer_1 = require("class-transformer");
/**
 * Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header.
 */
var BackendBucketCompressionModeEnum;
(function (BackendBucketCompressionModeEnum) {
    BackendBucketCompressionModeEnum["Automatic"] = "AUTOMATIC";
    BackendBucketCompressionModeEnum["Disabled"] = "DISABLED";
})(BackendBucketCompressionModeEnum = exports.BackendBucketCompressionModeEnum || (exports.BackendBucketCompressionModeEnum = {}));
/**
 * Represents a Cloud Storage Bucket resource. This Cloud Storage bucket resource is referenced by a URL map of a load balancer. For more information, read Backend Buckets.
 */
var BackendBucket = /** @class */ (function (_super) {
    __extends(BackendBucket, _super);
    function BackendBucket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "bucketName" }),
        __metadata("design:type", String)
    ], BackendBucket.prototype, "bucketName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cdnPolicy" }),
        (0, class_transformer_1.Type)(function () { return backendbucketcdnpolicy_1.BackendBucketCdnPolicy; }),
        __metadata("design:type", backendbucketcdnpolicy_1.BackendBucketCdnPolicy)
    ], BackendBucket.prototype, "cdnPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "compressionMode" }),
        __metadata("design:type", String)
    ], BackendBucket.prototype, "compressionMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creationTimestamp" }),
        __metadata("design:type", String)
    ], BackendBucket.prototype, "creationTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "customResponseHeaders" }),
        __metadata("design:type", Array)
    ], BackendBucket.prototype, "customResponseHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], BackendBucket.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "edgeSecurityPolicy" }),
        __metadata("design:type", String)
    ], BackendBucket.prototype, "edgeSecurityPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "enableCdn" }),
        __metadata("design:type", Boolean)
    ], BackendBucket.prototype, "enableCdn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], BackendBucket.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], BackendBucket.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], BackendBucket.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "selfLink" }),
        __metadata("design:type", String)
    ], BackendBucket.prototype, "selfLink", void 0);
    return BackendBucket;
}(utils_1.SpeakeasyBase));
exports.BackendBucket = BackendBucket;
