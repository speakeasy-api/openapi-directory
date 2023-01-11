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
exports.PrivateAuctionTermsInput = exports.PrivateAuctionTerms = void 0;
var utils_1 = require("../../../internal/utils");
var price_1 = require("./price");
// PrivateAuctionTerms
/**
 * Pricing terms for Private Auctions.
**/
var PrivateAuctionTerms = /** @class */ (function (_super) {
    __extends(PrivateAuctionTerms, _super);
    function PrivateAuctionTerms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=floorPrice" }),
        __metadata("design:type", price_1.Price)
    ], PrivateAuctionTerms.prototype, "floorPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=openAuctionAllowed" }),
        __metadata("design:type", Boolean)
    ], PrivateAuctionTerms.prototype, "openAuctionAllowed", void 0);
    return PrivateAuctionTerms;
}(utils_1.SpeakeasyBase));
exports.PrivateAuctionTerms = PrivateAuctionTerms;
// PrivateAuctionTermsInput
/**
 * Pricing terms for Private Auctions.
**/
var PrivateAuctionTermsInput = /** @class */ (function (_super) {
    __extends(PrivateAuctionTermsInput, _super);
    function PrivateAuctionTermsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=floorPrice" }),
        __metadata("design:type", price_1.Price)
    ], PrivateAuctionTermsInput.prototype, "floorPrice", void 0);
    return PrivateAuctionTermsInput;
}(utils_1.SpeakeasyBase));
exports.PrivateAuctionTermsInput = PrivateAuctionTermsInput;
