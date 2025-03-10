"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.InsightsV1VideoRoomSummaryVideoParticipantSummary = void 0;
var utils_1 = require("../../../internal/utils");
var videoparticipantsummaryenumedgelocationenum_1 = require("./videoparticipantsummaryenumedgelocationenum");
var videoparticipantsummaryenumroomstatusenum_1 = require("./videoparticipantsummaryenumroomstatusenum");
var videoparticipantsummaryenumtwiliorealmenum_1 = require("./videoparticipantsummaryenumtwiliorealmenum");
var class_transformer_1 = require("class-transformer");
/**
 * OK
 */
var InsightsV1VideoRoomSummaryVideoParticipantSummary = /** @class */ (function (_super) {
    __extends(InsightsV1VideoRoomSummaryVideoParticipantSummary, _super);
    function InsightsV1VideoRoomSummaryVideoParticipantSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "account_sid" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "codecs" }),
        __metadata("design:type", Array)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "codecs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "duration_sec" }),
        __metadata("design:type", Number)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "durationSec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "edge_location" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "edgeLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "end_reason" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "endReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error_code" }),
        __metadata("design:type", Number)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "errorCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "error_code_url" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "errorCodeUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "join_time" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "joinTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "leave_time" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "leaveTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "media_region" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "mediaRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "participant_identity" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "participantIdentity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "participant_sid" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "participantSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "properties" }),
        __metadata("design:type", Object)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "properties", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "publisher_info" }),
        __metadata("design:type", Object)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "publisherInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "room_sid" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "roomSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "status" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], InsightsV1VideoRoomSummaryVideoParticipantSummary.prototype, "url", void 0);
    return InsightsV1VideoRoomSummaryVideoParticipantSummary;
}(utils_1.SpeakeasyBase));
exports.InsightsV1VideoRoomSummaryVideoParticipantSummary = InsightsV1VideoRoomSummaryVideoParticipantSummary;
