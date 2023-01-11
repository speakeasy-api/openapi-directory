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
exports.GoogleAnalyticsAdminV1betaListConversionEventsResponse = void 0;
var utils_1 = require("../../../internal/utils");
var googleanalyticsadminv1betaconversionevent_1 = require("./googleanalyticsadminv1betaconversionevent");
// GoogleAnalyticsAdminV1betaListConversionEventsResponse
/**
 * Response message for ListConversionEvents RPC.
**/
var GoogleAnalyticsAdminV1betaListConversionEventsResponse = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1betaListConversionEventsResponse, _super);
    function GoogleAnalyticsAdminV1betaListConversionEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversionEvents", elemType: googleanalyticsadminv1betaconversionevent_1.GoogleAnalyticsAdminV1betaConversionEvent }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1betaListConversionEventsResponse.prototype, "conversionEvents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextPageToken" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1betaListConversionEventsResponse.prototype, "nextPageToken", void 0);
    return GoogleAnalyticsAdminV1betaListConversionEventsResponse;
}(utils_1.SpeakeasyBase));
exports.GoogleAnalyticsAdminV1betaListConversionEventsResponse = GoogleAnalyticsAdminV1betaListConversionEventsResponse;
