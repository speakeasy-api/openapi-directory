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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserChannelResponse = exports.UpdateUserChannelRequest = exports.UpdateUserChannelSecurity = exports.UpdateUserChannelUpdateUserChannelRequest = exports.UpdateUserChannelPathParams = exports.UpdateUserChannelServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateUserChannelServerList = [
    "https://ip-messaging.twilio.com",
];
var UpdateUserChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserChannelPathParams, _super);
    function UpdateUserChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ChannelSid" }),
        __metadata("design:type", String)
    ], UpdateUserChannelPathParams.prototype, "channelSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], UpdateUserChannelPathParams.prototype, "serviceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=UserSid" }),
        __metadata("design:type", String)
    ], UpdateUserChannelPathParams.prototype, "userSid", void 0);
    return UpdateUserChannelPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateUserChannelPathParams = UpdateUserChannelPathParams;
var UpdateUserChannelUpdateUserChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateUserChannelUpdateUserChannelRequest, _super);
    function UpdateUserChannelUpdateUserChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=LastConsumedMessageIndex;" }),
        __metadata("design:type", Number)
    ], UpdateUserChannelUpdateUserChannelRequest.prototype, "lastConsumedMessageIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=LastConsumptionTimestamp;" }),
        __metadata("design:type", Date)
    ], UpdateUserChannelUpdateUserChannelRequest.prototype, "lastConsumptionTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=NotificationLevel;" }),
        __metadata("design:type", String)
    ], UpdateUserChannelUpdateUserChannelRequest.prototype, "notificationLevel", void 0);
    return UpdateUserChannelUpdateUserChannelRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUserChannelUpdateUserChannelRequest = UpdateUserChannelUpdateUserChannelRequest;
var UpdateUserChannelSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserChannelSecurity, _super);
    function UpdateUserChannelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateUserChannelSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateUserChannelSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateUserChannelSecurity = UpdateUserChannelSecurity;
var UpdateUserChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateUserChannelRequest, _super);
    function UpdateUserChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUserChannelRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserChannelPathParams)
    ], UpdateUserChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateUserChannelUpdateUserChannelRequest)
    ], UpdateUserChannelRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateUserChannelSecurity)
    ], UpdateUserChannelRequest.prototype, "security", void 0);
    return UpdateUserChannelRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateUserChannelRequest = UpdateUserChannelRequest;
var UpdateUserChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateUserChannelResponse, _super);
    function UpdateUserChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateUserChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateUserChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.IpMessagingV2ServiceUserUserChannel)
    ], UpdateUserChannelResponse.prototype, "ipMessagingV2ServiceUserUserChannel", void 0);
    return UpdateUserChannelResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateUserChannelResponse = UpdateUserChannelResponse;
