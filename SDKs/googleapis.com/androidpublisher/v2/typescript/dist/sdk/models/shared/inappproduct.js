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
exports.InAppProduct = void 0;
var utils_1 = require("../../../internal/utils");
var price_1 = require("./price");
var inappproductlisting_1 = require("./inappproductlisting");
var InAppProduct = /** @class */ (function (_super) {
    __extends(InAppProduct, _super);
    function InAppProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultLanguage" }),
        __metadata("design:type", String)
    ], InAppProduct.prototype, "defaultLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultPrice" }),
        __metadata("design:type", price_1.Price)
    ], InAppProduct.prototype, "defaultPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gracePeriod" }),
        __metadata("design:type", String)
    ], InAppProduct.prototype, "gracePeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=listings", elemType: inappproductlisting_1.InAppProductListing }),
        __metadata("design:type", Object)
    ], InAppProduct.prototype, "listings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], InAppProduct.prototype, "packageName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prices", elemType: price_1.Price }),
        __metadata("design:type", Object)
    ], InAppProduct.prototype, "prices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purchaseType" }),
        __metadata("design:type", String)
    ], InAppProduct.prototype, "purchaseType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], InAppProduct.prototype, "sku", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], InAppProduct.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscriptionPeriod" }),
        __metadata("design:type", String)
    ], InAppProduct.prototype, "subscriptionPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trialPeriod" }),
        __metadata("design:type", String)
    ], InAppProduct.prototype, "trialPeriod", void 0);
    return InAppProduct;
}(utils_1.SpeakeasyBase));
exports.InAppProduct = InAppProduct;
