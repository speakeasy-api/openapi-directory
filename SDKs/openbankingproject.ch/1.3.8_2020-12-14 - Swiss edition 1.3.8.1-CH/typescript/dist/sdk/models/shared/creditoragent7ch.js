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
exports.CreditorAgent7Ch = void 0;
var utils_1 = require("../../../internal/utils");
var postaladdress6ch_1 = require("./postaladdress6ch");
var institutionalidentification2_1 = require("./institutionalidentification2");
// CreditorAgent7Ch
/**
 * Reference to an creditorAgent by either
 *   * BIC, of the creditor bank, or
 *   * IID, of the creditor bank, or
 *   * IID and optional name and address of the creditor bank or
 *   * Name and address of the creditor bank
 * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH
 *
**/
var CreditorAgent7Ch = /** @class */ (function (_super) {
    __extends(CreditorAgent7Ch, _super);
    function CreditorAgent7Ch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", postaladdress6ch_1.PostalAddress6Ch)
    ], CreditorAgent7Ch.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bic" }),
        __metadata("design:type", String)
    ], CreditorAgent7Ch.prototype, "bic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iid" }),
        __metadata("design:type", institutionalidentification2_1.InstitutionalIdentification2)
    ], CreditorAgent7Ch.prototype, "iid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreditorAgent7Ch.prototype, "name", void 0);
    return CreditorAgent7Ch;
}(utils_1.SpeakeasyBase));
exports.CreditorAgent7Ch = CreditorAgent7Ch;
