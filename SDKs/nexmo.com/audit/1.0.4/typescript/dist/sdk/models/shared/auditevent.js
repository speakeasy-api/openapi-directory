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
exports.AuditEvent = exports.AuditEventSourceDescriptionEnum = exports.AuditEventSourceEnum = void 0;
var utils_1 = require("../../../internal/utils");
var eventlink_1 = require("./eventlink");
var eventtypesenum_1 = require("./eventtypesenum");
var AuditEventSourceEnum;
(function (AuditEventSourceEnum) {
    AuditEventSourceEnum["Cd"] = "CD";
    AuditEventSourceEnum["Devapi"] = "DEVAPI";
})(AuditEventSourceEnum = exports.AuditEventSourceEnum || (exports.AuditEventSourceEnum = {}));
var AuditEventSourceDescriptionEnum;
(function (AuditEventSourceDescriptionEnum) {
    AuditEventSourceDescriptionEnum["CustomerDashboard"] = "Customer Dashboard";
    AuditEventSourceDescriptionEnum["DeveloperApi"] = "Developer API";
})(AuditEventSourceDescriptionEnum = exports.AuditEventSourceDescriptionEnum || (exports.AuditEventSourceDescriptionEnum = {}));
var AuditEvent = /** @class */ (function (_super) {
    __extends(AuditEvent, _super);
    function AuditEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", eventlink_1.EventLink)
    ], AuditEvent.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], AuditEvent.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=context" }),
        __metadata("design:type", Object)
    ], AuditEvent.prototype, "context", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], AuditEvent.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event_type" }),
        __metadata("design:type", String)
    ], AuditEvent.prototype, "eventType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event_type_description" }),
        __metadata("design:type", String)
    ], AuditEvent.prototype, "eventTypeDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AuditEvent.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], AuditEvent.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_country" }),
        __metadata("design:type", String)
    ], AuditEvent.prototype, "sourceCountry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_description" }),
        __metadata("design:type", String)
    ], AuditEvent.prototype, "sourceDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source_ip" }),
        __metadata("design:type", String)
    ], AuditEvent.prototype, "sourceIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_email" }),
        __metadata("design:type", String)
    ], AuditEvent.prototype, "userEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", Number)
    ], AuditEvent.prototype, "userId", void 0);
    return AuditEvent;
}(utils_1.SpeakeasyBase));
exports.AuditEvent = AuditEvent;
