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
exports.UpdateUpsSettingsRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var upsinvoice_1 = require("./upsinvoice");
var ancillaryserviceendorsementenum_1 = require("./ancillaryserviceendorsementenum");
var upspickuptypeenum_1 = require("./upspickuptypeenum");
// UpdateUpsSettingsRequestBody
/**
 * UPS account settings
**/
var UpdateUpsSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateUpsSettingsRequestBody, _super);
    function UpdateUpsSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_postal_code" }),
        __metadata("design:type", String)
    ], UpdateUpsSettingsRequestBody.prototype, "accountPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoice" }),
        __metadata("design:type", upsinvoice_1.UpsInvoice)
    ], UpdateUpsSettingsRequestBody.prototype, "invoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_primary_account" }),
        __metadata("design:type", Boolean)
    ], UpdateUpsSettingsRequestBody.prototype, "isPrimaryAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mail_innovations_cost_center" }),
        __metadata("design:type", String)
    ], UpdateUpsSettingsRequestBody.prototype, "mailInnovationsCostCenter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mail_innovations_endorsement" }),
        __metadata("design:type", String)
    ], UpdateUpsSettingsRequestBody.prototype, "mailInnovationsEndorsement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], UpdateUpsSettingsRequestBody.prototype, "nickname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pickup_type" }),
        __metadata("design:type", String)
    ], UpdateUpsSettingsRequestBody.prototype, "pickupType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_carbon_neutral_shipping_program" }),
        __metadata("design:type", Boolean)
    ], UpdateUpsSettingsRequestBody.prototype, "useCarbonNeutralShippingProgram", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_consolidation_services" }),
        __metadata("design:type", Boolean)
    ], UpdateUpsSettingsRequestBody.prototype, "useConsolidationServices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_ground_freight_pricing" }),
        __metadata("design:type", Boolean)
    ], UpdateUpsSettingsRequestBody.prototype, "useGroundFreightPricing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_negotiated_rates" }),
        __metadata("design:type", Boolean)
    ], UpdateUpsSettingsRequestBody.prototype, "useNegotiatedRates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_order_number_on_mail_innovations_labels" }),
        __metadata("design:type", Boolean)
    ], UpdateUpsSettingsRequestBody.prototype, "useOrderNumberOnMailInnovationsLabels", void 0);
    return UpdateUpsSettingsRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateUpsSettingsRequestBody = UpdateUpsSettingsRequestBody;
