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
exports.ConsolePortTemplate = exports.ConsolePortTemplateType = exports.ConsolePortTemplateTypeValueEnum = exports.ConsolePortTemplateTypeLabelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var nesteddevicetype_1 = require("./nesteddevicetype");
var ConsolePortTemplateTypeLabelEnum;
(function (ConsolePortTemplateTypeLabelEnum) {
    ConsolePortTemplateTypeLabelEnum["De9"] = "DE-9";
    ConsolePortTemplateTypeLabelEnum["Db25"] = "DB-25";
    ConsolePortTemplateTypeLabelEnum["Rj11"] = "RJ-11";
    ConsolePortTemplateTypeLabelEnum["Rj12"] = "RJ-12";
    ConsolePortTemplateTypeLabelEnum["Rj45"] = "RJ-45";
    ConsolePortTemplateTypeLabelEnum["UsbTypeA"] = "USB Type A";
    ConsolePortTemplateTypeLabelEnum["UsbTypeB"] = "USB Type B";
    ConsolePortTemplateTypeLabelEnum["UsbTypeC"] = "USB Type C";
    ConsolePortTemplateTypeLabelEnum["UsbMiniA"] = "USB Mini A";
    ConsolePortTemplateTypeLabelEnum["UsbMiniB"] = "USB Mini B";
    ConsolePortTemplateTypeLabelEnum["UsbMicroA"] = "USB Micro A";
    ConsolePortTemplateTypeLabelEnum["UsbMicroB"] = "USB Micro B";
    ConsolePortTemplateTypeLabelEnum["Other"] = "Other";
})(ConsolePortTemplateTypeLabelEnum = exports.ConsolePortTemplateTypeLabelEnum || (exports.ConsolePortTemplateTypeLabelEnum = {}));
var ConsolePortTemplateTypeValueEnum;
(function (ConsolePortTemplateTypeValueEnum) {
    ConsolePortTemplateTypeValueEnum["De9"] = "de-9";
    ConsolePortTemplateTypeValueEnum["Db25"] = "db-25";
    ConsolePortTemplateTypeValueEnum["Rj11"] = "rj-11";
    ConsolePortTemplateTypeValueEnum["Rj12"] = "rj-12";
    ConsolePortTemplateTypeValueEnum["Rj45"] = "rj-45";
    ConsolePortTemplateTypeValueEnum["UsbA"] = "usb-a";
    ConsolePortTemplateTypeValueEnum["UsbB"] = "usb-b";
    ConsolePortTemplateTypeValueEnum["UsbC"] = "usb-c";
    ConsolePortTemplateTypeValueEnum["UsbMiniA"] = "usb-mini-a";
    ConsolePortTemplateTypeValueEnum["UsbMiniB"] = "usb-mini-b";
    ConsolePortTemplateTypeValueEnum["UsbMicroA"] = "usb-micro-a";
    ConsolePortTemplateTypeValueEnum["UsbMicroB"] = "usb-micro-b";
    ConsolePortTemplateTypeValueEnum["Other"] = "other";
})(ConsolePortTemplateTypeValueEnum = exports.ConsolePortTemplateTypeValueEnum || (exports.ConsolePortTemplateTypeValueEnum = {}));
var ConsolePortTemplateType = /** @class */ (function (_super) {
    __extends(ConsolePortTemplateType, _super);
    function ConsolePortTemplateType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ConsolePortTemplateType.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ConsolePortTemplateType.prototype, "value", void 0);
    return ConsolePortTemplateType;
}(utils_1.SpeakeasyBase));
exports.ConsolePortTemplateType = ConsolePortTemplateType;
var ConsolePortTemplate = /** @class */ (function (_super) {
    __extends(ConsolePortTemplate, _super);
    function ConsolePortTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", nesteddevicetype_1.NestedDeviceType)
    ], ConsolePortTemplate.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ConsolePortTemplate.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConsolePortTemplate.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", ConsolePortTemplateType)
    ], ConsolePortTemplate.prototype, "type", void 0);
    return ConsolePortTemplate;
}(utils_1.SpeakeasyBase));
exports.ConsolePortTemplate = ConsolePortTemplate;
