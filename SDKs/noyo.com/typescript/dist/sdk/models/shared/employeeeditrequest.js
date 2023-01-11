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
exports.EmployeeEditRequest = exports.EmployeeEditRequestPerson = exports.EmployeeEditRequestPersonSexEnum = exports.EmployeeEditRequestPersonMaritalStatusEnum = exports.EmployeeEditRequestPersonMailingAddress = exports.EmployeeEditRequestPersonMailingAddressStateEnum = exports.EmployeeEditRequestPersonHomeAddress = exports.EmployeeEditRequestPersonHomeAddressStateEnum = exports.EmployeeEditRequestPersonDetails = exports.EmployeeEditRequestPersonDetailsTobacco = exports.EmployeeEditRequestPersonDetailsTobaccoTypesEnum = exports.EmployeeEditRequestPersonDetailsDisability = exports.EmployeeEditRequestPersonDetailsAmericanIndian = exports.EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = exports.EmployeeEditRequestPersonContact = exports.EmployeeEditRequestPersonContactPreferredMethodEnum = exports.EmployeeEditRequestPersonContactEmailAddressTypeEnum = exports.EmployeeEditRequestEmployment = exports.EmployeeEditRequestEmploymentSalary = exports.EmployeeEditRequestEmploymentSalaryUnitEnum = exports.EmployeeEditRequestEmploymentSalaryTypeEnum = exports.EmployeeEditRequestEmploymentEmploymentStatusEnum = exports.EmployeeEditRequestEmploymentEmploymentDates = void 0;
var utils_1 = require("../../../internal/utils");
// EmployeeEditRequestEmploymentEmploymentDates
/**
 * Employee employment dates
**/
var EmployeeEditRequestEmploymentEmploymentDates = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestEmploymentEmploymentDates, _super);
    function EmployeeEditRequestEmploymentEmploymentDates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=full_time_start" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestEmploymentEmploymentDates.prototype, "fullTimeStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hire_date" }),
        __metadata("design:type", Date)
    ], EmployeeEditRequestEmploymentEmploymentDates.prototype, "hireDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rehire" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestEmploymentEmploymentDates.prototype, "rehire", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=retirement" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestEmploymentEmploymentDates.prototype, "retirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=terminated" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestEmploymentEmploymentDates.prototype, "terminated", void 0);
    return EmployeeEditRequestEmploymentEmploymentDates;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestEmploymentEmploymentDates = EmployeeEditRequestEmploymentEmploymentDates;
var EmployeeEditRequestEmploymentEmploymentStatusEnum;
(function (EmployeeEditRequestEmploymentEmploymentStatusEnum) {
    EmployeeEditRequestEmploymentEmploymentStatusEnum["Contract"] = "contract";
    EmployeeEditRequestEmploymentEmploymentStatusEnum["Disabled"] = "disabled";
    EmployeeEditRequestEmploymentEmploymentStatusEnum["FullTime"] = "full-time";
    EmployeeEditRequestEmploymentEmploymentStatusEnum["PartTime"] = "part-time";
    EmployeeEditRequestEmploymentEmploymentStatusEnum["Retired"] = "retired";
    EmployeeEditRequestEmploymentEmploymentStatusEnum["Terminated"] = "terminated";
})(EmployeeEditRequestEmploymentEmploymentStatusEnum = exports.EmployeeEditRequestEmploymentEmploymentStatusEnum || (exports.EmployeeEditRequestEmploymentEmploymentStatusEnum = {}));
var EmployeeEditRequestEmploymentSalaryTypeEnum;
(function (EmployeeEditRequestEmploymentSalaryTypeEnum) {
    EmployeeEditRequestEmploymentSalaryTypeEnum["Hourly"] = "hourly";
    EmployeeEditRequestEmploymentSalaryTypeEnum["Salary"] = "salary";
})(EmployeeEditRequestEmploymentSalaryTypeEnum = exports.EmployeeEditRequestEmploymentSalaryTypeEnum || (exports.EmployeeEditRequestEmploymentSalaryTypeEnum = {}));
var EmployeeEditRequestEmploymentSalaryUnitEnum;
(function (EmployeeEditRequestEmploymentSalaryUnitEnum) {
    EmployeeEditRequestEmploymentSalaryUnitEnum["Annual"] = "annual";
    EmployeeEditRequestEmploymentSalaryUnitEnum["Hour"] = "hour";
    EmployeeEditRequestEmploymentSalaryUnitEnum["Month"] = "month";
    EmployeeEditRequestEmploymentSalaryUnitEnum["SemiMonthly"] = "semi-monthly";
    EmployeeEditRequestEmploymentSalaryUnitEnum["Week"] = "week";
})(EmployeeEditRequestEmploymentSalaryUnitEnum = exports.EmployeeEditRequestEmploymentSalaryUnitEnum || (exports.EmployeeEditRequestEmploymentSalaryUnitEnum = {}));
// EmployeeEditRequestEmploymentSalary
/**
 * Employee salary information
**/
var EmployeeEditRequestEmploymentSalary = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestEmploymentSalary, _super);
    function EmployeeEditRequestEmploymentSalary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], EmployeeEditRequestEmploymentSalary.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestEmploymentSalary.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestEmploymentSalary.prototype, "unit", void 0);
    return EmployeeEditRequestEmploymentSalary;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestEmploymentSalary = EmployeeEditRequestEmploymentSalary;
