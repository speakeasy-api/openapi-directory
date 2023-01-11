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
exports.Error409Piis = exports.Error409PiisAdditionalErrors = void 0;
var utils_1 = require("../../../internal/utils");
var messagecode409piisenum_1 = require("./messagecode409piisenum");
var hreftype_1 = require("./hreftype");
// Error409PiisAdditionalErrors
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
var Error409PiisAdditionalErrors = /** @class */ (function (_super) {
    __extends(Error409PiisAdditionalErrors, _super);
    function Error409PiisAdditionalErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Error409PiisAdditionalErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Error409PiisAdditionalErrors.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Error409PiisAdditionalErrors.prototype, "title", void 0);
    return Error409PiisAdditionalErrors;
}(utils_1.SpeakeasyBase));
exports.Error409PiisAdditionalErrors = Error409PiisAdditionalErrors;
// Error409Piis
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 409 for PIIS.
 *
**/
var Error409Piis = /** @class */ (function (_super) {
    __extends(Error409Piis, _super);
    function Error409Piis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links", elemType: hreftype_1.HrefType }),
        __metadata("design:type", Object)
    ], Error409Piis.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalErrors", elemType: Error409PiisAdditionalErrors }),
        __metadata("design:type", Array)
    ], Error409Piis.prototype, "additionalErrors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Error409Piis.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], Error409Piis.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Error409Piis.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Error409Piis.prototype, "type", void 0);
    return Error409Piis;
}(utils_1.SpeakeasyBase));
exports.Error409Piis = Error409Piis;
