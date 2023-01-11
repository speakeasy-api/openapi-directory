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
exports.Admin = exports.AdminInput = exports.AdminRoleEnum = void 0;
var utils_1 = require("../../../internal/utils");
var AdminRoleEnum;
(function (AdminRoleEnum) {
    AdminRoleEnum["AdminRoleUnspecified"] = "ADMIN_ROLE_UNSPECIFIED";
    AdminRoleEnum["PrimaryOwner"] = "PRIMARY_OWNER";
    AdminRoleEnum["Owner"] = "OWNER";
    AdminRoleEnum["Manager"] = "MANAGER";
    AdminRoleEnum["SiteManager"] = "SITE_MANAGER";
})(AdminRoleEnum = exports.AdminRoleEnum || (exports.AdminRoleEnum = {}));
// AdminInput
/**
 * An administrator of an Account or a location.
**/
var AdminInput = /** @class */ (function (_super) {
    __extends(AdminInput, _super);
    function AdminInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], AdminInput.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=admin" }),
        __metadata("design:type", String)
    ], AdminInput.prototype, "admin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AdminInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], AdminInput.prototype, "role", void 0);
    return AdminInput;
}(utils_1.SpeakeasyBase));
exports.AdminInput = AdminInput;
// Admin
/**
 * An administrator of an Account or a location.
**/
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], Admin.prototype, "account", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=admin" }),
        __metadata("design:type", String)
    ], Admin.prototype, "admin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Admin.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pendingInvitation" }),
        __metadata("design:type", Boolean)
    ], Admin.prototype, "pendingInvitation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Admin.prototype, "role", void 0);
    return Admin;
}(utils_1.SpeakeasyBase));
exports.Admin = Admin;
