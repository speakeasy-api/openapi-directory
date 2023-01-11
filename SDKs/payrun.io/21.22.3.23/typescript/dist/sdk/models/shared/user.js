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
exports.User = exports.UserUser = exports.UserUserRoles = exports.UserUserPermission = void 0;
var utils_1 = require("../../../internal/utils");
// UserUserPermission
/**
 * The users' permissions
**/
var UserUserPermission = /** @class */ (function (_super) {
    __extends(UserUserPermission, _super);
    function UserUserPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Permission" }),
        __metadata("design:type", Array)
    ], UserUserPermission.prototype, "permission", void 0);
    return UserUserPermission;
}(utils_1.SpeakeasyBase));
exports.UserUserPermission = UserUserPermission;
// UserUserRoles
/**
 * The users' roles
**/
var UserUserRoles = /** @class */ (function (_super) {
    __extends(UserUserRoles, _super);
    function UserUserRoles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Role" }),
        __metadata("design:type", Array)
    ], UserUserRoles.prototype, "role", void 0);
    return UserUserRoles;
}(utils_1.SpeakeasyBase));
exports.UserUserRoles = UserUserRoles;
var UserUser = /** @class */ (function (_super) {
    __extends(UserUser, _super);
    function UserUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MetaData" }),
        __metadata("design:type", Object)
    ], UserUser.prototype, "metaData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Permissions" }),
        __metadata("design:type", UserUserPermission)
    ], UserUser.prototype, "permissions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Roles" }),
        __metadata("design:type", UserUserRoles)
    ], UserUser.prototype, "roles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UserIdentifier" }),
        __metadata("design:type", String)
    ], UserUser.prototype, "userIdentifier", void 0);
    return UserUser;
}(utils_1.SpeakeasyBase));
exports.UserUser = UserUser;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=User" }),
        __metadata("design:type", UserUser)
    ], User.prototype, "user", void 0);
    return User;
}(utils_1.SpeakeasyBase));
exports.User = User;
