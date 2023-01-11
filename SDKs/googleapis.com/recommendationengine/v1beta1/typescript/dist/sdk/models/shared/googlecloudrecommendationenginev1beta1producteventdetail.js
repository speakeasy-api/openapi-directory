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
exports.GoogleCloudRecommendationengineV1beta1ProductEventDetail = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy_1 = require("./googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy");
var googlecloudrecommendationenginev1beta1productdetail_1 = require("./googlecloudrecommendationenginev1beta1productdetail");
var googlecloudrecommendationenginev1beta1purchasetransaction_1 = require("./googlecloudrecommendationenginev1beta1purchasetransaction");
// GoogleCloudRecommendationengineV1beta1ProductEventDetail
/**
 * ProductEventDetail captures user event information specific to retail products.
**/
var GoogleCloudRecommendationengineV1beta1ProductEventDetail = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommendationengineV1beta1ProductEventDetail, _super);
    function GoogleCloudRecommendationengineV1beta1ProductEventDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cartId" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1ProductEventDetail.prototype, "cartId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listId" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1ProductEventDetail.prototype, "listId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageCategories", elemType: googlecloudrecommendationenginev1beta1catalogitemcategoryhierarchy_1.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommendationengineV1beta1ProductEventDetail.prototype, "pageCategories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productDetails", elemType: googlecloudrecommendationenginev1beta1productdetail_1.GoogleCloudRecommendationengineV1beta1ProductDetail }),
        __metadata("design:type", Array)
    ], GoogleCloudRecommendationengineV1beta1ProductEventDetail.prototype, "productDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchaseTransaction" }),
        __metadata("design:type", googlecloudrecommendationenginev1beta1purchasetransaction_1.GoogleCloudRecommendationengineV1beta1PurchaseTransaction)
    ], GoogleCloudRecommendationengineV1beta1ProductEventDetail.prototype, "purchaseTransaction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=searchQuery" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1ProductEventDetail.prototype, "searchQuery", void 0);
    return GoogleCloudRecommendationengineV1beta1ProductEventDetail;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudRecommendationengineV1beta1ProductEventDetail = GoogleCloudRecommendationengineV1beta1ProductEventDetail;
