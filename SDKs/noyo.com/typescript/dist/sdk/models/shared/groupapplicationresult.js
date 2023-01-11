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
exports.GroupApplicationResult = exports.GroupApplicationResultStatusEnum = exports.GroupApplicationResultApplicationTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GroupApplicationResultApplicationTypeEnum;
(function (GroupApplicationResultApplicationTypeEnum) {
    GroupApplicationResultApplicationTypeEnum["New"] = "new";
    GroupApplicationResultApplicationTypeEnum["Renewal"] = "renewal";
    GroupApplicationResultApplicationTypeEnum["Upsell"] = "upsell";
})(GroupApplicationResultApplicationTypeEnum = exports.GroupApplicationResultApplicationTypeEnum || (exports.GroupApplicationResultApplicationTypeEnum = {}));
var GroupApplicationResultStatusEnum;
(function (GroupApplicationResultStatusEnum) {
    GroupApplicationResultStatusEnum["ActionRequired"] = "action_required";
    GroupApplicationResultStatusEnum["Canceled"] = "canceled";
    GroupApplicationResultStatusEnum["InProgress"] = "in_progress";
    GroupApplicationResultStatusEnum["InstalledAtCarrier"] = "installed_at_carrier";
    GroupApplicationResultStatusEnum["NoyoReview"] = "noyo_review";
    GroupApplicationResultStatusEnum["ReadyForRequests"] = "ready_for_requests";
    GroupApplicationResultStatusEnum["UnableToInstall"] = "unable_to_install";
    GroupApplicationResultStatusEnum["WaitingOnCarrier"] = "waiting_on_carrier";
})(GroupApplicationResultStatusEnum = exports.GroupApplicationResultStatusEnum || (exports.GroupApplicationResultStatusEnum = {}));
var GroupApplicationResult = /** @class */ (function (_super) {
    __extends(GroupApplicationResult, _super);
    function GroupApplicationResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=application_type" }),
        __metadata("design:type", String)
    ], GroupApplicationResult.prototype, "applicationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_group_id" }),
        __metadata("design:type", String)
    ], GroupApplicationResult.prototype, "carrierGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier_id" }),
        __metadata("design:type", String)
    ], GroupApplicationResult.prototype, "carrierId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Number)
    ], GroupApplicationResult.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_id" }),
        __metadata("design:type", String)
    ], GroupApplicationResult.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GroupApplicationResult.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Number)
    ], GroupApplicationResult.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], GroupApplicationResult.prototype, "notes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GroupApplicationResult.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status_notes" }),
        __metadata("design:type", String)
    ], GroupApplicationResult.prototype, "statusNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], GroupApplicationResult.prototype, "version", void 0);
    return GroupApplicationResult;
}(utils_1.SpeakeasyBase));
exports.GroupApplicationResult = GroupApplicationResult;
