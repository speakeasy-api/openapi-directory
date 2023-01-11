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
exports.EmployeeResult = exports.EmployeeResultPerson = exports.EmployeeResultPersonSexEnum = exports.EmployeeResultPersonMaritalStatusEnum = exports.EmployeeResultPersonMailingAddress = exports.EmployeeResultPersonMailingAddressStateEnum = exports.EmployeeResultPersonHomeAddress = exports.EmployeeResultPersonHomeAddressStateEnum = exports.EmployeeResultPersonDetails = exports.EmployeeResultPersonDetailsTobacco = exports.EmployeeResultPersonDetailsTobaccoTypesEnum = exports.EmployeeResultPersonDetailsDisability = exports.EmployeeResultPersonDetailsAmericanIndian = exports.EmployeeResultPersonDetailsAmericanIndianStateEnum = exports.EmployeeResultPersonContact = exports.EmployeeResultPersonContactPreferredMethodEnum = exports.EmployeeResultPersonContactEmailAddressTypeEnum = exports.EmployeeResultEmployment = exports.EmployeeResultEmploymentSalary = exports.EmployeeResultEmploymentSalaryUnitEnum = exports.EmployeeResultEmploymentSalaryTypeEnum = exports.EmployeeResultEmploymentEmploymentStatusEnum = exports.EmployeeResultEmploymentEmploymentDates = void 0;
var utils_1 = require("../../../internal/utils");
// EmployeeResultEmploymentEmploymentDates
/**
 * Employee employment dates
**/
var EmployeeResultEmploymentEmploymentDates = /** @class */ (function (_super) {
    __extends(EmployeeResultEmploymentEmploymentDates, _super);
    function EmployeeResultEmploymentEmploymentDates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=full_time_start" }),
        __metadata("design:type", String)
    ], EmployeeResultEmploymentEmploymentDates.prototype, "fullTimeStart", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hire_date" }),
        __metadata("design:type", Date)
    ], EmployeeResultEmploymentEmploymentDates.prototype, "hireDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rehire" }),
        __metadata("design:type", String)
    ], EmployeeResultEmploymentEmploymentDates.prototype, "rehire", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=retirement" }),
        __metadata("design:type", String)
    ], EmployeeResultEmploymentEmploymentDates.prototype, "retirement", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=terminated" }),
        __metadata("design:type", String)
    ], EmployeeResultEmploymentEmploymentDates.prototype, "terminated", void 0);
    return EmployeeResultEmploymentEmploymentDates;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultEmploymentEmploymentDates = EmployeeResultEmploymentEmploymentDates;
