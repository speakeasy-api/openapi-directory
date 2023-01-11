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
exports.GoogleAnalyticsAdminV1betaAccountInput = exports.GoogleAnalyticsAdminV1betaAccount = void 0;
var utils_1 = require("../../../internal/utils");
// GoogleAnalyticsAdminV1betaAccount
/**
 * A resource message representing a Google Analytics account.
**/
var GoogleAnalyticsAdminV1betaAccount = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1betaAccount, _super);
    function GoogleAnalyticsAdminV1betaAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaAccount.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1betaAccount.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaAccount.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaAccount.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regionCode" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaAccount.prototype, "regionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaAccount.prototype, "updateTime", void 0);
    return GoogleAnalyticsAdminV1betaAccount;
}(utils_1.SpeakeasyBase));
exports.GoogleAnalyticsAdminV1betaAccount = GoogleAnalyticsAdminV1betaAccount;
// GoogleAnalyticsAdminV1betaAccountInput
/**
 * A resource message representing a Google Analytics account.
**/
var GoogleAnalyticsAdminV1betaAccountInput = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1betaAccountInput, _super);
    function GoogleAnalyticsAdminV1betaAccountInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaAccountInput.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regionCode" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaAccountInput.prototype, "regionCode", void 0);
    return GoogleAnalyticsAdminV1betaAccountInput;
}(utils_1.SpeakeasyBase));
exports.GoogleAnalyticsAdminV1betaAccountInput = GoogleAnalyticsAdminV1betaAccountInput;
