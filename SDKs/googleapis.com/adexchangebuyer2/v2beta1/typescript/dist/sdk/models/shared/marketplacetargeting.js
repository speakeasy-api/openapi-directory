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
exports.MarketplaceTargeting = void 0;
var utils_1 = require("../../../internal/utils");
var criteriatargeting_1 = require("./criteriatargeting");
var inventorysizetargeting_1 = require("./inventorysizetargeting");
var placementtargeting_1 = require("./placementtargeting");
var technologytargeting_1 = require("./technologytargeting");
var videotargeting_1 = require("./videotargeting");
// MarketplaceTargeting
/**
 * Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
**/
var MarketplaceTargeting = /** @class */ (function (_super) {
    __extends(MarketplaceTargeting, _super);
    function MarketplaceTargeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=geoTargeting" }),
        __metadata("design:type", criteriatargeting_1.CriteriaTargeting)
    ], MarketplaceTargeting.prototype, "geoTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventorySizeTargeting" }),
        __metadata("design:type", inventorysizetargeting_1.InventorySizeTargeting)
    ], MarketplaceTargeting.prototype, "inventorySizeTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=placementTargeting" }),
        __metadata("design:type", placementtargeting_1.PlacementTargeting)
    ], MarketplaceTargeting.prototype, "placementTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=technologyTargeting" }),
        __metadata("design:type", technologytargeting_1.TechnologyTargeting)
    ], MarketplaceTargeting.prototype, "technologyTargeting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=videoTargeting" }),
        __metadata("design:type", videotargeting_1.VideoTargeting)
    ], MarketplaceTargeting.prototype, "videoTargeting", void 0);
    return MarketplaceTargeting;
}(utils_1.SpeakeasyBase));
exports.MarketplaceTargeting = MarketplaceTargeting;
