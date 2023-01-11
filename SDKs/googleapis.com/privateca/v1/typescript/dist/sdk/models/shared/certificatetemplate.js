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
exports.CertificateTemplate = exports.CertificateTemplateInput = void 0;
var utils_1 = require("../../../internal/utils");
var certificateidentityconstraints_1 = require("./certificateidentityconstraints");
var certificateextensionconstraints_1 = require("./certificateextensionconstraints");
var x509parameters_1 = require("./x509parameters");
// CertificateTemplateInput
/**
 * A CertificateTemplate refers to a managed template for certificate issuance.
**/
var CertificateTemplateInput = /** @class */ (function (_super) {
    __extends(CertificateTemplateInput, _super);
    function CertificateTemplateInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CertificateTemplateInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identityConstraints" }),
        __metadata("design:type", certificateidentityconstraints_1.CertificateIdentityConstraints)
    ], CertificateTemplateInput.prototype, "identityConstraints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], CertificateTemplateInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=passthroughExtensions" }),
        __metadata("design:type", certificateextensionconstraints_1.CertificateExtensionConstraints)
    ], CertificateTemplateInput.prototype, "passthroughExtensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=predefinedValues" }),
        __metadata("design:type", x509parameters_1.X509Parameters)
    ], CertificateTemplateInput.prototype, "predefinedValues", void 0);
    return CertificateTemplateInput;
}(utils_1.SpeakeasyBase));
exports.CertificateTemplateInput = CertificateTemplateInput;
// CertificateTemplate
/**
 * A CertificateTemplate refers to a managed template for certificate issuance.
**/
var CertificateTemplate = /** @class */ (function (_super) {
    __extends(CertificateTemplate, _super);
    function CertificateTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], CertificateTemplate.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CertificateTemplate.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identityConstraints" }),
        __metadata("design:type", certificateidentityconstraints_1.CertificateIdentityConstraints)
    ], CertificateTemplate.prototype, "identityConstraints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], CertificateTemplate.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CertificateTemplate.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=passthroughExtensions" }),
        __metadata("design:type", certificateextensionconstraints_1.CertificateExtensionConstraints)
    ], CertificateTemplate.prototype, "passthroughExtensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=predefinedValues" }),
        __metadata("design:type", x509parameters_1.X509Parameters)
    ], CertificateTemplate.prototype, "predefinedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], CertificateTemplate.prototype, "updateTime", void 0);
    return CertificateTemplate;
}(utils_1.SpeakeasyBase));
exports.CertificateTemplate = CertificateTemplate;
