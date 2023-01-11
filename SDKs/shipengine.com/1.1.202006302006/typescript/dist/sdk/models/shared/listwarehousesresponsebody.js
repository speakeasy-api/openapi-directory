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
exports.ListWarehousesResponseBody = exports.ListWarehousesResponseBodyWarehouse = void 0;
var utils_1 = require("../../../internal/utils");
var address_1 = require("./address");
// ListWarehousesResponseBodyWarehouse
/**
 * A warehouse
**/
var ListWarehousesResponseBodyWarehouse = /** @class */ (function (_super) {
    __extends(ListWarehousesResponseBodyWarehouse, _super);
    function ListWarehousesResponseBodyWarehouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListWarehousesResponseBodyWarehouse.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListWarehousesResponseBodyWarehouse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=origin_address" }),
        __metadata("design:type", address_1.Address)
    ], ListWarehousesResponseBodyWarehouse.prototype, "originAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=return_address" }),
        __metadata("design:type", address_1.Address)
    ], ListWarehousesResponseBodyWarehouse.prototype, "returnAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouse_id" }),
        __metadata("design:type", Object)
    ], ListWarehousesResponseBodyWarehouse.prototype, "warehouseId", void 0);
    return ListWarehousesResponseBodyWarehouse;
}(utils_1.SpeakeasyBase));
exports.ListWarehousesResponseBodyWarehouse = ListWarehousesResponseBodyWarehouse;
// ListWarehousesResponseBody
/**
 * A warehouse list response body
**/
var ListWarehousesResponseBody = /** @class */ (function (_super) {
    __extends(ListWarehousesResponseBody, _super);
    function ListWarehousesResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=warehouses", elemType: ListWarehousesResponseBodyWarehouse }),
        __metadata("design:type", Array)
    ], ListWarehousesResponseBody.prototype, "warehouses", void 0);
    return ListWarehousesResponseBody;
}(utils_1.SpeakeasyBase));
exports.ListWarehousesResponseBody = ListWarehousesResponseBody;
