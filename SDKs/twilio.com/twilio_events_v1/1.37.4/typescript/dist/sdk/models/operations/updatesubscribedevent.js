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
exports.UpdateSubscribedEventResponse = exports.UpdateSubscribedEventRequest = exports.UpdateSubscribedEventSecurity = exports.UpdateSubscribedEventUpdateSubscribedEventRequest = exports.UpdateSubscribedEventPathParams = exports.UpdateSubscribedEventServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.UpdateSubscribedEventServerList = [
    "https://events.twilio.com",
];
var UpdateSubscribedEventPathParams = /** @class */ (function (_super) {
    __extends(UpdateSubscribedEventPathParams, _super);
    function UpdateSubscribedEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" }),
        __metadata("design:type", String)
    ], UpdateSubscribedEventPathParams.prototype, "subscriptionSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=Type" }),
        __metadata("design:type", String)
    ], UpdateSubscribedEventPathParams.prototype, "type", void 0);
    return UpdateSubscribedEventPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSubscribedEventPathParams = UpdateSubscribedEventPathParams;
var UpdateSubscribedEventUpdateSubscribedEventRequest = /** @class */ (function (_super) {
    __extends(UpdateSubscribedEventUpdateSubscribedEventRequest, _super);
    function UpdateSubscribedEventUpdateSubscribedEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "form, name=SchemaVersion;" }),
        __metadata("design:type", Number)
    ], UpdateSubscribedEventUpdateSubscribedEventRequest.prototype, "schemaVersion", void 0);
    return UpdateSubscribedEventUpdateSubscribedEventRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSubscribedEventUpdateSubscribedEventRequest = UpdateSubscribedEventUpdateSubscribedEventRequest;
var UpdateSubscribedEventSecurity = /** @class */ (function (_super) {
    __extends(UpdateSubscribedEventSecurity, _super);
    function UpdateSubscribedEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSubscribedEventSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSubscribedEventSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateSubscribedEventSecurity = UpdateSubscribedEventSecurity;
var UpdateSubscribedEventRequest = /** @class */ (function (_super) {
    __extends(UpdateSubscribedEventRequest, _super);
    function UpdateSubscribedEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSubscribedEventRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSubscribedEventPathParams)
    ], UpdateSubscribedEventRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSubscribedEventUpdateSubscribedEventRequest)
    ], UpdateSubscribedEventRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSubscribedEventSecurity)
    ], UpdateSubscribedEventRequest.prototype, "security", void 0);
    return UpdateSubscribedEventRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSubscribedEventRequest = UpdateSubscribedEventRequest;
var UpdateSubscribedEventResponse = /** @class */ (function (_super) {
    __extends(UpdateSubscribedEventResponse, _super);
    function UpdateSubscribedEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSubscribedEventResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSubscribedEventResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.EventsV1SubscriptionSubscribedEvent)
    ], UpdateSubscribedEventResponse.prototype, "eventsV1SubscriptionSubscribedEvent", void 0);
    return UpdateSubscribedEventResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSubscribedEventResponse = UpdateSubscribedEventResponse;
