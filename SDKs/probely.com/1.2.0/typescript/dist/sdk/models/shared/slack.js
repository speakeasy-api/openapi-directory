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
exports.Slack = void 0;
var utils_1 = require("../../../internal/utils");
// Slack
/**
 * Options for slack notifications
**/
var Slack = /** @class */ (function (_super) {
    __extends(Slack, _super);
    function Slack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notify_finding_fixed" }),
        __metadata("design:type", Boolean)
    ], Slack.prototype, "notifyFindingFixed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notify_high_findings" }),
        __metadata("design:type", Boolean)
    ], Slack.prototype, "notifyHighFindings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notify_low_findings" }),
        __metadata("design:type", Boolean)
    ], Slack.prototype, "notifyLowFindings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notify_medium_findings" }),
        __metadata("design:type", Boolean)
    ], Slack.prototype, "notifyMediumFindings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notify_scan_completed" }),
        __metadata("design:type", Boolean)
    ], Slack.prototype, "notifyScanCompleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notify_scan_started" }),
        __metadata("design:type", Boolean)
    ], Slack.prototype, "notifyScanStarted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=webhook_url" }),
        __metadata("design:type", String)
    ], Slack.prototype, "webhookUrl", void 0);
    return Slack;
}(utils_1.SpeakeasyBase));
exports.Slack = Slack;
