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
exports.IssuancePolicy = void 0;
var utils_1 = require("../../../internal/utils");
var issuancemodes_1 = require("./issuancemodes");
var allowedkeytype_1 = require("./allowedkeytype");
var x509parameters_1 = require("./x509parameters");
var certificateidentityconstraints_1 = require("./certificateidentityconstraints");
var certificateextensionconstraints_1 = require("./certificateextensionconstraints");
// IssuancePolicy
/**
 * Defines controls over all certificate issuance within a CaPool.
**/
var IssuancePolicy = /** @class */ (function (_super) {
    __extends(IssuancePolicy, _super);
    function IssuancePolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedIssuanceModes" }),
        __metadata("design:type", issuancemodes_1.IssuanceModes)
    ], IssuancePolicy.prototype, "allowedIssuanceModes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedKeyTypes", elemType: allowedkeytype_1.AllowedKeyType }),
        __metadata("design:type", Array)
    ], IssuancePolicy.prototype, "allowedKeyTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=baselineValues" }),
        __metadata("design:type", x509parameters_1.X509Parameters)
    ], IssuancePolicy.prototype, "baselineValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identityConstraints" }),
        __metadata("design:type", certificateidentityconstraints_1.CertificateIdentityConstraints)
    ], IssuancePolicy.prototype, "identityConstraints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximumLifetime" }),
        __metadata("design:type", String)
    ], IssuancePolicy.prototype, "maximumLifetime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=passthroughExtensions" }),
        __metadata("design:type", certificateextensionconstraints_1.CertificateExtensionConstraints)
    ], IssuancePolicy.prototype, "passthroughExtensions", void 0);
    return IssuancePolicy;
}(utils_1.SpeakeasyBase));
exports.IssuancePolicy = IssuancePolicy;
