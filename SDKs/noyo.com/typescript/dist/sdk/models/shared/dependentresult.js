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
exports.DependentResult = exports.DependentResultRelationshipEnum = exports.DependentResultPerson = exports.DependentResultPersonSexEnum = exports.DependentResultPersonMaritalStatusEnum = exports.DependentResultPersonMailingAddress = exports.DependentResultPersonMailingAddressStateEnum = exports.DependentResultPersonHomeAddress = exports.DependentResultPersonHomeAddressStateEnum = exports.DependentResultPersonDetails = exports.DependentResultPersonDetailsTobacco = exports.DependentResultPersonDetailsTobaccoTypesEnum = exports.DependentResultPersonDetailsDisability = exports.DependentResultPersonDetailsAmericanIndian = exports.DependentResultPersonDetailsAmericanIndianStateEnum = exports.DependentResultPersonContact = exports.DependentResultPersonContactPreferredMethodEnum = exports.DependentResultPersonContactEmailAddressTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var DependentResultPersonContactEmailAddressTypeEnum;
(function (DependentResultPersonContactEmailAddressTypeEnum) {
    DependentResultPersonContactEmailAddressTypeEnum["Home"] = "home";
    DependentResultPersonContactEmailAddressTypeEnum["Work"] = "work";
})(DependentResultPersonContactEmailAddressTypeEnum = exports.DependentResultPersonContactEmailAddressTypeEnum || (exports.DependentResultPersonContactEmailAddressTypeEnum = {}));
var DependentResultPersonContactPreferredMethodEnum;
(function (DependentResultPersonContactPreferredMethodEnum) {
    DependentResultPersonContactPreferredMethodEnum["Email"] = "email";
    DependentResultPersonContactPreferredMethodEnum["HomePhone"] = "home-phone";
    DependentResultPersonContactPreferredMethodEnum["Mail"] = "mail";
    DependentResultPersonContactPreferredMethodEnum["Other"] = "other";
    DependentResultPersonContactPreferredMethodEnum["WorkPhone"] = "work-phone";
})(DependentResultPersonContactPreferredMethodEnum = exports.DependentResultPersonContactPreferredMethodEnum || (exports.DependentResultPersonContactPreferredMethodEnum = {}));
// DependentResultPersonContact
/**
 * Contact information for the person
**/
var DependentResultPersonContact = /** @class */ (function (_super) {
    __extends(DependentResultPersonContact, _super);
    function DependentResultPersonContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_address" }),
        __metadata("design:type", String)
    ], DependentResultPersonContact.prototype, "emailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_address_type" }),
        __metadata("design:type", String)
    ], DependentResultPersonContact.prototype, "emailAddressType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_phone" }),
        __metadata("design:type", String)
    ], DependentResultPersonContact.prototype, "homePhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_language" }),
        __metadata("design:type", String)
    ], DependentResultPersonContact.prototype, "preferredLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_method" }),
        __metadata("design:type", String)
    ], DependentResultPersonContact.prototype, "preferredMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaks_english" }),
        __metadata("design:type", Boolean)
    ], DependentResultPersonContact.prototype, "speaksEnglish", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=work_phone" }),
        __metadata("design:type", String)
    ], DependentResultPersonContact.prototype, "workPhone", void 0);
    return DependentResultPersonContact;
}(utils_1.SpeakeasyBase));
exports.DependentResultPersonContact = DependentResultPersonContact;
var DependentResultPersonDetailsAmericanIndianStateEnum;
(function (DependentResultPersonDetailsAmericanIndianStateEnum) {
    DependentResultPersonDetailsAmericanIndianStateEnum["Ak"] = "AK";
    DependentResultPersonDetailsAmericanIndianStateEnum["Al"] = "AL";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ar"] = "AR";
    DependentResultPersonDetailsAmericanIndianStateEnum["As"] = "AS";
    DependentResultPersonDetailsAmericanIndianStateEnum["Az"] = "AZ";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ca"] = "CA";
    DependentResultPersonDetailsAmericanIndianStateEnum["Co"] = "CO";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ct"] = "CT";
    DependentResultPersonDetailsAmericanIndianStateEnum["Dc"] = "DC";
    DependentResultPersonDetailsAmericanIndianStateEnum["De"] = "DE";
    DependentResultPersonDetailsAmericanIndianStateEnum["Fl"] = "FL";
    DependentResultPersonDetailsAmericanIndianStateEnum["Fm"] = "FM";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ga"] = "GA";
    DependentResultPersonDetailsAmericanIndianStateEnum["Gu"] = "GU";
    DependentResultPersonDetailsAmericanIndianStateEnum["Hi"] = "HI";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ia"] = "IA";
    DependentResultPersonDetailsAmericanIndianStateEnum["Id"] = "ID";
    DependentResultPersonDetailsAmericanIndianStateEnum["Il"] = "IL";
    DependentResultPersonDetailsAmericanIndianStateEnum["In"] = "IN";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ks"] = "KS";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ky"] = "KY";
    DependentResultPersonDetailsAmericanIndianStateEnum["La"] = "LA";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ma"] = "MA";
    DependentResultPersonDetailsAmericanIndianStateEnum["Md"] = "MD";
    DependentResultPersonDetailsAmericanIndianStateEnum["Me"] = "ME";
    DependentResultPersonDetailsAmericanIndianStateEnum["Mh"] = "MH";
    DependentResultPersonDetailsAmericanIndianStateEnum["Mi"] = "MI";
    DependentResultPersonDetailsAmericanIndianStateEnum["Mn"] = "MN";
    DependentResultPersonDetailsAmericanIndianStateEnum["Mo"] = "MO";
    DependentResultPersonDetailsAmericanIndianStateEnum["Mp"] = "MP";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ms"] = "MS";
    DependentResultPersonDetailsAmericanIndianStateEnum["Mt"] = "MT";
    DependentResultPersonDetailsAmericanIndianStateEnum["Nc"] = "NC";
    DependentResultPersonDetailsAmericanIndianStateEnum["Nd"] = "ND";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ne"] = "NE";
    DependentResultPersonDetailsAmericanIndianStateEnum["Nh"] = "NH";
    DependentResultPersonDetailsAmericanIndianStateEnum["Nj"] = "NJ";
    DependentResultPersonDetailsAmericanIndianStateEnum["Nm"] = "NM";
    DependentResultPersonDetailsAmericanIndianStateEnum["Nv"] = "NV";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ny"] = "NY";
    DependentResultPersonDetailsAmericanIndianStateEnum["Oh"] = "OH";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ok"] = "OK";
    DependentResultPersonDetailsAmericanIndianStateEnum["Or"] = "OR";
    DependentResultPersonDetailsAmericanIndianStateEnum["Pa"] = "PA";
    DependentResultPersonDetailsAmericanIndianStateEnum["Pr"] = "PR";
    DependentResultPersonDetailsAmericanIndianStateEnum["Pw"] = "PW";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ri"] = "RI";
    DependentResultPersonDetailsAmericanIndianStateEnum["Sc"] = "SC";
    DependentResultPersonDetailsAmericanIndianStateEnum["Sd"] = "SD";
    DependentResultPersonDetailsAmericanIndianStateEnum["Tn"] = "TN";
    DependentResultPersonDetailsAmericanIndianStateEnum["Tx"] = "TX";
    DependentResultPersonDetailsAmericanIndianStateEnum["Um"] = "UM";
    DependentResultPersonDetailsAmericanIndianStateEnum["Ut"] = "UT";
    DependentResultPersonDetailsAmericanIndianStateEnum["Va"] = "VA";
    DependentResultPersonDetailsAmericanIndianStateEnum["Vi"] = "VI";
    DependentResultPersonDetailsAmericanIndianStateEnum["Vt"] = "VT";
    DependentResultPersonDetailsAmericanIndianStateEnum["Wa"] = "WA";
    DependentResultPersonDetailsAmericanIndianStateEnum["Wi"] = "WI";
    DependentResultPersonDetailsAmericanIndianStateEnum["Wv"] = "WV";
    DependentResultPersonDetailsAmericanIndianStateEnum["Wy"] = "WY";
})(DependentResultPersonDetailsAmericanIndianStateEnum = exports.DependentResultPersonDetailsAmericanIndianStateEnum || (exports.DependentResultPersonDetailsAmericanIndianStateEnum = {}));
// DependentResultPersonDetailsAmericanIndian
/**
 * American Indian status details (if applicable)
**/
var DependentResultPersonDetailsAmericanIndian = /** @class */ (function (_super) {
    __extends(DependentResultPersonDetailsAmericanIndian, _super);
    function DependentResultPersonDetailsAmericanIndian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DependentResultPersonDetailsAmericanIndian.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tribe" }),
        __metadata("design:type", String)
    ], DependentResultPersonDetailsAmericanIndian.prototype, "tribe", void 0);
    return DependentResultPersonDetailsAmericanIndian;
}(utils_1.SpeakeasyBase));
exports.DependentResultPersonDetailsAmericanIndian = DependentResultPersonDetailsAmericanIndian;
// DependentResultPersonDetailsDisability
/**
 * Disability details (if applicable)
**/
var DependentResultPersonDetailsDisability = /** @class */ (function (_super) {
    __extends(DependentResultPersonDetailsDisability, _super);
    function DependentResultPersonDetailsDisability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=communication" }),
        __metadata("design:type", Boolean)
    ], DependentResultPersonDetailsDisability.prototype, "communication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], DependentResultPersonDetailsDisability.prototype, "disabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], DependentResultPersonDetailsDisability.prototype, "reason", void 0);
    return DependentResultPersonDetailsDisability;
}(utils_1.SpeakeasyBase));
exports.DependentResultPersonDetailsDisability = DependentResultPersonDetailsDisability;
var DependentResultPersonDetailsTobaccoTypesEnum;
(function (DependentResultPersonDetailsTobaccoTypesEnum) {
    DependentResultPersonDetailsTobaccoTypesEnum["ChewingTobacco"] = "chewing-tobacco";
    DependentResultPersonDetailsTobaccoTypesEnum["Cigarettes"] = "cigarettes";
    DependentResultPersonDetailsTobaccoTypesEnum["Pipe"] = "pipe";
})(DependentResultPersonDetailsTobaccoTypesEnum = exports.DependentResultPersonDetailsTobaccoTypesEnum || (exports.DependentResultPersonDetailsTobaccoTypesEnum = {}));
// DependentResultPersonDetailsTobacco
/**
 * Tobacco usage details (if applicable)
**/
var DependentResultPersonDetailsTobacco = /** @class */ (function (_super) {
    __extends(DependentResultPersonDetailsTobacco, _super);
    function DependentResultPersonDetailsTobacco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], DependentResultPersonDetailsTobacco.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], DependentResultPersonDetailsTobacco.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], DependentResultPersonDetailsTobacco.prototype, "types", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", Boolean)
    ], DependentResultPersonDetailsTobacco.prototype, "user", void 0);
    return DependentResultPersonDetailsTobacco;
}(utils_1.SpeakeasyBase));
exports.DependentResultPersonDetailsTobacco = DependentResultPersonDetailsTobacco;
// DependentResultPersonDetails
/**
 * Additional personal details of the person
**/
var DependentResultPersonDetails = /** @class */ (function (_super) {
    __extends(DependentResultPersonDetails, _super);
    function DependentResultPersonDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=american_indian" }),
        __metadata("design:type", DependentResultPersonDetailsAmericanIndian)
    ], DependentResultPersonDetails.prototype, "americanIndian", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disability" }),
        __metadata("design:type", DependentResultPersonDetailsDisability)
    ], DependentResultPersonDetails.prototype, "disability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_military" }),
        __metadata("design:type", Boolean)
    ], DependentResultPersonDetails.prototype, "isMilitary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_student" }),
        __metadata("design:type", Boolean)
    ], DependentResultPersonDetails.prototype, "isStudent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tobacco" }),
        __metadata("design:type", DependentResultPersonDetailsTobacco)
    ], DependentResultPersonDetails.prototype, "tobacco", void 0);
    return DependentResultPersonDetails;
}(utils_1.SpeakeasyBase));
exports.DependentResultPersonDetails = DependentResultPersonDetails;
var DependentResultPersonHomeAddressStateEnum;
(function (DependentResultPersonHomeAddressStateEnum) {
    DependentResultPersonHomeAddressStateEnum["Ak"] = "AK";
    DependentResultPersonHomeAddressStateEnum["Al"] = "AL";
    DependentResultPersonHomeAddressStateEnum["Ar"] = "AR";
    DependentResultPersonHomeAddressStateEnum["As"] = "AS";
    DependentResultPersonHomeAddressStateEnum["Az"] = "AZ";
    DependentResultPersonHomeAddressStateEnum["Ca"] = "CA";
    DependentResultPersonHomeAddressStateEnum["Co"] = "CO";
    DependentResultPersonHomeAddressStateEnum["Ct"] = "CT";
    DependentResultPersonHomeAddressStateEnum["Dc"] = "DC";
    DependentResultPersonHomeAddressStateEnum["De"] = "DE";
    DependentResultPersonHomeAddressStateEnum["Fl"] = "FL";
    DependentResultPersonHomeAddressStateEnum["Fm"] = "FM";
    DependentResultPersonHomeAddressStateEnum["Ga"] = "GA";
    DependentResultPersonHomeAddressStateEnum["Gu"] = "GU";
    DependentResultPersonHomeAddressStateEnum["Hi"] = "HI";
    DependentResultPersonHomeAddressStateEnum["Ia"] = "IA";
    DependentResultPersonHomeAddressStateEnum["Id"] = "ID";
    DependentResultPersonHomeAddressStateEnum["Il"] = "IL";
    DependentResultPersonHomeAddressStateEnum["In"] = "IN";
    DependentResultPersonHomeAddressStateEnum["Ks"] = "KS";
    DependentResultPersonHomeAddressStateEnum["Ky"] = "KY";
    DependentResultPersonHomeAddressStateEnum["La"] = "LA";
    DependentResultPersonHomeAddressStateEnum["Ma"] = "MA";
    DependentResultPersonHomeAddressStateEnum["Md"] = "MD";
    DependentResultPersonHomeAddressStateEnum["Me"] = "ME";
    DependentResultPersonHomeAddressStateEnum["Mh"] = "MH";
    DependentResultPersonHomeAddressStateEnum["Mi"] = "MI";
    DependentResultPersonHomeAddressStateEnum["Mn"] = "MN";
    DependentResultPersonHomeAddressStateEnum["Mo"] = "MO";
    DependentResultPersonHomeAddressStateEnum["Mp"] = "MP";
    DependentResultPersonHomeAddressStateEnum["Ms"] = "MS";
    DependentResultPersonHomeAddressStateEnum["Mt"] = "MT";
    DependentResultPersonHomeAddressStateEnum["Nc"] = "NC";
    DependentResultPersonHomeAddressStateEnum["Nd"] = "ND";
    DependentResultPersonHomeAddressStateEnum["Ne"] = "NE";
    DependentResultPersonHomeAddressStateEnum["Nh"] = "NH";
    DependentResultPersonHomeAddressStateEnum["Nj"] = "NJ";
    DependentResultPersonHomeAddressStateEnum["Nm"] = "NM";
    DependentResultPersonHomeAddressStateEnum["Nv"] = "NV";
    DependentResultPersonHomeAddressStateEnum["Ny"] = "NY";
    DependentResultPersonHomeAddressStateEnum["Oh"] = "OH";
    DependentResultPersonHomeAddressStateEnum["Ok"] = "OK";
    DependentResultPersonHomeAddressStateEnum["Or"] = "OR";
    DependentResultPersonHomeAddressStateEnum["Pa"] = "PA";
    DependentResultPersonHomeAddressStateEnum["Pr"] = "PR";
    DependentResultPersonHomeAddressStateEnum["Pw"] = "PW";
    DependentResultPersonHomeAddressStateEnum["Ri"] = "RI";
    DependentResultPersonHomeAddressStateEnum["Sc"] = "SC";
    DependentResultPersonHomeAddressStateEnum["Sd"] = "SD";
    DependentResultPersonHomeAddressStateEnum["Tn"] = "TN";
    DependentResultPersonHomeAddressStateEnum["Tx"] = "TX";
    DependentResultPersonHomeAddressStateEnum["Um"] = "UM";
    DependentResultPersonHomeAddressStateEnum["Ut"] = "UT";
    DependentResultPersonHomeAddressStateEnum["Va"] = "VA";
    DependentResultPersonHomeAddressStateEnum["Vi"] = "VI";
    DependentResultPersonHomeAddressStateEnum["Vt"] = "VT";
    DependentResultPersonHomeAddressStateEnum["Wa"] = "WA";
    DependentResultPersonHomeAddressStateEnum["Wi"] = "WI";
    DependentResultPersonHomeAddressStateEnum["Wv"] = "WV";
    DependentResultPersonHomeAddressStateEnum["Wy"] = "WY";
})(DependentResultPersonHomeAddressStateEnum = exports.DependentResultPersonHomeAddressStateEnum || (exports.DependentResultPersonHomeAddressStateEnum = {}));
// DependentResultPersonHomeAddress
/**
 * Home address of the person
**/
var DependentResultPersonHomeAddress = /** @class */ (function (_super) {
    __extends(DependentResultPersonHomeAddress, _super);
    function DependentResultPersonHomeAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], DependentResultPersonHomeAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], DependentResultPersonHomeAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DependentResultPersonHomeAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], DependentResultPersonHomeAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], DependentResultPersonHomeAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], DependentResultPersonHomeAddress.prototype, "zipCode", void 0);
    return DependentResultPersonHomeAddress;
}(utils_1.SpeakeasyBase));
exports.DependentResultPersonHomeAddress = DependentResultPersonHomeAddress;
var DependentResultPersonMailingAddressStateEnum;
(function (DependentResultPersonMailingAddressStateEnum) {
    DependentResultPersonMailingAddressStateEnum["Ak"] = "AK";
    DependentResultPersonMailingAddressStateEnum["Al"] = "AL";
    DependentResultPersonMailingAddressStateEnum["Ar"] = "AR";
    DependentResultPersonMailingAddressStateEnum["As"] = "AS";
    DependentResultPersonMailingAddressStateEnum["Az"] = "AZ";
    DependentResultPersonMailingAddressStateEnum["Ca"] = "CA";
    DependentResultPersonMailingAddressStateEnum["Co"] = "CO";
    DependentResultPersonMailingAddressStateEnum["Ct"] = "CT";
    DependentResultPersonMailingAddressStateEnum["Dc"] = "DC";
    DependentResultPersonMailingAddressStateEnum["De"] = "DE";
    DependentResultPersonMailingAddressStateEnum["Fl"] = "FL";
    DependentResultPersonMailingAddressStateEnum["Fm"] = "FM";
    DependentResultPersonMailingAddressStateEnum["Ga"] = "GA";
    DependentResultPersonMailingAddressStateEnum["Gu"] = "GU";
    DependentResultPersonMailingAddressStateEnum["Hi"] = "HI";
    DependentResultPersonMailingAddressStateEnum["Ia"] = "IA";
    DependentResultPersonMailingAddressStateEnum["Id"] = "ID";
    DependentResultPersonMailingAddressStateEnum["Il"] = "IL";
    DependentResultPersonMailingAddressStateEnum["In"] = "IN";
    DependentResultPersonMailingAddressStateEnum["Ks"] = "KS";
    DependentResultPersonMailingAddressStateEnum["Ky"] = "KY";
    DependentResultPersonMailingAddressStateEnum["La"] = "LA";
    DependentResultPersonMailingAddressStateEnum["Ma"] = "MA";
    DependentResultPersonMailingAddressStateEnum["Md"] = "MD";
    DependentResultPersonMailingAddressStateEnum["Me"] = "ME";
    DependentResultPersonMailingAddressStateEnum["Mh"] = "MH";
    DependentResultPersonMailingAddressStateEnum["Mi"] = "MI";
    DependentResultPersonMailingAddressStateEnum["Mn"] = "MN";
    DependentResultPersonMailingAddressStateEnum["Mo"] = "MO";
    DependentResultPersonMailingAddressStateEnum["Mp"] = "MP";
    DependentResultPersonMailingAddressStateEnum["Ms"] = "MS";
    DependentResultPersonMailingAddressStateEnum["Mt"] = "MT";
    DependentResultPersonMailingAddressStateEnum["Nc"] = "NC";
    DependentResultPersonMailingAddressStateEnum["Nd"] = "ND";
    DependentResultPersonMailingAddressStateEnum["Ne"] = "NE";
    DependentResultPersonMailingAddressStateEnum["Nh"] = "NH";
    DependentResultPersonMailingAddressStateEnum["Nj"] = "NJ";
    DependentResultPersonMailingAddressStateEnum["Nm"] = "NM";
    DependentResultPersonMailingAddressStateEnum["Nv"] = "NV";
    DependentResultPersonMailingAddressStateEnum["Ny"] = "NY";
    DependentResultPersonMailingAddressStateEnum["Oh"] = "OH";
    DependentResultPersonMailingAddressStateEnum["Ok"] = "OK";
    DependentResultPersonMailingAddressStateEnum["Or"] = "OR";
    DependentResultPersonMailingAddressStateEnum["Pa"] = "PA";
    DependentResultPersonMailingAddressStateEnum["Pr"] = "PR";
    DependentResultPersonMailingAddressStateEnum["Pw"] = "PW";
    DependentResultPersonMailingAddressStateEnum["Ri"] = "RI";
    DependentResultPersonMailingAddressStateEnum["Sc"] = "SC";
    DependentResultPersonMailingAddressStateEnum["Sd"] = "SD";
    DependentResultPersonMailingAddressStateEnum["Tn"] = "TN";
    DependentResultPersonMailingAddressStateEnum["Tx"] = "TX";
    DependentResultPersonMailingAddressStateEnum["Um"] = "UM";
    DependentResultPersonMailingAddressStateEnum["Ut"] = "UT";
    DependentResultPersonMailingAddressStateEnum["Va"] = "VA";
    DependentResultPersonMailingAddressStateEnum["Vi"] = "VI";
    DependentResultPersonMailingAddressStateEnum["Vt"] = "VT";
    DependentResultPersonMailingAddressStateEnum["Wa"] = "WA";
    DependentResultPersonMailingAddressStateEnum["Wi"] = "WI";
    DependentResultPersonMailingAddressStateEnum["Wv"] = "WV";
    DependentResultPersonMailingAddressStateEnum["Wy"] = "WY";
})(DependentResultPersonMailingAddressStateEnum = exports.DependentResultPersonMailingAddressStateEnum || (exports.DependentResultPersonMailingAddressStateEnum = {}));
// DependentResultPersonMailingAddress
/**
 * Mailing address of the person
**/
var DependentResultPersonMailingAddress = /** @class */ (function (_super) {
    __extends(DependentResultPersonMailingAddress, _super);
    function DependentResultPersonMailingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], DependentResultPersonMailingAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], DependentResultPersonMailingAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DependentResultPersonMailingAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], DependentResultPersonMailingAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], DependentResultPersonMailingAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], DependentResultPersonMailingAddress.prototype, "zipCode", void 0);
    return DependentResultPersonMailingAddress;
}(utils_1.SpeakeasyBase));
exports.DependentResultPersonMailingAddress = DependentResultPersonMailingAddress;
var DependentResultPersonMaritalStatusEnum;
(function (DependentResultPersonMaritalStatusEnum) {
    DependentResultPersonMaritalStatusEnum["Divorced"] = "divorced";
    DependentResultPersonMaritalStatusEnum["DomesticPartner"] = "domestic-partner";
    DependentResultPersonMaritalStatusEnum["LegallySeparated"] = "legally-separated";
    DependentResultPersonMaritalStatusEnum["Married"] = "married";
    DependentResultPersonMaritalStatusEnum["Single"] = "single";
    DependentResultPersonMaritalStatusEnum["Widowed"] = "widowed";
})(DependentResultPersonMaritalStatusEnum = exports.DependentResultPersonMaritalStatusEnum || (exports.DependentResultPersonMaritalStatusEnum = {}));
var DependentResultPersonSexEnum;
(function (DependentResultPersonSexEnum) {
    DependentResultPersonSexEnum["F"] = "F";
    DependentResultPersonSexEnum["M"] = "M";
    DependentResultPersonSexEnum["U"] = "U";
    DependentResultPersonSexEnum["X"] = "X";
})(DependentResultPersonSexEnum = exports.DependentResultPersonSexEnum || (exports.DependentResultPersonSexEnum = {}));
// DependentResultPerson
/**
 * Personal information for the dependent
**/
var DependentResultPerson = /** @class */ (function (_super) {
    __extends(DependentResultPerson, _super);
    function DependentResultPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact" }),
        __metadata("design:type", DependentResultPersonContact)
    ], DependentResultPerson.prototype, "contact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_of_birth" }),
        __metadata("design:type", Date)
    ], DependentResultPerson.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", DependentResultPersonDetails)
    ], DependentResultPerson.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], DependentResultPerson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_address" }),
        __metadata("design:type", DependentResultPersonHomeAddress)
    ], DependentResultPerson.prototype, "homeAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], DependentResultPerson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mailing_address" }),
        __metadata("design:type", DependentResultPersonMailingAddress)
    ], DependentResultPerson.prototype, "mailingAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marital_status" }),
        __metadata("design:type", String)
    ], DependentResultPerson.prototype, "maritalStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], DependentResultPerson.prototype, "middleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sex" }),
        __metadata("design:type", String)
    ], DependentResultPerson.prototype, "sex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssn" }),
        __metadata("design:type", String)
    ], DependentResultPerson.prototype, "ssn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], DependentResultPerson.prototype, "suffix", void 0);
    return DependentResultPerson;
}(utils_1.SpeakeasyBase));
exports.DependentResultPerson = DependentResultPerson;
var DependentResultRelationshipEnum;
(function (DependentResultRelationshipEnum) {
    DependentResultRelationshipEnum["AdoptedChild"] = "adopted-child";
    DependentResultRelationshipEnum["Child"] = "child";
    DependentResultRelationshipEnum["CivilUnion"] = "civil-union";
    DependentResultRelationshipEnum["DomesticPartner"] = "domestic-partner";
    DependentResultRelationshipEnum["ExSpouse"] = "ex-spouse";
    DependentResultRelationshipEnum["FosterChild"] = "foster-child";
    DependentResultRelationshipEnum["Grandchild"] = "grandchild";
    DependentResultRelationshipEnum["LegalGuardianship"] = "legal-guardianship";
    DependentResultRelationshipEnum["Other"] = "other";
    DependentResultRelationshipEnum["Spouse"] = "spouse";
    DependentResultRelationshipEnum["StepChild"] = "step-child";
})(DependentResultRelationshipEnum = exports.DependentResultRelationshipEnum || (exports.DependentResultRelationshipEnum = {}));
var DependentResult = /** @class */ (function (_super) {
    __extends(DependentResult, _super);
    function DependentResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], DependentResult.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=employee_id" }),
        __metadata("design:type", String)
    ], DependentResult.prototype, "employeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DependentResult.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], DependentResult.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=person" }),
        __metadata("design:type", DependentResultPerson)
    ], DependentResult.prototype, "person", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationship" }),
        __metadata("design:type", String)
    ], DependentResult.prototype, "relationship", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], DependentResult.prototype, "version", void 0);
    return DependentResult;
}(utils_1.SpeakeasyBase));
exports.DependentResult = DependentResult;
