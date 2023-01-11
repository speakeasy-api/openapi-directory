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
exports.TransactionResource = exports.TransactionResourceRelationships = exports.TransactionResourceRelationshipsTags = exports.TransactionResourceRelationshipsTagsLinks = exports.TransactionResourceRelationshipsTagsData = exports.TransactionResourceRelationshipsParentCategory = exports.TransactionResourceRelationshipsParentCategoryLinks = exports.TransactionResourceRelationshipsParentCategoryData = exports.TransactionResourceRelationshipsCategory = exports.TransactionResourceRelationshipsCategoryLinks = exports.TransactionResourceRelationshipsCategoryData = exports.TransactionResourceRelationshipsAccount = exports.TransactionResourceRelationshipsAccountLinks = exports.TransactionResourceRelationshipsAccountData = exports.TransactionResourceLinks = exports.TransactionResourceAttributes = exports.TransactionResourceAttributesRoundUp = exports.TransactionResourceAttributesRoundUpBoostPortion = exports.TransactionResourceAttributesHoldInfo = exports.TransactionResourceAttributesHoldInfoForeignAmount = exports.TransactionResourceAttributesForeignAmount = exports.TransactionResourceAttributesCashback = void 0;
var utils_1 = require("../../../internal/utils");
var moneyobject_1 = require("./moneyobject");
// TransactionResourceAttributesCashback
/**
 * Provides information about an instant reimbursement in the form of
 * cashback.
 *
**/
var TransactionResourceAttributesCashback = /** @class */ (function (_super) {
    __extends(TransactionResourceAttributesCashback, _super);
    function TransactionResourceAttributesCashback() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", moneyobject_1.MoneyObject)
    ], TransactionResourceAttributesCashback.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TransactionResourceAttributesCashback.prototype, "description", void 0);
    return TransactionResourceAttributesCashback;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceAttributesCashback = TransactionResourceAttributesCashback;
// TransactionResourceAttributesForeignAmount
/**
 * Provides information about a value of money.
 *
**/
var TransactionResourceAttributesForeignAmount = /** @class */ (function (_super) {
    __extends(TransactionResourceAttributesForeignAmount, _super);
    function TransactionResourceAttributesForeignAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], TransactionResourceAttributesForeignAmount.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], TransactionResourceAttributesForeignAmount.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valueInBaseUnits" }),
        __metadata("design:type", Number)
    ], TransactionResourceAttributesForeignAmount.prototype, "valueInBaseUnits", void 0);
    return TransactionResourceAttributesForeignAmount;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceAttributesForeignAmount = TransactionResourceAttributesForeignAmount;
// TransactionResourceAttributesHoldInfoForeignAmount
/**
 * Provides information about a value of money.
 *
**/
var TransactionResourceAttributesHoldInfoForeignAmount = /** @class */ (function (_super) {
    __extends(TransactionResourceAttributesHoldInfoForeignAmount, _super);
    function TransactionResourceAttributesHoldInfoForeignAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], TransactionResourceAttributesHoldInfoForeignAmount.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], TransactionResourceAttributesHoldInfoForeignAmount.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valueInBaseUnits" }),
        __metadata("design:type", Number)
    ], TransactionResourceAttributesHoldInfoForeignAmount.prototype, "valueInBaseUnits", void 0);
    return TransactionResourceAttributesHoldInfoForeignAmount;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceAttributesHoldInfoForeignAmount = TransactionResourceAttributesHoldInfoForeignAmount;
// TransactionResourceAttributesHoldInfo
/**
 * Provides information about the amount at which a transaction was in the
 * `HELD` status.
 *
**/
var TransactionResourceAttributesHoldInfo = /** @class */ (function (_super) {
    __extends(TransactionResourceAttributesHoldInfo, _super);
    function TransactionResourceAttributesHoldInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", moneyobject_1.MoneyObject)
    ], TransactionResourceAttributesHoldInfo.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=foreignAmount" }),
        __metadata("design:type", TransactionResourceAttributesHoldInfoForeignAmount)
    ], TransactionResourceAttributesHoldInfo.prototype, "foreignAmount", void 0);
    return TransactionResourceAttributesHoldInfo;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceAttributesHoldInfo = TransactionResourceAttributesHoldInfo;
