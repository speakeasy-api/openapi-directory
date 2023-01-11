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
exports.ConnectionProfileInput = exports.ConnectionProfile = void 0;
var utils_1 = require("../../../internal/utils");
var forwardsshtunnelconnectivity_1 = require("./forwardsshtunnelconnectivity");
var gcsprofile_1 = require("./gcsprofile");
var mysqlprofile_1 = require("./mysqlprofile");
var oracleprofile_1 = require("./oracleprofile");
var privateconnectivity_1 = require("./privateconnectivity");
var mysqlprofile_2 = require("./mysqlprofile");
var ConnectionProfile = /** @class */ (function (_super) {
    __extends(ConnectionProfile, _super);
    function ConnectionProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forwardSshConnectivity" }),
        __metadata("design:type", forwardsshtunnelconnectivity_1.ForwardSshTunnelConnectivity)
    ], ConnectionProfile.prototype, "forwardSshConnectivity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gcsProfile" }),
        __metadata("design:type", gcsprofile_1.GcsProfile)
    ], ConnectionProfile.prototype, "gcsProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], ConnectionProfile.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mysqlProfile" }),
        __metadata("design:type", mysqlprofile_1.MysqlProfile)
    ], ConnectionProfile.prototype, "mysqlProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noConnectivity" }),
        __metadata("design:type", Object)
    ], ConnectionProfile.prototype, "noConnectivity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oracleProfile" }),
        __metadata("design:type", oracleprofile_1.OracleProfile)
    ], ConnectionProfile.prototype, "oracleProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privateConnectivity" }),
        __metadata("design:type", privateconnectivity_1.PrivateConnectivity)
    ], ConnectionProfile.prototype, "privateConnectivity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=staticServiceIpConnectivity" }),
        __metadata("design:type", Object)
    ], ConnectionProfile.prototype, "staticServiceIpConnectivity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "updateTime", void 0);
    return ConnectionProfile;
}(utils_1.SpeakeasyBase));
exports.ConnectionProfile = ConnectionProfile;
var ConnectionProfileInput = /** @class */ (function (_super) {
    __extends(ConnectionProfileInput, _super);
    function ConnectionProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConnectionProfileInput.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=forwardSshConnectivity" }),
        __metadata("design:type", forwardsshtunnelconnectivity_1.ForwardSshTunnelConnectivity)
    ], ConnectionProfileInput.prototype, "forwardSshConnectivity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gcsProfile" }),
        __metadata("design:type", gcsprofile_1.GcsProfile)
    ], ConnectionProfileInput.prototype, "gcsProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], ConnectionProfileInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mysqlProfile" }),
        __metadata("design:type", mysqlprofile_2.MysqlProfileInput)
    ], ConnectionProfileInput.prototype, "mysqlProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=noConnectivity" }),
        __metadata("design:type", Object)
    ], ConnectionProfileInput.prototype, "noConnectivity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oracleProfile" }),
        __metadata("design:type", oracleprofile_1.OracleProfile)
    ], ConnectionProfileInput.prototype, "oracleProfile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privateConnectivity" }),
        __metadata("design:type", privateconnectivity_1.PrivateConnectivity)
    ], ConnectionProfileInput.prototype, "privateConnectivity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=staticServiceIpConnectivity" }),
        __metadata("design:type", Object)
    ], ConnectionProfileInput.prototype, "staticServiceIpConnectivity", void 0);
    return ConnectionProfileInput;
}(utils_1.SpeakeasyBase));
exports.ConnectionProfileInput = ConnectionProfileInput;
