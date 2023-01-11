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
exports.FetchConferenceParticipantResponse = exports.FetchConferenceParticipantRequest = exports.FetchConferenceParticipantSecurity = exports.FetchConferenceParticipantQueryParams = exports.FetchConferenceParticipantPathParams = exports.FetchConferenceParticipantServerList = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
exports.FetchConferenceParticipantServerList = [
    "https://insights.twilio.com",
];
var FetchConferenceParticipantPathParams = /** @class */ (function (_super) {
    __extends(FetchConferenceParticipantPathParams, _super);
    function FetchConferenceParticipantPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" }),
        __metadata("design:type", String)
    ], FetchConferenceParticipantPathParams.prototype, "conferenceSid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" }),
        __metadata("design:type", String)
    ], FetchConferenceParticipantPathParams.prototype, "participantSid", void 0);
    return FetchConferenceParticipantPathParams;
}(utils_1.SpeakeasyBase));
exports.FetchConferenceParticipantPathParams = FetchConferenceParticipantPathParams;
var FetchConferenceParticipantQueryParams = /** @class */ (function (_super) {
    __extends(FetchConferenceParticipantQueryParams, _super);
    function FetchConferenceParticipantQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Events" }),
        __metadata("design:type", String)
    ], FetchConferenceParticipantQueryParams.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Metrics" }),
        __metadata("design:type", String)
    ], FetchConferenceParticipantQueryParams.prototype, "metrics", void 0);
    return FetchConferenceParticipantQueryParams;
}(utils_1.SpeakeasyBase));
exports.FetchConferenceParticipantQueryParams = FetchConferenceParticipantQueryParams;
var FetchConferenceParticipantSecurity = /** @class */ (function (_super) {
    __extends(FetchConferenceParticipantSecurity, _super);
    function FetchConferenceParticipantSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchConferenceParticipantSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchConferenceParticipantSecurity;
}(utils_1.SpeakeasyBase));
exports.FetchConferenceParticipantSecurity = FetchConferenceParticipantSecurity;
var FetchConferenceParticipantRequest = /** @class */ (function (_super) {
    __extends(FetchConferenceParticipantRequest, _super);
    function FetchConferenceParticipantRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchConferenceParticipantRequest.prototype, "serverURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchConferenceParticipantPathParams)
    ], FetchConferenceParticipantRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchConferenceParticipantQueryParams)
    ], FetchConferenceParticipantRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FetchConferenceParticipantSecurity)
    ], FetchConferenceParticipantRequest.prototype, "security", void 0);
    return FetchConferenceParticipantRequest;
}(utils_1.SpeakeasyBase));
exports.FetchConferenceParticipantRequest = FetchConferenceParticipantRequest;
var FetchConferenceParticipantResponse = /** @class */ (function (_super) {
    __extends(FetchConferenceParticipantResponse, _super);
    function FetchConferenceParticipantResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FetchConferenceParticipantResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FetchConferenceParticipantResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.InsightsV1ConferenceConferenceParticipant)
    ], FetchConferenceParticipantResponse.prototype, "insightsV1ConferenceConferenceParticipant", void 0);
    return FetchConferenceParticipantResponse;
}(utils_1.SpeakeasyBase));
exports.FetchConferenceParticipantResponse = FetchConferenceParticipantResponse;
