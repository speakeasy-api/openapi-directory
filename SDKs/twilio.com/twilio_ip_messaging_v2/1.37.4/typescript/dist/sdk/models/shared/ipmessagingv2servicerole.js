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
exports.IpMessagingV2ServiceRole = void 0;
var utils_1 = require("../../../internal/utils");
var roleenumroletypeenum_1 = require("./roleenumroletypeenum");
var IpMessagingV2ServiceRole = /** @class */ (function (_super) {
    __extends(IpMessagingV2ServiceRole, _super);
    function IpMessagingV2ServiceRole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceRole.prototype, "accountSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], IpMessagingV2ServiceRole.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], IpMessagingV2ServiceRole.prototype, "dateUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceRole.prototype, "friendlyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], IpMessagingV2ServiceRole.prototype, "permissions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=service_sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceRole.prototype, "serviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceRole.prototype, "sid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceRole.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], IpMessagingV2ServiceRole.prototype, "url", void 0);
    return IpMessagingV2ServiceRole;
}(utils_1.SpeakeasyBase));
exports.IpMessagingV2ServiceRole = IpMessagingV2ServiceRole;
