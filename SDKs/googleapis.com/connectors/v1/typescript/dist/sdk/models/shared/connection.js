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
exports.Connection = exports.ConnectionInput = void 0;
var utils_1 = require("../../../internal/utils");
var authconfig_1 = require("./authconfig");
var configvariable_1 = require("./configvariable");
var destinationconfig_1 = require("./destinationconfig");
var lockconfig_1 = require("./lockconfig");
var nodeconfig_1 = require("./nodeconfig");
var connectionstatus_1 = require("./connectionstatus");
// ConnectionInput
/**
 * Connection represents an instance of connector.
**/
var ConnectionInput = /** @class */ (function (_super) {
    __extends(ConnectionInput, _super);
    function ConnectionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authConfig" }),
        __metadata("design:type", authconfig_1.AuthConfig)
    ], ConnectionInput.prototype, "authConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configVariables", elemType: configvariable_1.ConfigVariable }),
        __metadata("design:type", Array)
    ], ConnectionInput.prototype, "configVariables", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectorVersion" }),
        __metadata("design:type", String)
    ], ConnectionInput.prototype, "connectorVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ConnectionInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinationConfigs", elemType: destinationconfig_1.DestinationConfig }),
        __metadata("design:type", Array)
    ], ConnectionInput.prototype, "destinationConfigs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], ConnectionInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lockConfig" }),
        __metadata("design:type", lockconfig_1.LockConfig)
    ], ConnectionInput.prototype, "lockConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodeConfig" }),
        __metadata("design:type", nodeconfig_1.NodeConfig)
    ], ConnectionInput.prototype, "nodeConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], ConnectionInput.prototype, "serviceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", connectionstatus_1.ConnectionStatus)
    ], ConnectionInput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspended" }),
        __metadata("design:type", Boolean)
    ], ConnectionInput.prototype, "suspended", void 0);
    return ConnectionInput;
}(utils_1.SpeakeasyBase));
exports.ConnectionInput = ConnectionInput;
// Connection
/**
 * Connection represents an instance of connector.
**/
var Connection = /** @class */ (function (_super) {
    __extends(Connection, _super);
    function Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authConfig" }),
        __metadata("design:type", authconfig_1.AuthConfig)
    ], Connection.prototype, "authConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configVariables", elemType: configvariable_1.ConfigVariable }),
        __metadata("design:type", Array)
    ], Connection.prototype, "configVariables", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectorVersion" }),
        __metadata("design:type", String)
    ], Connection.prototype, "connectorVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Connection.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Connection.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinationConfigs", elemType: destinationconfig_1.DestinationConfig }),
        __metadata("design:type", Array)
    ], Connection.prototype, "destinationConfigs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=envoyImageLocation" }),
        __metadata("design:type", String)
    ], Connection.prototype, "envoyImageLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imageLocation" }),
        __metadata("design:type", String)
    ], Connection.prototype, "imageLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], Connection.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lockConfig" }),
        __metadata("design:type", lockconfig_1.LockConfig)
    ], Connection.prototype, "lockConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Connection.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nodeConfig" }),
        __metadata("design:type", nodeconfig_1.NodeConfig)
    ], Connection.prototype, "nodeConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], Connection.prototype, "serviceAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceDirectory" }),
        __metadata("design:type", String)
    ], Connection.prototype, "serviceDirectory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", connectionstatus_1.ConnectionStatus)
    ], Connection.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=suspended" }),
        __metadata("design:type", Boolean)
    ], Connection.prototype, "suspended", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Connection.prototype, "updateTime", void 0);
    return Connection;
}(utils_1.SpeakeasyBase));
exports.Connection = Connection;
