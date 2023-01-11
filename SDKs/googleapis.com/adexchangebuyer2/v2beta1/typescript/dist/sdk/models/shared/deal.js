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
exports.DealInput = exports.Deal = exports.DealSyndicationProductEnum = exports.DealProgrammaticCreativeSourceEnum = exports.DealCreativeSafeFrameCompatibilityEnum = exports.DealCreativePreApprovalPolicyEnum = void 0;
var utils_1 = require("../../../internal/utils");
var privatedata_1 = require("./privatedata");
var creativerestrictions_1 = require("./creativerestrictions");
var dealservingmetadata_1 = require("./dealservingmetadata");
var dealterms_1 = require("./dealterms");
var deliverycontrol_1 = require("./deliverycontrol");
var contactinformation_1 = require("./contactinformation");
var marketplacetargeting_1 = require("./marketplacetargeting");
var targetingcriteria_1 = require("./targetingcriteria");
var DealCreativePreApprovalPolicyEnum;
(function (DealCreativePreApprovalPolicyEnum) {
    DealCreativePreApprovalPolicyEnum["CreativePreApprovalPolicyUnspecified"] = "CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED";
    DealCreativePreApprovalPolicyEnum["SellerPreApprovalRequired"] = "SELLER_PRE_APPROVAL_REQUIRED";
    DealCreativePreApprovalPolicyEnum["SellerPreApprovalNotRequired"] = "SELLER_PRE_APPROVAL_NOT_REQUIRED";
})(DealCreativePreApprovalPolicyEnum = exports.DealCreativePreApprovalPolicyEnum || (exports.DealCreativePreApprovalPolicyEnum = {}));
var DealCreativeSafeFrameCompatibilityEnum;
(function (DealCreativeSafeFrameCompatibilityEnum) {
    DealCreativeSafeFrameCompatibilityEnum["CreativeSafeFrameCompatibilityUnspecified"] = "CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED";
    DealCreativeSafeFrameCompatibilityEnum["Compatible"] = "COMPATIBLE";
    DealCreativeSafeFrameCompatibilityEnum["Incompatible"] = "INCOMPATIBLE";
})(DealCreativeSafeFrameCompatibilityEnum = exports.DealCreativeSafeFrameCompatibilityEnum || (exports.DealCreativeSafeFrameCompatibilityEnum = {}));
var DealProgrammaticCreativeSourceEnum;
(function (DealProgrammaticCreativeSourceEnum) {
    DealProgrammaticCreativeSourceEnum["ProgrammaticCreativeSourceUnspecified"] = "PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED";
    DealProgrammaticCreativeSourceEnum["Advertiser"] = "ADVERTISER";
    DealProgrammaticCreativeSourceEnum["Publisher"] = "PUBLISHER";
})(DealProgrammaticCreativeSourceEnum = exports.DealProgrammaticCreativeSourceEnum || (exports.DealProgrammaticCreativeSourceEnum = {}));
var DealSyndicationProductEnum;
(function (DealSyndicationProductEnum) {
    DealSyndicationProductEnum["SyndicationProductUnspecified"] = "SYNDICATION_PRODUCT_UNSPECIFIED";
    DealSyndicationProductEnum["Content"] = "CONTENT";
    DealSyndicationProductEnum["Mobile"] = "MOBILE";
    DealSyndicationProductEnum["Video"] = "VIDEO";
    DealSyndicationProductEnum["Games"] = "GAMES";
})(DealSyndicationProductEnum = exports.DealSyndicationProductEnum || (exports.DealSyndicationProductEnum = {}));
// Deal
/**
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
var Deal = /** @class */ (function (_super) {
    __extends(Deal, _super);
    function Deal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableEndTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "availableEndTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableStartTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "availableStartTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buyerPrivateData" }),
        __metadata("design:type", privatedata_1.PrivateData)
    ], Deal.prototype, "buyerPrivateData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createProductId" }),
        __metadata("design:type", String)
    ], Deal.prototype, "createProductId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createProductRevision" }),
        __metadata("design:type", String)
    ], Deal.prototype, "createProductRevision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creativePreApprovalPolicy" }),
        __metadata("design:type", String)
    ], Deal.prototype, "creativePreApprovalPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creativeRestrictions" }),
        __metadata("design:type", creativerestrictions_1.CreativeRestrictions)
    ], Deal.prototype, "creativeRestrictions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creativeSafeFrameCompatibility" }),
        __metadata("design:type", String)
    ], Deal.prototype, "creativeSafeFrameCompatibility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dealId" }),
        __metadata("design:type", String)
    ], Deal.prototype, "dealId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dealServingMetadata" }),
        __metadata("design:type", dealservingmetadata_1.DealServingMetadata)
    ], Deal.prototype, "dealServingMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dealTerms" }),
        __metadata("design:type", dealterms_1.DealTerms)
    ], Deal.prototype, "dealTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deliveryControl" }),
        __metadata("design:type", deliverycontrol_1.DeliveryControl)
    ], Deal.prototype, "deliveryControl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Deal.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Deal.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalDealId" }),
        __metadata("design:type", String)
    ], Deal.prototype, "externalDealId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isSetupComplete" }),
        __metadata("design:type", Boolean)
    ], Deal.prototype, "isSetupComplete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=programmaticCreativeSource" }),
        __metadata("design:type", String)
    ], Deal.prototype, "programmaticCreativeSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proposalId" }),
        __metadata("design:type", String)
    ], Deal.prototype, "proposalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sellerContacts", elemType: contactinformation_1.ContactInformation }),
        __metadata("design:type", Array)
    ], Deal.prototype, "sellerContacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=syndicationProduct" }),
        __metadata("design:type", String)
    ], Deal.prototype, "syndicationProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targeting" }),
        __metadata("design:type", marketplacetargeting_1.MarketplaceTargeting)
    ], Deal.prototype, "targeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetingCriterion", elemType: targetingcriteria_1.TargetingCriteria }),
        __metadata("design:type", Array)
    ], Deal.prototype, "targetingCriterion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Deal.prototype, "updateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webPropertyCode" }),
        __metadata("design:type", String)
    ], Deal.prototype, "webPropertyCode", void 0);
    return Deal;
}(utils_1.SpeakeasyBase));
exports.Deal = Deal;
// DealInput
/**
 * A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.
**/
var DealInput = /** @class */ (function (_super) {
    __extends(DealInput, _super);
    function DealInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableEndTime" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "availableEndTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableStartTime" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "availableStartTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=buyerPrivateData" }),
        __metadata("design:type", privatedata_1.PrivateData)
    ], DealInput.prototype, "buyerPrivateData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createProductId" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "createProductId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createProductRevision" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "createProductRevision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creativeRestrictions" }),
        __metadata("design:type", creativerestrictions_1.CreativeRestrictions)
    ], DealInput.prototype, "creativeRestrictions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dealServingMetadata" }),
        __metadata("design:type", dealservingmetadata_1.DealServingMetadata)
    ], DealInput.prototype, "dealServingMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dealTerms" }),
        __metadata("design:type", dealterms_1.DealTerms)
    ], DealInput.prototype, "dealTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=syndicationProduct" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "syndicationProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targeting" }),
        __metadata("design:type", marketplacetargeting_1.MarketplaceTargeting)
    ], DealInput.prototype, "targeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetingCriterion", elemType: targetingcriteria_1.TargetingCriteria }),
        __metadata("design:type", Array)
    ], DealInput.prototype, "targetingCriterion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webPropertyCode" }),
        __metadata("design:type", String)
    ], DealInput.prototype, "webPropertyCode", void 0);
    return DealInput;
}(utils_1.SpeakeasyBase));
exports.DealInput = DealInput;
