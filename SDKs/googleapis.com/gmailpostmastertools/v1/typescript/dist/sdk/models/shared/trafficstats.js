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
exports.TrafficStats = exports.TrafficStatsDomainReputationEnum = void 0;
var utils_1 = require("../../../internal/utils");
var deliveryerror_1 = require("./deliveryerror");
var ipreputation_1 = require("./ipreputation");
var feedbackloop_1 = require("./feedbackloop");
var TrafficStatsDomainReputationEnum;
(function (TrafficStatsDomainReputationEnum) {
    TrafficStatsDomainReputationEnum["ReputationCategoryUnspecified"] = "REPUTATION_CATEGORY_UNSPECIFIED";
    TrafficStatsDomainReputationEnum["High"] = "HIGH";
    TrafficStatsDomainReputationEnum["Medium"] = "MEDIUM";
    TrafficStatsDomainReputationEnum["Low"] = "LOW";
    TrafficStatsDomainReputationEnum["Bad"] = "BAD";
})(TrafficStatsDomainReputationEnum = exports.TrafficStatsDomainReputationEnum || (exports.TrafficStatsDomainReputationEnum = {}));
// TrafficStats
/**
 * Email traffic statistics pertaining to a specific date.
**/
var TrafficStats = /** @class */ (function (_super) {
    __extends(TrafficStats, _super);
    function TrafficStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deliveryErrors", elemType: deliveryerror_1.DeliveryError }),
        __metadata("design:type", Array)
    ], TrafficStats.prototype, "deliveryErrors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dkimSuccessRatio" }),
        __metadata("design:type", Number)
    ], TrafficStats.prototype, "dkimSuccessRatio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dmarcSuccessRatio" }),
        __metadata("design:type", Number)
    ], TrafficStats.prototype, "dmarcSuccessRatio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domainReputation" }),
        __metadata("design:type", String)
    ], TrafficStats.prototype, "domainReputation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inboundEncryptionRatio" }),
        __metadata("design:type", Number)
    ], TrafficStats.prototype, "inboundEncryptionRatio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipReputations", elemType: ipreputation_1.IpReputation }),
        __metadata("design:type", Array)
    ], TrafficStats.prototype, "ipReputations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TrafficStats.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outboundEncryptionRatio" }),
        __metadata("design:type", Number)
    ], TrafficStats.prototype, "outboundEncryptionRatio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spammyFeedbackLoops", elemType: feedbackloop_1.FeedbackLoop }),
        __metadata("design:type", Array)
    ], TrafficStats.prototype, "spammyFeedbackLoops", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spfSuccessRatio" }),
        __metadata("design:type", Number)
    ], TrafficStats.prototype, "spfSuccessRatio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userReportedSpamRatio" }),
        __metadata("design:type", Number)
    ], TrafficStats.prototype, "userReportedSpamRatio", void 0);
    return TrafficStats;
}(utils_1.SpeakeasyBase));
exports.TrafficStats = TrafficStats;
