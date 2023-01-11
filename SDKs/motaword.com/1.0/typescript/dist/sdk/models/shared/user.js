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
exports.User = exports.UserVendor = exports.UserClient = exports.UserClientCorporate = void 0;
var utils_1 = require("../../../internal/utils");
var languagepair_1 = require("./languagepair");
var billingaddress_1 = require("./billingaddress");
var userlinks_1 = require("./userlinks");
var address_1 = require("./address");
var socialmedia_1 = require("./socialmedia");
var usergroup_1 = require("./usergroup");
var UserClientCorporate = /** @class */ (function (_super) {
    __extends(UserClientCorporate, _super);
    function UserClientCorporate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserClientCorporate.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UserClientCorporate.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], UserClientCorporate.prototype, "logo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserClientCorporate.prototype, "name", void 0);
    return UserClientCorporate;
}(utils_1.SpeakeasyBase));
exports.UserClientCorporate = UserClientCorporate;
var UserClient = /** @class */ (function (_super) {
    __extends(UserClient, _super);
    function UserClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=corporate" }),
        __metadata("design:type", UserClientCorporate)
    ], UserClient.prototype, "corporate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nps" }),
        __metadata("design:type", Number)
    ], UserClient.prototype, "nps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subjects" }),
        __metadata("design:type", Object)
    ], UserClient.prototype, "subjects", void 0);
    return UserClient;
}(utils_1.SpeakeasyBase));
exports.UserClient = UserClient;
var UserVendor = /** @class */ (function (_super) {
    __extends(UserVendor, _super);
    function UserVendor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=can_work_manual_files" }),
        __metadata("design:type", Boolean)
    ], UserVendor.prototype, "canWorkManualFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_frozen" }),
        __metadata("design:type", Boolean)
    ], UserVendor.prototype, "isFrozen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_proofreader" }),
        __metadata("design:type", Boolean)
    ], UserVendor.prototype, "isProofreader", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language_pairs", elemType: languagepair_1.LanguagePair }),
        __metadata("design:type", Array)
    ], UserVendor.prototype, "languagePairs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=native_language" }),
        __metadata("design:type", String)
    ], UserVendor.prototype, "nativeLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paypal_email" }),
        __metadata("design:type", String)
    ], UserVendor.prototype, "paypalEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_1099" }),
        __metadata("design:type", Boolean)
    ], UserVendor.prototype, "require1099", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], UserVendor.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tms_user_name" }),
        __metadata("design:type", String)
    ], UserVendor.prototype, "tmsUserName", void 0);
    return UserVendor;
}(utils_1.SpeakeasyBase));
exports.UserVendor = UserVendor;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing" }),
        __metadata("design:type", billingaddress_1.BillingAddress)
    ], User.prototype, "billing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=birthday" }),
        __metadata("design:type", Date)
    ], User.prototype, "birthday", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=can_work_manual_files" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "canWorkManualFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], User.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client" }),
        __metadata("design:type", UserClient)
    ], User.prototype, "client", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=corporate_id" }),
        __metadata("design:type", Number)
    ], User.prototype, "corporateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], User.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Number)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=do_not_contact" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "doNotContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_pwd" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "hasPwd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_client" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isClient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_developer" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isDeveloper", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_proofreader" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isProofreader", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_prospect" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isProspect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_sales_person" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isSalesPerson", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_vendor" }),
        __metadata("design:type", Boolean)
    ], User.prototype, "isVendor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language_pairs", elemType: languagepair_1.LanguagePair }),
        __metadata("design:type", Array)
    ], User.prototype, "languagePairs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_seen_online_at" }),
        __metadata("design:type", Number)
    ], User.prototype, "lastSeenOnlineAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", userlinks_1.UserLinks)
    ], User.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], User.prototype, "locale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mailing" }),
        __metadata("design:type", address_1.Address)
    ], User.prototype, "mailing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=native_language" }),
        __metadata("design:type", String)
    ], User.prototype, "nativeLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nps" }),
        __metadata("design:type", Number)
    ], User.prototype, "nps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], User.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=profile_picture_path" }),
        __metadata("design:type", String)
    ], User.prototype, "profilePicturePath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=social_media" }),
        __metadata("design:type", socialmedia_1.SocialMedia)
    ], User.prototype, "socialMedia", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], User.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], User.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=street" }),
        __metadata("design:type", String)
    ], User.prototype, "street", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], User.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tms_user_name" }),
        __metadata("design:type", String)
    ], User.prototype, "tmsUserName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_groups", elemType: usergroup_1.UserGroup }),
        __metadata("design:type", Array)
    ], User.prototype, "userGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vendor" }),
        __metadata("design:type", UserVendor)
    ], User.prototype, "vendor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=zip_code" }),
        __metadata("design:type", String)
    ], User.prototype, "zipCode", void 0);
    return User;
}(utils_1.SpeakeasyBase));
exports.User = User;
