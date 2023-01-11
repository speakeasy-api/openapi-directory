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
exports.SendRfpRequest = void 0;
var utils_1 = require("../../../internal/utils");
var contact_1 = require("./contact");
var money_1 = require("./money");
var criteriatargeting_1 = require("./criteriatargeting");
var inventorysizetargeting_1 = require("./inventorysizetargeting");
var preferreddealterms_1 = require("./preferreddealterms");
var programmaticguaranteedterms_1 = require("./programmaticguaranteedterms");
// SendRfpRequest
/**
 * Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.
**/
var SendRfpRequest = /** @class */ (function (_super) {
    __extends(SendRfpRequest, _super);
    function SendRfpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buyerContacts", elemType: contact_1.Contact }),
        __metadata("design:type", Array)
    ], SendRfpRequest.prototype, "buyerContacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client" }),
        __metadata("design:type", String)
    ], SendRfpRequest.prototype, "client", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SendRfpRequest.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=estimatedGrossSpend" }),
        __metadata("design:type", money_1.Money)
    ], SendRfpRequest.prototype, "estimatedGrossSpend", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flightEndTime" }),
        __metadata("design:type", String)
    ], SendRfpRequest.prototype, "flightEndTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flightStartTime" }),
        __metadata("design:type", String)
    ], SendRfpRequest.prototype, "flightStartTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=geoTargeting" }),
        __metadata("design:type", criteriatargeting_1.CriteriaTargeting)
    ], SendRfpRequest.prototype, "geoTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventorySizeTargeting" }),
        __metadata("design:type", inventorysizetargeting_1.InventorySizeTargeting)
    ], SendRfpRequest.prototype, "inventorySizeTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], SendRfpRequest.prototype, "note", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferredDealTerms" }),
        __metadata("design:type", preferreddealterms_1.PreferredDealTerms)
    ], SendRfpRequest.prototype, "preferredDealTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=programmaticGuaranteedTerms" }),
        __metadata("design:type", programmaticguaranteedterms_1.ProgrammaticGuaranteedTerms)
    ], SendRfpRequest.prototype, "programmaticGuaranteedTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisherProfile" }),
        __metadata("design:type", String)
    ], SendRfpRequest.prototype, "publisherProfile", void 0);
    return SendRfpRequest;
}(utils_1.SpeakeasyBase));
exports.SendRfpRequest = SendRfpRequest;
