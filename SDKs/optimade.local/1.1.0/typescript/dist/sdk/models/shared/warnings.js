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
exports.Warnings = exports.WarningsErrorSource = exports.WarningsErrorLinks = void 0;
var utils_1 = require("../../../internal/utils");
// WarningsErrorLinks
/**
 * A Links object specific to Error objects
**/
var WarningsErrorLinks = /** @class */ (function (_super) {
    __extends(WarningsErrorLinks, _super);
    function WarningsErrorLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=about" }),
        __metadata("design:type", Object)
    ], WarningsErrorLinks.prototype, "about", void 0);
    return WarningsErrorLinks;
}(utils_1.SpeakeasyBase));
exports.WarningsErrorLinks = WarningsErrorLinks;
// WarningsErrorSource
/**
 * an object containing references to the source of the error
**/
var WarningsErrorSource = /** @class */ (function (_super) {
    __extends(WarningsErrorSource, _super);
    function WarningsErrorSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], WarningsErrorSource.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], WarningsErrorSource.prototype, "pointer", void 0);
    return WarningsErrorSource;
}(utils_1.SpeakeasyBase));
exports.WarningsErrorSource = WarningsErrorSource;
// Warnings
/**
 * OPTIMADE-specific warning class based on OPTIMADE-specific JSON API Error.
 *
 * From the specification:
 *
 * A warning resource object is defined similarly to a JSON API error object, but MUST also include the field type, which MUST have the value "warning".
 * The field detail MUST be present and SHOULD contain a non-critical message, e.g., reporting unrecognized search attributes or deprecated features.
 *
 * Note: Must be named "Warnings", since "Warning" is a built-in Python class.
**/
var Warnings = /** @class */ (function (_super) {
    __extends(Warnings, _super);
    function Warnings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Warnings.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Warnings.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Warnings.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", WarningsErrorLinks)
    ], Warnings.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", Object)
    ], Warnings.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", WarningsErrorSource)
    ], Warnings.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Warnings.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Warnings.prototype, "type", void 0);
    return Warnings;
}(utils_1.SpeakeasyBase));
exports.Warnings = Warnings;
