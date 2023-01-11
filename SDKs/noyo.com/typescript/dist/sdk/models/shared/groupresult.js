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
exports.GroupResult = exports.GroupResultInsuranceDetails = exports.GroupResultBusinessDetails = exports.GroupResultBusinessDetailsEntityTypeEnum = exports.GroupResultBusinessDetailsEmployerTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GroupResultBusinessDetailsEmployerTypeEnum;
(function (GroupResultBusinessDetailsEmployerTypeEnum) {
    GroupResultBusinessDetailsEmployerTypeEnum["ForeignGovernment"] = "foreign_government";
    GroupResultBusinessDetailsEmployerTypeEnum["PrivateSector"] = "private_sector";
    GroupResultBusinessDetailsEmployerTypeEnum["ReligiousEmployer"] = "religious_employer";
    GroupResultBusinessDetailsEmployerTypeEnum["StateGovernment"] = "state_government";
    GroupResultBusinessDetailsEmployerTypeEnum["TribalGovernment"] = "tribal_government";
})(GroupResultBusinessDetailsEmployerTypeEnum = exports.GroupResultBusinessDetailsEmployerTypeEnum || (exports.GroupResultBusinessDetailsEmployerTypeEnum = {}));
var GroupResultBusinessDetailsEntityTypeEnum;
(function (GroupResultBusinessDetailsEntityTypeEnum) {
    GroupResultBusinessDetailsEntityTypeEnum["CCorp"] = "c_corp";
    GroupResultBusinessDetailsEntityTypeEnum["Llc"] = "llc";
    GroupResultBusinessDetailsEntityTypeEnum["Llp"] = "llp";
    GroupResultBusinessDetailsEntityTypeEnum["Partnership"] = "partnership";
    GroupResultBusinessDetailsEntityTypeEnum["SCorp"] = "s_corp";
})(GroupResultBusinessDetailsEntityTypeEnum = exports.GroupResultBusinessDetailsEntityTypeEnum || (exports.GroupResultBusinessDetailsEntityTypeEnum = {}));
// GroupResultBusinessDetails
/**
 * Details about business or industry of the group
**/
var GroupResultBusinessDetails = /** @class */ (function (_super) {
    __extends(GroupResultBusinessDetails, _super);
    function GroupResultBusinessDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=company_description" }),
        __metadata("design:type", String)
    ], GroupResultBusinessDetails.prototype, "companyDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_established" }),
        __metadata("design:type", String)
    ], GroupResultBusinessDetails.prototype, "dateEstablished", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employer_type" }),
        __metadata("design:type", String)
    ], GroupResultBusinessDetails.prototype, "employerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], GroupResultBusinessDetails.prototype, "entityType", void 0);
    return GroupResultBusinessDetails;
}(utils_1.SpeakeasyBase));
exports.GroupResultBusinessDetails = GroupResultBusinessDetails;
// GroupResultInsuranceDetails
/**
 * General details about the group insurance offerings
**/
var GroupResultInsuranceDetails = /** @class */ (function (_super) {
    __extends(GroupResultInsuranceDetails, _super);
    function GroupResultInsuranceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_erisa_compliant" }),
        __metadata("design:type", Boolean)
    ], GroupResultInsuranceDetails.prototype, "isErisaCompliant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_erisa_subject" }),
        __metadata("design:type", Boolean)
    ], GroupResultInsuranceDetails.prototype, "isErisaSubject", void 0);
    return GroupResultInsuranceDetails;
}(utils_1.SpeakeasyBase));
exports.GroupResultInsuranceDetails = GroupResultInsuranceDetails;
var GroupResult = /** @class */ (function (_super) {
    __extends(GroupResult, _super);
    function GroupResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=business_details" }),
        __metadata("design:type", GroupResultBusinessDetails)
    ], GroupResult.prototype, "businessDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], GroupResult.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dba_name" }),
        __metadata("design:type", String)
    ], GroupResult.prototype, "dbaName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=federal_ein" }),
        __metadata("design:type", String)
    ], GroupResult.prototype, "federalEin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GroupResult.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=insurance_details" }),
        __metadata("design:type", GroupResultInsuranceDetails)
    ], GroupResult.prototype, "insuranceDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], GroupResult.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupResult.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organization_id" }),
        __metadata("design:type", String)
    ], GroupResult.prototype, "organizationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sic_code" }),
        __metadata("design:type", String)
    ], GroupResult.prototype, "sicCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], GroupResult.prototype, "version", void 0);
    return GroupResult;
}(utils_1.SpeakeasyBase));
exports.GroupResult = GroupResult;
