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
exports.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice = void 0;
var utils_1 = require("../../../internal/utils");
var googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities_1 = require("./googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities");
var googleappsdrivelabelsv2userinfo_1 = require("./googleappsdrivelabelsv2userinfo");
var googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints_1 = require("./googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints");
var googleappsdrivelabelsv2lifecycle_1 = require("./googleappsdrivelabelsv2lifecycle");
var googleappsdrivelabelsv2lockstatus_1 = require("./googleappsdrivelabelsv2lockstatus");
var googleappsdrivelabelsv2fieldselectionoptionschoiceproperties_1 = require("./googleappsdrivelabelsv2fieldselectionoptionschoiceproperties");
var googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities_1 = require("./googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities");
// GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice
/**
 * Selection field choice.
**/
var GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice, _super);
    function GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities_1.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "appliedCapabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creator" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "creator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disableTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "disableTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabler" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "disabler", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayHints" }),
        __metadata("design:type", googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints_1.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "displayHints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifecycle" }),
        __metadata("design:type", googleappsdrivelabelsv2lifecycle_1.GoogleAppsDriveLabelsV2Lifecycle)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "lifecycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lockStatus" }),
        __metadata("design:type", googleappsdrivelabelsv2lockstatus_1.GoogleAppsDriveLabelsV2LockStatus)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "lockStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", googleappsdrivelabelsv2fieldselectionoptionschoiceproperties_1.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "publishTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities_1.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "schemaCapabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "updateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updater" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice.prototype, "updater", void 0);
    return GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice;
}(utils_1.SpeakeasyBase));
exports.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice = GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice;
