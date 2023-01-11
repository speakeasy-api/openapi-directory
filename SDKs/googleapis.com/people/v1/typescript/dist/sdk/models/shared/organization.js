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
exports.OrganizationInput = exports.Organization = void 0;
var utils_1 = require("../../../internal/utils");
var date_1 = require("./date");
var fieldmetadata_1 = require("./fieldmetadata");
var fieldmetadata_2 = require("./fieldmetadata");
// Organization
/**
 * A person's past or current organization. Overlapping date ranges are permitted.
**/
var Organization = /** @class */ (function (_super) {
    __extends(Organization, _super);
    function Organization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=costCenter" }),
        __metadata("design:type", String)
    ], Organization.prototype, "costCenter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current" }),
        __metadata("design:type", Boolean)
    ], Organization.prototype, "current", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], Organization.prototype, "department", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Organization.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", date_1.Date)
    ], Organization.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formattedType" }),
        __metadata("design:type", String)
    ], Organization.prototype, "formattedType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fullTimeEquivalentMillipercent" }),
        __metadata("design:type", Number)
    ], Organization.prototype, "fullTimeEquivalentMillipercent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobDescription" }),
        __metadata("design:type", String)
    ], Organization.prototype, "jobDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Organization.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", fieldmetadata_1.FieldMetadata)
    ], Organization.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Organization.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phoneticName" }),
        __metadata("design:type", String)
    ], Organization.prototype, "phoneticName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", date_1.Date)
    ], Organization.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=symbol" }),
        __metadata("design:type", String)
    ], Organization.prototype, "symbol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Organization.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Organization.prototype, "type", void 0);
    return Organization;
}(utils_1.SpeakeasyBase));
exports.Organization = Organization;
// OrganizationInput
/**
 * A person's past or current organization. Overlapping date ranges are permitted.
**/
var OrganizationInput = /** @class */ (function (_super) {
    __extends(OrganizationInput, _super);
    function OrganizationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=costCenter" }),
        __metadata("design:type", String)
    ], OrganizationInput.prototype, "costCenter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current" }),
        __metadata("design:type", Boolean)
    ], OrganizationInput.prototype, "current", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], OrganizationInput.prototype, "department", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], OrganizationInput.prototype, "domain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endDate" }),
        __metadata("design:type", date_1.Date)
    ], OrganizationInput.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fullTimeEquivalentMillipercent" }),
        __metadata("design:type", Number)
    ], OrganizationInput.prototype, "fullTimeEquivalentMillipercent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobDescription" }),
        __metadata("design:type", String)
    ], OrganizationInput.prototype, "jobDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], OrganizationInput.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", fieldmetadata_2.FieldMetadataInput)
    ], OrganizationInput.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OrganizationInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phoneticName" }),
        __metadata("design:type", String)
    ], OrganizationInput.prototype, "phoneticName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startDate" }),
        __metadata("design:type", date_1.Date)
    ], OrganizationInput.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=symbol" }),
        __metadata("design:type", String)
    ], OrganizationInput.prototype, "symbol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OrganizationInput.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OrganizationInput.prototype, "type", void 0);
    return OrganizationInput;
}(utils_1.SpeakeasyBase));
exports.OrganizationInput = OrganizationInput;