var EmployeeResultEmploymentEmploymentStatusEnum;
(function (EmployeeResultEmploymentEmploymentStatusEnum) {
    EmployeeResultEmploymentEmploymentStatusEnum["Contract"] = "contract";
    EmployeeResultEmploymentEmploymentStatusEnum["Disabled"] = "disabled";
    EmployeeResultEmploymentEmploymentStatusEnum["FullTime"] = "full-time";
    EmployeeResultEmploymentEmploymentStatusEnum["PartTime"] = "part-time";
    EmployeeResultEmploymentEmploymentStatusEnum["Retired"] = "retired";
    EmployeeResultEmploymentEmploymentStatusEnum["Terminated"] = "terminated";
})(EmployeeResultEmploymentEmploymentStatusEnum = exports.EmployeeResultEmploymentEmploymentStatusEnum || (exports.EmployeeResultEmploymentEmploymentStatusEnum = {}));
var EmployeeResultEmploymentSalaryTypeEnum;
(function (EmployeeResultEmploymentSalaryTypeEnum) {
    EmployeeResultEmploymentSalaryTypeEnum["Hourly"] = "hourly";
    EmployeeResultEmploymentSalaryTypeEnum["Salary"] = "salary";
})(EmployeeResultEmploymentSalaryTypeEnum = exports.EmployeeResultEmploymentSalaryTypeEnum || (exports.EmployeeResultEmploymentSalaryTypeEnum = {}));
var EmployeeResultEmploymentSalaryUnitEnum;
(function (EmployeeResultEmploymentSalaryUnitEnum) {
    EmployeeResultEmploymentSalaryUnitEnum["Annual"] = "annual";
    EmployeeResultEmploymentSalaryUnitEnum["Hour"] = "hour";
    EmployeeResultEmploymentSalaryUnitEnum["Month"] = "month";
    EmployeeResultEmploymentSalaryUnitEnum["SemiMonthly"] = "semi-monthly";
    EmployeeResultEmploymentSalaryUnitEnum["Week"] = "week";
})(EmployeeResultEmploymentSalaryUnitEnum = exports.EmployeeResultEmploymentSalaryUnitEnum || (exports.EmployeeResultEmploymentSalaryUnitEnum = {}));
// EmployeeResultEmploymentSalary
/**
 * Employee salary information
**/
var EmployeeResultEmploymentSalary = /** @class */ (function (_super) {
    __extends(EmployeeResultEmploymentSalary, _super);
    function EmployeeResultEmploymentSalary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], EmployeeResultEmploymentSalary.prototype, "amount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EmployeeResultEmploymentSalary.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], EmployeeResultEmploymentSalary.prototype, "unit", void 0);
    return EmployeeResultEmploymentSalary;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultEmploymentSalary = EmployeeResultEmploymentSalary;
// EmployeeResultEmployment
/**
 * Employment information for the employee
**/
var EmployeeResultEmployment = /** @class */ (function (_super) {
    __extends(EmployeeResultEmployment, _super);
    function EmployeeResultEmployment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employment_dates" }),
        __metadata("design:type", EmployeeResultEmploymentEmploymentDates)
    ], EmployeeResultEmployment.prototype, "employmentDates", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employment_status" }),
        __metadata("design:type", String)
    ], EmployeeResultEmployment.prototype, "employmentStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hours_worked" }),
        __metadata("design:type", Number)
    ], EmployeeResultEmployment.prototype, "hoursWorked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occupation" }),
        __metadata("design:type", String)
    ], EmployeeResultEmployment.prototype, "occupation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=salary" }),
        __metadata("design:type", EmployeeResultEmploymentSalary)
    ], EmployeeResultEmployment.prototype, "salary", void 0);
    return EmployeeResultEmployment;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultEmployment = EmployeeResultEmployment;
