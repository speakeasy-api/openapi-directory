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
exports.HipConsentNotification = exports.HipConsentNotificationNotification = exports.HipConsentNotificationNotificationConsentDetail = exports.HipConsentNotificationNotificationConsentDetailHip = exports.HipConsentNotificationNotificationConsentDetailConsentManager = exports.HipConsentNotificationNotificationConsentDetailCareContexts = void 0;
var utils_1 = require("../../../internal/utils");
var consentmanagerpatientid_1 = require("./consentmanagerpatientid");
var permission_1 = require("./permission");
var usepurpose_1 = require("./usepurpose");
var consentstatusenum_1 = require("./consentstatusenum");
var HipConsentNotificationNotificationConsentDetailCareContexts = /** @class */ (function (_super) {
    __extends(HipConsentNotificationNotificationConsentDetailCareContexts, _super);
    function HipConsentNotificationNotificationConsentDetailCareContexts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=careContextReference" }),
        __metadata("design:type", String)
    ], HipConsentNotificationNotificationConsentDetailCareContexts.prototype, "careContextReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patientReference" }),
        __metadata("design:type", String)
    ], HipConsentNotificationNotificationConsentDetailCareContexts.prototype, "patientReference", void 0);
    return HipConsentNotificationNotificationConsentDetailCareContexts;
}(utils_1.SpeakeasyBase));
exports.HipConsentNotificationNotificationConsentDetailCareContexts = HipConsentNotificationNotificationConsentDetailCareContexts;
var HipConsentNotificationNotificationConsentDetailConsentManager = /** @class */ (function (_super) {
    __extends(HipConsentNotificationNotificationConsentDetailConsentManager, _super);
    function HipConsentNotificationNotificationConsentDetailConsentManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], HipConsentNotificationNotificationConsentDetailConsentManager.prototype, "id", void 0);
    return HipConsentNotificationNotificationConsentDetailConsentManager;
}(utils_1.SpeakeasyBase));
exports.HipConsentNotificationNotificationConsentDetailConsentManager = HipConsentNotificationNotificationConsentDetailConsentManager;
var HipConsentNotificationNotificationConsentDetailHip = /** @class */ (function (_super) {
    __extends(HipConsentNotificationNotificationConsentDetailHip, _super);
    function HipConsentNotificationNotificationConsentDetailHip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], HipConsentNotificationNotificationConsentDetailHip.prototype, "id", void 0);
    return HipConsentNotificationNotificationConsentDetailHip;
}(utils_1.SpeakeasyBase));
exports.HipConsentNotificationNotificationConsentDetailHip = HipConsentNotificationNotificationConsentDetailHip;
var HipConsentNotificationNotificationConsentDetail = /** @class */ (function (_super) {
    __extends(HipConsentNotificationNotificationConsentDetail, _super);
    function HipConsentNotificationNotificationConsentDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=careContexts", elemType: HipConsentNotificationNotificationConsentDetailCareContexts }),
        __metadata("design:type", Array)
    ], HipConsentNotificationNotificationConsentDetail.prototype, "careContexts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentId" }),
        __metadata("design:type", String)
    ], HipConsentNotificationNotificationConsentDetail.prototype, "consentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentManager" }),
        __metadata("design:type", HipConsentNotificationNotificationConsentDetailConsentManager)
    ], HipConsentNotificationNotificationConsentDetail.prototype, "consentManager", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], HipConsentNotificationNotificationConsentDetail.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hiTypes" }),
        __metadata("design:type", Array)
    ], HipConsentNotificationNotificationConsentDetail.prototype, "hiTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hip" }),
        __metadata("design:type", HipConsentNotificationNotificationConsentDetailHip)
    ], HipConsentNotificationNotificationConsentDetail.prototype, "hip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", consentmanagerpatientid_1.ConsentManagerPatientId)
    ], HipConsentNotificationNotificationConsentDetail.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permission" }),
        __metadata("design:type", permission_1.Permission)
    ], HipConsentNotificationNotificationConsentDetail.prototype, "permission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=purpose" }),
        __metadata("design:type", usepurpose_1.UsePurpose)
    ], HipConsentNotificationNotificationConsentDetail.prototype, "purpose", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schemaVersion" }),
        __metadata("design:type", String)
    ], HipConsentNotificationNotificationConsentDetail.prototype, "schemaVersion", void 0);
    return HipConsentNotificationNotificationConsentDetail;
}(utils_1.SpeakeasyBase));
exports.HipConsentNotificationNotificationConsentDetail = HipConsentNotificationNotificationConsentDetail;
var HipConsentNotificationNotification = /** @class */ (function (_super) {
    __extends(HipConsentNotificationNotification, _super);
    function HipConsentNotificationNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentDetail" }),
        __metadata("design:type", HipConsentNotificationNotificationConsentDetail)
    ], HipConsentNotificationNotification.prototype, "consentDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentId" }),
        __metadata("design:type", String)
    ], HipConsentNotificationNotification.prototype, "consentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signature" }),
        __metadata("design:type", String)
    ], HipConsentNotificationNotification.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], HipConsentNotificationNotification.prototype, "status", void 0);
    return HipConsentNotificationNotification;
}(utils_1.SpeakeasyBase));
exports.HipConsentNotificationNotification = HipConsentNotificationNotification;
var HipConsentNotification = /** @class */ (function (_super) {
    __extends(HipConsentNotification, _super);
    function HipConsentNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notification" }),
        __metadata("design:type", HipConsentNotificationNotification)
    ], HipConsentNotification.prototype, "notification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], HipConsentNotification.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], HipConsentNotification.prototype, "timestamp", void 0);
    return HipConsentNotification;
}(utils_1.SpeakeasyBase));
exports.HipConsentNotification = HipConsentNotification;
