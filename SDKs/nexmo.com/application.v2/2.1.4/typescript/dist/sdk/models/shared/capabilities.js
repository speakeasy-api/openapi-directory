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
exports.Capabilities = void 0;
var utils_1 = require("../../../internal/utils");
var meetingscapability_1 = require("./meetingscapability");
var messagescapability_1 = require("./messagescapability");
var rtccapability_1 = require("./rtccapability");
var verifycapability_1 = require("./verifycapability");
var voicecapability_1 = require("./voicecapability");
// Capabilities
/**
 * Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
**/
var Capabilities = /** @class */ (function (_super) {
    __extends(Capabilities, _super);
    function Capabilities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meetings" }),
        __metadata("design:type", meetingscapability_1.MeetingsCapability)
    ], Capabilities.prototype, "meetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages" }),
        __metadata("design:type", messagescapability_1.MessagesCapability)
    ], Capabilities.prototype, "messages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rtc" }),
        __metadata("design:type", rtccapability_1.RtcCapability)
    ], Capabilities.prototype, "rtc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vbc" }),
        __metadata("design:type", Object)
    ], Capabilities.prototype, "vbc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verify" }),
        __metadata("design:type", verifycapability_1.VerifyCapability)
    ], Capabilities.prototype, "verify", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=voice" }),
        __metadata("design:type", voicecapability_1.VoiceCapability)
    ], Capabilities.prototype, "voice", void 0);
    return Capabilities;
}(utils_1.SpeakeasyBase));
exports.Capabilities = Capabilities;