// EmployeeEditRequestEmployment
/**
 * Employment information for the employee
**/
var EmployeeEditRequestEmployment = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestEmployment, _super);
    function EmployeeEditRequestEmployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employment_dates" }),
        __metadata("design:type", EmployeeEditRequestEmploymentEmploymentDates)
    ], EmployeeEditRequestEmployment.prototype, "employmentDates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employment_status" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestEmployment.prototype, "employmentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hours_worked" }),
        __metadata("design:type", Number)
    ], EmployeeEditRequestEmployment.prototype, "hoursWorked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occupation" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestEmployment.prototype, "occupation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=salary" }),
        __metadata("design:type", EmployeeEditRequestEmploymentSalary)
    ], EmployeeEditRequestEmployment.prototype, "salary", void 0);
    return EmployeeEditRequestEmployment;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestEmployment = EmployeeEditRequestEmployment;
var EmployeeEditRequestPersonContactEmailAddressTypeEnum;
(function (EmployeeEditRequestPersonContactEmailAddressTypeEnum) {
    EmployeeEditRequestPersonContactEmailAddressTypeEnum["Home"] = "home";
    EmployeeEditRequestPersonContactEmailAddressTypeEnum["Work"] = "work";
})(EmployeeEditRequestPersonContactEmailAddressTypeEnum = exports.EmployeeEditRequestPersonContactEmailAddressTypeEnum || (exports.EmployeeEditRequestPersonContactEmailAddressTypeEnum = {}));
var EmployeeEditRequestPersonContactPreferredMethodEnum;
(function (EmployeeEditRequestPersonContactPreferredMethodEnum) {
    EmployeeEditRequestPersonContactPreferredMethodEnum["Email"] = "email";
    EmployeeEditRequestPersonContactPreferredMethodEnum["HomePhone"] = "home-phone";
    EmployeeEditRequestPersonContactPreferredMethodEnum["Mail"] = "mail";
    EmployeeEditRequestPersonContactPreferredMethodEnum["Other"] = "other";
    EmployeeEditRequestPersonContactPreferredMethodEnum["WorkPhone"] = "work-phone";
})(EmployeeEditRequestPersonContactPreferredMethodEnum = exports.EmployeeEditRequestPersonContactPreferredMethodEnum || (exports.EmployeeEditRequestPersonContactPreferredMethodEnum = {}));
// EmployeeEditRequestPersonContact
/**
 * Contact information for the person
**/
var EmployeeEditRequestPersonContact = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestPersonContact, _super);
    function EmployeeEditRequestPersonContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_address" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonContact.prototype, "emailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_address_type" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonContact.prototype, "emailAddressType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_phone" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonContact.prototype, "homePhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_language" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonContact.prototype, "preferredLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_method" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonContact.prototype, "preferredMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaks_english" }),
        __metadata("design:type", Boolean)
    ], EmployeeEditRequestPersonContact.prototype, "speaksEnglish", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=work_phone" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonContact.prototype, "workPhone", void 0);
    return EmployeeEditRequestPersonContact;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestPersonContact = EmployeeEditRequestPersonContact;
