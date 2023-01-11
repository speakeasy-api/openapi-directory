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
exports.DependentEditRequest = exports.DependentEditRequestRelationshipEnum = exports.DependentEditRequestPerson = exports.DependentEditRequestPersonSexEnum = exports.DependentEditRequestPersonMaritalStatusEnum = exports.DependentEditRequestPersonMailingAddress = exports.DependentEditRequestPersonMailingAddressStateEnum = exports.DependentEditRequestPersonHomeAddress = exports.DependentEditRequestPersonHomeAddressStateEnum = exports.DependentEditRequestPersonDetails = exports.DependentEditRequestPersonDetailsTobacco = exports.DependentEditRequestPersonDetailsTobaccoTypesEnum = exports.DependentEditRequestPersonDetailsDisability = exports.DependentEditRequestPersonDetailsAmericanIndian = exports.DependentEditRequestPersonDetailsAmericanIndianStateEnum = exports.DependentEditRequestPersonContact = exports.DependentEditRequestPersonContactPreferredMethodEnum = exports.DependentEditRequestPersonContactEmailAddressTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var DependentEditRequestPersonContactEmailAddressTypeEnum;
(function (DependentEditRequestPersonContactEmailAddressTypeEnum) {
    DependentEditRequestPersonContactEmailAddressTypeEnum["Home"] = "home";
    DependentEditRequestPersonContactEmailAddressTypeEnum["Work"] = "work";
})(DependentEditRequestPersonContactEmailAddressTypeEnum = exports.DependentEditRequestPersonContactEmailAddressTypeEnum || (exports.DependentEditRequestPersonContactEmailAddressTypeEnum = {}));
var DependentEditRequestPersonContactPreferredMethodEnum;
(function (DependentEditRequestPersonContactPreferredMethodEnum) {
    DependentEditRequestPersonContactPreferredMethodEnum["Email"] = "email";
    DependentEditRequestPersonContactPreferredMethodEnum["HomePhone"] = "home-phone";
    DependentEditRequestPersonContactPreferredMethodEnum["Mail"] = "mail";
    DependentEditRequestPersonContactPreferredMethodEnum["Other"] = "other";
    DependentEditRequestPersonContactPreferredMethodEnum["WorkPhone"] = "work-phone";
})(DependentEditRequestPersonContactPreferredMethodEnum = exports.DependentEditRequestPersonContactPreferredMethodEnum || (exports.DependentEditRequestPersonContactPreferredMethodEnum = {}));
// DependentEditRequestPersonContact
/**
 * Contact information for the person
**/
var DependentEditRequestPersonContact = /** @class */ (function (_super) {
    __extends(DependentEditRequestPersonContact, _super);
    function DependentEditRequestPersonContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_address" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonContact.prototype, "emailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_address_type" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonContact.prototype, "emailAddressType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_phone" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonContact.prototype, "homePhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_language" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonContact.prototype, "preferredLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_method" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonContact.prototype, "preferredMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaks_english" }),
        __metadata("design:type", Boolean)
    ], DependentEditRequestPersonContact.prototype, "speaksEnglish", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=work_phone" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonContact.prototype, "workPhone", void 0);
    return DependentEditRequestPersonContact;
}(utils_1.SpeakeasyBase));
exports.DependentEditRequestPersonContact = DependentEditRequestPersonContact;
var DependentEditRequestPersonDetailsAmericanIndianStateEnum;
(function (DependentEditRequestPersonDetailsAmericanIndianStateEnum) {
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ak"] = "AK";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Al"] = "AL";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ar"] = "AR";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["As"] = "AS";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Az"] = "AZ";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ca"] = "CA";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Co"] = "CO";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ct"] = "CT";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Dc"] = "DC";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["De"] = "DE";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Fl"] = "FL";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Fm"] = "FM";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ga"] = "GA";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Gu"] = "GU";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Hi"] = "HI";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ia"] = "IA";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Id"] = "ID";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Il"] = "IL";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["In"] = "IN";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ks"] = "KS";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ky"] = "KY";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["La"] = "LA";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ma"] = "MA";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Md"] = "MD";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Me"] = "ME";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Mh"] = "MH";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Mi"] = "MI";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Mn"] = "MN";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Mo"] = "MO";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Mp"] = "MP";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ms"] = "MS";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Mt"] = "MT";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Nc"] = "NC";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Nd"] = "ND";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ne"] = "NE";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Nh"] = "NH";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Nj"] = "NJ";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Nm"] = "NM";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Nv"] = "NV";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ny"] = "NY";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Oh"] = "OH";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ok"] = "OK";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Or"] = "OR";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Pa"] = "PA";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Pr"] = "PR";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Pw"] = "PW";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ri"] = "RI";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Sc"] = "SC";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Sd"] = "SD";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Tn"] = "TN";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Tx"] = "TX";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Um"] = "UM";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Ut"] = "UT";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Va"] = "VA";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Vi"] = "VI";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Vt"] = "VT";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Wa"] = "WA";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Wi"] = "WI";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Wv"] = "WV";
    DependentEditRequestPersonDetailsAmericanIndianStateEnum["Wy"] = "WY";
})(DependentEditRequestPersonDetailsAmericanIndianStateEnum = exports.DependentEditRequestPersonDetailsAmericanIndianStateEnum || (exports.DependentEditRequestPersonDetailsAmericanIndianStateEnum = {}));
// DependentEditRequestPersonDetailsAmericanIndian
/**
 * American Indian status details (if applicable)
**/
var DependentEditRequestPersonDetailsAmericanIndian = /** @class */ (function (_super) {
    __extends(DependentEditRequestPersonDetailsAmericanIndian, _super);
    function DependentEditRequestPersonDetailsAmericanIndian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonDetailsAmericanIndian.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tribe" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonDetailsAmericanIndian.prototype, "tribe", void 0);
    return DependentEditRequestPersonDetailsAmericanIndian;
}(utils_1.SpeakeasyBase));
exports.DependentEditRequestPersonDetailsAmericanIndian = DependentEditRequestPersonDetailsAmericanIndian;
// DependentEditRequestPersonDetailsDisability
/**
 * Disability details (if applicable)
**/
var DependentEditRequestPersonDetailsDisability = /** @class */ (function (_super) {
    __extends(DependentEditRequestPersonDetailsDisability, _super);
    function DependentEditRequestPersonDetailsDisability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=communication" }),
        __metadata("design:type", Boolean)
    ], DependentEditRequestPersonDetailsDisability.prototype, "communication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], DependentEditRequestPersonDetailsDisability.prototype, "disabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonDetailsDisability.prototype, "reason", void 0);
    return DependentEditRequestPersonDetailsDisability;
}(utils_1.SpeakeasyBase));
exports.DependentEditRequestPersonDetailsDisability = DependentEditRequestPersonDetailsDisability;
var DependentEditRequestPersonDetailsTobaccoTypesEnum;
(function (DependentEditRequestPersonDetailsTobaccoTypesEnum) {
    DependentEditRequestPersonDetailsTobaccoTypesEnum["ChewingTobacco"] = "chewing-tobacco";
    DependentEditRequestPersonDetailsTobaccoTypesEnum["Cigarettes"] = "cigarettes";
    DependentEditRequestPersonDetailsTobaccoTypesEnum["Pipe"] = "pipe";
})(DependentEditRequestPersonDetailsTobaccoTypesEnum = exports.DependentEditRequestPersonDetailsTobaccoTypesEnum || (exports.DependentEditRequestPersonDetailsTobaccoTypesEnum = {}));
// DependentEditRequestPersonDetailsTobacco
/**
 * Tobacco usage details (if applicable)
**/
var DependentEditRequestPersonDetailsTobacco = /** @class */ (function (_super) {
    __extends(DependentEditRequestPersonDetailsTobacco, _super);
    function DependentEditRequestPersonDetailsTobacco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonDetailsTobacco.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonDetailsTobacco.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], DependentEditRequestPersonDetailsTobacco.prototype, "types", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", Boolean)
    ], DependentEditRequestPersonDetailsTobacco.prototype, "user", void 0);
    return DependentEditRequestPersonDetailsTobacco;
}(utils_1.SpeakeasyBase));
exports.DependentEditRequestPersonDetailsTobacco = DependentEditRequestPersonDetailsTobacco;
// DependentEditRequestPersonDetails
/**
 * Additional personal details of the person
**/
var DependentEditRequestPersonDetails = /** @class */ (function (_super) {
    __extends(DependentEditRequestPersonDetails, _super);
    function DependentEditRequestPersonDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=american_indian" }),
        __metadata("design:type", DependentEditRequestPersonDetailsAmericanIndian)
    ], DependentEditRequestPersonDetails.prototype, "americanIndian", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disability" }),
        __metadata("design:type", DependentEditRequestPersonDetailsDisability)
    ], DependentEditRequestPersonDetails.prototype, "disability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_military" }),
        __metadata("design:type", Boolean)
    ], DependentEditRequestPersonDetails.prototype, "isMilitary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_student" }),
        __metadata("design:type", Boolean)
    ], DependentEditRequestPersonDetails.prototype, "isStudent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tobacco" }),
        __metadata("design:type", DependentEditRequestPersonDetailsTobacco)
    ], DependentEditRequestPersonDetails.prototype, "tobacco", void 0);
    return DependentEditRequestPersonDetails;
}(utils_1.SpeakeasyBase));
exports.DependentEditRequestPersonDetails = DependentEditRequestPersonDetails;
var DependentEditRequestPersonHomeAddressStateEnum;
(function (DependentEditRequestPersonHomeAddressStateEnum) {
    DependentEditRequestPersonHomeAddressStateEnum["Ak"] = "AK";
    DependentEditRequestPersonHomeAddressStateEnum["Al"] = "AL";
    DependentEditRequestPersonHomeAddressStateEnum["Ar"] = "AR";
    DependentEditRequestPersonHomeAddressStateEnum["As"] = "AS";
    DependentEditRequestPersonHomeAddressStateEnum["Az"] = "AZ";
    DependentEditRequestPersonHomeAddressStateEnum["Ca"] = "CA";
    DependentEditRequestPersonHomeAddressStateEnum["Co"] = "CO";
    DependentEditRequestPersonHomeAddressStateEnum["Ct"] = "CT";
    DependentEditRequestPersonHomeAddressStateEnum["Dc"] = "DC";
    DependentEditRequestPersonHomeAddressStateEnum["De"] = "DE";
    DependentEditRequestPersonHomeAddressStateEnum["Fl"] = "FL";
    DependentEditRequestPersonHomeAddressStateEnum["Fm"] = "FM";
    DependentEditRequestPersonHomeAddressStateEnum["Ga"] = "GA";
    DependentEditRequestPersonHomeAddressStateEnum["Gu"] = "GU";
    DependentEditRequestPersonHomeAddressStateEnum["Hi"] = "HI";
    DependentEditRequestPersonHomeAddressStateEnum["Ia"] = "IA";
    DependentEditRequestPersonHomeAddressStateEnum["Id"] = "ID";
    DependentEditRequestPersonHomeAddressStateEnum["Il"] = "IL";
    DependentEditRequestPersonHomeAddressStateEnum["In"] = "IN";
    DependentEditRequestPersonHomeAddressStateEnum["Ks"] = "KS";
    DependentEditRequestPersonHomeAddressStateEnum["Ky"] = "KY";
    DependentEditRequestPersonHomeAddressStateEnum["La"] = "LA";
    DependentEditRequestPersonHomeAddressStateEnum["Ma"] = "MA";
    DependentEditRequestPersonHomeAddressStateEnum["Md"] = "MD";
    DependentEditRequestPersonHomeAddressStateEnum["Me"] = "ME";
    DependentEditRequestPersonHomeAddressStateEnum["Mh"] = "MH";
    DependentEditRequestPersonHomeAddressStateEnum["Mi"] = "MI";
    DependentEditRequestPersonHomeAddressStateEnum["Mn"] = "MN";
    DependentEditRequestPersonHomeAddressStateEnum["Mo"] = "MO";
    DependentEditRequestPersonHomeAddressStateEnum["Mp"] = "MP";
    DependentEditRequestPersonHomeAddressStateEnum["Ms"] = "MS";
    DependentEditRequestPersonHomeAddressStateEnum["Mt"] = "MT";
    DependentEditRequestPersonHomeAddressStateEnum["Nc"] = "NC";
    DependentEditRequestPersonHomeAddressStateEnum["Nd"] = "ND";
    DependentEditRequestPersonHomeAddressStateEnum["Ne"] = "NE";
    DependentEditRequestPersonHomeAddressStateEnum["Nh"] = "NH";
    DependentEditRequestPersonHomeAddressStateEnum["Nj"] = "NJ";
    DependentEditRequestPersonHomeAddressStateEnum["Nm"] = "NM";
    DependentEditRequestPersonHomeAddressStateEnum["Nv"] = "NV";
    DependentEditRequestPersonHomeAddressStateEnum["Ny"] = "NY";
    DependentEditRequestPersonHomeAddressStateEnum["Oh"] = "OH";
    DependentEditRequestPersonHomeAddressStateEnum["Ok"] = "OK";
    DependentEditRequestPersonHomeAddressStateEnum["Or"] = "OR";
    DependentEditRequestPersonHomeAddressStateEnum["Pa"] = "PA";
    DependentEditRequestPersonHomeAddressStateEnum["Pr"] = "PR";
    DependentEditRequestPersonHomeAddressStateEnum["Pw"] = "PW";
    DependentEditRequestPersonHomeAddressStateEnum["Ri"] = "RI";
    DependentEditRequestPersonHomeAddressStateEnum["Sc"] = "SC";
    DependentEditRequestPersonHomeAddressStateEnum["Sd"] = "SD";
    DependentEditRequestPersonHomeAddressStateEnum["Tn"] = "TN";
    DependentEditRequestPersonHomeAddressStateEnum["Tx"] = "TX";
    DependentEditRequestPersonHomeAddressStateEnum["Um"] = "UM";
    DependentEditRequestPersonHomeAddressStateEnum["Ut"] = "UT";
    DependentEditRequestPersonHomeAddressStateEnum["Va"] = "VA";
    DependentEditRequestPersonHomeAddressStateEnum["Vi"] = "VI";
    DependentEditRequestPersonHomeAddressStateEnum["Vt"] = "VT";
    DependentEditRequestPersonHomeAddressStateEnum["Wa"] = "WA";
    DependentEditRequestPersonHomeAddressStateEnum["Wi"] = "WI";
    DependentEditRequestPersonHomeAddressStateEnum["Wv"] = "WV";
    DependentEditRequestPersonHomeAddressStateEnum["Wy"] = "WY";
})(DependentEditRequestPersonHomeAddressStateEnum = exports.DependentEditRequestPersonHomeAddressStateEnum || (exports.DependentEditRequestPersonHomeAddressStateEnum = {}));
// DependentEditRequestPersonHomeAddress
/**
 * Home address of the person
**/
var DependentEditRequestPersonHomeAddress = /** @class */ (function (_super) {
    __extends(DependentEditRequestPersonHomeAddress, _super);
    function DependentEditRequestPersonHomeAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonHomeAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonHomeAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonHomeAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonHomeAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonHomeAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonHomeAddress.prototype, "zipCode", void 0);
    return DependentEditRequestPersonHomeAddress;
}(utils_1.SpeakeasyBase));
exports.DependentEditRequestPersonHomeAddress = DependentEditRequestPersonHomeAddress;
var DependentEditRequestPersonMailingAddressStateEnum;
(function (DependentEditRequestPersonMailingAddressStateEnum) {
    DependentEditRequestPersonMailingAddressStateEnum["Ak"] = "AK";
    DependentEditRequestPersonMailingAddressStateEnum["Al"] = "AL";
    DependentEditRequestPersonMailingAddressStateEnum["Ar"] = "AR";
    DependentEditRequestPersonMailingAddressStateEnum["As"] = "AS";
    DependentEditRequestPersonMailingAddressStateEnum["Az"] = "AZ";
    DependentEditRequestPersonMailingAddressStateEnum["Ca"] = "CA";
    DependentEditRequestPersonMailingAddressStateEnum["Co"] = "CO";
    DependentEditRequestPersonMailingAddressStateEnum["Ct"] = "CT";
    DependentEditRequestPersonMailingAddressStateEnum["Dc"] = "DC";
    DependentEditRequestPersonMailingAddressStateEnum["De"] = "DE";
    DependentEditRequestPersonMailingAddressStateEnum["Fl"] = "FL";
    DependentEditRequestPersonMailingAddressStateEnum["Fm"] = "FM";
    DependentEditRequestPersonMailingAddressStateEnum["Ga"] = "GA";
    DependentEditRequestPersonMailingAddressStateEnum["Gu"] = "GU";
    DependentEditRequestPersonMailingAddressStateEnum["Hi"] = "HI";
    DependentEditRequestPersonMailingAddressStateEnum["Ia"] = "IA";
    DependentEditRequestPersonMailingAddressStateEnum["Id"] = "ID";
    DependentEditRequestPersonMailingAddressStateEnum["Il"] = "IL";
    DependentEditRequestPersonMailingAddressStateEnum["In"] = "IN";
    DependentEditRequestPersonMailingAddressStateEnum["Ks"] = "KS";
    DependentEditRequestPersonMailingAddressStateEnum["Ky"] = "KY";
    DependentEditRequestPersonMailingAddressStateEnum["La"] = "LA";
    DependentEditRequestPersonMailingAddressStateEnum["Ma"] = "MA";
    DependentEditRequestPersonMailingAddressStateEnum["Md"] = "MD";
    DependentEditRequestPersonMailingAddressStateEnum["Me"] = "ME";
    DependentEditRequestPersonMailingAddressStateEnum["Mh"] = "MH";
    DependentEditRequestPersonMailingAddressStateEnum["Mi"] = "MI";
    DependentEditRequestPersonMailingAddressStateEnum["Mn"] = "MN";
    DependentEditRequestPersonMailingAddressStateEnum["Mo"] = "MO";
    DependentEditRequestPersonMailingAddressStateEnum["Mp"] = "MP";
    DependentEditRequestPersonMailingAddressStateEnum["Ms"] = "MS";
    DependentEditRequestPersonMailingAddressStateEnum["Mt"] = "MT";
    DependentEditRequestPersonMailingAddressStateEnum["Nc"] = "NC";
    DependentEditRequestPersonMailingAddressStateEnum["Nd"] = "ND";
    DependentEditRequestPersonMailingAddressStateEnum["Ne"] = "NE";
    DependentEditRequestPersonMailingAddressStateEnum["Nh"] = "NH";
    DependentEditRequestPersonMailingAddressStateEnum["Nj"] = "NJ";
    DependentEditRequestPersonMailingAddressStateEnum["Nm"] = "NM";
    DependentEditRequestPersonMailingAddressStateEnum["Nv"] = "NV";
    DependentEditRequestPersonMailingAddressStateEnum["Ny"] = "NY";
    DependentEditRequestPersonMailingAddressStateEnum["Oh"] = "OH";
    DependentEditRequestPersonMailingAddressStateEnum["Ok"] = "OK";
    DependentEditRequestPersonMailingAddressStateEnum["Or"] = "OR";
    DependentEditRequestPersonMailingAddressStateEnum["Pa"] = "PA";
    DependentEditRequestPersonMailingAddressStateEnum["Pr"] = "PR";
    DependentEditRequestPersonMailingAddressStateEnum["Pw"] = "PW";
    DependentEditRequestPersonMailingAddressStateEnum["Ri"] = "RI";
    DependentEditRequestPersonMailingAddressStateEnum["Sc"] = "SC";
    DependentEditRequestPersonMailingAddressStateEnum["Sd"] = "SD";
    DependentEditRequestPersonMailingAddressStateEnum["Tn"] = "TN";
    DependentEditRequestPersonMailingAddressStateEnum["Tx"] = "TX";
    DependentEditRequestPersonMailingAddressStateEnum["Um"] = "UM";
    DependentEditRequestPersonMailingAddressStateEnum["Ut"] = "UT";
    DependentEditRequestPersonMailingAddressStateEnum["Va"] = "VA";
    DependentEditRequestPersonMailingAddressStateEnum["Vi"] = "VI";
    DependentEditRequestPersonMailingAddressStateEnum["Vt"] = "VT";
    DependentEditRequestPersonMailingAddressStateEnum["Wa"] = "WA";
    DependentEditRequestPersonMailingAddressStateEnum["Wi"] = "WI";
    DependentEditRequestPersonMailingAddressStateEnum["Wv"] = "WV";
    DependentEditRequestPersonMailingAddressStateEnum["Wy"] = "WY";
})(DependentEditRequestPersonMailingAddressStateEnum = exports.DependentEditRequestPersonMailingAddressStateEnum || (exports.DependentEditRequestPersonMailingAddressStateEnum = {}));
// DependentEditRequestPersonMailingAddress
/**
 * Mailing address for the person
**/
var DependentEditRequestPersonMailingAddress = /** @class */ (function (_super) {
    __extends(DependentEditRequestPersonMailingAddress, _super);
    function DependentEditRequestPersonMailingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonMailingAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonMailingAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonMailingAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonMailingAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonMailingAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], DependentEditRequestPersonMailingAddress.prototype, "zipCode", void 0);
    return DependentEditRequestPersonMailingAddress;
}(utils_1.SpeakeasyBase));
exports.DependentEditRequestPersonMailingAddress = DependentEditRequestPersonMailingAddress;
var DependentEditRequestPersonMaritalStatusEnum;
(function (DependentEditRequestPersonMaritalStatusEnum) {
    DependentEditRequestPersonMaritalStatusEnum["Divorced"] = "divorced";
    DependentEditRequestPersonMaritalStatusEnum["DomesticPartner"] = "domestic-partner";
    DependentEditRequestPersonMaritalStatusEnum["LegallySeparated"] = "legally-separated";
    DependentEditRequestPersonMaritalStatusEnum["Married"] = "married";
    DependentEditRequestPersonMaritalStatusEnum["Single"] = "single";
    DependentEditRequestPersonMaritalStatusEnum["Widowed"] = "widowed";
})(DependentEditRequestPersonMaritalStatusEnum = exports.DependentEditRequestPersonMaritalStatusEnum || (exports.DependentEditRequestPersonMaritalStatusEnum = {}));
var DependentEditRequestPersonSexEnum;
(function (DependentEditRequestPersonSexEnum) {
    DependentEditRequestPersonSexEnum["F"] = "F";
    DependentEditRequestPersonSexEnum["M"] = "M";
    DependentEditRequestPersonSexEnum["U"] = "U";
    DependentEditRequestPersonSexEnum["X"] = "X";
})(DependentEditRequestPersonSexEnum = exports.DependentEditRequestPersonSexEnum || (exports.DependentEditRequestPersonSexEnum = {}));
// DependentEditRequestPerson
/**
 * Personal information for the dependent
**/
var DependentEditRequestPerson = /** @class */ (function (_super) {
    __extends(DependentEditRequestPerson, _super);
    function DependentEditRequestPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact" }),
        __metadata("design:type", DependentEditRequestPersonContact)
    ], DependentEditRequestPerson.prototype, "contact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_of_birth" }),
        __metadata("design:type", Date)
    ], DependentEditRequestPerson.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", DependentEditRequestPersonDetails)
    ], DependentEditRequestPerson.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], DependentEditRequestPerson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_address" }),
        __metadata("design:type", DependentEditRequestPersonHomeAddress)
    ], DependentEditRequestPerson.prototype, "homeAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], DependentEditRequestPerson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mailing_address" }),
        __metadata("design:type", DependentEditRequestPersonMailingAddress)
    ], DependentEditRequestPerson.prototype, "mailingAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marital_status" }),
        __metadata("design:type", String)
    ], DependentEditRequestPerson.prototype, "maritalStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], DependentEditRequestPerson.prototype, "middleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sex" }),
        __metadata("design:type", String)
    ], DependentEditRequestPerson.prototype, "sex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssn" }),
        __metadata("design:type", String)
    ], DependentEditRequestPerson.prototype, "ssn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], DependentEditRequestPerson.prototype, "suffix", void 0);
    return DependentEditRequestPerson;
}(utils_1.SpeakeasyBase));
exports.DependentEditRequestPerson = DependentEditRequestPerson;
var DependentEditRequestRelationshipEnum;
(function (DependentEditRequestRelationshipEnum) {
    DependentEditRequestRelationshipEnum["AdoptedChild"] = "adopted-child";
    DependentEditRequestRelationshipEnum["Child"] = "child";
    DependentEditRequestRelationshipEnum["CivilUnion"] = "civil-union";
    DependentEditRequestRelationshipEnum["DomesticPartner"] = "domestic-partner";
    DependentEditRequestRelationshipEnum["ExSpouse"] = "ex-spouse";
    DependentEditRequestRelationshipEnum["FosterChild"] = "foster-child";
    DependentEditRequestRelationshipEnum["Grandchild"] = "grandchild";
    DependentEditRequestRelationshipEnum["LegalGuardianship"] = "legal-guardianship";
    DependentEditRequestRelationshipEnum["Other"] = "other";
    DependentEditRequestRelationshipEnum["Spouse"] = "spouse";
    DependentEditRequestRelationshipEnum["StepChild"] = "step-child";
})(DependentEditRequestRelationshipEnum = exports.DependentEditRequestRelationshipEnum || (exports.DependentEditRequestRelationshipEnum = {}));
var DependentEditRequest = /** @class */ (function (_super) {
    __extends(DependentEditRequest, _super);
    function DependentEditRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=person" }),
        __metadata("design:type", DependentEditRequestPerson)
    ], DependentEditRequest.prototype, "person", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationship" }),
        __metadata("design:type", String)
    ], DependentEditRequest.prototype, "relationship", void 0);
    return DependentEditRequest;
}(utils_1.SpeakeasyBase));
exports.DependentEditRequest = DependentEditRequest;