// TransactionResourceAttributesRoundUpBoostPortion
/**
 * Provides information about a value of money.
 *
**/
var TransactionResourceAttributesRoundUpBoostPortion = /** @class */ (function (_super) {
    __extends(TransactionResourceAttributesRoundUpBoostPortion, _super);
    function TransactionResourceAttributesRoundUpBoostPortion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], TransactionResourceAttributesRoundUpBoostPortion.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], TransactionResourceAttributesRoundUpBoostPortion.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valueInBaseUnits" }),
        __metadata("design:type", Number)
    ], TransactionResourceAttributesRoundUpBoostPortion.prototype, "valueInBaseUnits", void 0);
    return TransactionResourceAttributesRoundUpBoostPortion;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceAttributesRoundUpBoostPortion = TransactionResourceAttributesRoundUpBoostPortion;
// TransactionResourceAttributesRoundUp
/**
 * Provides information about how a Round Up was applied, such as whether or
 * not a boost was included in the Round Up.
 *
**/
var TransactionResourceAttributesRoundUp = /** @class */ (function (_super) {
    __extends(TransactionResourceAttributesRoundUp, _super);
    function TransactionResourceAttributesRoundUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", moneyobject_1.MoneyObject)
    ], TransactionResourceAttributesRoundUp.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=boostPortion" }),
        __metadata("design:type", TransactionResourceAttributesRoundUpBoostPortion)
    ], TransactionResourceAttributesRoundUp.prototype, "boostPortion", void 0);
    return TransactionResourceAttributesRoundUp;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceAttributesRoundUp = TransactionResourceAttributesRoundUp;
var TransactionResourceAttributes = /** @class */ (function (_super) {
    __extends(TransactionResourceAttributes, _super);
    function TransactionResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", moneyobject_1.MoneyObject)
    ], TransactionResourceAttributes.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cashback" }),
        __metadata("design:type", TransactionResourceAttributesCashback)
    ], TransactionResourceAttributes.prototype, "cashback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], TransactionResourceAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TransactionResourceAttributes.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=foreignAmount" }),
        __metadata("design:type", TransactionResourceAttributesForeignAmount)
    ], TransactionResourceAttributes.prototype, "foreignAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holdInfo" }),
        __metadata("design:type", TransactionResourceAttributesHoldInfo)
    ], TransactionResourceAttributes.prototype, "holdInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TransactionResourceAttributes.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rawText" }),
        __metadata("design:type", String)
    ], TransactionResourceAttributes.prototype, "rawText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roundUp" }),
        __metadata("design:type", TransactionResourceAttributesRoundUp)
    ], TransactionResourceAttributes.prototype, "roundUp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settledAt" }),
        __metadata("design:type", Date)
    ], TransactionResourceAttributes.prototype, "settledAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", Object)
    ], TransactionResourceAttributes.prototype, "status", void 0);
    return TransactionResourceAttributes;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceAttributes = TransactionResourceAttributes;
var TransactionResourceLinks = /** @class */ (function (_super) {
    __extends(TransactionResourceLinks, _super);
    function TransactionResourceLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], TransactionResourceLinks.prototype, "self", void 0);
    return TransactionResourceLinks;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceLinks = TransactionResourceLinks;
var TransactionResourceRelationshipsAccountData = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsAccountData, _super);
    function TransactionResourceRelationshipsAccountData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsAccountData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsAccountData.prototype, "type", void 0);
    return TransactionResourceRelationshipsAccountData;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsAccountData = TransactionResourceRelationshipsAccountData;
var TransactionResourceRelationshipsAccountLinks = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsAccountLinks, _super);
    function TransactionResourceRelationshipsAccountLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsAccountLinks.prototype, "related", void 0);
    return TransactionResourceRelationshipsAccountLinks;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsAccountLinks = TransactionResourceRelationshipsAccountLinks;
var TransactionResourceRelationshipsAccount = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsAccount, _super);
    function TransactionResourceRelationshipsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", TransactionResourceRelationshipsAccountData)
    ], TransactionResourceRelationshipsAccount.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", TransactionResourceRelationshipsAccountLinks)
    ], TransactionResourceRelationshipsAccount.prototype, "links", void 0);
    return TransactionResourceRelationshipsAccount;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsAccount = TransactionResourceRelationshipsAccount;
var TransactionResourceRelationshipsCategoryData = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsCategoryData, _super);
    function TransactionResourceRelationshipsCategoryData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsCategoryData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsCategoryData.prototype, "type", void 0);
    return TransactionResourceRelationshipsCategoryData;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsCategoryData = TransactionResourceRelationshipsCategoryData;
