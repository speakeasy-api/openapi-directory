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
exports.FeaturedCollection = void 0;
var utils_1 = require("../../../internal/utils");
var featuredcollectioncoveritem_1 = require("./featuredcollectioncoveritem");
// FeaturedCollection
/**
 * Metadata about a featured collection
**/
var FeaturedCollection = /** @class */ (function (_super) {
    __extends(FeaturedCollection, _super);
    function FeaturedCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cover_item" }),
        __metadata("design:type", featuredcollectioncoveritem_1.FeaturedCollectionCoverItem)
    ], FeaturedCollection.prototype, "coverItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", Date)
    ], FeaturedCollection.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hero_item" }),
        __metadata("design:type", featuredcollectioncoveritem_1.FeaturedCollectionCoverItem)
    ], FeaturedCollection.prototype, "heroItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], FeaturedCollection.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=items_updated_time" }),
        __metadata("design:type", Date)
    ], FeaturedCollection.prototype, "itemsUpdatedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], FeaturedCollection.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_url" }),
        __metadata("design:type", String)
    ], FeaturedCollection.prototype, "shareUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_item_count" }),
        __metadata("design:type", Number)
    ], FeaturedCollection.prototype, "totalItemCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_time" }),
        __metadata("design:type", Date)
    ], FeaturedCollection.prototype, "updatedTime", void 0);
    return FeaturedCollection;
}(utils_1.SpeakeasyBase));
exports.FeaturedCollection = FeaturedCollection;
