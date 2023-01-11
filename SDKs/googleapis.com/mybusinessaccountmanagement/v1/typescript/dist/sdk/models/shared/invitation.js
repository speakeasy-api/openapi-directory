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
exports.Invitation = exports.InvitationTargetTypeEnum = exports.InvitationRoleEnum = void 0;
var utils_1 = require("../../../internal/utils");
var account_1 = require("./account");
var targetlocation_1 = require("./targetlocation");
var InvitationRoleEnum;
(function (InvitationRoleEnum) {
    InvitationRoleEnum["AdminRoleUnspecified"] = "ADMIN_ROLE_UNSPECIFIED";
    InvitationRoleEnum["PrimaryOwner"] = "PRIMARY_OWNER";
    InvitationRoleEnum["Owner"] = "OWNER";
    InvitationRoleEnum["Manager"] = "MANAGER";
    InvitationRoleEnum["SiteManager"] = "SITE_MANAGER";
})(InvitationRoleEnum = exports.InvitationRoleEnum || (exports.InvitationRoleEnum = {}));
var InvitationTargetTypeEnum;
(function (InvitationTargetTypeEnum) {
    InvitationTargetTypeEnum["TargetTypeUnspecified"] = "TARGET_TYPE_UNSPECIFIED";
    InvitationTargetTypeEnum["AccountsOnly"] = "ACCOUNTS_ONLY";
    InvitationTargetTypeEnum["LocationsOnly"] = "LOCATIONS_ONLY";
})(InvitationTargetTypeEnum = exports.InvitationTargetTypeEnum || (exports.InvitationTargetTypeEnum = {}));
// Invitation
/**
 * Represents a pending invitation.
**/
var Invitation = /** @class */ (function (_super) {
    __extends(Invitation, _super);
    function Invitation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Invitation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Invitation.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetAccount" }),
        __metadata("design:type", account_1.Account)
    ], Invitation.prototype, "targetAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetLocation" }),
        __metadata("design:type", targetlocation_1.TargetLocation)
    ], Invitation.prototype, "targetLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetType" }),
        __metadata("design:type", String)
    ], Invitation.prototype, "targetType", void 0);
    return Invitation;
}(utils_1.SpeakeasyBase));
exports.Invitation = Invitation;
