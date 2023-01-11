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
exports.OrdersCustomBatchRequestEntry = void 0;
var utils_1 = require("../../../internal/utils");
var orderscustombatchrequestentrycancel_1 = require("./orderscustombatchrequestentrycancel");
var orderscustombatchrequestentrycancellineitem_1 = require("./orderscustombatchrequestentrycancellineitem");
var orderscustombatchrequestentryinstorerefundlineitem_1 = require("./orderscustombatchrequestentryinstorerefundlineitem");
var orderscustombatchrequestentryrefund_1 = require("./orderscustombatchrequestentryrefund");
var orderscustombatchrequestentryrejectreturnlineitem_1 = require("./orderscustombatchrequestentryrejectreturnlineitem");
var orderscustombatchrequestentryreturnlineitem_1 = require("./orderscustombatchrequestentryreturnlineitem");
var orderscustombatchrequestentryreturnrefundlineitem_1 = require("./orderscustombatchrequestentryreturnrefundlineitem");
var orderscustombatchrequestentrysetlineitemmetadata_1 = require("./orderscustombatchrequestentrysetlineitemmetadata");
var orderscustombatchrequestentryshiplineitems_1 = require("./orderscustombatchrequestentryshiplineitems");
var orderscustombatchrequestentryupdatelineitemshippingdetails_1 = require("./orderscustombatchrequestentryupdatelineitemshippingdetails");
var orderscustombatchrequestentryupdateshipment_1 = require("./orderscustombatchrequestentryupdateshipment");
var OrdersCustomBatchRequestEntry = /** @class */ (function (_super) {
    __extends(OrdersCustomBatchRequestEntry, _super);
    function OrdersCustomBatchRequestEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batchId" }),
        __metadata("design:type", Number)
    ], OrdersCustomBatchRequestEntry.prototype, "batchId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel" }),
        __metadata("design:type", orderscustombatchrequestentrycancel_1.OrdersCustomBatchRequestEntryCancel)
    ], OrdersCustomBatchRequestEntry.prototype, "cancel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancelLineItem" }),
        __metadata("design:type", orderscustombatchrequestentrycancellineitem_1.OrdersCustomBatchRequestEntryCancelLineItem)
    ], OrdersCustomBatchRequestEntry.prototype, "cancelLineItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inStoreRefundLineItem" }),
        __metadata("design:type", orderscustombatchrequestentryinstorerefundlineitem_1.OrdersCustomBatchRequestEntryInStoreRefundLineItem)
    ], OrdersCustomBatchRequestEntry.prototype, "inStoreRefundLineItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantId" }),
        __metadata("design:type", String)
    ], OrdersCustomBatchRequestEntry.prototype, "merchantId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=merchantOrderId" }),
        __metadata("design:type", String)
    ], OrdersCustomBatchRequestEntry.prototype, "merchantOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], OrdersCustomBatchRequestEntry.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operationId" }),
        __metadata("design:type", String)
    ], OrdersCustomBatchRequestEntry.prototype, "operationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], OrdersCustomBatchRequestEntry.prototype, "orderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=refund" }),
        __metadata("design:type", orderscustombatchrequestentryrefund_1.OrdersCustomBatchRequestEntryRefund)
    ], OrdersCustomBatchRequestEntry.prototype, "refund", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rejectReturnLineItem" }),
        __metadata("design:type", orderscustombatchrequestentryrejectreturnlineitem_1.OrdersCustomBatchRequestEntryRejectReturnLineItem)
    ], OrdersCustomBatchRequestEntry.prototype, "rejectReturnLineItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=returnLineItem" }),
        __metadata("design:type", orderscustombatchrequestentryreturnlineitem_1.OrdersCustomBatchRequestEntryReturnLineItem)
    ], OrdersCustomBatchRequestEntry.prototype, "returnLineItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=returnRefundLineItem" }),
        __metadata("design:type", orderscustombatchrequestentryreturnrefundlineitem_1.OrdersCustomBatchRequestEntryReturnRefundLineItem)
    ], OrdersCustomBatchRequestEntry.prototype, "returnRefundLineItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setLineItemMetadata" }),
        __metadata("design:type", orderscustombatchrequestentrysetlineitemmetadata_1.OrdersCustomBatchRequestEntrySetLineItemMetadata)
    ], OrdersCustomBatchRequestEntry.prototype, "setLineItemMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipLineItems" }),
        __metadata("design:type", orderscustombatchrequestentryshiplineitems_1.OrdersCustomBatchRequestEntryShipLineItems)
    ], OrdersCustomBatchRequestEntry.prototype, "shipLineItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateLineItemShippingDetails" }),
        __metadata("design:type", orderscustombatchrequestentryupdatelineitemshippingdetails_1.OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails)
    ], OrdersCustomBatchRequestEntry.prototype, "updateLineItemShippingDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateShipment" }),
        __metadata("design:type", orderscustombatchrequestentryupdateshipment_1.OrdersCustomBatchRequestEntryUpdateShipment)
    ], OrdersCustomBatchRequestEntry.prototype, "updateShipment", void 0);
    return OrdersCustomBatchRequestEntry;
}(utils_1.SpeakeasyBase));
exports.OrdersCustomBatchRequestEntry = OrdersCustomBatchRequestEntry;
