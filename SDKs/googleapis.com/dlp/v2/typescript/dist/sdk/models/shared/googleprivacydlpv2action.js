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
exports.GooglePrivacyDlpV2Action = void 0;
var utils_1 = require("../../../internal/utils");
var googleprivacydlpv2deidentify_1 = require("./googleprivacydlpv2deidentify");
var googleprivacydlpv2publishtopubsub_1 = require("./googleprivacydlpv2publishtopubsub");
var googleprivacydlpv2savefindings_1 = require("./googleprivacydlpv2savefindings");
// GooglePrivacyDlpV2Action
/**
 * A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
**/
var GooglePrivacyDlpV2Action = /** @class */ (function (_super) {
    __extends(GooglePrivacyDlpV2Action, _super);
    function GooglePrivacyDlpV2Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deidentify" }),
        __metadata("design:type", googleprivacydlpv2deidentify_1.GooglePrivacyDlpV2Deidentify)
    ], GooglePrivacyDlpV2Action.prototype, "deidentify", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=jobNotificationEmails" }),
        __metadata("design:type", Object)
    ], GooglePrivacyDlpV2Action.prototype, "jobNotificationEmails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pubSub" }),
        __metadata("design:type", googleprivacydlpv2publishtopubsub_1.GooglePrivacyDlpV2PublishToPubSub)
    ], GooglePrivacyDlpV2Action.prototype, "pubSub", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishFindingsToCloudDataCatalog" }),
        __metadata("design:type", Object)
    ], GooglePrivacyDlpV2Action.prototype, "publishFindingsToCloudDataCatalog", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishSummaryToCscc" }),
        __metadata("design:type", Object)
    ], GooglePrivacyDlpV2Action.prototype, "publishSummaryToCscc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishToStackdriver" }),
        __metadata("design:type", Object)
    ], GooglePrivacyDlpV2Action.prototype, "publishToStackdriver", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=saveFindings" }),
        __metadata("design:type", googleprivacydlpv2savefindings_1.GooglePrivacyDlpV2SaveFindings)
    ], GooglePrivacyDlpV2Action.prototype, "saveFindings", void 0);
    return GooglePrivacyDlpV2Action;
}(utils_1.SpeakeasyBase));
exports.GooglePrivacyDlpV2Action = GooglePrivacyDlpV2Action;