var EmployeeResultPersonContactEmailAddressTypeEnum;
(function (EmployeeResultPersonContactEmailAddressTypeEnum) {
    EmployeeResultPersonContactEmailAddressTypeEnum["Home"] = "home";
    EmployeeResultPersonContactEmailAddressTypeEnum["Work"] = "work";
})(EmployeeResultPersonContactEmailAddressTypeEnum = exports.EmployeeResultPersonContactEmailAddressTypeEnum || (exports.EmployeeResultPersonContactEmailAddressTypeEnum = {}));
var EmployeeResultPersonContactPreferredMethodEnum;
(function (EmployeeResultPersonContactPreferredMethodEnum) {
    EmployeeResultPersonContactPreferredMethodEnum["Email"] = "email";
    EmployeeResultPersonContactPreferredMethodEnum["HomePhone"] = "home-phone";
    EmployeeResultPersonContactPreferredMethodEnum["Mail"] = "mail";
    EmployeeResultPersonContactPreferredMethodEnum["Other"] = "other";
    EmployeeResultPersonContactPreferredMethodEnum["WorkPhone"] = "work-phone";
})(EmployeeResultPersonContactPreferredMethodEnum = exports.EmployeeResultPersonContactPreferredMethodEnum || (exports.EmployeeResultPersonContactPreferredMethodEnum = {}));
// EmployeeResultPersonContact
/**
 * Contact information for the person
**/
var EmployeeResultPersonContact = /** @class */ (function (_super) {
    __extends(EmployeeResultPersonContact, _super);
    function EmployeeResultPersonContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_address" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonContact.prototype, "emailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_address_type" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonContact.prototype, "emailAddressType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_phone" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonContact.prototype, "homePhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_language" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonContact.prototype, "preferredLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_method" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonContact.prototype, "preferredMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaks_english" }),
        __metadata("design:type", Boolean)
    ], EmployeeResultPersonContact.prototype, "speaksEnglish", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=work_phone" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonContact.prototype, "workPhone", void 0);
    return EmployeeResultPersonContact;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultPersonContact = EmployeeResultPersonContact;
var EmployeeResultPersonDetailsAmericanIndianStateEnum;
(function (EmployeeResultPersonDetailsAmericanIndianStateEnum) {
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ak"] = "AK";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Al"] = "AL";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ar"] = "AR";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["As"] = "AS";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Az"] = "AZ";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ca"] = "CA";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Co"] = "CO";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ct"] = "CT";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Dc"] = "DC";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["De"] = "DE";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Fl"] = "FL";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Fm"] = "FM";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ga"] = "GA";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Gu"] = "GU";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Hi"] = "HI";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ia"] = "IA";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Id"] = "ID";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Il"] = "IL";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["In"] = "IN";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ks"] = "KS";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ky"] = "KY";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["La"] = "LA";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ma"] = "MA";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Md"] = "MD";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Me"] = "ME";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Mh"] = "MH";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Mi"] = "MI";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Mn"] = "MN";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Mo"] = "MO";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Mp"] = "MP";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ms"] = "MS";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Mt"] = "MT";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Nc"] = "NC";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Nd"] = "ND";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ne"] = "NE";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Nh"] = "NH";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Nj"] = "NJ";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Nm"] = "NM";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Nv"] = "NV";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ny"] = "NY";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Oh"] = "OH";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ok"] = "OK";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Or"] = "OR";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Pa"] = "PA";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Pr"] = "PR";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Pw"] = "PW";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ri"] = "RI";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Sc"] = "SC";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Sd"] = "SD";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Tn"] = "TN";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Tx"] = "TX";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Um"] = "UM";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Ut"] = "UT";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Va"] = "VA";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Vi"] = "VI";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Vt"] = "VT";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Wa"] = "WA";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Wi"] = "WI";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Wv"] = "WV";
    EmployeeResultPersonDetailsAmericanIndianStateEnum["Wy"] = "WY";
})(EmployeeResultPersonDetailsAmericanIndianStateEnum = exports.EmployeeResultPersonDetailsAmericanIndianStateEnum || (exports.EmployeeResultPersonDetailsAmericanIndianStateEnum = {}));
// EmployeeResultPersonDetailsAmericanIndian
/**
 * American Indian status details (if applicable)
**/
var EmployeeResultPersonDetailsAmericanIndian = /** @class */ (function (_super) {
    __extends(EmployeeResultPersonDetailsAmericanIndian, _super);
    function EmployeeResultPersonDetailsAmericanIndian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonDetailsAmericanIndian.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tribe" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonDetailsAmericanIndian.prototype, "tribe", void 0);
    return EmployeeResultPersonDetailsAmericanIndian;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultPersonDetailsAmericanIndian = EmployeeResultPersonDetailsAmericanIndian;
// EmployeeResultPersonDetailsDisability
/**
 * Disability details (if applicable)
**/
var EmployeeResultPersonDetailsDisability = /** @class */ (function (_super) {
    __extends(EmployeeResultPersonDetailsDisability, _super);
    function EmployeeResultPersonDetailsDisability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=communication" }),
        __metadata("design:type", Boolean)
    ], EmployeeResultPersonDetailsDisability.prototype, "communication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], EmployeeResultPersonDetailsDisability.prototype, "disabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonDetailsDisability.prototype, "reason", void 0);
    return EmployeeResultPersonDetailsDisability;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultPersonDetailsDisability = EmployeeResultPersonDetailsDisability;
var EmployeeResultPersonDetailsTobaccoTypesEnum;
(function (EmployeeResultPersonDetailsTobaccoTypesEnum) {
    EmployeeResultPersonDetailsTobaccoTypesEnum["ChewingTobacco"] = "chewing-tobacco";
    EmployeeResultPersonDetailsTobaccoTypesEnum["Cigarettes"] = "cigarettes";
    EmployeeResultPersonDetailsTobaccoTypesEnum["Pipe"] = "pipe";
})(EmployeeResultPersonDetailsTobaccoTypesEnum = exports.EmployeeResultPersonDetailsTobaccoTypesEnum || (exports.EmployeeResultPersonDetailsTobaccoTypesEnum = {}));
// EmployeeResultPersonDetailsTobacco
/**
 * Tobacco usage details (if applicable)
**/
var EmployeeResultPersonDetailsTobacco = /** @class */ (function (_super) {
    __extends(EmployeeResultPersonDetailsTobacco, _super);
    function EmployeeResultPersonDetailsTobacco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonDetailsTobacco.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonDetailsTobacco.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], EmployeeResultPersonDetailsTobacco.prototype, "types", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", Boolean)
    ], EmployeeResultPersonDetailsTobacco.prototype, "user", void 0);
    return EmployeeResultPersonDetailsTobacco;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultPersonDetailsTobacco = EmployeeResultPersonDetailsTobacco;
// EmployeeResultPersonDetails
/**
 * Additional personal details of the person
**/
var EmployeeResultPersonDetails = /** @class */ (function (_super) {
    __extends(EmployeeResultPersonDetails, _super);
    function EmployeeResultPersonDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=american_indian" }),
        __metadata("design:type", EmployeeResultPersonDetailsAmericanIndian)
    ], EmployeeResultPersonDetails.prototype, "americanIndian", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disability" }),
        __metadata("design:type", EmployeeResultPersonDetailsDisability)
    ], EmployeeResultPersonDetails.prototype, "disability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_military" }),
        __metadata("design:type", Boolean)
    ], EmployeeResultPersonDetails.prototype, "isMilitary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_student" }),
        __metadata("design:type", Boolean)
    ], EmployeeResultPersonDetails.prototype, "isStudent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tobacco" }),
        __metadata("design:type", EmployeeResultPersonDetailsTobacco)
    ], EmployeeResultPersonDetails.prototype, "tobacco", void 0);
    return EmployeeResultPersonDetails;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultPersonDetails = EmployeeResultPersonDetails;
