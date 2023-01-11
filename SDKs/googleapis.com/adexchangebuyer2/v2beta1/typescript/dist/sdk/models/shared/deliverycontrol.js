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
exports.DeliveryControl = exports.DeliveryControlDeliveryRateTypeEnum = exports.DeliveryControlCreativeBlockingLevelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var frequencycap_1 = require("./frequencycap");
var DeliveryControlCreativeBlockingLevelEnum;
(function (DeliveryControlCreativeBlockingLevelEnum) {
    DeliveryControlCreativeBlockingLevelEnum["CreativeBlockingLevelUnspecified"] = "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED";
    DeliveryControlCreativeBlockingLevelEnum["PublisherBlockingRules"] = "PUBLISHER_BLOCKING_RULES";
    DeliveryControlCreativeBlockingLevelEnum["AdxPolicyBlockingOnly"] = "ADX_POLICY_BLOCKING_ONLY";
})(DeliveryControlCreativeBlockingLevelEnum = exports.DeliveryControlCreativeBlockingLevelEnum || (exports.DeliveryControlCreativeBlockingLevelEnum = {}));
var DeliveryControlDeliveryRateTypeEnum;
(function (DeliveryControlDeliveryRateTypeEnum) {
    DeliveryControlDeliveryRateTypeEnum["DeliveryRateTypeUnspecified"] = "DELIVERY_RATE_TYPE_UNSPECIFIED";
    DeliveryControlDeliveryRateTypeEnum["Evenly"] = "EVENLY";
    DeliveryControlDeliveryRateTypeEnum["FrontLoaded"] = "FRONT_LOADED";
    DeliveryControlDeliveryRateTypeEnum["AsFastAsPossible"] = "AS_FAST_AS_POSSIBLE";
})(DeliveryControlDeliveryRateTypeEnum = exports.DeliveryControlDeliveryRateTypeEnum || (exports.DeliveryControlDeliveryRateTypeEnum = {}));
// DeliveryControl
/**
 * Message contains details about how the deals will be paced.
**/
var DeliveryControl = /** @class */ (function (_super) {
    __extends(DeliveryControl, _super);
    function DeliveryControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creativeBlockingLevel" }),
        __metadata("design:type", String)
    ], DeliveryControl.prototype, "creativeBlockingLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deliveryRateType" }),
        __metadata("design:type", String)
    ], DeliveryControl.prototype, "deliveryRateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequencyCaps", elemType: frequencycap_1.FrequencyCap }),
        __metadata("design:type", Array)
    ], DeliveryControl.prototype, "frequencyCaps", void 0);
    return DeliveryControl;
}(utils_1.SpeakeasyBase));
exports.DeliveryControl = DeliveryControl;
