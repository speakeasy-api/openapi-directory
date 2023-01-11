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
exports.GoogleAppsCloudidentityDevicesV1DeviceUser = exports.GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum = exports.GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum = exports.GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum;
(function (GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum) {
    GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum["CompromisedStateUnspecified"] = "COMPROMISED_STATE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum["Compromised"] = "COMPROMISED";
    GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum["NotCompromised"] = "NOT_COMPROMISED";
})(GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum = exports.GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum || (exports.GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum = {}));
var GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum;
(function (GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum) {
    GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum["ManagementStateUnspecified"] = "MANAGEMENT_STATE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum["Wiping"] = "WIPING";
    GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum["Wiped"] = "WIPED";
    GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum["Approved"] = "APPROVED";
    GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum["Blocked"] = "BLOCKED";
    GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum["PendingApproval"] = "PENDING_APPROVAL";
    GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum["Unenrolled"] = "UNENROLLED";
})(GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum = exports.GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum || (exports.GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum = {}));
var GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum;
(function (GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum) {
    GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum["PasswordStateUnspecified"] = "PASSWORD_STATE_UNSPECIFIED";
    GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum["PasswordSet"] = "PASSWORD_SET";
    GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum["PasswordNotSet"] = "PASSWORD_NOT_SET";
})(GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum = exports.GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum || (exports.GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum = {}));
// GoogleAppsCloudidentityDevicesV1DeviceUser
/**
 * Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
**/
var GoogleAppsCloudidentityDevicesV1DeviceUser = /** @class */ (function (_super) {
    __extends(GoogleAppsCloudidentityDevicesV1DeviceUser, _super);
    function GoogleAppsCloudidentityDevicesV1DeviceUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compromisedState" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1DeviceUser.prototype, "compromisedState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1DeviceUser.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=firstSyncTime" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1DeviceUser.prototype, "firstSyncTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1DeviceUser.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastSyncTime" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1DeviceUser.prototype, "lastSyncTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=managementState" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1DeviceUser.prototype, "managementState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1DeviceUser.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=passwordState" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1DeviceUser.prototype, "passwordState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userAgent" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1DeviceUser.prototype, "userAgent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userEmail" }),
        __metadata("design:type", String)
    ], GoogleAppsCloudidentityDevicesV1DeviceUser.prototype, "userEmail", void 0);
    return GoogleAppsCloudidentityDevicesV1DeviceUser;
}(utils_1.SpeakeasyBase));
exports.GoogleAppsCloudidentityDevicesV1DeviceUser = GoogleAppsCloudidentityDevicesV1DeviceUser;
