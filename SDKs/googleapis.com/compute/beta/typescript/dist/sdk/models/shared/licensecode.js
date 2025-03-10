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
exports.LicenseCode = exports.LicenseCodeStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var licensecodelicensealias_1 = require("./licensecodelicensealias");
var class_transformer_1 = require("class-transformer");
/**
 * [Output Only] Current state of this License Code.
 */
var LicenseCodeStateEnum;
(function (LicenseCodeStateEnum) {
    LicenseCodeStateEnum["Disabled"] = "DISABLED";
    LicenseCodeStateEnum["Enabled"] = "ENABLED";
    LicenseCodeStateEnum["Restricted"] = "RESTRICTED";
    LicenseCodeStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    LicenseCodeStateEnum["Terminated"] = "TERMINATED";
})(LicenseCodeStateEnum = exports.LicenseCodeStateEnum || (exports.LicenseCodeStateEnum = {}));
/**
 * Represents a License Code resource. A License Code is a unique identifier used to represent a license resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
 */
var LicenseCode = /** @class */ (function (_super) {
    __extends(LicenseCode, _super);
    function LicenseCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creationTimestamp" }),
        __metadata("design:type", String)
    ], LicenseCode.prototype, "creationTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], LicenseCode.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], LicenseCode.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], LicenseCode.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: licensecodelicensealias_1.LicenseCodeLicenseAlias }),
        (0, class_transformer_1.Expose)({ name: "licenseAlias" }),
        (0, class_transformer_1.Type)(function () { return licensecodelicensealias_1.LicenseCodeLicenseAlias; }),
        __metadata("design:type", Array)
    ], LicenseCode.prototype, "licenseAlias", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], LicenseCode.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "selfLink" }),
        __metadata("design:type", String)
    ], LicenseCode.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state" }),
        __metadata("design:type", String)
    ], LicenseCode.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "transferable" }),
        __metadata("design:type", Boolean)
    ], LicenseCode.prototype, "transferable", void 0);
    return LicenseCode;
}(utils_1.SpeakeasyBase));
exports.LicenseCode = LicenseCode;
