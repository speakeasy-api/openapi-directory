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
exports.VideoV1RoomRoomRecordingRule = exports.VideoV1RoomRoomRecordingRuleRules = void 0;
var utils_1 = require("../../../internal/utils");
var VideoV1RoomRoomRecordingRuleRules = /** @class */ (function (_super) {
    __extends(VideoV1RoomRoomRecordingRuleRules, _super);
    function VideoV1RoomRoomRecordingRuleRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=all" }),
        __metadata("design:type", Boolean)
    ], VideoV1RoomRoomRecordingRuleRules.prototype, "all", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecordingRuleRules.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecordingRuleRules.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=track" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecordingRuleRules.prototype, "track", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecordingRuleRules.prototype, "type", void 0);
    return VideoV1RoomRoomRecordingRuleRules;
}(utils_1.SpeakeasyBase));
exports.VideoV1RoomRoomRecordingRuleRules = VideoV1RoomRoomRecordingRuleRules;
var VideoV1RoomRoomRecordingRule = /** @class */ (function (_super) {
    __extends(VideoV1RoomRoomRecordingRule, _super);
    function VideoV1RoomRoomRecordingRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], VideoV1RoomRoomRecordingRule.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], VideoV1RoomRoomRecordingRule.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_sid" }),
        __metadata("design:type", String)
    ], VideoV1RoomRoomRecordingRule.prototype, "roomSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules", elemType: VideoV1RoomRoomRecordingRuleRules }),
        __metadata("design:type", Array)
    ], VideoV1RoomRoomRecordingRule.prototype, "rules", void 0);
    return VideoV1RoomRoomRecordingRule;
}(utils_1.SpeakeasyBase));
exports.VideoV1RoomRoomRecordingRule = VideoV1RoomRoomRecordingRule;
