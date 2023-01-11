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
exports.ProductResponse = void 0;
var utils_1 = require("../../../internal/utils");
var categorydto_1 = require("./categorydto");
var metadatadto_1 = require("./metadatadto");
var onlineproperties_1 = require("./onlineproperties");
var presentationdto_1 = require("./presentationdto");
var variantoptiondefinitions_1 = require("./variantoptiondefinitions");
var variantdto_1 = require("./variantdto");
var ProductResponse = /** @class */ (function (_super) {
    __extends(ProductResponse, _super);
    function ProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], ProductResponse.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=category" }),
        __metadata("design:type", categorydto_1.CategoryDto)
    ], ProductResponse.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], ProductResponse.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ProductResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], ProductResponse.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalReference" }),
        __metadata("design:type", String)
    ], ProductResponse.prototype, "externalReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageLookupKeys" }),
        __metadata("design:type", Array)
    ], ProductResponse.prototype, "imageLookupKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", metadatadto_1.MetadataDto)
    ], ProductResponse.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProductResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=online" }),
        __metadata("design:type", onlineproperties_1.OnlineProperties)
    ], ProductResponse.prototype, "online", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=presentation" }),
        __metadata("design:type", presentationdto_1.PresentationDto)
    ], ProductResponse.prototype, "presentation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxCode" }),
        __metadata("design:type", String)
    ], ProductResponse.prototype, "taxCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxExempt" }),
        __metadata("design:type", Boolean)
    ], ProductResponse.prototype, "taxExempt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taxRates" }),
        __metadata("design:type", Array)
    ], ProductResponse.prototype, "taxRates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unitName" }),
        __metadata("design:type", String)
    ], ProductResponse.prototype, "unitName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], ProductResponse.prototype, "updated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedBy" }),
        __metadata("design:type", String)
    ], ProductResponse.prototype, "updatedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ProductResponse.prototype, "uuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=variantOptionDefinitions" }),
        __metadata("design:type", variantoptiondefinitions_1.VariantOptionDefinitions)
    ], ProductResponse.prototype, "variantOptionDefinitions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=variants", elemType: variantdto_1.VariantDto }),
        __metadata("design:type", Array)
    ], ProductResponse.prototype, "variants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vatPercentage" }),
        __metadata("design:type", Number)
    ], ProductResponse.prototype, "vatPercentage", void 0);
    return ProductResponse;
}(utils_1.SpeakeasyBase));
exports.ProductResponse = ProductResponse;