var EmployeeEditRequestPersonDetailsAmericanIndianStateEnum;
(function (EmployeeEditRequestPersonDetailsAmericanIndianStateEnum) {
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ak"] = "AK";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Al"] = "AL";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ar"] = "AR";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["As"] = "AS";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Az"] = "AZ";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ca"] = "CA";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Co"] = "CO";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ct"] = "CT";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Dc"] = "DC";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["De"] = "DE";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Fl"] = "FL";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Fm"] = "FM";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ga"] = "GA";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Gu"] = "GU";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Hi"] = "HI";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ia"] = "IA";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Id"] = "ID";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Il"] = "IL";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["In"] = "IN";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ks"] = "KS";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ky"] = "KY";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["La"] = "LA";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ma"] = "MA";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Md"] = "MD";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Me"] = "ME";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Mh"] = "MH";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Mi"] = "MI";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Mn"] = "MN";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Mo"] = "MO";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Mp"] = "MP";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ms"] = "MS";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Mt"] = "MT";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Nc"] = "NC";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Nd"] = "ND";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ne"] = "NE";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Nh"] = "NH";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Nj"] = "NJ";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Nm"] = "NM";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Nv"] = "NV";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ny"] = "NY";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Oh"] = "OH";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ok"] = "OK";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Or"] = "OR";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Pa"] = "PA";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Pr"] = "PR";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Pw"] = "PW";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ri"] = "RI";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Sc"] = "SC";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Sd"] = "SD";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Tn"] = "TN";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Tx"] = "TX";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Um"] = "UM";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Ut"] = "UT";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Va"] = "VA";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Vi"] = "VI";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Vt"] = "VT";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Wa"] = "WA";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Wi"] = "WI";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Wv"] = "WV";
    EmployeeEditRequestPersonDetailsAmericanIndianStateEnum["Wy"] = "WY";
})(EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = exports.EmployeeEditRequestPersonDetailsAmericanIndianStateEnum || (exports.EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = {}));
// EmployeeEditRequestPersonDetailsAmericanIndian
/**
 * American Indian status details (if applicable)
**/
var EmployeeEditRequestPersonDetailsAmericanIndian = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestPersonDetailsAmericanIndian, _super);
    function EmployeeEditRequestPersonDetailsAmericanIndian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonDetailsAmericanIndian.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tribe" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonDetailsAmericanIndian.prototype, "tribe", void 0);
    return EmployeeEditRequestPersonDetailsAmericanIndian;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestPersonDetailsAmericanIndian = EmployeeEditRequestPersonDetailsAmericanIndian;
// EmployeeEditRequestPersonDetailsDisability
/**
 * Disability details (if applicable)
**/
var EmployeeEditRequestPersonDetailsDisability = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestPersonDetailsDisability, _super);
    function EmployeeEditRequestPersonDetailsDisability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=communication" }),
        __metadata("design:type", Boolean)
    ], EmployeeEditRequestPersonDetailsDisability.prototype, "communication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], EmployeeEditRequestPersonDetailsDisability.prototype, "disabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonDetailsDisability.prototype, "reason", void 0);
    return EmployeeEditRequestPersonDetailsDisability;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestPersonDetailsDisability = EmployeeEditRequestPersonDetailsDisability;
