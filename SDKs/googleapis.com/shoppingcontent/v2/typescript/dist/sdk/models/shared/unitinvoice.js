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
exports.UnitInvoice = void 0;
var utils_1 = require("../../../internal/utils");
var unitinvoiceadditionalcharge_1 = require("./unitinvoiceadditionalcharge");
var promotion_1 = require("./promotion");
var price_1 = require("./price");
var unitinvoicetaxline_1 = require("./unitinvoicetaxline");
var UnitInvoice = /** @class */ (function (_super) {
    __extends(UnitInvoice, _super);
    function UnitInvoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additionalCharges", elemType: unitinvoiceadditionalcharge_1.UnitInvoiceAdditionalCharge }),
        __metadata("design:type", Array)
    ], UnitInvoice.prototype, "additionalCharges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=promotions", elemType: promotion_1.Promotion }),
        __metadata("design:type", Array)
    ], UnitInvoice.prototype, "promotions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unitPricePretax" }),
        __metadata("design:type", price_1.Price)
    ], UnitInvoice.prototype, "unitPricePretax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unitPriceTaxes", elemType: unitinvoicetaxline_1.UnitInvoiceTaxLine }),
        __metadata("design:type", Array)
    ], UnitInvoice.prototype, "unitPriceTaxes", void 0);
    return UnitInvoice;
}(utils_1.SpeakeasyBase));
exports.UnitInvoice = UnitInvoice;