var TransactionResourceRelationshipsCategoryLinks = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsCategoryLinks, _super);
    function TransactionResourceRelationshipsCategoryLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsCategoryLinks.prototype, "related", void 0);
    return TransactionResourceRelationshipsCategoryLinks;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsCategoryLinks = TransactionResourceRelationshipsCategoryLinks;
var TransactionResourceRelationshipsCategory = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsCategory, _super);
    function TransactionResourceRelationshipsCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", TransactionResourceRelationshipsCategoryData)
    ], TransactionResourceRelationshipsCategory.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", TransactionResourceRelationshipsCategoryLinks)
    ], TransactionResourceRelationshipsCategory.prototype, "links", void 0);
    return TransactionResourceRelationshipsCategory;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsCategory = TransactionResourceRelationshipsCategory;
var TransactionResourceRelationshipsParentCategoryData = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsParentCategoryData, _super);
    function TransactionResourceRelationshipsParentCategoryData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsParentCategoryData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsParentCategoryData.prototype, "type", void 0);
    return TransactionResourceRelationshipsParentCategoryData;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsParentCategoryData = TransactionResourceRelationshipsParentCategoryData;
var TransactionResourceRelationshipsParentCategoryLinks = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsParentCategoryLinks, _super);
    function TransactionResourceRelationshipsParentCategoryLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=related" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsParentCategoryLinks.prototype, "related", void 0);
    return TransactionResourceRelationshipsParentCategoryLinks;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsParentCategoryLinks = TransactionResourceRelationshipsParentCategoryLinks;
var TransactionResourceRelationshipsParentCategory = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsParentCategory, _super);
    function TransactionResourceRelationshipsParentCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", TransactionResourceRelationshipsParentCategoryData)
    ], TransactionResourceRelationshipsParentCategory.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", TransactionResourceRelationshipsParentCategoryLinks)
    ], TransactionResourceRelationshipsParentCategory.prototype, "links", void 0);
    return TransactionResourceRelationshipsParentCategory;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsParentCategory = TransactionResourceRelationshipsParentCategory;
var TransactionResourceRelationshipsTagsData = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsTagsData, _super);
    function TransactionResourceRelationshipsTagsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsTagsData.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsTagsData.prototype, "type", void 0);
    return TransactionResourceRelationshipsTagsData;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsTagsData = TransactionResourceRelationshipsTagsData;
var TransactionResourceRelationshipsTagsLinks = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsTagsLinks, _super);
    function TransactionResourceRelationshipsTagsLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], TransactionResourceRelationshipsTagsLinks.prototype, "self", void 0);
    return TransactionResourceRelationshipsTagsLinks;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsTagsLinks = TransactionResourceRelationshipsTagsLinks;
var TransactionResourceRelationshipsTags = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationshipsTags, _super);
    function TransactionResourceRelationshipsTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: TransactionResourceRelationshipsTagsData }),
        __metadata("design:type", Array)
    ], TransactionResourceRelationshipsTags.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", TransactionResourceRelationshipsTagsLinks)
    ], TransactionResourceRelationshipsTags.prototype, "links", void 0);
    return TransactionResourceRelationshipsTags;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationshipsTags = TransactionResourceRelationshipsTags;
var TransactionResourceRelationships = /** @class */ (function (_super) {
    __extends(TransactionResourceRelationships, _super);
    function TransactionResourceRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", TransactionResourceRelationshipsAccount)
    ], TransactionResourceRelationships.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", TransactionResourceRelationshipsCategory)
    ], TransactionResourceRelationships.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentCategory" }),
        __metadata("design:type", TransactionResourceRelationshipsParentCategory)
    ], TransactionResourceRelationships.prototype, "parentCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", TransactionResourceRelationshipsTags)
    ], TransactionResourceRelationships.prototype, "tags", void 0);
    return TransactionResourceRelationships;
}(utils_1.SpeakeasyBase));
exports.TransactionResourceRelationships = TransactionResourceRelationships;
var TransactionResource = /** @class */ (function (_super) {
    __extends(TransactionResource, _super);
    function TransactionResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", TransactionResourceAttributes)
    ], TransactionResource.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TransactionResource.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", TransactionResourceLinks)
    ], TransactionResource.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", TransactionResourceRelationships)
    ], TransactionResource.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TransactionResource.prototype, "type", void 0);
    return TransactionResource;
}(utils_1.SpeakeasyBase));
exports.TransactionResource = TransactionResource;
