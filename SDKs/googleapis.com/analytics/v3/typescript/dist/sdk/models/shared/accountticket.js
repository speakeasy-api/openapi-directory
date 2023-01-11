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
exports.AccountTicket = exports.AccountTicketInput = void 0;
var utils_1 = require("../../../internal/utils");
var account1_1 = require("./account1");
var profile_1 = require("./profile");
var webproperty_1 = require("./webproperty");
var account_1 = require("./account");
var profile_2 = require("./profile");
var webproperty_2 = require("./webproperty");
// AccountTicketInput
/**
 * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
**/
var AccountTicketInput = /** @class */ (function (_super) {
    __extends(AccountTicketInput, _super);
    function AccountTicketInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", account1_1.Account1)
    ], AccountTicketInput.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountTicketInput.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AccountTicketInput.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", profile_1.ProfileInput)
    ], AccountTicketInput.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirectUri" }),
        __metadata("design:type", String)
    ], AccountTicketInput.prototype, "redirectUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webproperty" }),
        __metadata("design:type", webproperty_1.WebpropertyInput)
    ], AccountTicketInput.prototype, "webproperty", void 0);
    return AccountTicketInput;
}(utils_1.SpeakeasyBase));
exports.AccountTicketInput = AccountTicketInput;
// AccountTicket
/**
 * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
**/
var AccountTicket = /** @class */ (function (_super) {
    __extends(AccountTicket, _super);
    function AccountTicket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", account_1.Account)
    ], AccountTicket.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountTicket.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AccountTicket.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile" }),
        __metadata("design:type", profile_2.Profile)
    ], AccountTicket.prototype, "profile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=redirectUri" }),
        __metadata("design:type", String)
    ], AccountTicket.prototype, "redirectUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webproperty" }),
        __metadata("design:type", webproperty_2.Webproperty)
    ], AccountTicket.prototype, "webproperty", void 0);
    return AccountTicket;
}(utils_1.SpeakeasyBase));
exports.AccountTicket = AccountTicket;
