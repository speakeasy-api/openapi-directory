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
exports.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload = exports.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum = exports.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum;
(function (GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum) {
    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum["OfferingUnspecified"] = "OFFERING_UNSPECIFIED";
    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum["OfferingVasBundle"] = "OFFERING_VAS_BUNDLE";
    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum["OfferingVasStandalone"] = "OFFERING_VAS_STANDALONE";
    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum["OfferingHardBundle"] = "OFFERING_HARD_BUNDLE";
    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum["OfferingSoftBundle"] = "OFFERING_SOFT_BUNDLE";
})(GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum = exports.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum || (exports.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadOfferingEnum = {}));
var GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum;
(function (GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum) {
    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum["ChannelUnspecified"] = "CHANNEL_UNSPECIFIED";
    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum["ChannelRetail"] = "CHANNEL_RETAIL";
    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum["ChannelOnlineWeb"] = "CHANNEL_ONLINE_WEB";
    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum["ChannelOnlineAndroidApp"] = "CHANNEL_ONLINE_ANDROID_APP";
    GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum["ChannelOnlineIosApp"] = "CHANNEL_ONLINE_IOS_APP";
})(GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum = exports.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum || (exports.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSalesChannelEnum = {}));
// GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload
/**
 * Payload specific to Google One products.
**/
var GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload = /** @class */ (function (_super) {
    __extends(GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload, _super);
    function GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=campaigns" }),
        __metadata("design:type", Array)
    ], GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload.prototype, "campaigns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offering" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload.prototype, "offering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=salesChannel" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload.prototype, "salesChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storeId" }),
        __metadata("design:type", String)
    ], GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload.prototype, "storeId", void 0);
    return GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload = GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload;
