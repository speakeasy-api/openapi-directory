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
exports.PayorV1 = exports.PayorV1LanguageEnum = void 0;
var utils_1 = require("../../../internal/utils");
var payoraddress_1 = require("./payoraddress");
var kycstateenum_1 = require("./kycstateenum");
var transmissiontypes_1 = require("./transmissiontypes");
var PayorV1LanguageEnum;
(function (PayorV1LanguageEnum) {
    PayorV1LanguageEnum["En"] = "EN";
    PayorV1LanguageEnum["Fr"] = "FR";
})(PayorV1LanguageEnum = exports.PayorV1LanguageEnum || (exports.PayorV1LanguageEnum = {}));
var PayorV1 = /** @class */ (function (_super) {
    __extends(PayorV1, _super);
    function PayorV1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", payoraddress_1.PayorAddress)
    ], PayorV1.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowsLanguageChoice" }),
        __metadata("design:type", Boolean)
    ], PayorV1.prototype, "allowsLanguageChoice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collectiveAlias" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "collectiveAlias", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dbaName" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "dbaName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fundingAccountAccountName" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "fundingAccountAccountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fundingAccountAccountNumber" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "fundingAccountAccountNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fundingAccountRoutingNumber" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "fundingAccountRoutingNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includesReports" }),
        __metadata("design:type", Boolean)
    ], PayorV1.prototype, "includesReports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kycState" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "kycState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "language", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manualLockout" }),
        __metadata("design:type", Boolean)
    ], PayorV1.prototype, "manualLockout", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxMasterPayorAdmins" }),
        __metadata("design:type", Number)
    ], PayorV1.prototype, "maxMasterPayorAdmins", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payeeGracePeriodDays" }),
        __metadata("design:type", Number)
    ], PayorV1.prototype, "payeeGracePeriodDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payeeGracePeriodProcessingEnabled" }),
        __metadata("design:type", Boolean)
    ], PayorV1.prototype, "payeeGracePeriodProcessingEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payorId" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "payorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payorName" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "payorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primaryContactEmail" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "primaryContactEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primaryContactName" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "primaryContactName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primaryContactPhone" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "primaryContactPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reminderEmailsOptOut" }),
        __metadata("design:type", Boolean)
    ], PayorV1.prototype, "reminderEmailsOptOut", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=supportContact" }),
        __metadata("design:type", String)
    ], PayorV1.prototype, "supportContact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transmissionTypes" }),
        __metadata("design:type", transmissiontypes_1.TransmissionTypes)
    ], PayorV1.prototype, "transmissionTypes", void 0);
    return PayorV1;
}(utils_1.SpeakeasyBase));
exports.PayorV1 = PayorV1;
