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
exports.ListCarrierServicesResponseBody = exports.ListCarrierServicesResponseBodyService = void 0;
var utils_1 = require("../../../internal/utils");
// ListCarrierServicesResponseBodyService
/**
 * A service offered by the carrier
**/
var ListCarrierServicesResponseBodyService = /** @class */ (function (_super) {
    __extends(ListCarrierServicesResponseBodyService, _super);
    function ListCarrierServicesResponseBodyService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_code" }),
        __metadata("design:type", String)
    ], ListCarrierServicesResponseBodyService.prototype, "carrierCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", Object)
    ], ListCarrierServicesResponseBodyService.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domestic" }),
        __metadata("design:type", Boolean)
    ], ListCarrierServicesResponseBodyService.prototype, "domestic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=international" }),
        __metadata("design:type", Boolean)
    ], ListCarrierServicesResponseBodyService.prototype, "international", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_multi_package_supported" }),
        __metadata("design:type", Boolean)
    ], ListCarrierServicesResponseBodyService.prototype, "isMultiPackageSupported", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListCarrierServicesResponseBodyService.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_code" }),
        __metadata("design:type", String)
    ], ListCarrierServicesResponseBodyService.prototype, "serviceCode", void 0);
    return ListCarrierServicesResponseBodyService;
}(utils_1.SpeakeasyBase));
exports.ListCarrierServicesResponseBodyService = ListCarrierServicesResponseBodyService;
// ListCarrierServicesResponseBody
/**
 * A carrier list services response body
**/
var ListCarrierServicesResponseBody = /** @class */ (function (_super) {
    __extends(ListCarrierServicesResponseBody, _super);
    function ListCarrierServicesResponseBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=services", elemType: ListCarrierServicesResponseBodyService }),
        __metadata("design:type", Array)
    ], ListCarrierServicesResponseBody.prototype, "services", void 0);
    return ListCarrierServicesResponseBody;
}(utils_1.SpeakeasyBase));
exports.ListCarrierServicesResponseBody = ListCarrierServicesResponseBody;
