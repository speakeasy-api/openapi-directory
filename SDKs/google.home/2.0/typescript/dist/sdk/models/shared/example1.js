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
exports.Example1 = void 0;
var utils_1 = require("../../../internal/utils");
var aogh_1 = require("./aogh");
var audio_1 = require("./audio");
var buildinfo_1 = require("./buildinfo");
var detail_1 = require("./detail");
var deviceinfo_1 = require("./deviceinfo");
var multizone_1 = require("./multizone");
var net_1 = require("./net");
var nightmodeparams_1 = require("./nightmodeparams");
var opencast_1 = require("./opencast");
var optin_1 = require("./optin");
var proxy_1 = require("./proxy");
var settings_1 = require("./settings");
var setup_1 = require("./setup");
var sign_1 = require("./sign");
var usereq_1 = require("./usereq");
var wifi_1 = require("./wifi");
var Example1 = /** @class */ (function (_super) {
    __extends(Example1, _super);
    function Example1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aogh" }),
        __metadata("design:type", aogh_1.Aogh)
    ], Example1.prototype, "aogh", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=audio" }),
        __metadata("design:type", audio_1.Audio)
    ], Example1.prototype, "audio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build_info" }),
        __metadata("design:type", buildinfo_1.BuildInfo)
    ], Example1.prototype, "buildInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", detail_1.Detail)
    ], Example1.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_info" }),
        __metadata("design:type", deviceinfo_1.DeviceInfo)
    ], Example1.prototype, "deviceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multizone" }),
        __metadata("design:type", multizone_1.Multizone)
    ], Example1.prototype, "multizone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Example1.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=net" }),
        __metadata("design:type", net_1.Net)
    ], Example1.prototype, "net", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=night_mode_params" }),
        __metadata("design:type", nightmodeparams_1.NightModeParams)
    ], Example1.prototype, "nightModeParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=opencast" }),
        __metadata("design:type", opencast_1.Opencast)
    ], Example1.prototype, "opencast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=opt_in" }),
        __metadata("design:type", optin_1.OptIn)
    ], Example1.prototype, "optIn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proxy" }),
        __metadata("design:type", proxy_1.Proxy)
    ], Example1.prototype, "proxy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=settings" }),
        __metadata("design:type", settings_1.Settings)
    ], Example1.prototype, "settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setup" }),
        __metadata("design:type", setup_1.Setup)
    ], Example1.prototype, "setup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sign" }),
        __metadata("design:type", sign_1.Sign)
    ], Example1.prototype, "sign", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_eq" }),
        __metadata("design:type", usereq_1.UserEq)
    ], Example1.prototype, "userEq", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], Example1.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=wifi" }),
        __metadata("design:type", wifi_1.Wifi)
    ], Example1.prototype, "wifi", void 0);
    return Example1;
}(utils_1.SpeakeasyBase));
exports.Example1 = Example1;
