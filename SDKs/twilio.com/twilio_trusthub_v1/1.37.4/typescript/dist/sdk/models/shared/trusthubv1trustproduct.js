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
exports.TrusthubV1TrustProduct = void 0;
var utils_1 = require("../../../internal/utils");
var trustproductenumstatusenum_1 = require("./trustproductenumstatusenum");
var TrusthubV1TrustProduct = /** @class */ (function (_super) {
    __extends(TrusthubV1TrustProduct, _super);
    function TrusthubV1TrustProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], TrusthubV1TrustProduct.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], TrusthubV1TrustProduct.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], TrusthubV1TrustProduct.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], TrusthubV1TrustProduct.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], TrusthubV1TrustProduct.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", Object)
    ], TrusthubV1TrustProduct.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policy_sid" }),
        __metadata("design:type", String)
    ], TrusthubV1TrustProduct.prototype, "policySid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], TrusthubV1TrustProduct.prototype, "sid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], TrusthubV1TrustProduct.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_callback" }),
        __metadata("design:type", String)
    ], TrusthubV1TrustProduct.prototype, "statusCallback", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], TrusthubV1TrustProduct.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=valid_until" }),
        __metadata("design:type", Date)
    ], TrusthubV1TrustProduct.prototype, "validUntil", void 0);
    return TrusthubV1TrustProduct;
}(utils_1.SpeakeasyBase));
exports.TrusthubV1TrustProduct = TrusthubV1TrustProduct;