var EmployeeEditRequestPersonDetailsTobaccoTypesEnum;
(function (EmployeeEditRequestPersonDetailsTobaccoTypesEnum) {
    EmployeeEditRequestPersonDetailsTobaccoTypesEnum["ChewingTobacco"] = "chewing-tobacco";
    EmployeeEditRequestPersonDetailsTobaccoTypesEnum["Cigarettes"] = "cigarettes";
    EmployeeEditRequestPersonDetailsTobaccoTypesEnum["Pipe"] = "pipe";
})(EmployeeEditRequestPersonDetailsTobaccoTypesEnum = exports.EmployeeEditRequestPersonDetailsTobaccoTypesEnum || (exports.EmployeeEditRequestPersonDetailsTobaccoTypesEnum = {}));
// EmployeeEditRequestPersonDetailsTobacco
/**
 * Tobacco usage details (if applicable)
**/
var EmployeeEditRequestPersonDetailsTobacco = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestPersonDetailsTobacco, _super);
    function EmployeeEditRequestPersonDetailsTobacco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonDetailsTobacco.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonDetailsTobacco.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], EmployeeEditRequestPersonDetailsTobacco.prototype, "types", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", Boolean)
    ], EmployeeEditRequestPersonDetailsTobacco.prototype, "user", void 0);
    return EmployeeEditRequestPersonDetailsTobacco;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestPersonDetailsTobacco = EmployeeEditRequestPersonDetailsTobacco;
// EmployeeEditRequestPersonDetails
/**
 * Additional personal details of the person
**/
var EmployeeEditRequestPersonDetails = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestPersonDetails, _super);
    function EmployeeEditRequestPersonDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=american_indian" }),
        __metadata("design:type", EmployeeEditRequestPersonDetailsAmericanIndian)
    ], EmployeeEditRequestPersonDetails.prototype, "americanIndian", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disability" }),
        __metadata("design:type", EmployeeEditRequestPersonDetailsDisability)
    ], EmployeeEditRequestPersonDetails.prototype, "disability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_military" }),
        __metadata("design:type", Boolean)
    ], EmployeeEditRequestPersonDetails.prototype, "isMilitary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_student" }),
        __metadata("design:type", Boolean)
    ], EmployeeEditRequestPersonDetails.prototype, "isStudent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tobacco" }),
        __metadata("design:type", EmployeeEditRequestPersonDetailsTobacco)
    ], EmployeeEditRequestPersonDetails.prototype, "tobacco", void 0);
    return EmployeeEditRequestPersonDetails;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestPersonDetails = EmployeeEditRequestPersonDetails;
