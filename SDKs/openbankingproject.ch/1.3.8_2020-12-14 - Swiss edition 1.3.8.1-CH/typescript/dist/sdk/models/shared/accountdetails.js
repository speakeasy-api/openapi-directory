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
exports.AccountDetails = exports.AccountDetailsUsageEnum = void 0;
var utils_1 = require("../../../internal/utils");
var hreftype_1 = require("./hreftype");
var balance_1 = require("./balance");
var accountstatusenum_1 = require("./accountstatusenum");
var AccountDetailsUsageEnum;
(function (AccountDetailsUsageEnum) {
    AccountDetailsUsageEnum["Priv"] = "PRIV";
    AccountDetailsUsageEnum["Orga"] = "ORGA";
})(AccountDetailsUsageEnum = exports.AccountDetailsUsageEnum || (exports.AccountDetailsUsageEnum = {}));
// AccountDetails
/**
 * The ASPSP shall give at least one of the account reference identifiers:
 *   - iban
 *   - bban
 *   - pan
 *   - maskedPan
 *   - msisdn
 * If the account is a multicurrency account currency code in "currency" is set to "XXX".
 *
**/
var AccountDetails = /** @class */ (function (_super) {
    __extends(AccountDetails, _super);
    function AccountDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links", elemType: hreftype_1.HrefType }),
        __metadata("design:type", Object)
    ], AccountDetails.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=balances", elemType: balance_1.Balance }),
        __metadata("design:type", Array)
    ], AccountDetails.prototype, "balances", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bban" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "bban", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bic" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "bic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cashAccountType" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "cashAccountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iban" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "iban", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=linkedAccounts" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "linkedAccounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=msisdn" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "msisdn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ownerName" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "ownerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "product", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceId" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "resourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=usage" }),
        __metadata("design:type", String)
    ], AccountDetails.prototype, "usage", void 0);
    return AccountDetails;
}(utils_1.SpeakeasyBase));
exports.AccountDetails = AccountDetails;
