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
exports.GoogleAppsDriveLabelsV2Label = exports.GoogleAppsDriveLabelsV2LabelLabelTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googleappsdrivelabelsv2labelappliedcapabilities_1 = require("./googleappsdrivelabelsv2labelappliedcapabilities");
var googleappsdrivelabelsv2labelappliedlabelpolicy_1 = require("./googleappsdrivelabelsv2labelappliedlabelpolicy");
var googleappsdrivelabelsv2userinfo_1 = require("./googleappsdrivelabelsv2userinfo");
var googleappsdrivelabelsv2labeldisplayhints_1 = require("./googleappsdrivelabelsv2labeldisplayhints");
var googleappsdrivelabelsv2field_1 = require("./googleappsdrivelabelsv2field");
var googleappsdrivelabelsv2lifecycle_1 = require("./googleappsdrivelabelsv2lifecycle");
var googleappsdrivelabelsv2lockstatus_1 = require("./googleappsdrivelabelsv2lockstatus");
var googleappsdrivelabelsv2labelproperties_1 = require("./googleappsdrivelabelsv2labelproperties");
var googleappsdrivelabelsv2labelschemacapabilities_1 = require("./googleappsdrivelabelsv2labelschemacapabilities");
var GoogleAppsDriveLabelsV2LabelLabelTypeEnum;
(function (GoogleAppsDriveLabelsV2LabelLabelTypeEnum) {
    GoogleAppsDriveLabelsV2LabelLabelTypeEnum["LabelTypeUnspecified"] = "LABEL_TYPE_UNSPECIFIED";
    GoogleAppsDriveLabelsV2LabelLabelTypeEnum["Shared"] = "SHARED";
    GoogleAppsDriveLabelsV2LabelLabelTypeEnum["Admin"] = "ADMIN";
})(GoogleAppsDriveLabelsV2LabelLabelTypeEnum = exports.GoogleAppsDriveLabelsV2LabelLabelTypeEnum || (exports.GoogleAppsDriveLabelsV2LabelLabelTypeEnum = {}));
// GoogleAppsDriveLabelsV2Label
/**
 * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
**/
var GoogleAppsDriveLabelsV2Label = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2Label, _super);
    function GoogleAppsDriveLabelsV2Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedCapabilities" }),
        __metadata("design:type", googleappsdrivelabelsv2labelappliedcapabilities_1.GoogleAppsDriveLabelsV2LabelAppliedCapabilities)
    ], GoogleAppsDriveLabelsV2Label.prototype, "appliedCapabilities", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appliedLabelPolicy" }),
        __metadata("design:type", googleappsdrivelabelsv2labelappliedlabelpolicy_1.GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy)
    ], GoogleAppsDriveLabelsV2Label.prototype, "appliedLabelPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Label.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=creator" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Label.prototype, "creator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disableTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Label.prototype, "disableTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabler" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Label.prototype, "disabler", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayHints" }),
        __metadata("design:type", googleappsdrivelabelsv2labeldisplayhints_1.GoogleAppsDriveLabelsV2LabelDisplayHints)
    ], GoogleAppsDriveLabelsV2Label.prototype, "displayHints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fields", elemType: googleappsdrivelabelsv2field_1.GoogleAppsDriveLabelsV2Field }),
        __metadata("design:type", Array)
    ], GoogleAppsDriveLabelsV2Label.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Label.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labelType" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Label.prototype, "labelType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=learnMoreUri" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Label.prototype, "learnMoreUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lifecycle" }),
        __metadata("design:type", googleappsdrivelabelsv2lifecycle_1.GoogleAppsDriveLabelsV2Lifecycle)
    ], GoogleAppsDriveLabelsV2Label.prototype, "lifecycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lockStatus" }),
        __metadata("design:type", googleappsdrivelabelsv2lockstatus_1.GoogleAppsDriveLabelsV2LockStatus)
    ], GoogleAppsDriveLabelsV2Label.prototype, "lockStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Label.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=properties" }),
        __metadata("design:type", googleappsdrivelabelsv2labelproperties_1.GoogleAppsDriveLabelsV2LabelProperties)
    ], GoogleAppsDriveLabelsV2Label.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Label.prototype, "publishTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Label.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revisionCreateTime" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Label.prototype, "revisionCreateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revisionCreator" }),
        __metadata("design:type", googleappsdrivelabelsv2userinfo_1.GoogleAppsDriveLabelsV2UserInfo)
    ], GoogleAppsDriveLabelsV2Label.prototype, "revisionCreator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], GoogleAppsDriveLabelsV2Label.prototype, "revisionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemaCapabilities" }),
        __metadata("design:type", googleappsdrivelabelsv2labelschemacapabilities_1.GoogleAppsDriveLabelsV2LabelSchemaCapabilities)
    ], GoogleAppsDriveLabelsV2Label.prototype, "schemaCapabilities", void 0);
    return GoogleAppsDriveLabelsV2Label;
}(utils_1.SpeakeasyBase));
exports.GoogleAppsDriveLabelsV2Label = GoogleAppsDriveLabelsV2Label;
