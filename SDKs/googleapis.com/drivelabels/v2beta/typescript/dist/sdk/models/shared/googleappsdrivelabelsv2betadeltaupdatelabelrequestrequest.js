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
exports.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput = void 0;
var utils_1 = require("../../../internal/utils");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest");
var googleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest_1 = require("./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest");
// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput
/**
 * A single kind of update to apply to a Label.
**/
var GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput = /** @class */ (function (_super) {
    __extends(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput, _super);
    function GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createField" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "createField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createSelectionChoice" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "createSelectionChoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteField" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "deleteField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteSelectionChoice" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "deleteSelectionChoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disableField" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "disableField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disableSelectionChoice" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "disableSelectionChoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableField" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "enableField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableSelectionChoice" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "enableSelectionChoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateField" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "updateField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateFieldType" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "updateFieldType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateLabel" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "updateLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateSelectionChoiceProperties" }),
        __metadata("design:type", googleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest_1.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest)
    ], GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput.prototype, "updateSelectionChoiceProperties", void 0);
    return GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput;
}(utils_1.SpeakeasyBase));
exports.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput;
