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
exports.BillSponsorship = exports.BillSponsorshipOrganization = void 0;
var utils_1 = require("../../../internal/utils");
var compactperson_1 = require("./compactperson");
var BillSponsorshipOrganization = /** @class */ (function (_super) {
    __extends(BillSponsorshipOrganization, _super);
    function BillSponsorshipOrganization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification" }),
        __metadata("design:type", String)
    ], BillSponsorshipOrganization.prototype, "classification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BillSponsorshipOrganization.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BillSponsorshipOrganization.prototype, "name", void 0);
    return BillSponsorshipOrganization;
}(utils_1.SpeakeasyBase));
exports.BillSponsorshipOrganization = BillSponsorshipOrganization;
var BillSponsorship = /** @class */ (function (_super) {
    __extends(BillSponsorship, _super);
    function BillSponsorship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=classification" }),
        __metadata("design:type", String)
    ], BillSponsorship.prototype, "classification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], BillSponsorship.prototype, "entityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BillSponsorship.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization" }),
        __metadata("design:type", BillSponsorshipOrganization)
    ], BillSponsorship.prototype, "organization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=person" }),
        __metadata("design:type", compactperson_1.CompactPerson)
    ], BillSponsorship.prototype, "person", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], BillSponsorship.prototype, "primary", void 0);
    return BillSponsorship;
}(utils_1.SpeakeasyBase));
exports.BillSponsorship = BillSponsorship;
