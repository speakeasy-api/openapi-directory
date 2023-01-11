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
exports.InterfaceConnection = exports.InterfaceConnectionConnectionStatus = exports.InterfaceConnectionConnectionStatusLabelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var nestedinterface_1 = require("./nestedinterface");
var InterfaceConnectionConnectionStatusLabelEnum;
(function (InterfaceConnectionConnectionStatusLabelEnum) {
    InterfaceConnectionConnectionStatusLabelEnum["NotConnected"] = "Not Connected";
    InterfaceConnectionConnectionStatusLabelEnum["Connected"] = "Connected";
})(InterfaceConnectionConnectionStatusLabelEnum = exports.InterfaceConnectionConnectionStatusLabelEnum || (exports.InterfaceConnectionConnectionStatusLabelEnum = {}));
var InterfaceConnectionConnectionStatus = /** @class */ (function (_super) {
    __extends(InterfaceConnectionConnectionStatus, _super);
    function InterfaceConnectionConnectionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], InterfaceConnectionConnectionStatus.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", Boolean)
    ], InterfaceConnectionConnectionStatus.prototype, "value", void 0);
    return InterfaceConnectionConnectionStatus;
}(utils_1.SpeakeasyBase));
exports.InterfaceConnectionConnectionStatus = InterfaceConnectionConnectionStatus;
var InterfaceConnection = /** @class */ (function (_super) {
    __extends(InterfaceConnection, _super);
    function InterfaceConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection_status" }),
        __metadata("design:type", InterfaceConnectionConnectionStatus)
    ], InterfaceConnection.prototype, "connectionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interface_a" }),
        __metadata("design:type", nestedinterface_1.NestedInterface)
    ], InterfaceConnection.prototype, "interfaceA", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interface_b" }),
        __metadata("design:type", nestedinterface_1.NestedInterface)
    ], InterfaceConnection.prototype, "interfaceB", void 0);
    return InterfaceConnection;
}(utils_1.SpeakeasyBase));
exports.InterfaceConnection = InterfaceConnection;
