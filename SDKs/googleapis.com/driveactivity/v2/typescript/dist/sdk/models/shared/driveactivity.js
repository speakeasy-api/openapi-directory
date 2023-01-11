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
exports.DriveActivity = void 0;
var utils_1 = require("../../../internal/utils");
var action_1 = require("./action");
var actor_1 = require("./actor");
var actiondetail_1 = require("./actiondetail");
var target_1 = require("./target");
var timerange_1 = require("./timerange");
// DriveActivity
/**
 * A single Drive activity comprising one or more Actions by one or more Actors on one or more Targets. Some Action groupings occur spontaneously, such as moving an item into a shared folder triggering a permission change. Other groupings of related Actions, such as multiple Actors editing one item or moving multiple files into a new folder, are controlled by the selection of a ConsolidationStrategy in the QueryDriveActivityRequest.
**/
var DriveActivity = /** @class */ (function (_super) {
    __extends(DriveActivity, _super);
    function DriveActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actions", elemType: action_1.Action }),
        __metadata("design:type", Array)
    ], DriveActivity.prototype, "actions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actors", elemType: actor_1.Actor }),
        __metadata("design:type", Array)
    ], DriveActivity.prototype, "actors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=primaryActionDetail" }),
        __metadata("design:type", actiondetail_1.ActionDetail)
    ], DriveActivity.prototype, "primaryActionDetail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targets", elemType: target_1.Target }),
        __metadata("design:type", Array)
    ], DriveActivity.prototype, "targets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeRange" }),
        __metadata("design:type", timerange_1.TimeRange)
    ], DriveActivity.prototype, "timeRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], DriveActivity.prototype, "timestamp", void 0);
    return DriveActivity;
}(utils_1.SpeakeasyBase));
exports.DriveActivity = DriveActivity;
