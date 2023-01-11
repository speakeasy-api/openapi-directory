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
exports.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest = exports.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = exports.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum;
(function (GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum) {
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum["ActionTypeUnspecified"] = "ACTION_TYPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum["Created"] = "CREATED";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum["Updated"] = "UPDATED";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum["Deleted"] = "DELETED";
})(GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum = exports.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum || (exports.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestActionEnum = {}));
var GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum;
(function (GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum) {
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["ChangeHistoryResourceTypeUnspecified"] = "CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["Account"] = "ACCOUNT";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["Property"] = "PROPERTY";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["FirebaseLink"] = "FIREBASE_LINK";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["GoogleAdsLink"] = "GOOGLE_ADS_LINK";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["GoogleSignalsSettings"] = "GOOGLE_SIGNALS_SETTINGS";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["ConversionEvent"] = "CONVERSION_EVENT";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["MeasurementProtocolSecret"] = "MEASUREMENT_PROTOCOL_SECRET";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["DataRetentionSettings"] = "DATA_RETENTION_SETTINGS";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["DisplayVideo360AdvertiserLink"] = "DISPLAY_VIDEO_360_ADVERTISER_LINK";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["DisplayVideo360AdvertiserLinkProposal"] = "DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["SearchAds360Link"] = "SEARCH_ADS_360_LINK";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["DataStream"] = "DATA_STREAM";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["AttributionSettings"] = "ATTRIBUTION_SETTINGS";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["ExpandedDataSet"] = "EXPANDED_DATA_SET";
    GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum["ChannelGroup"] = "CHANNEL_GROUP";
})(GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = exports.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum || (exports.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestResourceTypeEnum = {}));
// GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest
/**
 * Request message for SearchChangeHistoryEvents RPC.
**/
var GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest, _super);
    function GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action" }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actorEmail" }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.prototype, "actorEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=earliestChangeTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.prototype, "earliestChangeTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestChangeTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.prototype, "latestChangeTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageToken" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.prototype, "pageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=property" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.prototype, "property", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceType" }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest.prototype, "resourceType", void 0);
    return GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest;
}(utils_1.SpeakeasyBase));
exports.GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest = GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest;
