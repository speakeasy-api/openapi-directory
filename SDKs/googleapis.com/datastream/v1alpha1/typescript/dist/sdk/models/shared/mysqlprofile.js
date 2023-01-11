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
exports.MysqlProfileInput = exports.MysqlProfile = void 0;
var utils_1 = require("../../../internal/utils");
var mysqlsslconfig_1 = require("./mysqlsslconfig");
var mysqlsslconfig_2 = require("./mysqlsslconfig");
// MysqlProfile
/**
 * MySQL database profile.
**/
var MysqlProfile = /** @class */ (function (_super) {
    __extends(MysqlProfile, _super);
    function MysqlProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], MysqlProfile.prototype, "hostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], MysqlProfile.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], MysqlProfile.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sslConfig" }),
        __metadata("design:type", mysqlsslconfig_1.MysqlSslConfig)
    ], MysqlProfile.prototype, "sslConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], MysqlProfile.prototype, "username", void 0);
    return MysqlProfile;
}(utils_1.SpeakeasyBase));
exports.MysqlProfile = MysqlProfile;
// MysqlProfileInput
/**
 * MySQL database profile.
**/
var MysqlProfileInput = /** @class */ (function (_super) {
    __extends(MysqlProfileInput, _super);
    function MysqlProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], MysqlProfileInput.prototype, "hostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], MysqlProfileInput.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], MysqlProfileInput.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sslConfig" }),
        __metadata("design:type", mysqlsslconfig_2.MysqlSslConfigInput)
    ], MysqlProfileInput.prototype, "sslConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], MysqlProfileInput.prototype, "username", void 0);
    return MysqlProfileInput;
}(utils_1.SpeakeasyBase));
exports.MysqlProfileInput = MysqlProfileInput;
