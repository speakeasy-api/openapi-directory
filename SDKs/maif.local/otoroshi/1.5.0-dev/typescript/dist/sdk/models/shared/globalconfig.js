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
exports.GlobalConfig = void 0;
var utils_1 = require("../../../internal/utils");
var webhook_1 = require("./webhook");
var auth0config_1 = require("./auth0config");
var cleversettings_1 = require("./cleversettings");
var elasticconfig_1 = require("./elasticconfig");
var ipfiltering_1 = require("./ipfiltering");
var mailersettings_1 = require("./mailersettings");
// GlobalConfig
/**
 * The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
**/
var GlobalConfig = /** @class */ (function (_super) {
    __extends(GlobalConfig, _super);
    function GlobalConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alertsEmails" }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "alertsEmails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alertsWebhooks", elemType: webhook_1.Webhook }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "alertsWebhooks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analyticsWebhooks", elemType: webhook_1.Webhook }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "analyticsWebhooks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiReadOnly" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "apiReadOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoLinkToDefaultGroup" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "autoLinkToDefaultGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backofficeAuth0Config" }),
        __metadata("design:type", auth0config_1.Auth0Config)
    ], GlobalConfig.prototype, "backofficeAuth0Config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cleverSettings" }),
        __metadata("design:type", cleversettings_1.CleverSettings)
    ], GlobalConfig.prototype, "cleverSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=elasticReadsConfig" }),
        __metadata("design:type", elasticconfig_1.ElasticConfig)
    ], GlobalConfig.prototype, "elasticReadsConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=elasticWritesConfigs", elemType: elasticconfig_1.ElasticConfig }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "elasticWritesConfigs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endlessIpAddresses" }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "endlessIpAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ipFiltering" }),
        __metadata("design:type", ipfiltering_1.IpFiltering)
    ], GlobalConfig.prototype, "ipFiltering", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limitConcurrentRequests" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "limitConcurrentRequests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lines" }),
        __metadata("design:type", Array)
    ], GlobalConfig.prototype, "lines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mailerSettings" }),
        __metadata("design:type", mailersettings_1.MailerSettings)
    ], GlobalConfig.prototype, "mailerSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxConcurrentRequests" }),
        __metadata("design:type", Number)
    ], GlobalConfig.prototype, "maxConcurrentRequests", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxHttp10ResponseSize" }),
        __metadata("design:type", Number)
    ], GlobalConfig.prototype, "maxHttp10ResponseSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxLogsSize" }),
        __metadata("design:type", Number)
    ], GlobalConfig.prototype, "maxLogsSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=middleFingers" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "middleFingers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=perIpThrottlingQuota" }),
        __metadata("design:type", Number)
    ], GlobalConfig.prototype, "perIpThrottlingQuota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=privateAppsAuth0Config" }),
        __metadata("design:type", auth0config_1.Auth0Config)
    ], GlobalConfig.prototype, "privateAppsAuth0Config", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamEntityOnly" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "streamEntityOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=throttlingQuota" }),
        __metadata("design:type", Number)
    ], GlobalConfig.prototype, "throttlingQuota", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=u2fLoginOnly" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "u2fLoginOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=useCircuitBreakers" }),
        __metadata("design:type", Boolean)
    ], GlobalConfig.prototype, "useCircuitBreakers", void 0);
    return GlobalConfig;
}(utils_1.SpeakeasyBase));
exports.GlobalConfig = GlobalConfig;
