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
exports.OrderLineItem = exports.OrderLineItemQuantities = exports.OrderLineItemQuantitiesQuantityUomEnum = exports.OrderLineItemQuantitiesQuantityTypeEnum = exports.OrderLineItemQuantitiesQuantityContextEnum = exports.OrderLineItemOrderLineItemStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var OrderLineItemOrderLineItemStatusEnum;
(function (OrderLineItemOrderLineItemStatusEnum) {
    OrderLineItemOrderLineItemStatusEnum["Cancelled"] = "Cancelled";
    OrderLineItemOrderLineItemStatusEnum["Completed"] = "Completed";
    OrderLineItemOrderLineItemStatusEnum["Confirmed"] = "Confirmed";
    OrderLineItemOrderLineItemStatusEnum["Pending"] = "Pending";
    OrderLineItemOrderLineItemStatusEnum["ProductionCompleted"] = "ProductionCompleted";
    OrderLineItemOrderLineItemStatusEnum["ShipmentCompleted"] = "ShipmentCompleted";
})(OrderLineItemOrderLineItemStatusEnum = exports.OrderLineItemOrderLineItemStatusEnum || (exports.OrderLineItemOrderLineItemStatusEnum = {}));
var OrderLineItemQuantitiesQuantityContextEnum;
(function (OrderLineItemQuantitiesQuantityContextEnum) {
    OrderLineItemQuantitiesQuantityContextEnum["Confirmed"] = "Confirmed";
    OrderLineItemQuantitiesQuantityContextEnum["Invoiced"] = "Invoiced";
    OrderLineItemQuantitiesQuantityContextEnum["Ordered"] = "Ordered";
    OrderLineItemQuantitiesQuantityContextEnum["Produced"] = "Produced";
    OrderLineItemQuantitiesQuantityContextEnum["Shipped"] = "Shipped";
})(OrderLineItemQuantitiesQuantityContextEnum = exports.OrderLineItemQuantitiesQuantityContextEnum || (exports.OrderLineItemQuantitiesQuantityContextEnum = {}));
var OrderLineItemQuantitiesQuantityTypeEnum;
(function (OrderLineItemQuantitiesQuantityTypeEnum) {
    OrderLineItemQuantitiesQuantityTypeEnum["Area"] = "Area";
    OrderLineItemQuantitiesQuantityTypeEnum["Count"] = "Count";
    OrderLineItemQuantitiesQuantityTypeEnum["GrossWeight"] = "GrossWeight";
    OrderLineItemQuantitiesQuantityTypeEnum["Length"] = "Length";
    OrderLineItemQuantitiesQuantityTypeEnum["NetNetWeight"] = "NetNetWeight";
    OrderLineItemQuantitiesQuantityTypeEnum["NetWeight"] = "NetWeight";
    OrderLineItemQuantitiesQuantityTypeEnum["NominalWeight"] = "NominalWeight";
    OrderLineItemQuantitiesQuantityTypeEnum["TareWeight"] = "TareWeight";
})(OrderLineItemQuantitiesQuantityTypeEnum = exports.OrderLineItemQuantitiesQuantityTypeEnum || (exports.OrderLineItemQuantitiesQuantityTypeEnum = {}));
var OrderLineItemQuantitiesQuantityUomEnum;
(function (OrderLineItemQuantitiesQuantityUomEnum) {
    OrderLineItemQuantitiesQuantityUomEnum["Bale"] = "Bale";
    OrderLineItemQuantitiesQuantityUomEnum["Box"] = "Box";
    OrderLineItemQuantitiesQuantityUomEnum["Centimeter"] = "Centimeter";
    OrderLineItemQuantitiesQuantityUomEnum["Decimeter"] = "Decimeter";
    OrderLineItemQuantitiesQuantityUomEnum["Foot"] = "Foot";
    OrderLineItemQuantitiesQuantityUomEnum["Gram"] = "Gram";
    OrderLineItemQuantitiesQuantityUomEnum["HundredPounds"] = "HundredPounds";
    OrderLineItemQuantitiesQuantityUomEnum["Inch"] = "Inch";
    OrderLineItemQuantitiesQuantityUomEnum["Kilogram"] = "Kilogram";
    OrderLineItemQuantitiesQuantityUomEnum["Kilometer"] = "Kilometer";
    OrderLineItemQuantitiesQuantityUomEnum["Meter"] = "Meter";
    OrderLineItemQuantitiesQuantityUomEnum["MetricTon"] = "MetricTon";
    OrderLineItemQuantitiesQuantityUomEnum["Millimeter"] = "Millimeter";
    OrderLineItemQuantitiesQuantityUomEnum["Package"] = "Package";
    OrderLineItemQuantitiesQuantityUomEnum["PalletUnit"] = "PalletUnit";
    OrderLineItemQuantitiesQuantityUomEnum["Piece"] = "Piece";
    OrderLineItemQuantitiesQuantityUomEnum["Pound"] = "Pound";
    OrderLineItemQuantitiesQuantityUomEnum["PulpUnit"] = "PulpUnit";
    OrderLineItemQuantitiesQuantityUomEnum["Ream"] = "Ream";
    OrderLineItemQuantitiesQuantityUomEnum["Reel"] = "Reel";
    OrderLineItemQuantitiesQuantityUomEnum["Sheet"] = "Sheet";
    OrderLineItemQuantitiesQuantityUomEnum["ShortTon"] = "ShortTon";
    OrderLineItemQuantitiesQuantityUomEnum["Skid"] = "Skid";
    OrderLineItemQuantitiesQuantityUomEnum["SquareDecimeter"] = "SquareDecimeter";
    OrderLineItemQuantitiesQuantityUomEnum["SquareFoot"] = "SquareFoot";
    OrderLineItemQuantitiesQuantityUomEnum["SquareInch"] = "SquareInch";
    OrderLineItemQuantitiesQuantityUomEnum["SquareMeter"] = "SquareMeter";
    OrderLineItemQuantitiesQuantityUomEnum["ThousandPieces"] = "ThousandPieces";
    OrderLineItemQuantitiesQuantityUomEnum["ThousandSquareCentimeters"] = "ThousandSquareCentimeters";
    OrderLineItemQuantitiesQuantityUomEnum["ThousandSquareFeet"] = "ThousandSquareFeet";
    OrderLineItemQuantitiesQuantityUomEnum["ThousandSquareInches"] = "ThousandSquareInches";
    OrderLineItemQuantitiesQuantityUomEnum["Yard"] = "Yard";
})(OrderLineItemQuantitiesQuantityUomEnum = exports.OrderLineItemQuantitiesQuantityUomEnum || (exports.OrderLineItemQuantitiesQuantityUomEnum = {}));
var OrderLineItemQuantities = /** @class */ (function (_super) {
    __extends(OrderLineItemQuantities, _super);
    function OrderLineItemQuantities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantityContext" }),
        __metadata("design:type", String)
    ], OrderLineItemQuantities.prototype, "quantityContext", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantityType" }),
        __metadata("design:type", String)
    ], OrderLineItemQuantities.prototype, "quantityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantityUOM" }),
        __metadata("design:type", String)
    ], OrderLineItemQuantities.prototype, "quantityUOM", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantityValue" }),
        __metadata("design:type", Number)
    ], OrderLineItemQuantities.prototype, "quantityValue", void 0);
    return OrderLineItemQuantities;
}(utils_1.SpeakeasyBase));
exports.OrderLineItemQuantities = OrderLineItemQuantities;
var OrderLineItem = /** @class */ (function (_super) {
    __extends(OrderLineItem, _super);
    function OrderLineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changeable" }),
        __metadata("design:type", Boolean)
    ], OrderLineItem.prototype, "changeable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OrderLineItem.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderLineItemNumber" }),
        __metadata("design:type", Number)
    ], OrderLineItem.prototype, "orderLineItemNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderLineItemStatus" }),
        __metadata("design:type", String)
    ], OrderLineItem.prototype, "orderLineItemStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantities", elemType: OrderLineItemQuantities }),
        __metadata("design:type", Array)
    ], OrderLineItem.prototype, "quantities", void 0);
    return OrderLineItem;
}(utils_1.SpeakeasyBase));
exports.OrderLineItem = OrderLineItem;
