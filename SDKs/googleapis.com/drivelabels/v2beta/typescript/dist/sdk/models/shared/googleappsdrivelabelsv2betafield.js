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
exports.GoogleAppsDriveLabelsV2betaFieldInput = exports.GoogleAppsDriveLabelsV2betaField = void 0;
var utils_1 = require("../../../internal/utils");
var googleappsdrivelabelsv2betafieldappliedcapabilities_1 = require("./googleappsdrivelabelsv2betafieldappliedcapabilities");
var googleappsdrivelabelsv2betauserinfo_1 = require("./googleappsdrivelabelsv2betauserinfo");
var googleappsdrivelabelsv2betafielddateoptions_1 = require("./googleappsdrivelabelsv2betafielddateoptions");
var googleappsdrivelabelsv2betafielddisplayhints_1 = require("./googleappsdrivelabelsv2betafielddisplayhints");
var googleappsdrivelabelsv2betafieldintegeroptions_1 = require("./googleappsdrivelabelsv2betafieldintegeroptions");
var googleappsdrivelabelsv2betalifecycle_1 = require("./googleappsdrivelabelsv2betalifecycle");
var googleappsdrivelabelsv2betalockstatus_1 = require("./googleappsdrivelabelsv2betalockstatus");
var googleappsdrivelabelsv2betafieldproperties_1 = require("./googleappsdrivelabelsv2betafieldproperties");
var googleappsdrivelabelsv2betafieldschemacapabilities_1 = require("./googleappsdrivelabelsv2betafieldschemacapabilities");
var googleappsdrivelabelsv2betafieldselectionoptions_1 = require("./googleappsdrivelabelsv2betafieldselectionoptions");
var googleappsdrivelabelsv2betafieldtextoptions_1 = require("./googleappsdrivelabelsv2betafieldtextoptions");
var googleappsdrivelabelsv2betafielduseroptions_1 = require("./googleappsdrivelabelsv2betafielduseroptions");
var googleappsdrivelabelsv2betafielddateoptions_2 = require("./googleappsdrivelabelsv2betafielddateoptions");
var googleappsdrivelabelsv2betalifecycle_2 = require("./googleappsdrivelabelsv2betalifecycle");
var googleappsdrivelabelsv2betafieldselectionoptions_2 = require("./googleappsdrivelabelsv2betafieldselectionoptions");
// GoogleAppsDriveLabelsV2betaField
/**
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
var GoogleAppsDriveLabelsV2betaField = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaField, _super);
    function GoogleAppsDriveLabelsV2betaField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", googleappsdrivelabelsv2betafieldappliedcapabilities_1.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "appliedCapabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creator" }),
        __metadata("design:type", googleappsdrivelabelsv2betauserinfo_1.GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "creator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2betafielddateoptions_1.GoogleAppsDriveLabelsV2betaFieldDateOptions)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "dateOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disableTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "disableTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabler" }),
        __metadata("design:type", googleappsdrivelabelsv2betauserinfo_1.GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "disabler", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayHints" }),
        __metadata("design:type", googleappsdrivelabelsv2betafielddisplayhints_1.GoogleAppsDriveLabelsV2betaFieldDisplayHints)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "displayHints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integerOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2betafieldintegeroptions_1.GoogleAppsDriveLabelsV2betaFieldIntegerOptions)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "integerOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifecycle" }),
        __metadata("design:type", googleappsdrivelabelsv2betalifecycle_1.GoogleAppsDriveLabelsV2betaLifecycle)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "lifecycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lockStatus" }),
        __metadata("design:type", googleappsdrivelabelsv2betalockstatus_1.GoogleAppsDriveLabelsV2betaLockStatus)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "lockStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", googleappsdrivelabelsv2betafieldproperties_1.GoogleAppsDriveLabelsV2betaFieldProperties)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", googleappsdrivelabelsv2betauserinfo_1.GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queryKey" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "queryKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", googleappsdrivelabelsv2betafieldschemacapabilities_1.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "schemaCapabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selectionOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2betafieldselectionoptions_1.GoogleAppsDriveLabelsV2betaFieldSelectionOptions)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "selectionOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=textOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2betafieldtextoptions_1.GoogleAppsDriveLabelsV2betaFieldTextOptions)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "textOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "updateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updater" }),
        __metadata("design:type", googleappsdrivelabelsv2betauserinfo_1.GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "updater", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2betafielduseroptions_1.GoogleAppsDriveLabelsV2betaFieldUserOptions)
    ], GoogleAppsDriveLabelsV2betaField.prototype, "userOptions", void 0);
    return GoogleAppsDriveLabelsV2betaField;
}(utils_1.SpeakeasyBase));
exports.GoogleAppsDriveLabelsV2betaField = GoogleAppsDriveLabelsV2betaField;
// GoogleAppsDriveLabelsV2betaFieldInput
/**
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
var GoogleAppsDriveLabelsV2betaFieldInput = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaFieldInput, _super);
    function GoogleAppsDriveLabelsV2betaFieldInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", googleappsdrivelabelsv2betafieldappliedcapabilities_1.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "appliedCapabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creator" }),
        __metadata("design:type", googleappsdrivelabelsv2betauserinfo_1.GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "creator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2betafielddateoptions_2.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "dateOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabler" }),
        __metadata("design:type", googleappsdrivelabelsv2betauserinfo_1.GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "disabler", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayHints" }),
        __metadata("design:type", googleappsdrivelabelsv2betafielddisplayhints_1.GoogleAppsDriveLabelsV2betaFieldDisplayHints)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "displayHints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifecycle" }),
        __metadata("design:type", googleappsdrivelabelsv2betalifecycle_2.GoogleAppsDriveLabelsV2betaLifecycleInput)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "lifecycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", googleappsdrivelabelsv2betafieldproperties_1.GoogleAppsDriveLabelsV2betaFieldProperties)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", googleappsdrivelabelsv2betauserinfo_1.GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", googleappsdrivelabelsv2betafieldschemacapabilities_1.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "schemaCapabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selectionOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2betafieldselectionoptions_2.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "selectionOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updater" }),
        __metadata("design:type", googleappsdrivelabelsv2betauserinfo_1.GoogleAppsDriveLabelsV2betaUserInfo)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "updater", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2betafielduseroptions_1.GoogleAppsDriveLabelsV2betaFieldUserOptions)
    ], GoogleAppsDriveLabelsV2betaFieldInput.prototype, "userOptions", void 0);
    return GoogleAppsDriveLabelsV2betaFieldInput;
}(utils_1.SpeakeasyBase));
exports.GoogleAppsDriveLabelsV2betaFieldInput = GoogleAppsDriveLabelsV2betaFieldInput;
