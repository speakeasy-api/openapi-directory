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
exports.HealthInformationNotification = exports.HealthInformationNotificationNotification = exports.HealthInformationNotificationNotificationStatusNotification = exports.HealthInformationNotificationNotificationStatusNotificationStatusResponses = exports.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum = exports.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum = exports.HealthInformationNotificationNotificationNotifier = exports.HealthInformationNotificationNotificationNotifierTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var HealthInformationNotificationNotificationNotifierTypeEnum;
(function (HealthInformationNotificationNotificationNotifierTypeEnum) {
    HealthInformationNotificationNotificationNotifierTypeEnum["Hiu"] = "HIU";
    HealthInformationNotificationNotificationNotifierTypeEnum["Hip"] = "HIP";
})(HealthInformationNotificationNotificationNotifierTypeEnum = exports.HealthInformationNotificationNotificationNotifierTypeEnum || (exports.HealthInformationNotificationNotificationNotifierTypeEnum = {}));
var HealthInformationNotificationNotificationNotifier = /** @class */ (function (_super) {
    __extends(HealthInformationNotificationNotificationNotifier, _super);
    function HealthInformationNotificationNotificationNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], HealthInformationNotificationNotificationNotifier.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], HealthInformationNotificationNotificationNotifier.prototype, "type", void 0);
    return HealthInformationNotificationNotificationNotifier;
}(utils_1.SpeakeasyBase));
exports.HealthInformationNotificationNotificationNotifier = HealthInformationNotificationNotificationNotifier;
var HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum;
(function (HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum) {
    HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum["Transferred"] = "TRANSFERRED";
    HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum["Failed"] = "FAILED";
})(HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum = exports.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum || (exports.HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum = {}));
var HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum;
(function (HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum) {
    HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum["Delivered"] = "DELIVERED";
    HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum["Ok"] = "OK";
    HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum["Errored"] = "ERRORED";
})(HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum = exports.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum || (exports.HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum = {}));
var HealthInformationNotificationNotificationStatusNotificationStatusResponses = /** @class */ (function (_super) {
    __extends(HealthInformationNotificationNotificationStatusNotificationStatusResponses, _super);
    function HealthInformationNotificationNotificationStatusNotificationStatusResponses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=careContextReference" }),
        __metadata("design:type", String)
    ], HealthInformationNotificationNotificationStatusNotificationStatusResponses.prototype, "careContextReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], HealthInformationNotificationNotificationStatusNotificationStatusResponses.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hiStatus" }),
        __metadata("design:type", String)
    ], HealthInformationNotificationNotificationStatusNotificationStatusResponses.prototype, "hiStatus", void 0);
    return HealthInformationNotificationNotificationStatusNotificationStatusResponses;
}(utils_1.SpeakeasyBase));
exports.HealthInformationNotificationNotificationStatusNotificationStatusResponses = HealthInformationNotificationNotificationStatusNotificationStatusResponses;
var HealthInformationNotificationNotificationStatusNotification = /** @class */ (function (_super) {
    __extends(HealthInformationNotificationNotificationStatusNotification, _super);
    function HealthInformationNotificationNotificationStatusNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hipId" }),
        __metadata("design:type", String)
    ], HealthInformationNotificationNotificationStatusNotification.prototype, "hipId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sessionStatus" }),
        __metadata("design:type", String)
    ], HealthInformationNotificationNotificationStatusNotification.prototype, "sessionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusResponses", elemType: HealthInformationNotificationNotificationStatusNotificationStatusResponses }),
        __metadata("design:type", Array)
    ], HealthInformationNotificationNotificationStatusNotification.prototype, "statusResponses", void 0);
    return HealthInformationNotificationNotificationStatusNotification;
}(utils_1.SpeakeasyBase));
exports.HealthInformationNotificationNotificationStatusNotification = HealthInformationNotificationNotificationStatusNotification;
var HealthInformationNotificationNotification = /** @class */ (function (_super) {
    __extends(HealthInformationNotificationNotification, _super);
    function HealthInformationNotificationNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentId" }),
        __metadata("design:type", String)
    ], HealthInformationNotificationNotification.prototype, "consentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doneAt" }),
        __metadata("design:type", Date)
    ], HealthInformationNotificationNotification.prototype, "doneAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notifier" }),
        __metadata("design:type", HealthInformationNotificationNotificationNotifier)
    ], HealthInformationNotificationNotification.prototype, "notifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statusNotification" }),
        __metadata("design:type", HealthInformationNotificationNotificationStatusNotification)
    ], HealthInformationNotificationNotification.prototype, "statusNotification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionId" }),
        __metadata("design:type", String)
    ], HealthInformationNotificationNotification.prototype, "transactionId", void 0);
    return HealthInformationNotificationNotification;
}(utils_1.SpeakeasyBase));
exports.HealthInformationNotificationNotification = HealthInformationNotificationNotification;
var HealthInformationNotification = /** @class */ (function (_super) {
    __extends(HealthInformationNotification, _super);
    function HealthInformationNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notification" }),
        __metadata("design:type", HealthInformationNotificationNotification)
    ], HealthInformationNotification.prototype, "notification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], HealthInformationNotification.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], HealthInformationNotification.prototype, "timestamp", void 0);
    return HealthInformationNotification;
}(utils_1.SpeakeasyBase));
exports.HealthInformationNotification = HealthInformationNotification;
