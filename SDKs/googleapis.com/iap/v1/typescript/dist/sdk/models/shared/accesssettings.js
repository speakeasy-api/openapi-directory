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
exports.AccessSettings = void 0;
var utils_1 = require("../../../internal/utils");
var alloweddomainssettings_1 = require("./alloweddomainssettings");
var corssettings_1 = require("./corssettings");
var gcipsettings_1 = require("./gcipsettings");
var oauthsettings_1 = require("./oauthsettings");
var policydelegationsettings_1 = require("./policydelegationsettings");
var reauthsettings_1 = require("./reauthsettings");
// AccessSettings
/**
 * Access related settings for IAP protected apps.
**/
var AccessSettings = /** @class */ (function (_super) {
    __extends(AccessSettings, _super);
    function AccessSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowedDomainsSettings" }),
        __metadata("design:type", alloweddomainssettings_1.AllowedDomainsSettings)
    ], AccessSettings.prototype, "allowedDomainsSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=corsSettings" }),
        __metadata("design:type", corssettings_1.CorsSettings)
    ], AccessSettings.prototype, "corsSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gcipSettings" }),
        __metadata("design:type", gcipsettings_1.GcipSettings)
    ], AccessSettings.prototype, "gcipSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oauthSettings" }),
        __metadata("design:type", oauthsettings_1.OAuthSettings)
    ], AccessSettings.prototype, "oauthSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=policyDelegationSettings" }),
        __metadata("design:type", policydelegationsettings_1.PolicyDelegationSettings)
    ], AccessSettings.prototype, "policyDelegationSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reauthSettings" }),
        __metadata("design:type", reauthsettings_1.ReauthSettings)
    ], AccessSettings.prototype, "reauthSettings", void 0);
    return AccessSettings;
}(utils_1.SpeakeasyBase));
exports.AccessSettings = AccessSettings;
