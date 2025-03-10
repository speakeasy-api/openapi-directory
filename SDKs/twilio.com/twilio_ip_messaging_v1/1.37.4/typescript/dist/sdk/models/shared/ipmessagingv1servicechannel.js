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
exports.IpMessagingV1ServiceChannel = void 0;
var utils_1 = require("../../../internal/utils");
var channelenumchanneltypeenum_1 = require("./channelenumchanneltypeenum");
var IpMessagingV1ServiceChannel = /** @class */ (function (_super) {
    __extends(IpMessagingV1ServiceChannel, _super);
    function IpMessagingV1ServiceChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceChannel.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceChannel.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceChannel.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], IpMessagingV1ServiceChannel.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], IpMessagingV1ServiceChannel.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceChannel.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", Object)
    ], IpMessagingV1ServiceChannel.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members_count" }),
        __metadata("design:type", Number)
    ], IpMessagingV1ServiceChannel.prototype, "membersCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=messages_count" }),
        __metadata("design:type", Number)
    ], IpMessagingV1ServiceChannel.prototype, "messagesCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceChannel.prototype, "serviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceChannel.prototype, "sid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceChannel.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceChannel.prototype, "uniqueName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IpMessagingV1ServiceChannel.prototype, "url", void 0);
    return IpMessagingV1ServiceChannel;
}(utils_1.SpeakeasyBase));
exports.IpMessagingV1ServiceChannel = IpMessagingV1ServiceChannel;
