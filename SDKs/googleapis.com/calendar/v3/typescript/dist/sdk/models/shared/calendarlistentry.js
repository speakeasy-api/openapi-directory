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
exports.CalendarListEntry = exports.CalendarListEntryNotificationSettings = void 0;
var utils_1 = require("../../../internal/utils");
var calendarnotification_1 = require("./calendarnotification");
var conferenceproperties_1 = require("./conferenceproperties");
var eventreminder_1 = require("./eventreminder");
// CalendarListEntryNotificationSettings
/**
 * The notifications that the authenticated user is receiving for this calendar.
**/
var CalendarListEntryNotificationSettings = /** @class */ (function (_super) {
    __extends(CalendarListEntryNotificationSettings, _super);
    function CalendarListEntryNotificationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notifications", elemType: calendarnotification_1.CalendarNotification }),
        __metadata("design:type", Array)
    ], CalendarListEntryNotificationSettings.prototype, "notifications", void 0);
    return CalendarListEntryNotificationSettings;
}(utils_1.SpeakeasyBase));
exports.CalendarListEntryNotificationSettings = CalendarListEntryNotificationSettings;
var CalendarListEntry = /** @class */ (function (_super) {
    __extends(CalendarListEntry, _super);
    function CalendarListEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessRole" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "accessRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backgroundColor" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "backgroundColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=colorId" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "colorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conferenceProperties" }),
        __metadata("design:type", conferenceproperties_1.ConferenceProperties)
    ], CalendarListEntry.prototype, "conferenceProperties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultReminders", elemType: eventreminder_1.EventReminder }),
        __metadata("design:type", Array)
    ], CalendarListEntry.prototype, "defaultReminders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], CalendarListEntry.prototype, "deleted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=foregroundColor" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "foregroundColor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hidden" }),
        __metadata("design:type", Boolean)
    ], CalendarListEntry.prototype, "hidden", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notificationSettings" }),
        __metadata("design:type", CalendarListEntryNotificationSettings)
    ], CalendarListEntry.prototype, "notificationSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primary" }),
        __metadata("design:type", Boolean)
    ], CalendarListEntry.prototype, "primary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selected" }),
        __metadata("design:type", Boolean)
    ], CalendarListEntry.prototype, "selected", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=summary" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "summary", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=summaryOverride" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "summaryOverride", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], CalendarListEntry.prototype, "timeZone", void 0);
    return CalendarListEntry;
}(utils_1.SpeakeasyBase));
exports.CalendarListEntry = CalendarListEntry;
