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
exports.PostgreSqlConnectionProfileInput = exports.PostgreSqlConnectionProfile = exports.PostgreSqlConnectionProfileNetworkArchitectureEnum = void 0;
var utils_1 = require("../../../internal/utils");
var sslconfig_1 = require("./sslconfig");
var sslconfig_2 = require("./sslconfig");
var PostgreSqlConnectionProfileNetworkArchitectureEnum;
(function (PostgreSqlConnectionProfileNetworkArchitectureEnum) {
    PostgreSqlConnectionProfileNetworkArchitectureEnum["NetworkArchitectureUnspecified"] = "NETWORK_ARCHITECTURE_UNSPECIFIED";
    PostgreSqlConnectionProfileNetworkArchitectureEnum["NetworkArchitectureOldCsqlProducer"] = "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER";
    PostgreSqlConnectionProfileNetworkArchitectureEnum["NetworkArchitectureNewCsqlProducer"] = "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER";
})(PostgreSqlConnectionProfileNetworkArchitectureEnum = exports.PostgreSqlConnectionProfileNetworkArchitectureEnum || (exports.PostgreSqlConnectionProfileNetworkArchitectureEnum = {}));
// PostgreSqlConnectionProfile
/**
 * Specifies connection parameters required specifically for PostgreSQL databases.
**/
var PostgreSqlConnectionProfile = /** @class */ (function (_super) {
    __extends(PostgreSqlConnectionProfile, _super);
    function PostgreSqlConnectionProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudSqlId" }),
        __metadata("design:type", String)
    ], PostgreSqlConnectionProfile.prototype, "cloudSqlId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], PostgreSqlConnectionProfile.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkArchitecture" }),
        __metadata("design:type", String)
    ], PostgreSqlConnectionProfile.prototype, "networkArchitecture", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostgreSqlConnectionProfile.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=passwordSet" }),
        __metadata("design:type", Boolean)
    ], PostgreSqlConnectionProfile.prototype, "passwordSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], PostgreSqlConnectionProfile.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssl" }),
        __metadata("design:type", sslconfig_1.SslConfig)
    ], PostgreSqlConnectionProfile.prototype, "ssl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostgreSqlConnectionProfile.prototype, "username", void 0);
    return PostgreSqlConnectionProfile;
}(utils_1.SpeakeasyBase));
exports.PostgreSqlConnectionProfile = PostgreSqlConnectionProfile;
// PostgreSqlConnectionProfileInput
/**
 * Specifies connection parameters required specifically for PostgreSQL databases.
**/
var PostgreSqlConnectionProfileInput = /** @class */ (function (_super) {
    __extends(PostgreSqlConnectionProfileInput, _super);
    function PostgreSqlConnectionProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cloudSqlId" }),
        __metadata("design:type", String)
    ], PostgreSqlConnectionProfileInput.prototype, "cloudSqlId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], PostgreSqlConnectionProfileInput.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostgreSqlConnectionProfileInput.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], PostgreSqlConnectionProfileInput.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssl" }),
        __metadata("design:type", sslconfig_2.SslConfigInput)
    ], PostgreSqlConnectionProfileInput.prototype, "ssl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], PostgreSqlConnectionProfileInput.prototype, "username", void 0);
    return PostgreSqlConnectionProfileInput;
}(utils_1.SpeakeasyBase));
exports.PostgreSqlConnectionProfileInput = PostgreSqlConnectionProfileInput;
