"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ConnectionProfileInput = exports.ConnectionProfile = exports.ConnectionProfileStateEnum = exports.ConnectionProfileProviderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var cloudsqlconnectionprofile_1 = require("./cloudsqlconnectionprofile");
var mysqlconnectionprofile_1 = require("./mysqlconnectionprofile");
var status_1 = require("./status");
var class_transformer_1 = require("class-transformer");
/**
 * The database provider.
 */
var ConnectionProfileProviderEnum;
(function (ConnectionProfileProviderEnum) {
    ConnectionProfileProviderEnum["DatabaseProviderUnspecified"] = "DATABASE_PROVIDER_UNSPECIFIED";
    ConnectionProfileProviderEnum["Cloudsql"] = "CLOUDSQL";
    ConnectionProfileProviderEnum["Rds"] = "RDS";
})(ConnectionProfileProviderEnum = exports.ConnectionProfileProviderEnum || (exports.ConnectionProfileProviderEnum = {}));
/**
 * The current connection profile state (e.g. DRAFT, READY, or FAILED).
 */
var ConnectionProfileStateEnum;
(function (ConnectionProfileStateEnum) {
    ConnectionProfileStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ConnectionProfileStateEnum["Draft"] = "DRAFT";
    ConnectionProfileStateEnum["Creating"] = "CREATING";
    ConnectionProfileStateEnum["Ready"] = "READY";
    ConnectionProfileStateEnum["Updating"] = "UPDATING";
    ConnectionProfileStateEnum["Deleting"] = "DELETING";
    ConnectionProfileStateEnum["Deleted"] = "DELETED";
    ConnectionProfileStateEnum["Failed"] = "FAILED";
})(ConnectionProfileStateEnum = exports.ConnectionProfileStateEnum || (exports.ConnectionProfileStateEnum = {}));
/**
 * A connection profile definition.
 */
var ConnectionProfile = /** @class */ (function (_super) {
    __extends(ConnectionProfile, _super);
    function ConnectionProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cloudsql" }),
        (0, class_transformer_1.Type)(function () { return cloudsqlconnectionprofile_1.CloudSqlConnectionProfile; }),
        __metadata("design:type", cloudsqlconnectionprofile_1.CloudSqlConnectionProfile)
    ], ConnectionProfile.prototype, "cloudsql", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "createTime" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "displayName" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        (0, class_transformer_1.Type)(function () { return status_1.Status; }),
        __metadata("design:type", status_1.Status)
    ], ConnectionProfile.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "labels" }),
        __metadata("design:type", Object)
    ], ConnectionProfile.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "mysql" }),
        (0, class_transformer_1.Type)(function () { return mysqlconnectionprofile_1.MySqlConnectionProfile; }),
        __metadata("design:type", mysqlconnectionprofile_1.MySqlConnectionProfile)
    ], ConnectionProfile.prototype, "mysql", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "provider" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updateTime" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "updateTime", void 0);
    return ConnectionProfile;
}(utils_1.SpeakeasyBase));
exports.ConnectionProfile = ConnectionProfile;
/**
 * A connection profile definition.
 */
var ConnectionProfileInput = /** @class */ (function (_super) {
    __extends(ConnectionProfileInput, _super);
    function ConnectionProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cloudsql" }),
        (0, class_transformer_1.Type)(function () { return cloudsqlconnectionprofile_1.CloudSqlConnectionProfileInput; }),
        __metadata("design:type", cloudsqlconnectionprofile_1.CloudSqlConnectionProfileInput)
    ], ConnectionProfileInput.prototype, "cloudsql", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "displayName" }),
        __metadata("design:type", String)
    ], ConnectionProfileInput.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error" }),
        (0, class_transformer_1.Type)(function () { return status_1.Status; }),
        __metadata("design:type", status_1.Status)
    ], ConnectionProfileInput.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "labels" }),
        __metadata("design:type", Object)
    ], ConnectionProfileInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "mysql" }),
        (0, class_transformer_1.Type)(function () { return mysqlconnectionprofile_1.MySqlConnectionProfileInput; }),
        __metadata("design:type", mysqlconnectionprofile_1.MySqlConnectionProfileInput)
    ], ConnectionProfileInput.prototype, "mysql", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], ConnectionProfileInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "provider" }),
        __metadata("design:type", String)
    ], ConnectionProfileInput.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state" }),
        __metadata("design:type", String)
    ], ConnectionProfileInput.prototype, "state", void 0);
    return ConnectionProfileInput;
}(utils_1.SpeakeasyBase));
exports.ConnectionProfileInput = ConnectionProfileInput;
