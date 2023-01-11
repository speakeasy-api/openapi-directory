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
exports.UpdatePsuAuthenticationResponse = void 0;
var utils_1 = require("../../../internal/utils");
var hreftype_1 = require("./hreftype");
var challengedata_1 = require("./challengedata");
var chosenscamethod_1 = require("./chosenscamethod");
var amount_1 = require("./amount");
var authenticationobject_1 = require("./authenticationobject");
var scastatusenum_1 = require("./scastatusenum");
// UpdatePsuAuthenticationResponse
/**
 * Body of the JSON response for a successful update PSU authentication request.
**/
var UpdatePsuAuthenticationResponse = /** @class */ (function (_super) {
    __extends(UpdatePsuAuthenticationResponse, _super);
    function UpdatePsuAuthenticationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links", elemType: hreftype_1.HrefType }),
        __metadata("design:type", Object)
    ], UpdatePsuAuthenticationResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorisationId" }),
        __metadata("design:type", String)
    ], UpdatePsuAuthenticationResponse.prototype, "authorisationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=challengeData" }),
        __metadata("design:type", challengedata_1.ChallengeData)
    ], UpdatePsuAuthenticationResponse.prototype, "challengeData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chosenScaMethod" }),
        __metadata("design:type", chosenscamethod_1.ChosenScaMethod)
    ], UpdatePsuAuthenticationResponse.prototype, "chosenScaMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyConversionFees" }),
        __metadata("design:type", amount_1.Amount)
    ], UpdatePsuAuthenticationResponse.prototype, "currencyConversionFees", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=estimatedInterbankSettlementAmount" }),
        __metadata("design:type", amount_1.Amount)
    ], UpdatePsuAuthenticationResponse.prototype, "estimatedInterbankSettlementAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=estimatedTotalAmount" }),
        __metadata("design:type", amount_1.Amount)
    ], UpdatePsuAuthenticationResponse.prototype, "estimatedTotalAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=psuMessage" }),
        __metadata("design:type", String)
    ], UpdatePsuAuthenticationResponse.prototype, "psuMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scaMethods", elemType: authenticationobject_1.AuthenticationObject }),
        __metadata("design:type", Array)
    ], UpdatePsuAuthenticationResponse.prototype, "scaMethods", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scaStatus" }),
        __metadata("design:type", String)
    ], UpdatePsuAuthenticationResponse.prototype, "scaStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionFees" }),
        __metadata("design:type", amount_1.Amount)
    ], UpdatePsuAuthenticationResponse.prototype, "transactionFees", void 0);
    return UpdatePsuAuthenticationResponse;
}(utils_1.SpeakeasyBase));
exports.UpdatePsuAuthenticationResponse = UpdatePsuAuthenticationResponse;
