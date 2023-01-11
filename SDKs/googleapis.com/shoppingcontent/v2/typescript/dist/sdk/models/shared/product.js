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
exports.Product = void 0;
var utils_1 = require("../../../internal/utils");
var productaspect_1 = require("./productaspect");
var price_1 = require("./price");
var customattribute_1 = require("./customattribute");
var customgroup_1 = require("./customgroup");
var productdestination_1 = require("./productdestination");
var installment_1 = require("./installment");
var loyaltypoints_1 = require("./loyaltypoints");
var productshipping_1 = require("./productshipping");
var productshippingdimension_1 = require("./productshippingdimension");
var productshippingweight_1 = require("./productshippingweight");
var producttax_1 = require("./producttax");
var productunitpricingbasemeasure_1 = require("./productunitpricingbasemeasure");
var productunitpricingmeasure_1 = require("./productunitpricingmeasure");
var error_1 = require("./error");
// Product
/**
 *  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
**/
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalImageLinks" }),
        __metadata("design:type", Array)
    ], Product.prototype, "additionalImageLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalProductTypes" }),
        __metadata("design:type", Array)
    ], Product.prototype, "additionalProductTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adult" }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "adult", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adwordsGrouping" }),
        __metadata("design:type", String)
    ], Product.prototype, "adwordsGrouping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adwordsLabels" }),
        __metadata("design:type", Array)
    ], Product.prototype, "adwordsLabels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adwordsRedirect" }),
        __metadata("design:type", String)
    ], Product.prototype, "adwordsRedirect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ageGroup" }),
        __metadata("design:type", String)
    ], Product.prototype, "ageGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aspects", elemType: productaspect_1.ProductAspect }),
        __metadata("design:type", Array)
    ], Product.prototype, "aspects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], Product.prototype, "availability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availabilityDate" }),
        __metadata("design:type", String)
    ], Product.prototype, "availabilityDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], Product.prototype, "brand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canonicalLink" }),
        __metadata("design:type", String)
    ], Product.prototype, "canonicalLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], Product.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], Product.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=condition" }),
        __metadata("design:type", String)
    ], Product.prototype, "condition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentLanguage" }),
        __metadata("design:type", String)
    ], Product.prototype, "contentLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=costOfGoodsSold" }),
        __metadata("design:type", price_1.Price)
    ], Product.prototype, "costOfGoodsSold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customAttributes", elemType: customattribute_1.CustomAttribute }),
        __metadata("design:type", Array)
    ], Product.prototype, "customAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customGroups", elemType: customgroup_1.CustomGroup }),
        __metadata("design:type", Array)
    ], Product.prototype, "customGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customLabel0" }),
        __metadata("design:type", String)
    ], Product.prototype, "customLabel0", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customLabel1" }),
        __metadata("design:type", String)
    ], Product.prototype, "customLabel1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customLabel2" }),
        __metadata("design:type", String)
    ], Product.prototype, "customLabel2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customLabel3" }),
        __metadata("design:type", String)
    ], Product.prototype, "customLabel3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customLabel4" }),
        __metadata("design:type", String)
    ], Product.prototype, "customLabel4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinations", elemType: productdestination_1.ProductDestination }),
        __metadata("design:type", Array)
    ], Product.prototype, "destinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayAdsId" }),
        __metadata("design:type", String)
    ], Product.prototype, "displayAdsId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayAdsLink" }),
        __metadata("design:type", String)
    ], Product.prototype, "displayAdsLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayAdsSimilarIds" }),
        __metadata("design:type", Array)
    ], Product.prototype, "displayAdsSimilarIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayAdsTitle" }),
        __metadata("design:type", String)
    ], Product.prototype, "displayAdsTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayAdsValue" }),
        __metadata("design:type", Number)
    ], Product.prototype, "displayAdsValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=energyEfficiencyClass" }),
        __metadata("design:type", String)
    ], Product.prototype, "energyEfficiencyClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expirationDate" }),
        __metadata("design:type", String)
    ], Product.prototype, "expirationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], Product.prototype, "gender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=googleProductCategory" }),
        __metadata("design:type", String)
    ], Product.prototype, "googleProductCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gtin" }),
        __metadata("design:type", String)
    ], Product.prototype, "gtin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Product.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identifierExists" }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "identifierExists", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageLink" }),
        __metadata("design:type", String)
    ], Product.prototype, "imageLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=installment" }),
        __metadata("design:type", installment_1.Installment)
    ], Product.prototype, "installment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isBundle" }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "isBundle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=itemGroupId" }),
        __metadata("design:type", String)
    ], Product.prototype, "itemGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Product.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], Product.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loyaltyPoints" }),
        __metadata("design:type", loyaltypoints_1.LoyaltyPoints)
    ], Product.prototype, "loyaltyPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=material" }),
        __metadata("design:type", String)
    ], Product.prototype, "material", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxEnergyEfficiencyClass" }),
        __metadata("design:type", String)
    ], Product.prototype, "maxEnergyEfficiencyClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxHandlingTime" }),
        __metadata("design:type", String)
    ], Product.prototype, "maxHandlingTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minEnergyEfficiencyClass" }),
        __metadata("design:type", String)
    ], Product.prototype, "minEnergyEfficiencyClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=minHandlingTime" }),
        __metadata("design:type", String)
    ], Product.prototype, "minHandlingTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mobileLink" }),
        __metadata("design:type", String)
    ], Product.prototype, "mobileLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mpn" }),
        __metadata("design:type", String)
    ], Product.prototype, "mpn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multipack" }),
        __metadata("design:type", String)
    ], Product.prototype, "multipack", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerId" }),
        __metadata("design:type", String)
    ], Product.prototype, "offerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=onlineOnly" }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "onlineOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pattern" }),
        __metadata("design:type", String)
    ], Product.prototype, "pattern", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", price_1.Price)
    ], Product.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productType" }),
        __metadata("design:type", String)
    ], Product.prototype, "productType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=promotionIds" }),
        __metadata("design:type", Array)
    ], Product.prototype, "promotionIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=salePrice" }),
        __metadata("design:type", price_1.Price)
    ], Product.prototype, "salePrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=salePriceEffectiveDate" }),
        __metadata("design:type", String)
    ], Product.prototype, "salePriceEffectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sellOnGoogleQuantity" }),
        __metadata("design:type", String)
    ], Product.prototype, "sellOnGoogleQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipping", elemType: productshipping_1.ProductShipping }),
        __metadata("design:type", Array)
    ], Product.prototype, "shipping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shippingHeight" }),
        __metadata("design:type", productshippingdimension_1.ProductShippingDimension)
    ], Product.prototype, "shippingHeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shippingLabel" }),
        __metadata("design:type", String)
    ], Product.prototype, "shippingLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shippingLength" }),
        __metadata("design:type", productshippingdimension_1.ProductShippingDimension)
    ], Product.prototype, "shippingLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shippingWeight" }),
        __metadata("design:type", productshippingweight_1.ProductShippingWeight)
    ], Product.prototype, "shippingWeight", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shippingWidth" }),
        __metadata("design:type", productshippingdimension_1.ProductShippingDimension)
    ], Product.prototype, "shippingWidth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sizeSystem" }),
        __metadata("design:type", String)
    ], Product.prototype, "sizeSystem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sizeType" }),
        __metadata("design:type", String)
    ], Product.prototype, "sizeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sizes" }),
        __metadata("design:type", Array)
    ], Product.prototype, "sizes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Product.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetCountry" }),
        __metadata("design:type", String)
    ], Product.prototype, "targetCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxes", elemType: producttax_1.ProductTax }),
        __metadata("design:type", Array)
    ], Product.prototype, "taxes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Product.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unitPricingBaseMeasure" }),
        __metadata("design:type", productunitpricingbasemeasure_1.ProductUnitPricingBaseMeasure)
    ], Product.prototype, "unitPricingBaseMeasure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unitPricingMeasure" }),
        __metadata("design:type", productunitpricingmeasure_1.ProductUnitPricingMeasure)
    ], Product.prototype, "unitPricingMeasure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=validatedDestinations" }),
        __metadata("design:type", Array)
    ], Product.prototype, "validatedDestinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warnings", elemType: error_1.ErrorT }),
        __metadata("design:type", Array)
    ], Product.prototype, "warnings", void 0);
    return Product;
}(utils_1.SpeakeasyBase));
exports.Product = Product;
