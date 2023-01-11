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
exports.PersonInput = exports.Person = exports.PersonAgeRangeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var address_1 = require("./address");
var agerangetype_1 = require("./agerangetype");
var biography_1 = require("./biography");
var birthday_1 = require("./birthday");
var braggingrights_1 = require("./braggingrights");
var calendarurl_1 = require("./calendarurl");
var clientdata_1 = require("./clientdata");
var coverphoto_1 = require("./coverphoto");
var emailaddress_1 = require("./emailaddress");
var event_1 = require("./event");
var externalid_1 = require("./externalid");
var fileas_1 = require("./fileas");
var gender_1 = require("./gender");
var imclient_1 = require("./imclient");
var interest_1 = require("./interest");
var locale_1 = require("./locale");
var location_1 = require("./location");
var membership_1 = require("./membership");
var personmetadata_1 = require("./personmetadata");
var misckeyword_1 = require("./misckeyword");
var name_1 = require("./name");
var nickname_1 = require("./nickname");
var occupation_1 = require("./occupation");
var organization_1 = require("./organization");
var phonenumber_1 = require("./phonenumber");
var photo_1 = require("./photo");
var relation_1 = require("./relation");
var relationshipinterest_1 = require("./relationshipinterest");
var relationshipstatus_1 = require("./relationshipstatus");
var residence_1 = require("./residence");
var sipaddress_1 = require("./sipaddress");
var skill_1 = require("./skill");
var tagline_1 = require("./tagline");
var url_1 = require("./url");
var userdefined_1 = require("./userdefined");
var address_2 = require("./address");
var biography_2 = require("./biography");
var birthday_2 = require("./birthday");
var braggingrights_2 = require("./braggingrights");
var calendarurl_2 = require("./calendarurl");
var clientdata_2 = require("./clientdata");
var emailaddress_2 = require("./emailaddress");
var event_2 = require("./event");
var externalid_2 = require("./externalid");
var fileas_2 = require("./fileas");
var gender_2 = require("./gender");
var imclient_2 = require("./imclient");
var interest_2 = require("./interest");
var locale_2 = require("./locale");
var location_2 = require("./location");
var membership_2 = require("./membership");
var personmetadata_2 = require("./personmetadata");
var misckeyword_2 = require("./misckeyword");
var name_2 = require("./name");
var nickname_2 = require("./nickname");
var occupation_2 = require("./occupation");
var organization_2 = require("./organization");
var phonenumber_2 = require("./phonenumber");
var relation_2 = require("./relation");
var residence_2 = require("./residence");
var sipaddress_2 = require("./sipaddress");
var skill_2 = require("./skill");
var url_2 = require("./url");
var userdefined_2 = require("./userdefined");
var PersonAgeRangeEnum;
(function (PersonAgeRangeEnum) {
    PersonAgeRangeEnum["AgeRangeUnspecified"] = "AGE_RANGE_UNSPECIFIED";
    PersonAgeRangeEnum["LessThanEighteen"] = "LESS_THAN_EIGHTEEN";
    PersonAgeRangeEnum["EighteenToTwenty"] = "EIGHTEEN_TO_TWENTY";
    PersonAgeRangeEnum["TwentyOneOrOlder"] = "TWENTY_ONE_OR_OLDER";
})(PersonAgeRangeEnum = exports.PersonAgeRangeEnum || (exports.PersonAgeRangeEnum = {}));
// Person
/**
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addresses", elemType: address_1.Address }),
        __metadata("design:type", Array)
    ], Person.prototype, "addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ageRange" }),
        __metadata("design:type", String)
    ], Person.prototype, "ageRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ageRanges", elemType: agerangetype_1.AgeRangeType }),
        __metadata("design:type", Array)
    ], Person.prototype, "ageRanges", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=biographies", elemType: biography_1.Biography }),
        __metadata("design:type", Array)
    ], Person.prototype, "biographies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=birthdays", elemType: birthday_1.Birthday }),
        __metadata("design:type", Array)
    ], Person.prototype, "birthdays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=braggingRights", elemType: braggingrights_1.BraggingRights }),
        __metadata("design:type", Array)
    ], Person.prototype, "braggingRights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calendarUrls", elemType: calendarurl_1.CalendarUrl }),
        __metadata("design:type", Array)
    ], Person.prototype, "calendarUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientData", elemType: clientdata_1.ClientData }),
        __metadata("design:type", Array)
    ], Person.prototype, "clientData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=coverPhotos", elemType: coverphoto_1.CoverPhoto }),
        __metadata("design:type", Array)
    ], Person.prototype, "coverPhotos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailAddresses", elemType: emailaddress_1.EmailAddress }),
        __metadata("design:type", Array)
    ], Person.prototype, "emailAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Person.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events", elemType: event_1.Event }),
        __metadata("design:type", Array)
    ], Person.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalIds", elemType: externalid_1.ExternalId }),
        __metadata("design:type", Array)
    ], Person.prototype, "externalIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileAses", elemType: fileas_1.FileAs }),
        __metadata("design:type", Array)
    ], Person.prototype, "fileAses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genders", elemType: gender_1.Gender }),
        __metadata("design:type", Array)
    ], Person.prototype, "genders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imClients", elemType: imclient_1.ImClient }),
        __metadata("design:type", Array)
    ], Person.prototype, "imClients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interests", elemType: interest_1.Interest }),
        __metadata("design:type", Array)
    ], Person.prototype, "interests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locales", elemType: locale_1.Locale }),
        __metadata("design:type", Array)
    ], Person.prototype, "locales", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locations", elemType: location_1.Location }),
        __metadata("design:type", Array)
    ], Person.prototype, "locations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memberships", elemType: membership_1.Membership }),
        __metadata("design:type", Array)
    ], Person.prototype, "memberships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", personmetadata_1.PersonMetadata)
    ], Person.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=miscKeywords", elemType: misckeyword_1.MiscKeyword }),
        __metadata("design:type", Array)
    ], Person.prototype, "miscKeywords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=names", elemType: name_1.Name }),
        __metadata("design:type", Array)
    ], Person.prototype, "names", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nicknames", elemType: nickname_1.Nickname }),
        __metadata("design:type", Array)
    ], Person.prototype, "nicknames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occupations", elemType: occupation_1.Occupation }),
        __metadata("design:type", Array)
    ], Person.prototype, "occupations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organizations", elemType: organization_1.Organization }),
        __metadata("design:type", Array)
    ], Person.prototype, "organizations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phoneNumbers", elemType: phonenumber_1.PhoneNumber }),
        __metadata("design:type", Array)
    ], Person.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=photos", elemType: photo_1.Photo }),
        __metadata("design:type", Array)
    ], Person.prototype, "photos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relations", elemType: relation_1.Relation }),
        __metadata("design:type", Array)
    ], Person.prototype, "relations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationshipInterests", elemType: relationshipinterest_1.RelationshipInterest }),
        __metadata("design:type", Array)
    ], Person.prototype, "relationshipInterests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationshipStatuses", elemType: relationshipstatus_1.RelationshipStatus }),
        __metadata("design:type", Array)
    ], Person.prototype, "relationshipStatuses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=residences", elemType: residence_1.Residence }),
        __metadata("design:type", Array)
    ], Person.prototype, "residences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], Person.prototype, "resourceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sipAddresses", elemType: sipaddress_1.SipAddress }),
        __metadata("design:type", Array)
    ], Person.prototype, "sipAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skills", elemType: skill_1.Skill }),
        __metadata("design:type", Array)
    ], Person.prototype, "skills", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taglines", elemType: tagline_1.Tagline }),
        __metadata("design:type", Array)
    ], Person.prototype, "taglines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urls", elemType: url_1.Url }),
        __metadata("design:type", Array)
    ], Person.prototype, "urls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userDefined", elemType: userdefined_1.UserDefined }),
        __metadata("design:type", Array)
    ], Person.prototype, "userDefined", void 0);
    return Person;
}(utils_1.SpeakeasyBase));
exports.Person = Person;
// PersonInput
/**
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
var PersonInput = /** @class */ (function (_super) {
    __extends(PersonInput, _super);
    function PersonInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addresses", elemType: address_2.AddressInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=biographies", elemType: biography_2.BiographyInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "biographies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=birthdays", elemType: birthday_2.BirthdayInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "birthdays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=braggingRights", elemType: braggingrights_2.BraggingRightsInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "braggingRights", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calendarUrls", elemType: calendarurl_2.CalendarUrlInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "calendarUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientData", elemType: clientdata_2.ClientDataInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "clientData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=emailAddresses", elemType: emailaddress_2.EmailAddressInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "emailAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], PersonInput.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events", elemType: event_2.EventInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=externalIds", elemType: externalid_2.ExternalIdInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "externalIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileAses", elemType: fileas_2.FileAsInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "fileAses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=genders", elemType: gender_2.GenderInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "genders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imClients", elemType: imclient_2.ImClientInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "imClients", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interests", elemType: interest_2.InterestInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "interests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locales", elemType: locale_2.LocaleInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "locales", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locations", elemType: location_2.LocationInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "locations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memberships", elemType: membership_2.MembershipInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "memberships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", personmetadata_2.PersonMetadataInput)
    ], PersonInput.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=miscKeywords", elemType: misckeyword_2.MiscKeywordInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "miscKeywords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=names", elemType: name_2.NameInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "names", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nicknames", elemType: nickname_2.NicknameInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "nicknames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=occupations", elemType: occupation_2.OccupationInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "occupations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=organizations", elemType: organization_2.OrganizationInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "organizations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phoneNumbers", elemType: phonenumber_2.PhoneNumberInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relations", elemType: relation_2.RelationInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "relations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=residences", elemType: residence_2.ResidenceInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "residences", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], PersonInput.prototype, "resourceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sipAddresses", elemType: sipaddress_2.SipAddressInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "sipAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=skills", elemType: skill_2.SkillInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "skills", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urls", elemType: url_2.UrlInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "urls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userDefined", elemType: userdefined_2.UserDefinedInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "userDefined", void 0);
    return PersonInput;
}(utils_1.SpeakeasyBase));
exports.PersonInput = PersonInput;
