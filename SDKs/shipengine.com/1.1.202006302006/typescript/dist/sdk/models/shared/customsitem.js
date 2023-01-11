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
exports.CustomsItem = exports.CustomsItemInput = void 0;
var utils_1 = require("../../../internal/utils");
var monetaryvalue_1 = require("./monetaryvalue");
// CustomsItemInput
/**
 * The customs declaration for a single item in the shipment.
**/
var CustomsItemInput = /** @class */ (function (_super) {
    __extends(CustomsItemInput, _super);
    function CustomsItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_of_origin" }),
        __metadata("design:type", Object)
    ], CustomsItemInput.prototype, "countryOfOrigin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CustomsItemInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harmonized_tariff_code" }),
        __metadata("design:type", String)
    ], CustomsItemInput.prototype, "harmonizedTariffCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], CustomsItemInput.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], CustomsItemInput.prototype, "sku", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku_description" }),
        __metadata("design:type", String)
    ], CustomsItemInput.prototype, "skuDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit_of_measure" }),
        __metadata("design:type", String)
    ], CustomsItemInput.prototype, "unitOfMeasure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", monetaryvalue_1.MonetaryValue)
    ], CustomsItemInput.prototype, "value", void 0);
    return CustomsItemInput;
}(utils_1.SpeakeasyBase));
exports.CustomsItemInput = CustomsItemInput;
// CustomsItem
/**
 * The customs declaration for a single item in the shipment.
**/
var CustomsItem = /** @class */ (function (_super) {
    __extends(CustomsItem, _super);
    function CustomsItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country_of_origin" }),
        __metadata("design:type", Object)
    ], CustomsItem.prototype, "countryOfOrigin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customs_item_id" }),
        __metadata("design:type", Object)
    ], CustomsItem.prototype, "customsItemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CustomsItem.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harmonized_tariff_code" }),
        __metadata("design:type", String)
    ], CustomsItem.prototype, "harmonizedTariffCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], CustomsItem.prototype, "quantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku" }),
        __metadata("design:type", String)
    ], CustomsItem.prototype, "sku", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sku_description" }),
        __metadata("design:type", String)
    ], CustomsItem.prototype, "skuDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit_of_measure" }),
        __metadata("design:type", String)
    ], CustomsItem.prototype, "unitOfMeasure", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", monetaryvalue_1.MonetaryValue)
    ], CustomsItem.prototype, "value", void 0);
    return CustomsItem;
}(utils_1.SpeakeasyBase));
exports.CustomsItem = CustomsItem;
