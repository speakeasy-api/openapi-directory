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
exports.GetTrackingLogFromLabelResponseBody = void 0;
var utils_1 = require("../../../internal/utils");
var trackevent_1 = require("./trackevent");
// GetTrackingLogFromLabelResponseBody
/**
 * A tracking information resource
**/
var GetTrackingLogFromLabelResponseBody = /** @class */ (function (_super) {
    __extends(GetTrackingLogFromLabelResponseBody, _super);
    function GetTrackingLogFromLabelResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actual_delivery_date" }),
        __metadata("design:type", Date)
    ], GetTrackingLogFromLabelResponseBody.prototype, "actualDeliveryDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_status_code" }),
        __metadata("design:type", String)
    ], GetTrackingLogFromLabelResponseBody.prototype, "carrierStatusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_status_description" }),
        __metadata("design:type", String)
    ], GetTrackingLogFromLabelResponseBody.prototype, "carrierStatusDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=estimated_delivery_date" }),
        __metadata("design:type", Date)
    ], GetTrackingLogFromLabelResponseBody.prototype, "estimatedDeliveryDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events", elemType: trackevent_1.TrackEvent }),
        __metadata("design:type", Array)
    ], GetTrackingLogFromLabelResponseBody.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exception_description" }),
        __metadata("design:type", String)
    ], GetTrackingLogFromLabelResponseBody.prototype, "exceptionDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ship_date" }),
        __metadata("design:type", Date)
    ], GetTrackingLogFromLabelResponseBody.prototype, "shipDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_code" }),
        __metadata("design:type", String)
    ], GetTrackingLogFromLabelResponseBody.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_description" }),
        __metadata("design:type", String)
    ], GetTrackingLogFromLabelResponseBody.prototype, "statusDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tracking_number" }),
        __metadata("design:type", String)
    ], GetTrackingLogFromLabelResponseBody.prototype, "trackingNumber", void 0);
    return GetTrackingLogFromLabelResponseBody;
}(utils_1.SpeakeasyBase));
exports.GetTrackingLogFromLabelResponseBody = GetTrackingLogFromLabelResponseBody;
