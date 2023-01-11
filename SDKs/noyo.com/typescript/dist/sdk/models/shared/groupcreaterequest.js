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
exports.GroupCreateRequest = exports.GroupCreateRequestInsuranceDetails = exports.GroupCreateRequestBusinessDetails = exports.GroupCreateRequestBusinessDetailsEntityTypeEnum = exports.GroupCreateRequestBusinessDetailsEmployerTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GroupCreateRequestBusinessDetailsEmployerTypeEnum;
(function (GroupCreateRequestBusinessDetailsEmployerTypeEnum) {
    GroupCreateRequestBusinessDetailsEmployerTypeEnum["ForeignGovernment"] = "foreign_government";
    GroupCreateRequestBusinessDetailsEmployerTypeEnum["PrivateSector"] = "private_sector";
    GroupCreateRequestBusinessDetailsEmployerTypeEnum["ReligiousEmployer"] = "religious_employer";
    GroupCreateRequestBusinessDetailsEmployerTypeEnum["StateGovernment"] = "state_government";
    GroupCreateRequestBusinessDetailsEmployerTypeEnum["TribalGovernment"] = "tribal_government";
})(GroupCreateRequestBusinessDetailsEmployerTypeEnum = exports.GroupCreateRequestBusinessDetailsEmployerTypeEnum || (exports.GroupCreateRequestBusinessDetailsEmployerTypeEnum = {}));
var GroupCreateRequestBusinessDetailsEntityTypeEnum;
(function (GroupCreateRequestBusinessDetailsEntityTypeEnum) {
    GroupCreateRequestBusinessDetailsEntityTypeEnum["CCorp"] = "c_corp";
    GroupCreateRequestBusinessDetailsEntityTypeEnum["Llc"] = "llc";
    GroupCreateRequestBusinessDetailsEntityTypeEnum["Llp"] = "llp";
    GroupCreateRequestBusinessDetailsEntityTypeEnum["Partnership"] = "partnership";
    GroupCreateRequestBusinessDetailsEntityTypeEnum["SCorp"] = "s_corp";
})(GroupCreateRequestBusinessDetailsEntityTypeEnum = exports.GroupCreateRequestBusinessDetailsEntityTypeEnum || (exports.GroupCreateRequestBusinessDetailsEntityTypeEnum = {}));
// GroupCreateRequestBusinessDetails
/**
 * Details about business or industry of the group
**/
var GroupCreateRequestBusinessDetails = /** @class */ (function (_super) {
    __extends(GroupCreateRequestBusinessDetails, _super);
    function GroupCreateRequestBusinessDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company_description" }),
        __metadata("design:type", String)
    ], GroupCreateRequestBusinessDetails.prototype, "companyDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_established" }),
        __metadata("design:type", Date)
    ], GroupCreateRequestBusinessDetails.prototype, "dateEstablished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employer_type" }),
        __metadata("design:type", String)
    ], GroupCreateRequestBusinessDetails.prototype, "employerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], GroupCreateRequestBusinessDetails.prototype, "entityType", void 0);
    return GroupCreateRequestBusinessDetails;
}(utils_1.SpeakeasyBase));
exports.GroupCreateRequestBusinessDetails = GroupCreateRequestBusinessDetails;
// GroupCreateRequestInsuranceDetails
/**
 * General details about the group insurance offerings
**/
var GroupCreateRequestInsuranceDetails = /** @class */ (function (_super) {
    __extends(GroupCreateRequestInsuranceDetails, _super);
    function GroupCreateRequestInsuranceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_erisa_compliant" }),
        __metadata("design:type", Boolean)
    ], GroupCreateRequestInsuranceDetails.prototype, "isErisaCompliant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_erisa_subject" }),
        __metadata("design:type", Boolean)
    ], GroupCreateRequestInsuranceDetails.prototype, "isErisaSubject", void 0);
    return GroupCreateRequestInsuranceDetails;
}(utils_1.SpeakeasyBase));
exports.GroupCreateRequestInsuranceDetails = GroupCreateRequestInsuranceDetails;
var GroupCreateRequest = /** @class */ (function (_super) {
    __extends(GroupCreateRequest, _super);
    function GroupCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=business_details" }),
        __metadata("design:type", GroupCreateRequestBusinessDetails)
    ], GroupCreateRequest.prototype, "businessDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dba_name" }),
        __metadata("design:type", String)
    ], GroupCreateRequest.prototype, "dbaName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=federal_ein" }),
        __metadata("design:type", String)
    ], GroupCreateRequest.prototype, "federalEin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_details" }),
        __metadata("design:type", GroupCreateRequestInsuranceDetails)
    ], GroupCreateRequest.prototype, "insuranceDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupCreateRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization_id" }),
        __metadata("design:type", String)
    ], GroupCreateRequest.prototype, "organizationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sic_code" }),
        __metadata("design:type", String)
    ], GroupCreateRequest.prototype, "sicCode", void 0);
    return GroupCreateRequest;
}(utils_1.SpeakeasyBase));
exports.GroupCreateRequest = GroupCreateRequest;
