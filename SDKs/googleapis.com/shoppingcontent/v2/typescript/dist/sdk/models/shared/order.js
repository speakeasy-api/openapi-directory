"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.Order = void 0;
var utils_1 = require("../../../internal/utils");
var ordercustomer_1 = require("./ordercustomer");
var orderdeliverydetails_1 = require("./orderdeliverydetails");
var orderlegacypromotion_1 = require("./orderlegacypromotion");
var orderlineitem_1 = require("./orderlineitem");
var orderpaymentmethod_1 = require("./orderpaymentmethod");
var orderpickupdetails_1 = require("./orderpickupdetails");
var orderrefund_1 = require("./orderrefund");
var ordershipment_1 = require("./ordershipment");
var price_1 = require("./price");
var class_transformer_1 = require("class-transformer");
/**
 * Order. Production access (all methods) requires the order manager role. Sandbox access does not.
 */
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "acknowledged" }),
        __metadata("design:type", Boolean)
    ], Order.prototype, "acknowledged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "channelType" }),
        __metadata("design:type", String)
    ], Order.prototype, "channelType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "customer" }),
        (0, class_transformer_1.Type)(function () { return ordercustomer_1.OrderCustomer; }),
        __metadata("design:type", ordercustomer_1.OrderCustomer)
    ], Order.prototype, "customer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "deliveryDetails" }),
        (0, class_transformer_1.Type)(function () { return orderdeliverydetails_1.OrderDeliveryDetails; }),
        __metadata("design:type", orderdeliverydetails_1.OrderDeliveryDetails)
    ], Order.prototype, "deliveryDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", String)
    ], Order.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "kind" }),
        __metadata("design:type", String)
    ], Order.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: orderlineitem_1.OrderLineItem }),
        (0, class_transformer_1.Expose)({ name: "lineItems" }),
        (0, class_transformer_1.Type)(function () { return orderlineitem_1.OrderLineItem; }),
        __metadata("design:type", Array)
    ], Order.prototype, "lineItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merchantId" }),
        __metadata("design:type", String)
    ], Order.prototype, "merchantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "merchantOrderId" }),
        __metadata("design:type", String)
    ], Order.prototype, "merchantOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "netAmount" }),
        (0, class_transformer_1.Type)(function () { return price_1.Price; }),
        __metadata("design:type", price_1.Price)
    ], Order.prototype, "netAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "paymentMethod" }),
        (0, class_transformer_1.Type)(function () { return orderpaymentmethod_1.OrderPaymentMethod; }),
        __metadata("design:type", orderpaymentmethod_1.OrderPaymentMethod)
    ], Order.prototype, "paymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "paymentStatus" }),
        __metadata("design:type", String)
    ], Order.prototype, "paymentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "pickupDetails" }),
        (0, class_transformer_1.Type)(function () { return orderpickupdetails_1.OrderPickupDetails; }),
        __metadata("design:type", orderpickupdetails_1.OrderPickupDetails)
    ], Order.prototype, "pickupDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "placedDate" }),
        __metadata("design:type", String)
    ], Order.prototype, "placedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: orderlegacypromotion_1.OrderLegacyPromotion }),
        (0, class_transformer_1.Expose)({ name: "promotions" }),
        (0, class_transformer_1.Type)(function () { return orderlegacypromotion_1.OrderLegacyPromotion; }),
        __metadata("design:type", Array)
    ], Order.prototype, "promotions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: orderrefund_1.OrderRefund }),
        (0, class_transformer_1.Expose)({ name: "refunds" }),
        (0, class_transformer_1.Type)(function () { return orderrefund_1.OrderRefund; }),
        __metadata("design:type", Array)
    ], Order.prototype, "refunds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: ordershipment_1.OrderShipment }),
        (0, class_transformer_1.Expose)({ name: "shipments" }),
        (0, class_transformer_1.Type)(function () { return ordershipment_1.OrderShipment; }),
        __metadata("design:type", Array)
    ], Order.prototype, "shipments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "shippingCost" }),
        (0, class_transformer_1.Type)(function () { return price_1.Price; }),
        __metadata("design:type", price_1.Price)
    ], Order.prototype, "shippingCost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "shippingCostTax" }),
        (0, class_transformer_1.Type)(function () { return price_1.Price; }),
        __metadata("design:type", price_1.Price)
    ], Order.prototype, "shippingCostTax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "shippingOption" }),
        __metadata("design:type", String)
    ], Order.prototype, "shippingOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], Order.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "taxCollector" }),
        __metadata("design:type", String)
    ], Order.prototype, "taxCollector", void 0);
    return Order;
}(utils_1.SpeakeasyBase));
exports.Order = Order;
