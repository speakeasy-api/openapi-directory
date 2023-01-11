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
exports.DependentCreateRequest = exports.DependentCreateRequestRelationshipEnum = exports.DependentCreateRequestPerson = exports.DependentCreateRequestPersonSexEnum = exports.DependentCreateRequestPersonMaritalStatusEnum = exports.DependentCreateRequestPersonMailingAddress = exports.DependentCreateRequestPersonMailingAddressStateEnum = exports.DependentCreateRequestPersonHomeAddress = exports.DependentCreateRequestPersonHomeAddressStateEnum = exports.DependentCreateRequestPersonDetails = exports.DependentCreateRequestPersonDetailsTobacco = exports.DependentCreateRequestPersonDetailsTobaccoTypesEnum = exports.DependentCreateRequestPersonDetailsDisability = exports.DependentCreateRequestPersonDetailsAmericanIndian = exports.DependentCreateRequestPersonDetailsAmericanIndianStateEnum = exports.DependentCreateRequestPersonContact = exports.DependentCreateRequestPersonContactPreferredMethodEnum = exports.DependentCreateRequestPersonContactEmailAddressTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var DependentCreateRequestPersonContactEmailAddressTypeEnum;
(function (DependentCreateRequestPersonContactEmailAddressTypeEnum) {
    DependentCreateRequestPersonContactEmailAddressTypeEnum["Home"] = "home";
    DependentCreateRequestPersonContactEmailAddressTypeEnum["Work"] = "work";
})(DependentCreateRequestPersonContactEmailAddressTypeEnum = exports.DependentCreateRequestPersonContactEmailAddressTypeEnum || (exports.DependentCreateRequestPersonContactEmailAddressTypeEnum = {}));
var DependentCreateRequestPersonContactPreferredMethodEnum;
(function (DependentCreateRequestPersonContactPreferredMethodEnum) {
    DependentCreateRequestPersonContactPreferredMethodEnum["Email"] = "email";
    DependentCreateRequestPersonContactPreferredMethodEnum["HomePhone"] = "home-phone";
    DependentCreateRequestPersonContactPreferredMethodEnum["Mail"] = "mail";
    DependentCreateRequestPersonContactPreferredMethodEnum["Other"] = "other";
    DependentCreateRequestPersonContactPreferredMethodEnum["WorkPhone"] = "work-phone";
})(DependentCreateRequestPersonContactPreferredMethodEnum = exports.DependentCreateRequestPersonContactPreferredMethodEnum || (exports.DependentCreateRequestPersonContactPreferredMethodEnum = {}));
// DependentCreateRequestPersonContact
/**
 * Contact information for the person
**/
var DependentCreateRequestPersonContact = /** @class */ (function (_super) {
    __extends(DependentCreateRequestPersonContact, _super);
    function DependentCreateRequestPersonContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_address" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonContact.prototype, "emailAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email_address_type" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonContact.prototype, "emailAddressType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_phone" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonContact.prototype, "homePhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_language" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonContact.prototype, "preferredLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_method" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonContact.prototype, "preferredMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=speaks_english" }),
        __metadata("design:type", Boolean)
    ], DependentCreateRequestPersonContact.prototype, "speaksEnglish", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=work_phone" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonContact.prototype, "workPhone", void 0);
    return DependentCreateRequestPersonContact;
}(utils_1.SpeakeasyBase));
exports.DependentCreateRequestPersonContact = DependentCreateRequestPersonContact;
var DependentCreateRequestPersonDetailsAmericanIndianStateEnum;
(function (DependentCreateRequestPersonDetailsAmericanIndianStateEnum) {
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ak"] = "AK";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Al"] = "AL";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ar"] = "AR";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["As"] = "AS";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Az"] = "AZ";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ca"] = "CA";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Co"] = "CO";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ct"] = "CT";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Dc"] = "DC";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["De"] = "DE";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Fl"] = "FL";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Fm"] = "FM";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ga"] = "GA";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Gu"] = "GU";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Hi"] = "HI";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ia"] = "IA";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Id"] = "ID";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Il"] = "IL";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["In"] = "IN";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ks"] = "KS";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ky"] = "KY";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["La"] = "LA";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ma"] = "MA";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Md"] = "MD";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Me"] = "ME";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Mh"] = "MH";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Mi"] = "MI";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Mn"] = "MN";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Mo"] = "MO";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Mp"] = "MP";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ms"] = "MS";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Mt"] = "MT";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Nc"] = "NC";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Nd"] = "ND";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ne"] = "NE";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Nh"] = "NH";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Nj"] = "NJ";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Nm"] = "NM";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Nv"] = "NV";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ny"] = "NY";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Oh"] = "OH";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ok"] = "OK";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Or"] = "OR";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Pa"] = "PA";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Pr"] = "PR";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Pw"] = "PW";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ri"] = "RI";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Sc"] = "SC";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Sd"] = "SD";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Tn"] = "TN";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Tx"] = "TX";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Um"] = "UM";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Ut"] = "UT";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Va"] = "VA";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Vi"] = "VI";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Vt"] = "VT";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Wa"] = "WA";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Wi"] = "WI";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Wv"] = "WV";
    DependentCreateRequestPersonDetailsAmericanIndianStateEnum["Wy"] = "WY";
})(DependentCreateRequestPersonDetailsAmericanIndianStateEnum = exports.DependentCreateRequestPersonDetailsAmericanIndianStateEnum || (exports.DependentCreateRequestPersonDetailsAmericanIndianStateEnum = {}));
// DependentCreateRequestPersonDetailsAmericanIndian
/**
 * American Indian status details (if applicable)
**/
var DependentCreateRequestPersonDetailsAmericanIndian = /** @class */ (function (_super) {
    __extends(DependentCreateRequestPersonDetailsAmericanIndian, _super);
    function DependentCreateRequestPersonDetailsAmericanIndian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonDetailsAmericanIndian.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tribe" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonDetailsAmericanIndian.prototype, "tribe", void 0);
    return DependentCreateRequestPersonDetailsAmericanIndian;
}(utils_1.SpeakeasyBase));
exports.DependentCreateRequestPersonDetailsAmericanIndian = DependentCreateRequestPersonDetailsAmericanIndian;
// DependentCreateRequestPersonDetailsDisability
/**
 * Disability details (if applicable)
**/
var DependentCreateRequestPersonDetailsDisability = /** @class */ (function (_super) {
    __extends(DependentCreateRequestPersonDetailsDisability, _super);
    function DependentCreateRequestPersonDetailsDisability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=communication" }),
        __metadata("design:type", Boolean)
    ], DependentCreateRequestPersonDetailsDisability.prototype, "communication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], DependentCreateRequestPersonDetailsDisability.prototype, "disabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonDetailsDisability.prototype, "reason", void 0);
    return DependentCreateRequestPersonDetailsDisability;
}(utils_1.SpeakeasyBase));
exports.DependentCreateRequestPersonDetailsDisability = DependentCreateRequestPersonDetailsDisability;
var DependentCreateRequestPersonDetailsTobaccoTypesEnum;
(function (DependentCreateRequestPersonDetailsTobaccoTypesEnum) {
    DependentCreateRequestPersonDetailsTobaccoTypesEnum["ChewingTobacco"] = "chewing-tobacco";
    DependentCreateRequestPersonDetailsTobaccoTypesEnum["Cigarettes"] = "cigarettes";
    DependentCreateRequestPersonDetailsTobaccoTypesEnum["Pipe"] = "pipe";
})(DependentCreateRequestPersonDetailsTobaccoTypesEnum = exports.DependentCreateRequestPersonDetailsTobaccoTypesEnum || (exports.DependentCreateRequestPersonDetailsTobaccoTypesEnum = {}));
// DependentCreateRequestPersonDetailsTobacco
/**
 * Tobacco usage details (if applicable)
**/
var DependentCreateRequestPersonDetailsTobacco = /** @class */ (function (_super) {
    __extends(DependentCreateRequestPersonDetailsTobacco, _super);
    function DependentCreateRequestPersonDetailsTobacco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonDetailsTobacco.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonDetailsTobacco.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], DependentCreateRequestPersonDetailsTobacco.prototype, "types", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", Boolean)
    ], DependentCreateRequestPersonDetailsTobacco.prototype, "user", void 0);
    return DependentCreateRequestPersonDetailsTobacco;
}(utils_1.SpeakeasyBase));
exports.DependentCreateRequestPersonDetailsTobacco = DependentCreateRequestPersonDetailsTobacco;
// DependentCreateRequestPersonDetails
/**
 * Additional personal details of the person
**/
var DependentCreateRequestPersonDetails = /** @class */ (function (_super) {
    __extends(DependentCreateRequestPersonDetails, _super);
    function DependentCreateRequestPersonDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=american_indian" }),
        __metadata("design:type", DependentCreateRequestPersonDetailsAmericanIndian)
    ], DependentCreateRequestPersonDetails.prototype, "americanIndian", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disability" }),
        __metadata("design:type", DependentCreateRequestPersonDetailsDisability)
    ], DependentCreateRequestPersonDetails.prototype, "disability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_military" }),
        __metadata("design:type", Boolean)
    ], DependentCreateRequestPersonDetails.prototype, "isMilitary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_student" }),
        __metadata("design:type", Boolean)
    ], DependentCreateRequestPersonDetails.prototype, "isStudent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tobacco" }),
        __metadata("design:type", DependentCreateRequestPersonDetailsTobacco)
    ], DependentCreateRequestPersonDetails.prototype, "tobacco", void 0);
    return DependentCreateRequestPersonDetails;
}(utils_1.SpeakeasyBase));
exports.DependentCreateRequestPersonDetails = DependentCreateRequestPersonDetails;
var DependentCreateRequestPersonHomeAddressStateEnum;
(function (DependentCreateRequestPersonHomeAddressStateEnum) {
    DependentCreateRequestPersonHomeAddressStateEnum["Ak"] = "AK";
    DependentCreateRequestPersonHomeAddressStateEnum["Al"] = "AL";
    DependentCreateRequestPersonHomeAddressStateEnum["Ar"] = "AR";
    DependentCreateRequestPersonHomeAddressStateEnum["As"] = "AS";
    DependentCreateRequestPersonHomeAddressStateEnum["Az"] = "AZ";
    DependentCreateRequestPersonHomeAddressStateEnum["Ca"] = "CA";
    DependentCreateRequestPersonHomeAddressStateEnum["Co"] = "CO";
    DependentCreateRequestPersonHomeAddressStateEnum["Ct"] = "CT";
    DependentCreateRequestPersonHomeAddressStateEnum["Dc"] = "DC";
    DependentCreateRequestPersonHomeAddressStateEnum["De"] = "DE";
    DependentCreateRequestPersonHomeAddressStateEnum["Fl"] = "FL";
    DependentCreateRequestPersonHomeAddressStateEnum["Fm"] = "FM";
    DependentCreateRequestPersonHomeAddressStateEnum["Ga"] = "GA";
    DependentCreateRequestPersonHomeAddressStateEnum["Gu"] = "GU";
    DependentCreateRequestPersonHomeAddressStateEnum["Hi"] = "HI";
    DependentCreateRequestPersonHomeAddressStateEnum["Ia"] = "IA";
    DependentCreateRequestPersonHomeAddressStateEnum["Id"] = "ID";
    DependentCreateRequestPersonHomeAddressStateEnum["Il"] = "IL";
    DependentCreateRequestPersonHomeAddressStateEnum["In"] = "IN";
    DependentCreateRequestPersonHomeAddressStateEnum["Ks"] = "KS";
    DependentCreateRequestPersonHomeAddressStateEnum["Ky"] = "KY";
    DependentCreateRequestPersonHomeAddressStateEnum["La"] = "LA";
    DependentCreateRequestPersonHomeAddressStateEnum["Ma"] = "MA";
    DependentCreateRequestPersonHomeAddressStateEnum["Md"] = "MD";
    DependentCreateRequestPersonHomeAddressStateEnum["Me"] = "ME";
    DependentCreateRequestPersonHomeAddressStateEnum["Mh"] = "MH";
    DependentCreateRequestPersonHomeAddressStateEnum["Mi"] = "MI";
    DependentCreateRequestPersonHomeAddressStateEnum["Mn"] = "MN";
    DependentCreateRequestPersonHomeAddressStateEnum["Mo"] = "MO";
    DependentCreateRequestPersonHomeAddressStateEnum["Mp"] = "MP";
    DependentCreateRequestPersonHomeAddressStateEnum["Ms"] = "MS";
    DependentCreateRequestPersonHomeAddressStateEnum["Mt"] = "MT";
    DependentCreateRequestPersonHomeAddressStateEnum["Nc"] = "NC";
    DependentCreateRequestPersonHomeAddressStateEnum["Nd"] = "ND";
    DependentCreateRequestPersonHomeAddressStateEnum["Ne"] = "NE";
    DependentCreateRequestPersonHomeAddressStateEnum["Nh"] = "NH";
    DependentCreateRequestPersonHomeAddressStateEnum["Nj"] = "NJ";
    DependentCreateRequestPersonHomeAddressStateEnum["Nm"] = "NM";
    DependentCreateRequestPersonHomeAddressStateEnum["Nv"] = "NV";
    DependentCreateRequestPersonHomeAddressStateEnum["Ny"] = "NY";
    DependentCreateRequestPersonHomeAddressStateEnum["Oh"] = "OH";
    DependentCreateRequestPersonHomeAddressStateEnum["Ok"] = "OK";
    DependentCreateRequestPersonHomeAddressStateEnum["Or"] = "OR";
    DependentCreateRequestPersonHomeAddressStateEnum["Pa"] = "PA";
    DependentCreateRequestPersonHomeAddressStateEnum["Pr"] = "PR";
    DependentCreateRequestPersonHomeAddressStateEnum["Pw"] = "PW";
    DependentCreateRequestPersonHomeAddressStateEnum["Ri"] = "RI";
    DependentCreateRequestPersonHomeAddressStateEnum["Sc"] = "SC";
    DependentCreateRequestPersonHomeAddressStateEnum["Sd"] = "SD";
    DependentCreateRequestPersonHomeAddressStateEnum["Tn"] = "TN";
    DependentCreateRequestPersonHomeAddressStateEnum["Tx"] = "TX";
    DependentCreateRequestPersonHomeAddressStateEnum["Um"] = "UM";
    DependentCreateRequestPersonHomeAddressStateEnum["Ut"] = "UT";
    DependentCreateRequestPersonHomeAddressStateEnum["Va"] = "VA";
    DependentCreateRequestPersonHomeAddressStateEnum["Vi"] = "VI";
    DependentCreateRequestPersonHomeAddressStateEnum["Vt"] = "VT";
    DependentCreateRequestPersonHomeAddressStateEnum["Wa"] = "WA";
    DependentCreateRequestPersonHomeAddressStateEnum["Wi"] = "WI";
    DependentCreateRequestPersonHomeAddressStateEnum["Wv"] = "WV";
    DependentCreateRequestPersonHomeAddressStateEnum["Wy"] = "WY";
})(DependentCreateRequestPersonHomeAddressStateEnum = exports.DependentCreateRequestPersonHomeAddressStateEnum || (exports.DependentCreateRequestPersonHomeAddressStateEnum = {}));
// DependentCreateRequestPersonHomeAddress
/**
 * Home address of the person
**/
var DependentCreateRequestPersonHomeAddress = /** @class */ (function (_super) {
    __extends(DependentCreateRequestPersonHomeAddress, _super);
    function DependentCreateRequestPersonHomeAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonHomeAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonHomeAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonHomeAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonHomeAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonHomeAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonHomeAddress.prototype, "zipCode", void 0);
    return DependentCreateRequestPersonHomeAddress;
}(utils_1.SpeakeasyBase));
exports.DependentCreateRequestPersonHomeAddress = DependentCreateRequestPersonHomeAddress;
var DependentCreateRequestPersonMailingAddressStateEnum;
(function (DependentCreateRequestPersonMailingAddressStateEnum) {
    DependentCreateRequestPersonMailingAddressStateEnum["Ak"] = "AK";
    DependentCreateRequestPersonMailingAddressStateEnum["Al"] = "AL";
    DependentCreateRequestPersonMailingAddressStateEnum["Ar"] = "AR";
    DependentCreateRequestPersonMailingAddressStateEnum["As"] = "AS";
    DependentCreateRequestPersonMailingAddressStateEnum["Az"] = "AZ";
    DependentCreateRequestPersonMailingAddressStateEnum["Ca"] = "CA";
    DependentCreateRequestPersonMailingAddressStateEnum["Co"] = "CO";
    DependentCreateRequestPersonMailingAddressStateEnum["Ct"] = "CT";
    DependentCreateRequestPersonMailingAddressStateEnum["Dc"] = "DC";
    DependentCreateRequestPersonMailingAddressStateEnum["De"] = "DE";
    DependentCreateRequestPersonMailingAddressStateEnum["Fl"] = "FL";
    DependentCreateRequestPersonMailingAddressStateEnum["Fm"] = "FM";
    DependentCreateRequestPersonMailingAddressStateEnum["Ga"] = "GA";
    DependentCreateRequestPersonMailingAddressStateEnum["Gu"] = "GU";
    DependentCreateRequestPersonMailingAddressStateEnum["Hi"] = "HI";
    DependentCreateRequestPersonMailingAddressStateEnum["Ia"] = "IA";
    DependentCreateRequestPersonMailingAddressStateEnum["Id"] = "ID";
    DependentCreateRequestPersonMailingAddressStateEnum["Il"] = "IL";
    DependentCreateRequestPersonMailingAddressStateEnum["In"] = "IN";
    DependentCreateRequestPersonMailingAddressStateEnum["Ks"] = "KS";
    DependentCreateRequestPersonMailingAddressStateEnum["Ky"] = "KY";
    DependentCreateRequestPersonMailingAddressStateEnum["La"] = "LA";
    DependentCreateRequestPersonMailingAddressStateEnum["Ma"] = "MA";
    DependentCreateRequestPersonMailingAddressStateEnum["Md"] = "MD";
    DependentCreateRequestPersonMailingAddressStateEnum["Me"] = "ME";
    DependentCreateRequestPersonMailingAddressStateEnum["Mh"] = "MH";
    DependentCreateRequestPersonMailingAddressStateEnum["Mi"] = "MI";
    DependentCreateRequestPersonMailingAddressStateEnum["Mn"] = "MN";
    DependentCreateRequestPersonMailingAddressStateEnum["Mo"] = "MO";
    DependentCreateRequestPersonMailingAddressStateEnum["Mp"] = "MP";
    DependentCreateRequestPersonMailingAddressStateEnum["Ms"] = "MS";
    DependentCreateRequestPersonMailingAddressStateEnum["Mt"] = "MT";
    DependentCreateRequestPersonMailingAddressStateEnum["Nc"] = "NC";
    DependentCreateRequestPersonMailingAddressStateEnum["Nd"] = "ND";
    DependentCreateRequestPersonMailingAddressStateEnum["Ne"] = "NE";
    DependentCreateRequestPersonMailingAddressStateEnum["Nh"] = "NH";
    DependentCreateRequestPersonMailingAddressStateEnum["Nj"] = "NJ";
    DependentCreateRequestPersonMailingAddressStateEnum["Nm"] = "NM";
    DependentCreateRequestPersonMailingAddressStateEnum["Nv"] = "NV";
    DependentCreateRequestPersonMailingAddressStateEnum["Ny"] = "NY";
    DependentCreateRequestPersonMailingAddressStateEnum["Oh"] = "OH";
    DependentCreateRequestPersonMailingAddressStateEnum["Ok"] = "OK";
    DependentCreateRequestPersonMailingAddressStateEnum["Or"] = "OR";
    DependentCreateRequestPersonMailingAddressStateEnum["Pa"] = "PA";
    DependentCreateRequestPersonMailingAddressStateEnum["Pr"] = "PR";
    DependentCreateRequestPersonMailingAddressStateEnum["Pw"] = "PW";
    DependentCreateRequestPersonMailingAddressStateEnum["Ri"] = "RI";
    DependentCreateRequestPersonMailingAddressStateEnum["Sc"] = "SC";
    DependentCreateRequestPersonMailingAddressStateEnum["Sd"] = "SD";
    DependentCreateRequestPersonMailingAddressStateEnum["Tn"] = "TN";
    DependentCreateRequestPersonMailingAddressStateEnum["Tx"] = "TX";
    DependentCreateRequestPersonMailingAddressStateEnum["Um"] = "UM";
    DependentCreateRequestPersonMailingAddressStateEnum["Ut"] = "UT";
    DependentCreateRequestPersonMailingAddressStateEnum["Va"] = "VA";
    DependentCreateRequestPersonMailingAddressStateEnum["Vi"] = "VI";
    DependentCreateRequestPersonMailingAddressStateEnum["Vt"] = "VT";
    DependentCreateRequestPersonMailingAddressStateEnum["Wa"] = "WA";
    DependentCreateRequestPersonMailingAddressStateEnum["Wi"] = "WI";
    DependentCreateRequestPersonMailingAddressStateEnum["Wv"] = "WV";
    DependentCreateRequestPersonMailingAddressStateEnum["Wy"] = "WY";
})(DependentCreateRequestPersonMailingAddressStateEnum = exports.DependentCreateRequestPersonMailingAddressStateEnum || (exports.DependentCreateRequestPersonMailingAddressStateEnum = {}));
// DependentCreateRequestPersonMailingAddress
/**
 * Mailing address of the person
**/
var DependentCreateRequestPersonMailingAddress = /** @class */ (function (_super) {
    __extends(DependentCreateRequestPersonMailingAddress, _super);
    function DependentCreateRequestPersonMailingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonMailingAddress.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=county" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonMailingAddress.prototype, "county", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonMailingAddress.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_one" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonMailingAddress.prototype, "streetOne", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street_two" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonMailingAddress.prototype, "streetTwo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPersonMailingAddress.prototype, "zipCode", void 0);
    return DependentCreateRequestPersonMailingAddress;
}(utils_1.SpeakeasyBase));
exports.DependentCreateRequestPersonMailingAddress = DependentCreateRequestPersonMailingAddress;
var DependentCreateRequestPersonMaritalStatusEnum;
(function (DependentCreateRequestPersonMaritalStatusEnum) {
    DependentCreateRequestPersonMaritalStatusEnum["Divorced"] = "divorced";
    DependentCreateRequestPersonMaritalStatusEnum["DomesticPartner"] = "domestic-partner";
    DependentCreateRequestPersonMaritalStatusEnum["LegallySeparated"] = "legally-separated";
    DependentCreateRequestPersonMaritalStatusEnum["Married"] = "married";
    DependentCreateRequestPersonMaritalStatusEnum["Single"] = "single";
    DependentCreateRequestPersonMaritalStatusEnum["Widowed"] = "widowed";
})(DependentCreateRequestPersonMaritalStatusEnum = exports.DependentCreateRequestPersonMaritalStatusEnum || (exports.DependentCreateRequestPersonMaritalStatusEnum = {}));
var DependentCreateRequestPersonSexEnum;
(function (DependentCreateRequestPersonSexEnum) {
    DependentCreateRequestPersonSexEnum["F"] = "F";
    DependentCreateRequestPersonSexEnum["M"] = "M";
    DependentCreateRequestPersonSexEnum["U"] = "U";
    DependentCreateRequestPersonSexEnum["X"] = "X";
})(DependentCreateRequestPersonSexEnum = exports.DependentCreateRequestPersonSexEnum || (exports.DependentCreateRequestPersonSexEnum = {}));
// DependentCreateRequestPerson
/**
 * Personal information for the dependent
**/
var DependentCreateRequestPerson = /** @class */ (function (_super) {
    __extends(DependentCreateRequestPerson, _super);
    function DependentCreateRequestPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contact" }),
        __metadata("design:type", DependentCreateRequestPersonContact)
    ], DependentCreateRequestPerson.prototype, "contact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_of_birth" }),
        __metadata("design:type", Date)
    ], DependentCreateRequestPerson.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=details" }),
        __metadata("design:type", DependentCreateRequestPersonDetails)
    ], DependentCreateRequestPerson.prototype, "details", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPerson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=home_address" }),
        __metadata("design:type", DependentCreateRequestPersonHomeAddress)
    ], DependentCreateRequestPerson.prototype, "homeAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPerson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mailing_address" }),
        __metadata("design:type", DependentCreateRequestPersonMailingAddress)
    ], DependentCreateRequestPerson.prototype, "mailingAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marital_status" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPerson.prototype, "maritalStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPerson.prototype, "middleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sex" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPerson.prototype, "sex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssn" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPerson.prototype, "ssn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suffix" }),
        __metadata("design:type", String)
    ], DependentCreateRequestPerson.prototype, "suffix", void 0);
    return DependentCreateRequestPerson;
}(utils_1.SpeakeasyBase));
exports.DependentCreateRequestPerson = DependentCreateRequestPerson;
var DependentCreateRequestRelationshipEnum;
(function (DependentCreateRequestRelationshipEnum) {
    DependentCreateRequestRelationshipEnum["AdoptedChild"] = "adopted-child";
    DependentCreateRequestRelationshipEnum["Child"] = "child";
    DependentCreateRequestRelationshipEnum["CivilUnion"] = "civil-union";
    DependentCreateRequestRelationshipEnum["DomesticPartner"] = "domestic-partner";
    DependentCreateRequestRelationshipEnum["ExSpouse"] = "ex-spouse";
    DependentCreateRequestRelationshipEnum["FosterChild"] = "foster-child";
    DependentCreateRequestRelationshipEnum["Grandchild"] = "grandchild";
    DependentCreateRequestRelationshipEnum["LegalGuardianship"] = "legal-guardianship";
    DependentCreateRequestRelationshipEnum["Other"] = "other";
    DependentCreateRequestRelationshipEnum["Spouse"] = "spouse";
    DependentCreateRequestRelationshipEnum["StepChild"] = "step-child";
})(DependentCreateRequestRelationshipEnum = exports.DependentCreateRequestRelationshipEnum || (exports.DependentCreateRequestRelationshipEnum = {}));
var DependentCreateRequest = /** @class */ (function (_super) {
    __extends(DependentCreateRequest, _super);
    function DependentCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=person" }),
        __metadata("design:type", DependentCreateRequestPerson)
    ], DependentCreateRequest.prototype, "person", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationship" }),
        __metadata("design:type", String)
    ], DependentCreateRequest.prototype, "relationship", void 0);
    return DependentCreateRequest;
}(utils_1.SpeakeasyBase));
exports.DependentCreateRequest = DependentCreateRequest;
