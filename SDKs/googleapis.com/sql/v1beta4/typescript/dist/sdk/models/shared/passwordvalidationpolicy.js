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
exports.PasswordValidationPolicy = exports.PasswordValidationPolicyComplexityEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * The complexity of the password.
 */
var PasswordValidationPolicyComplexityEnum;
(function (PasswordValidationPolicyComplexityEnum) {
    PasswordValidationPolicyComplexityEnum["ComplexityUnspecified"] = "COMPLEXITY_UNSPECIFIED";
    PasswordValidationPolicyComplexityEnum["ComplexityDefault"] = "COMPLEXITY_DEFAULT";
})(PasswordValidationPolicyComplexityEnum = exports.PasswordValidationPolicyComplexityEnum || (exports.PasswordValidationPolicyComplexityEnum = {}));
/**
 * Database instance local user password validation policy
 */
var PasswordValidationPolicy = /** @class */ (function (_super) {
    __extends(PasswordValidationPolicy, _super);
    function PasswordValidationPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "complexity" }),
        __metadata("design:type", String)
    ], PasswordValidationPolicy.prototype, "complexity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "disallowUsernameSubstring" }),
        __metadata("design:type", Boolean)
    ], PasswordValidationPolicy.prototype, "disallowUsernameSubstring", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "enablePasswordPolicy" }),
        __metadata("design:type", Boolean)
    ], PasswordValidationPolicy.prototype, "enablePasswordPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "minLength" }),
        __metadata("design:type", Number)
    ], PasswordValidationPolicy.prototype, "minLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "passwordChangeInterval" }),
        __metadata("design:type", String)
    ], PasswordValidationPolicy.prototype, "passwordChangeInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "reuseInterval" }),
        __metadata("design:type", Number)
    ], PasswordValidationPolicy.prototype, "reuseInterval", void 0);
    return PasswordValidationPolicy;
}(utils_1.SpeakeasyBase));
exports.PasswordValidationPolicy = PasswordValidationPolicy;