var EmployeeEditRequestPersonHomeAddressStateEnum;
(function (EmployeeEditRequestPersonHomeAddressStateEnum) {
    EmployeeEditRequestPersonHomeAddressStateEnum["Ak"] = "AK";
    EmployeeEditRequestPersonHomeAddressStateEnum["Al"] = "AL";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ar"] = "AR";
    EmployeeEditRequestPersonHomeAddressStateEnum["As"] = "AS";
    EmployeeEditRequestPersonHomeAddressStateEnum["Az"] = "AZ";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ca"] = "CA";
    EmployeeEditRequestPersonHomeAddressStateEnum["Co"] = "CO";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ct"] = "CT";
    EmployeeEditRequestPersonHomeAddressStateEnum["Dc"] = "DC";
    EmployeeEditRequestPersonHomeAddressStateEnum["De"] = "DE";
    EmployeeEditRequestPersonHomeAddressStateEnum["Fl"] = "FL";
    EmployeeEditRequestPersonHomeAddressStateEnum["Fm"] = "FM";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ga"] = "GA";
    EmployeeEditRequestPersonHomeAddressStateEnum["Gu"] = "GU";
    EmployeeEditRequestPersonHomeAddressStateEnum["Hi"] = "HI";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ia"] = "IA";
    EmployeeEditRequestPersonHomeAddressStateEnum["Id"] = "ID";
    EmployeeEditRequestPersonHomeAddressStateEnum["Il"] = "IL";
    EmployeeEditRequestPersonHomeAddressStateEnum["In"] = "IN";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ks"] = "KS";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ky"] = "KY";
    EmployeeEditRequestPersonHomeAddressStateEnum["La"] = "LA";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ma"] = "MA";
    EmployeeEditRequestPersonHomeAddressStateEnum["Md"] = "MD";
    EmployeeEditRequestPersonHomeAddressStateEnum["Me"] = "ME";
    EmployeeEditRequestPersonHomeAddressStateEnum["Mh"] = "MH";
    EmployeeEditRequestPersonHomeAddressStateEnum["Mi"] = "MI";
    EmployeeEditRequestPersonHomeAddressStateEnum["Mn"] = "MN";
    EmployeeEditRequestPersonHomeAddressStateEnum["Mo"] = "MO";
    EmployeeEditRequestPersonHomeAddressStateEnum["Mp"] = "MP";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ms"] = "MS";
    EmployeeEditRequestPersonHomeAddressStateEnum["Mt"] = "MT";
    EmployeeEditRequestPersonHomeAddressStateEnum["Nc"] = "NC";
    EmployeeEditRequestPersonHomeAddressStateEnum["Nd"] = "ND";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ne"] = "NE";
    EmployeeEditRequestPersonHomeAddressStateEnum["Nh"] = "NH";
    EmployeeEditRequestPersonHomeAddressStateEnum["Nj"] = "NJ";
    EmployeeEditRequestPersonHomeAddressStateEnum["Nm"] = "NM";
    EmployeeEditRequestPersonHomeAddressStateEnum["Nv"] = "NV";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ny"] = "NY";
    EmployeeEditRequestPersonHomeAddressStateEnum["Oh"] = "OH";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ok"] = "OK";
    EmployeeEditRequestPersonHomeAddressStateEnum["Or"] = "OR";
    EmployeeEditRequestPersonHomeAddressStateEnum["Pa"] = "PA";
    EmployeeEditRequestPersonHomeAddressStateEnum["Pr"] = "PR";
    EmployeeEditRequestPersonHomeAddressStateEnum["Pw"] = "PW";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ri"] = "RI";
    EmployeeEditRequestPersonHomeAddressStateEnum["Sc"] = "SC";
    EmployeeEditRequestPersonHomeAddressStateEnum["Sd"] = "SD";
    EmployeeEditRequestPersonHomeAddressStateEnum["Tn"] = "TN";
    EmployeeEditRequestPersonHomeAddressStateEnum["Tx"] = "TX";
    EmployeeEditRequestPersonHomeAddressStateEnum["Um"] = "UM";
    EmployeeEditRequestPersonHomeAddressStateEnum["Ut"] = "UT";
    EmployeeEditRequestPersonHomeAddressStateEnum["Va"] = "VA";
    EmployeeEditRequestPersonHomeAddressStateEnum["Vi"] = "VI";
    EmployeeEditRequestPersonHomeAddressStateEnum["Vt"] = "VT";
    EmployeeEditRequestPersonHomeAddressStateEnum["Wa"] = "WA";
    EmployeeEditRequestPersonHomeAddressStateEnum["Wi"] = "WI";
    EmployeeEditRequestPersonHomeAddressStateEnum["Wv"] = "WV";
    EmployeeEditRequestPersonHomeAddressStateEnum["Wy"] = "WY";
})(EmployeeEditRequestPersonHomeAddressStateEnum = exports.EmployeeEditRequestPersonHomeAddressStateEnum || (exports.EmployeeEditRequestPersonHomeAddressStateEnum = {}));
// EmployeeEditRequestPersonHomeAddress
/**
 * Home address of the person
**/
var EmployeeEditRequestPersonHomeAddress = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestPersonHomeAddress, _super);
    function EmployeeEditRequestPersonHomeAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonHomeAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonHomeAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonHomeAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonHomeAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonHomeAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonHomeAddress.prototype, "zipCode", void 0);
    return EmployeeEditRequestPersonHomeAddress;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestPersonHomeAddress = EmployeeEditRequestPersonHomeAddress;
