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
exports.Interface = exports.InterfaceMode = exports.InterfaceFormFactor = void 0;
var utils_1 = require("../../../internal/utils");
var interfacecircuittermination_1 = require("./interfacecircuittermination");
var nesteddevice_1 = require("./nesteddevice");
var nestedinterface_1 = require("./nestedinterface");
var interfacevlan_1 = require("./interfacevlan");
var InterfaceFormFactor = /** @class */ (function (_super) {
    __extends(InterfaceFormFactor, _super);
    function InterfaceFormFactor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], InterfaceFormFactor.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], InterfaceFormFactor.prototype, "value", void 0);
    return InterfaceFormFactor;
}(utils_1.SpeakeasyBase));
exports.InterfaceFormFactor = InterfaceFormFactor;
var InterfaceMode = /** @class */ (function (_super) {
    __extends(InterfaceMode, _super);
    function InterfaceMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], InterfaceMode.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], InterfaceMode.prototype, "value", void 0);
    return InterfaceMode;
}(utils_1.SpeakeasyBase));
exports.InterfaceMode = InterfaceMode;
var Interface = /** @class */ (function (_super) {
    __extends(Interface, _super);
    function Interface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=circuit_termination" }),
        __metadata("design:type", interfacecircuittermination_1.InterfaceCircuitTermination)
    ], Interface.prototype, "circuitTermination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Interface.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device" }),
        __metadata("design:type", nesteddevice_1.NestedDevice)
    ], Interface.prototype, "device", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], Interface.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=form_factor" }),
        __metadata("design:type", InterfaceFormFactor)
    ], Interface.prototype, "formFactor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Interface.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interface_connection" }),
        __metadata("design:type", String)
    ], Interface.prototype, "interfaceConnection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_connected" }),
        __metadata("design:type", String)
    ], Interface.prototype, "isConnected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lag" }),
        __metadata("design:type", nestedinterface_1.NestedInterface)
    ], Interface.prototype, "lag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], Interface.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mgmt_only" }),
        __metadata("design:type", Boolean)
    ], Interface.prototype, "mgmtOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", InterfaceMode)
    ], Interface.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mtu" }),
        __metadata("design:type", Number)
    ], Interface.prototype, "mtu", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Interface.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tagged_vlans", elemType: interfacevlan_1.InterfaceVlan }),
        __metadata("design:type", Array)
    ], Interface.prototype, "taggedVlans", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Interface.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=untagged_vlan" }),
        __metadata("design:type", interfacevlan_1.InterfaceVlan)
    ], Interface.prototype, "untaggedVlan", void 0);
    return Interface;
}(utils_1.SpeakeasyBase));
exports.Interface = Interface;
