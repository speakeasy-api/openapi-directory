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
exports.AuxiliaryVersionConfigInput = exports.AuxiliaryVersionConfig = void 0;
var utils_1 = require("../../../internal/utils");
var networkconfig_1 = require("./networkconfig");
var networkconfig_2 = require("./networkconfig");
var AuxiliaryVersionConfig = /** @class */ (function (_super) {
    __extends(AuxiliaryVersionConfig, _super);
    function AuxiliaryVersionConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configOverrides" }),
        __metadata("design:type", Object)
    ], AuxiliaryVersionConfig.prototype, "configOverrides", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkConfig" }),
        __metadata("design:type", networkconfig_1.NetworkConfig)
    ], AuxiliaryVersionConfig.prototype, "networkConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], AuxiliaryVersionConfig.prototype, "version", void 0);
    return AuxiliaryVersionConfig;
}(utils_1.SpeakeasyBase));
exports.AuxiliaryVersionConfig = AuxiliaryVersionConfig;
var AuxiliaryVersionConfigInput = /** @class */ (function (_super) {
    __extends(AuxiliaryVersionConfigInput, _super);
    function AuxiliaryVersionConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configOverrides" }),
        __metadata("design:type", Object)
    ], AuxiliaryVersionConfigInput.prototype, "configOverrides", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkConfig" }),
        __metadata("design:type", networkconfig_2.NetworkConfigInput)
    ], AuxiliaryVersionConfigInput.prototype, "networkConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], AuxiliaryVersionConfigInput.prototype, "version", void 0);
    return AuxiliaryVersionConfigInput;
}(utils_1.SpeakeasyBase));
exports.AuxiliaryVersionConfigInput = AuxiliaryVersionConfigInput;
