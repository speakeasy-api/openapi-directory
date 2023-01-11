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
exports.GoogleAppsDriveLabelsV2Field = void 0;
var utils_1 = require("../../../internal/utils");
var googleappsdrivelabelsv2fieldappliedcapabilities_1 = require("./googleappsdrivelabelsv2fieldappliedcapabilities");
var googleappsdrivelabelsv2userinfo_1 = require("./googleappsdrivelabelsv2userinfo");
var googleappsdrivelabelsv2fielddateoptions_1 = require("./googleappsdrivelabelsv2fielddateoptions");
var googleappsdrivelabelsv2fielddisplayhints_1 = require("./googleappsdrivelabelsv2fielddisplayhints");
var googleappsdrivelabelsv2fieldintegeroptions_1 = require("./googleappsdrivelabelsv2fieldintegeroptions");
var googleappsdrivelabelsv2lifecycle_1 = require("./googleappsdrivelabelsv2lifecycle");
var googleappsdrivelabelsv2lockstatus_1 = require("./googleappsdrivelabelsv2lockstatus");
var googleappsdrivelabelsv2fieldproperties_1 = require("./googleappsdrivelabelsv2fieldproperties");
var googleappsdrivelabelsv2fieldschemacapabilities_1 = require("./googleappsdrivelabelsv2fieldschemacapabilities");
var googleappsdrivelabelsv2fieldselectionoptions_1 = require("./googleappsdrivelabelsv2fieldselectionoptions");
var googleappsdrivelabelsv2fieldtextoptions_1 = require("./googleappsdrivelabelsv2fieldtextoptions");
var googleappsdrivelabelsv2fielduseroptions_1 = require("./googleappsdrivelabelsv2fielduseroptions");
// GoogleAppsDriveLabelsV2Field
/**
 * Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item.
**/
var GoogleAppsDriveLabelsV2Field = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2Field, _super);
    function GoogleAppsDriveLabelsV2Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", googleappsdrivelabelsv2fieldappliedcapabilities_1.GoogleAppsDriveLabelsV2FieldAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2Field.prototype, "appliedCapabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Field.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creator" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Field.prototype, "creator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dateOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2fielddateoptions_1.GoogleAppsDriveLabelsV2FieldDateOptions)
    ], GoogleAppsDriveLabelsV2Field.prototype, "dateOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disableTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Field.prototype, "disableTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabler" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Field.prototype, "disabler", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayHints" }),
        __metadata("design:type", googleappsdrivelabelsv2fielddisplayhints_1.GoogleAppsDriveLabelsV2FieldDisplayHints)
    ], GoogleAppsDriveLabelsV2Field.prototype, "displayHints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Field.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=integerOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2fieldintegeroptions_1.GoogleAppsDriveLabelsV2FieldIntegerOptions)
    ], GoogleAppsDriveLabelsV2Field.prototype, "integerOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifecycle" }),
        __metadata("design:type", googleappsdrivelabelsv2lifecycle_1.GoogleAppsDriveLabelsV2Lifecycle)
    ], GoogleAppsDriveLabelsV2Field.prototype, "lifecycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lockStatus" }),
        __metadata("design:type", googleappsdrivelabelsv2lockstatus_1.GoogleAppsDriveLabelsV2LockStatus)
    ], GoogleAppsDriveLabelsV2Field.prototype, "lockStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", googleappsdrivelabelsv2fieldproperties_1.GoogleAppsDriveLabelsV2FieldProperties)
    ], GoogleAppsDriveLabelsV2Field.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Field.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=queryKey" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Field.prototype, "queryKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", googleappsdrivelabelsv2fieldschemacapabilities_1.GoogleAppsDriveLabelsV2FieldSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2Field.prototype, "schemaCapabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selectionOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2fieldselectionoptions_1.GoogleAppsDriveLabelsV2FieldSelectionOptions)
    ], GoogleAppsDriveLabelsV2Field.prototype, "selectionOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=textOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2fieldtextoptions_1.GoogleAppsDriveLabelsV2FieldTextOptions)
    ], GoogleAppsDriveLabelsV2Field.prototype, "textOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Field.prototype, "updateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updater" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Field.prototype, "updater", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userOptions" }),
        __metadata("design:type", googleappsdrivelabelsv2fielduseroptions_1.GoogleAppsDriveLabelsV2FieldUserOptions)
    ], GoogleAppsDriveLabelsV2Field.prototype, "userOptions", void 0);
    return GoogleAppsDriveLabelsV2Field;
}(utils_1.SpeakeasyBase));
exports.GoogleAppsDriveLabelsV2Field = GoogleAppsDriveLabelsV2Field;