var EmployeeEditRequestPersonMailingAddressStateEnum;
(function (EmployeeEditRequestPersonMailingAddressStateEnum) {
    EmployeeEditRequestPersonMailingAddressStateEnum["Ak"] = "AK";
    EmployeeEditRequestPersonMailingAddressStateEnum["Al"] = "AL";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ar"] = "AR";
    EmployeeEditRequestPersonMailingAddressStateEnum["As"] = "AS";
    EmployeeEditRequestPersonMailingAddressStateEnum["Az"] = "AZ";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ca"] = "CA";
    EmployeeEditRequestPersonMailingAddressStateEnum["Co"] = "CO";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ct"] = "CT";
    EmployeeEditRequestPersonMailingAddressStateEnum["Dc"] = "DC";
    EmployeeEditRequestPersonMailingAddressStateEnum["De"] = "DE";
    EmployeeEditRequestPersonMailingAddressStateEnum["Fl"] = "FL";
    EmployeeEditRequestPersonMailingAddressStateEnum["Fm"] = "FM";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ga"] = "GA";
    EmployeeEditRequestPersonMailingAddressStateEnum["Gu"] = "GU";
    EmployeeEditRequestPersonMailingAddressStateEnum["Hi"] = "HI";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ia"] = "IA";
    EmployeeEditRequestPersonMailingAddressStateEnum["Id"] = "ID";
    EmployeeEditRequestPersonMailingAddressStateEnum["Il"] = "IL";
    EmployeeEditRequestPersonMailingAddressStateEnum["In"] = "IN";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ks"] = "KS";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ky"] = "KY";
    EmployeeEditRequestPersonMailingAddressStateEnum["La"] = "LA";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ma"] = "MA";
    EmployeeEditRequestPersonMailingAddressStateEnum["Md"] = "MD";
    EmployeeEditRequestPersonMailingAddressStateEnum["Me"] = "ME";
    EmployeeEditRequestPersonMailingAddressStateEnum["Mh"] = "MH";
    EmployeeEditRequestPersonMailingAddressStateEnum["Mi"] = "MI";
    EmployeeEditRequestPersonMailingAddressStateEnum["Mn"] = "MN";
    EmployeeEditRequestPersonMailingAddressStateEnum["Mo"] = "MO";
    EmployeeEditRequestPersonMailingAddressStateEnum["Mp"] = "MP";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ms"] = "MS";
    EmployeeEditRequestPersonMailingAddressStateEnum["Mt"] = "MT";
    EmployeeEditRequestPersonMailingAddressStateEnum["Nc"] = "NC";
    EmployeeEditRequestPersonMailingAddressStateEnum["Nd"] = "ND";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ne"] = "NE";
    EmployeeEditRequestPersonMailingAddressStateEnum["Nh"] = "NH";
    EmployeeEditRequestPersonMailingAddressStateEnum["Nj"] = "NJ";
    EmployeeEditRequestPersonMailingAddressStateEnum["Nm"] = "NM";
    EmployeeEditRequestPersonMailingAddressStateEnum["Nv"] = "NV";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ny"] = "NY";
    EmployeeEditRequestPersonMailingAddressStateEnum["Oh"] = "OH";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ok"] = "OK";
    EmployeeEditRequestPersonMailingAddressStateEnum["Or"] = "OR";
    EmployeeEditRequestPersonMailingAddressStateEnum["Pa"] = "PA";
    EmployeeEditRequestPersonMailingAddressStateEnum["Pr"] = "PR";
    EmployeeEditRequestPersonMailingAddressStateEnum["Pw"] = "PW";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ri"] = "RI";
    EmployeeEditRequestPersonMailingAddressStateEnum["Sc"] = "SC";
    EmployeeEditRequestPersonMailingAddressStateEnum["Sd"] = "SD";
    EmployeeEditRequestPersonMailingAddressStateEnum["Tn"] = "TN";
    EmployeeEditRequestPersonMailingAddressStateEnum["Tx"] = "TX";
    EmployeeEditRequestPersonMailingAddressStateEnum["Um"] = "UM";
    EmployeeEditRequestPersonMailingAddressStateEnum["Ut"] = "UT";
    EmployeeEditRequestPersonMailingAddressStateEnum["Va"] = "VA";
    EmployeeEditRequestPersonMailingAddressStateEnum["Vi"] = "VI";
    EmployeeEditRequestPersonMailingAddressStateEnum["Vt"] = "VT";
    EmployeeEditRequestPersonMailingAddressStateEnum["Wa"] = "WA";
    EmployeeEditRequestPersonMailingAddressStateEnum["Wi"] = "WI";
    EmployeeEditRequestPersonMailingAddressStateEnum["Wv"] = "WV";
    EmployeeEditRequestPersonMailingAddressStateEnum["Wy"] = "WY";
})(EmployeeEditRequestPersonMailingAddressStateEnum = exports.EmployeeEditRequestPersonMailingAddressStateEnum || (exports.EmployeeEditRequestPersonMailingAddressStateEnum = {}));
// EmployeeEditRequestPersonMailingAddress
/**
 * Mailing address for the person
**/
var EmployeeEditRequestPersonMailingAddress = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestPersonMailingAddress, _super);
    function EmployeeEditRequestPersonMailingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonMailingAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonMailingAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonMailingAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonMailingAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonMailingAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPersonMailingAddress.prototype, "zipCode", void 0);
    return EmployeeEditRequestPersonMailingAddress;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestPersonMailingAddress = EmployeeEditRequestPersonMailingAddress;
