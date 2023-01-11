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
exports.GoogleCloudContactcenterinsightsV1ConversationInput = exports.GoogleCloudContactcenterinsightsV1Conversation = exports.GoogleCloudContactcenterinsightsV1ConversationMediumEnum = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudcontactcenterinsightsv1conversationcallmetadata_1 = require("./googlecloudcontactcenterinsightsv1conversationcallmetadata");
var googlecloudcontactcenterinsightsv1conversationdatasource_1 = require("./googlecloudcontactcenterinsightsv1conversationdatasource");
var googlecloudcontactcenterinsightsv1dialogflowintent_1 = require("./googlecloudcontactcenterinsightsv1dialogflowintent");
var googlecloudcontactcenterinsightsv1analysis_1 = require("./googlecloudcontactcenterinsightsv1analysis");
var googlecloudcontactcenterinsightsv1runtimeannotation_1 = require("./googlecloudcontactcenterinsightsv1runtimeannotation");
var googlecloudcontactcenterinsightsv1conversationtranscript_1 = require("./googlecloudcontactcenterinsightsv1conversationtranscript");
var googlecloudcontactcenterinsightsv1conversationdatasource_2 = require("./googlecloudcontactcenterinsightsv1conversationdatasource");
var googlecloudcontactcenterinsightsv1analysis_2 = require("./googlecloudcontactcenterinsightsv1analysis");
var GoogleCloudContactcenterinsightsV1ConversationMediumEnum;
(function (GoogleCloudContactcenterinsightsV1ConversationMediumEnum) {
    GoogleCloudContactcenterinsightsV1ConversationMediumEnum["MediumUnspecified"] = "MEDIUM_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1ConversationMediumEnum["PhoneCall"] = "PHONE_CALL";
    GoogleCloudContactcenterinsightsV1ConversationMediumEnum["Chat"] = "CHAT";
})(GoogleCloudContactcenterinsightsV1ConversationMediumEnum = exports.GoogleCloudContactcenterinsightsV1ConversationMediumEnum || (exports.GoogleCloudContactcenterinsightsV1ConversationMediumEnum = {}));
// GoogleCloudContactcenterinsightsV1Conversation
/**
 * The conversation resource.
**/
var GoogleCloudContactcenterinsightsV1Conversation = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1Conversation, _super);
    function GoogleCloudContactcenterinsightsV1Conversation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agentId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "agentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callMetadata" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1conversationcallmetadata_1.GoogleCloudContactcenterinsightsV1ConversationCallMetadata)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "callMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "createTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSource" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1conversationdatasource_1.GoogleCloudContactcenterinsightsV1ConversationDataSource)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "dataSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dialogflowIntents", elemType: googlecloudcontactcenterinsightsv1dialogflowintent_1.GoogleCloudContactcenterinsightsV1DialogflowIntent }),
        __metadata("design:type", Object)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "dialogflowIntents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=duration" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "duration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "expireTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestAnalysis" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1analysis_1.GoogleCloudContactcenterinsightsV1Analysis)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "latestAnalysis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=medium" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "medium", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=obfuscatedUserId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "obfuscatedUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runtimeAnnotations", elemType: googlecloudcontactcenterinsightsv1runtimeannotation_1.GoogleCloudContactcenterinsightsV1RuntimeAnnotation }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "runtimeAnnotations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transcript" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1conversationtranscript_1.GoogleCloudContactcenterinsightsV1ConversationTranscript)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "transcript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=turnCount" }),
        __metadata("design:type", Number)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "turnCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1Conversation.prototype, "updateTime", void 0);
    return GoogleCloudContactcenterinsightsV1Conversation;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudContactcenterinsightsV1Conversation = GoogleCloudContactcenterinsightsV1Conversation;
// GoogleCloudContactcenterinsightsV1ConversationInput
/**
 * The conversation resource.
**/
var GoogleCloudContactcenterinsightsV1ConversationInput = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1ConversationInput, _super);
    function GoogleCloudContactcenterinsightsV1ConversationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agentId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "agentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callMetadata" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1conversationcallmetadata_1.GoogleCloudContactcenterinsightsV1ConversationCallMetadata)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "callMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dataSource" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1conversationdatasource_2.GoogleCloudContactcenterinsightsV1ConversationDataSourceInput)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "dataSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "expireTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "languageCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latestAnalysis" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1analysis_2.GoogleCloudContactcenterinsightsV1AnalysisInput)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "latestAnalysis", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=medium" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "medium", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=obfuscatedUserId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "obfuscatedUserId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "startTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transcript" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1conversationtranscript_1.GoogleCloudContactcenterinsightsV1ConversationTranscript)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "transcript", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1ConversationInput.prototype, "ttl", void 0);
    return GoogleCloudContactcenterinsightsV1ConversationInput;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudContactcenterinsightsV1ConversationInput = GoogleCloudContactcenterinsightsV1ConversationInput;
