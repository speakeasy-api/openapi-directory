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
exports.D2PAssociationResults = void 0;
var utils_1 = require("../../../internal/utils");
var d2passociation_1 = require("./d2passociation");
var compactassociationset_1 = require("./compactassociationset");
var D2PAssociationResults = /** @class */ (function (_super) {
    __extends(D2PAssociationResults, _super);
    function D2PAssociationResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associations", elemType: d2passociation_1.D2PAssociation }),
        __metadata("design:type", Array)
    ], D2PAssociationResults.prototype, "associations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compact_associations", elemType: compactassociationset_1.CompactAssociationSet }),
        __metadata("design:type", Array)
    ], D2PAssociationResults.prototype, "compactAssociations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=docs" }),
        __metadata("design:type", Array)
    ], D2PAssociationResults.prototype, "docs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=facet_counts" }),
        __metadata("design:type", Object)
    ], D2PAssociationResults.prototype, "facetCounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=highlighting" }),
        __metadata("design:type", Object)
    ], D2PAssociationResults.prototype, "highlighting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=numFound" }),
        __metadata("design:type", Number)
    ], D2PAssociationResults.prototype, "numFound", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=objects" }),
        __metadata("design:type", Array)
    ], D2PAssociationResults.prototype, "objects", void 0);
    return D2PAssociationResults;
}(utils_1.SpeakeasyBase));
exports.D2PAssociationResults = D2PAssociationResults;
