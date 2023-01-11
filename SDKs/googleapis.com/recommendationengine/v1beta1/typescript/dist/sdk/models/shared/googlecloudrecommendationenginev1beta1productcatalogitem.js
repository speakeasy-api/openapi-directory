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
exports.GoogleCloudRecommendationengineV1beta1ProductCatalogItem = exports.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudrecommendationenginev1beta1productcatalogitemexactprice_1 = require("./googlecloudrecommendationenginev1beta1productcatalogitemexactprice");
var googlecloudrecommendationenginev1beta1image_1 = require("./googlecloudrecommendationenginev1beta1image");
var googlecloudrecommendationenginev1beta1productcatalogitempricerange_1 = require("./googlecloudrecommendationenginev1beta1productcatalogitempricerange");
var GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum;
(function (GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum) {
    GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum["StockStateUnspecified"] = "STOCK_STATE_UNSPECIFIED";
    GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum["InStock"] = "IN_STOCK";
    GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum["OutOfStock"] = "OUT_OF_STOCK";
    GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum["Preorder"] = "PREORDER";
    GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum["Backorder"] = "BACKORDER";
})(GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = exports.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum || (exports.GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = {}));
// GoogleCloudRecommendationengineV1beta1ProductCatalogItem
/**
 * ProductCatalogItem captures item metadata specific to retail products.
**/
var GoogleCloudRecommendationengineV1beta1ProductCatalogItem = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommendationengineV1beta1ProductCatalogItem, _super);
    function GoogleCloudRecommendationengineV1beta1ProductCatalogItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableQuantity" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1ProductCatalogItem.prototype, "availableQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=canonicalProductUri" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1ProductCatalogItem.prototype, "canonicalProductUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=costs" }),
        __metadata("design:type", Object)
    ], GoogleCloudRecommendationengineV1beta1ProductCatalogItem.prototype, "costs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1ProductCatalogItem.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exactPrice" }),
        __metadata("design:type", googlecloudrecommendationenginev1beta1productcatalogitemexactprice_1.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice)
    ], GoogleCloudRecommendationengineV1beta1ProductCatalogItem.prototype, "exactPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images", elemType: googlecloudrecommendationenginev1beta1image_1.GoogleCloudRecommendationengineV1beta1Image }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommendationengineV1beta1ProductCatalogItem.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=priceRange" }),
        __metadata("design:type", googlecloudrecommendationenginev1beta1productcatalogitempricerange_1.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange)
    ], GoogleCloudRecommendationengineV1beta1ProductCatalogItem.prototype, "priceRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stockState" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1ProductCatalogItem.prototype, "stockState", void 0);
    return GoogleCloudRecommendationengineV1beta1ProductCatalogItem;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudRecommendationengineV1beta1ProductCatalogItem = GoogleCloudRecommendationengineV1beta1ProductCatalogItem;