var EmployeeResultPersonHomeAddressStateEnum;
(function (EmployeeResultPersonHomeAddressStateEnum) {
    EmployeeResultPersonHomeAddressStateEnum["Ak"] = "AK";
    EmployeeResultPersonHomeAddressStateEnum["Al"] = "AL";
    EmployeeResultPersonHomeAddressStateEnum["Ar"] = "AR";
    EmployeeResultPersonHomeAddressStateEnum["As"] = "AS";
    EmployeeResultPersonHomeAddressStateEnum["Az"] = "AZ";
    EmployeeResultPersonHomeAddressStateEnum["Ca"] = "CA";
    EmployeeResultPersonHomeAddressStateEnum["Co"] = "CO";
    EmployeeResultPersonHomeAddressStateEnum["Ct"] = "CT";
    EmployeeResultPersonHomeAddressStateEnum["Dc"] = "DC";
    EmployeeResultPersonHomeAddressStateEnum["De"] = "DE";
    EmployeeResultPersonHomeAddressStateEnum["Fl"] = "FL";
    EmployeeResultPersonHomeAddressStateEnum["Fm"] = "FM";
    EmployeeResultPersonHomeAddressStateEnum["Ga"] = "GA";
    EmployeeResultPersonHomeAddressStateEnum["Gu"] = "GU";
    EmployeeResultPersonHomeAddressStateEnum["Hi"] = "HI";
    EmployeeResultPersonHomeAddressStateEnum["Ia"] = "IA";
    EmployeeResultPersonHomeAddressStateEnum["Id"] = "ID";
    EmployeeResultPersonHomeAddressStateEnum["Il"] = "IL";
    EmployeeResultPersonHomeAddressStateEnum["In"] = "IN";
    EmployeeResultPersonHomeAddressStateEnum["Ks"] = "KS";
    EmployeeResultPersonHomeAddressStateEnum["Ky"] = "KY";
    EmployeeResultPersonHomeAddressStateEnum["La"] = "LA";
    EmployeeResultPersonHomeAddressStateEnum["Ma"] = "MA";
    EmployeeResultPersonHomeAddressStateEnum["Md"] = "MD";
    EmployeeResultPersonHomeAddressStateEnum["Me"] = "ME";
    EmployeeResultPersonHomeAddressStateEnum["Mh"] = "MH";
    EmployeeResultPersonHomeAddressStateEnum["Mi"] = "MI";
    EmployeeResultPersonHomeAddressStateEnum["Mn"] = "MN";
    EmployeeResultPersonHomeAddressStateEnum["Mo"] = "MO";
    EmployeeResultPersonHomeAddressStateEnum["Mp"] = "MP";
    EmployeeResultPersonHomeAddressStateEnum["Ms"] = "MS";
    EmployeeResultPersonHomeAddressStateEnum["Mt"] = "MT";
    EmployeeResultPersonHomeAddressStateEnum["Nc"] = "NC";
    EmployeeResultPersonHomeAddressStateEnum["Nd"] = "ND";
    EmployeeResultPersonHomeAddressStateEnum["Ne"] = "NE";
    EmployeeResultPersonHomeAddressStateEnum["Nh"] = "NH";
    EmployeeResultPersonHomeAddressStateEnum["Nj"] = "NJ";
    EmployeeResultPersonHomeAddressStateEnum["Nm"] = "NM";
    EmployeeResultPersonHomeAddressStateEnum["Nv"] = "NV";
    EmployeeResultPersonHomeAddressStateEnum["Ny"] = "NY";
    EmployeeResultPersonHomeAddressStateEnum["Oh"] = "OH";
    EmployeeResultPersonHomeAddressStateEnum["Ok"] = "OK";
    EmployeeResultPersonHomeAddressStateEnum["Or"] = "OR";
    EmployeeResultPersonHomeAddressStateEnum["Pa"] = "PA";
    EmployeeResultPersonHomeAddressStateEnum["Pr"] = "PR";
    EmployeeResultPersonHomeAddressStateEnum["Pw"] = "PW";
    EmployeeResultPersonHomeAddressStateEnum["Ri"] = "RI";
    EmployeeResultPersonHomeAddressStateEnum["Sc"] = "SC";
    EmployeeResultPersonHomeAddressStateEnum["Sd"] = "SD";
    EmployeeResultPersonHomeAddressStateEnum["Tn"] = "TN";
    EmployeeResultPersonHomeAddressStateEnum["Tx"] = "TX";
    EmployeeResultPersonHomeAddressStateEnum["Um"] = "UM";
    EmployeeResultPersonHomeAddressStateEnum["Ut"] = "UT";
    EmployeeResultPersonHomeAddressStateEnum["Va"] = "VA";
    EmployeeResultPersonHomeAddressStateEnum["Vi"] = "VI";
    EmployeeResultPersonHomeAddressStateEnum["Vt"] = "VT";
    EmployeeResultPersonHomeAddressStateEnum["Wa"] = "WA";
    EmployeeResultPersonHomeAddressStateEnum["Wi"] = "WI";
    EmployeeResultPersonHomeAddressStateEnum["Wv"] = "WV";
    EmployeeResultPersonHomeAddressStateEnum["Wy"] = "WY";
})(EmployeeResultPersonHomeAddressStateEnum = exports.EmployeeResultPersonHomeAddressStateEnum || (exports.EmployeeResultPersonHomeAddressStateEnum = {}));
// EmployeeResultPersonHomeAddress
/**
 * Home address of the person
**/
var EmployeeResultPersonHomeAddress = /** @class */ (function (_super) {
    __extends(EmployeeResultPersonHomeAddress, _super);
    function EmployeeResultPersonHomeAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonHomeAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonHomeAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonHomeAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonHomeAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonHomeAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonHomeAddress.prototype, "zipCode", void 0);
    return EmployeeResultPersonHomeAddress;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultPersonHomeAddress = EmployeeResultPersonHomeAddress;
var EmployeeResultPersonMailingAddressStateEnum;
(function (EmployeeResultPersonMailingAddressStateEnum) {
    EmployeeResultPersonMailingAddressStateEnum["Ak"] = "AK";
    EmployeeResultPersonMailingAddressStateEnum["Al"] = "AL";
    EmployeeResultPersonMailingAddressStateEnum["Ar"] = "AR";
    EmployeeResultPersonMailingAddressStateEnum["As"] = "AS";
    EmployeeResultPersonMailingAddressStateEnum["Az"] = "AZ";
    EmployeeResultPersonMailingAddressStateEnum["Ca"] = "CA";
    EmployeeResultPersonMailingAddressStateEnum["Co"] = "CO";
    EmployeeResultPersonMailingAddressStateEnum["Ct"] = "CT";
    EmployeeResultPersonMailingAddressStateEnum["Dc"] = "DC";
    EmployeeResultPersonMailingAddressStateEnum["De"] = "DE";
    EmployeeResultPersonMailingAddressStateEnum["Fl"] = "FL";
    EmployeeResultPersonMailingAddressStateEnum["Fm"] = "FM";
    EmployeeResultPersonMailingAddressStateEnum["Ga"] = "GA";
    EmployeeResultPersonMailingAddressStateEnum["Gu"] = "GU";
    EmployeeResultPersonMailingAddressStateEnum["Hi"] = "HI";
    EmployeeResultPersonMailingAddressStateEnum["Ia"] = "IA";
    EmployeeResultPersonMailingAddressStateEnum["Id"] = "ID";
    EmployeeResultPersonMailingAddressStateEnum["Il"] = "IL";
    EmployeeResultPersonMailingAddressStateEnum["In"] = "IN";
    EmployeeResultPersonMailingAddressStateEnum["Ks"] = "KS";
    EmployeeResultPersonMailingAddressStateEnum["Ky"] = "KY";
    EmployeeResultPersonMailingAddressStateEnum["La"] = "LA";
    EmployeeResultPersonMailingAddressStateEnum["Ma"] = "MA";
    EmployeeResultPersonMailingAddressStateEnum["Md"] = "MD";
    EmployeeResultPersonMailingAddressStateEnum["Me"] = "ME";
    EmployeeResultPersonMailingAddressStateEnum["Mh"] = "MH";
    EmployeeResultPersonMailingAddressStateEnum["Mi"] = "MI";
    EmployeeResultPersonMailingAddressStateEnum["Mn"] = "MN";
    EmployeeResultPersonMailingAddressStateEnum["Mo"] = "MO";
    EmployeeResultPersonMailingAddressStateEnum["Mp"] = "MP";
    EmployeeResultPersonMailingAddressStateEnum["Ms"] = "MS";
    EmployeeResultPersonMailingAddressStateEnum["Mt"] = "MT";
    EmployeeResultPersonMailingAddressStateEnum["Nc"] = "NC";
    EmployeeResultPersonMailingAddressStateEnum["Nd"] = "ND";
    EmployeeResultPersonMailingAddressStateEnum["Ne"] = "NE";
    EmployeeResultPersonMailingAddressStateEnum["Nh"] = "NH";
    EmployeeResultPersonMailingAddressStateEnum["Nj"] = "NJ";
    EmployeeResultPersonMailingAddressStateEnum["Nm"] = "NM";
    EmployeeResultPersonMailingAddressStateEnum["Nv"] = "NV";
    EmployeeResultPersonMailingAddressStateEnum["Ny"] = "NY";
    EmployeeResultPersonMailingAddressStateEnum["Oh"] = "OH";
    EmployeeResultPersonMailingAddressStateEnum["Ok"] = "OK";
    EmployeeResultPersonMailingAddressStateEnum["Or"] = "OR";
    EmployeeResultPersonMailingAddressStateEnum["Pa"] = "PA";
    EmployeeResultPersonMailingAddressStateEnum["Pr"] = "PR";
    EmployeeResultPersonMailingAddressStateEnum["Pw"] = "PW";
    EmployeeResultPersonMailingAddressStateEnum["Ri"] = "RI";
    EmployeeResultPersonMailingAddressStateEnum["Sc"] = "SC";
    EmployeeResultPersonMailingAddressStateEnum["Sd"] = "SD";
    EmployeeResultPersonMailingAddressStateEnum["Tn"] = "TN";
    EmployeeResultPersonMailingAddressStateEnum["Tx"] = "TX";
    EmployeeResultPersonMailingAddressStateEnum["Um"] = "UM";
    EmployeeResultPersonMailingAddressStateEnum["Ut"] = "UT";
    EmployeeResultPersonMailingAddressStateEnum["Va"] = "VA";
    EmployeeResultPersonMailingAddressStateEnum["Vi"] = "VI";
    EmployeeResultPersonMailingAddressStateEnum["Vt"] = "VT";
    EmployeeResultPersonMailingAddressStateEnum["Wa"] = "WA";
    EmployeeResultPersonMailingAddressStateEnum["Wi"] = "WI";
    EmployeeResultPersonMailingAddressStateEnum["Wv"] = "WV";
    EmployeeResultPersonMailingAddressStateEnum["Wy"] = "WY";
})(EmployeeResultPersonMailingAddressStateEnum = exports.EmployeeResultPersonMailingAddressStateEnum || (exports.EmployeeResultPersonMailingAddressStateEnum = {}));
// EmployeeResultPersonMailingAddress
/**
 * Mailing address of the person
**/
var EmployeeResultPersonMailingAddress = /** @class */ (function (_super) {
    __extends(EmployeeResultPersonMailingAddress, _super);
    function EmployeeResultPersonMailingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonMailingAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonMailingAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonMailingAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonMailingAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonMailingAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], EmployeeResultPersonMailingAddress.prototype, "zipCode", void 0);
    return EmployeeResultPersonMailingAddress;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultPersonMailingAddress = EmployeeResultPersonMailingAddress;
var EmployeeResultPersonMaritalStatusEnum;
(function (EmployeeResultPersonMaritalStatusEnum) {
    EmployeeResultPersonMaritalStatusEnum["Divorced"] = "divorced";
    EmployeeResultPersonMaritalStatusEnum["DomesticPartner"] = "domestic-partner";
    EmployeeResultPersonMaritalStatusEnum["LegallySeparated"] = "legally-separated";
    EmployeeResultPersonMaritalStatusEnum["Married"] = "married";
    EmployeeResultPersonMaritalStatusEnum["Single"] = "single";
    EmployeeResultPersonMaritalStatusEnum["Widowed"] = "widowed";
})(EmployeeResultPersonMaritalStatusEnum = exports.EmployeeResultPersonMaritalStatusEnum || (exports.EmployeeResultPersonMaritalStatusEnum = {}));
var EmployeeResultPersonSexEnum;
(function (EmployeeResultPersonSexEnum) {
    EmployeeResultPersonSexEnum["F"] = "F";
    EmployeeResultPersonSexEnum["M"] = "M";
    EmployeeResultPersonSexEnum["U"] = "U";
    EmployeeResultPersonSexEnum["X"] = "X";
})(EmployeeResultPersonSexEnum = exports.EmployeeResultPersonSexEnum || (exports.EmployeeResultPersonSexEnum = {}));
// EmployeeResultPerson
/**
 * Personal information for the employee
**/
var EmployeeResultPerson = /** @class */ (function (_super) {
    __extends(EmployeeResultPerson, _super);
    function EmployeeResultPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact" }),
        __metadata("design:type", EmployeeResultPersonContact)
    ], EmployeeResultPerson.prototype, "contact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_of_birth" }),
        __metadata("design:type", Date)
    ], EmployeeResultPerson.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", EmployeeResultPersonDetails)
    ], EmployeeResultPerson.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], EmployeeResultPerson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_address" }),
        __metadata("design:type", EmployeeResultPersonHomeAddress)
    ], EmployeeResultPerson.prototype, "homeAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], EmployeeResultPerson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mailing_address" }),
        __metadata("design:type", EmployeeResultPersonMailingAddress)
    ], EmployeeResultPerson.prototype, "mailingAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marital_status" }),
        __metadata("design:type", String)
    ], EmployeeResultPerson.prototype, "maritalStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], EmployeeResultPerson.prototype, "middleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sex" }),
        __metadata("design:type", String)
    ], EmployeeResultPerson.prototype, "sex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssn" }),
        __metadata("design:type", String)
    ], EmployeeResultPerson.prototype, "ssn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], EmployeeResultPerson.prototype, "suffix", void 0);
    return EmployeeResultPerson;
}(utils_1.SpeakeasyBase));
exports.EmployeeResultPerson = EmployeeResultPerson;
var EmployeeResult = /** @class */ (function (_super) {
    __extends(EmployeeResult, _super);
    function EmployeeResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], EmployeeResult.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employment" }),
        __metadata("design:type", EmployeeResultEmployment)
    ], EmployeeResult.prototype, "employment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_id" }),
        __metadata("design:type", String)
    ], EmployeeResult.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], EmployeeResult.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], EmployeeResult.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=person" }),
        __metadata("design:type", EmployeeResultPerson)
    ], EmployeeResult.prototype, "person", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], EmployeeResult.prototype, "version", void 0);
    return EmployeeResult;
}(utils_1.SpeakeasyBase));
exports.EmployeeResult = EmployeeResult;