var EmployeeEditRequestPersonMaritalStatusEnum;
(function (EmployeeEditRequestPersonMaritalStatusEnum) {
    EmployeeEditRequestPersonMaritalStatusEnum["Divorced"] = "divorced";
    EmployeeEditRequestPersonMaritalStatusEnum["DomesticPartner"] = "domestic-partner";
    EmployeeEditRequestPersonMaritalStatusEnum["LegallySeparated"] = "legally-separated";
    EmployeeEditRequestPersonMaritalStatusEnum["Married"] = "married";
    EmployeeEditRequestPersonMaritalStatusEnum["Single"] = "single";
    EmployeeEditRequestPersonMaritalStatusEnum["Widowed"] = "widowed";
})(EmployeeEditRequestPersonMaritalStatusEnum = exports.EmployeeEditRequestPersonMaritalStatusEnum || (exports.EmployeeEditRequestPersonMaritalStatusEnum = {}));
var EmployeeEditRequestPersonSexEnum;
(function (EmployeeEditRequestPersonSexEnum) {
    EmployeeEditRequestPersonSexEnum["F"] = "F";
    EmployeeEditRequestPersonSexEnum["M"] = "M";
    EmployeeEditRequestPersonSexEnum["U"] = "U";
    EmployeeEditRequestPersonSexEnum["X"] = "X";
})(EmployeeEditRequestPersonSexEnum = exports.EmployeeEditRequestPersonSexEnum || (exports.EmployeeEditRequestPersonSexEnum = {}));
// EmployeeEditRequestPerson
/**
 * Personal information for the employee
**/
var EmployeeEditRequestPerson = /** @class */ (function (_super) {
    __extends(EmployeeEditRequestPerson, _super);
    function EmployeeEditRequestPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact" }),
        __metadata("design:type", EmployeeEditRequestPersonContact)
    ], EmployeeEditRequestPerson.prototype, "contact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_of_birth" }),
        __metadata("design:type", Date)
    ], EmployeeEditRequestPerson.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", EmployeeEditRequestPersonDetails)
    ], EmployeeEditRequestPerson.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPerson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_address" }),
        __metadata("design:type", EmployeeEditRequestPersonHomeAddress)
    ], EmployeeEditRequestPerson.prototype, "homeAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPerson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mailing_address" }),
        __metadata("design:type", EmployeeEditRequestPersonMailingAddress)
    ], EmployeeEditRequestPerson.prototype, "mailingAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marital_status" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPerson.prototype, "maritalStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPerson.prototype, "middleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sex" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPerson.prototype, "sex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssn" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPerson.prototype, "ssn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], EmployeeEditRequestPerson.prototype, "suffix", void 0);
    return EmployeeEditRequestPerson;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequestPerson = EmployeeEditRequestPerson;
var EmployeeEditRequest = /** @class */ (function (_super) {
    __extends(EmployeeEditRequest, _super);
    function EmployeeEditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employment" }),
        __metadata("design:type", EmployeeEditRequestEmployment)
    ], EmployeeEditRequest.prototype, "employment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=person" }),
        __metadata("design:type", EmployeeEditRequestPerson)
    ], EmployeeEditRequest.prototype, "person", void 0);
    return EmployeeEditRequest;
}(utils_1.SpeakeasyBase));
exports.EmployeeEditRequest = EmployeeEditRequest;
