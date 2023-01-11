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
exports.GoogleCloudContactcenterinsightsV1IngestConversationsRequest = void 0;
var utils_1 = require("../../../internal/utils");
var googlecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig_1 = require("./googlecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig");
var googlecloudcontactcenterinsightsv1ingestconversationsrequestgcssource_1 = require("./googlecloudcontactcenterinsightsv1ingestconversationsrequestgcssource");
var googlecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig_1 = require("./googlecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig");
// GoogleCloudContactcenterinsightsV1IngestConversationsRequest
/**
 * The request to ingest conversations.
**/
var GoogleCloudContactcenterinsightsV1IngestConversationsRequest = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1IngestConversationsRequest, _super);
    function GoogleCloudContactcenterinsightsV1IngestConversationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversationConfig" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1ingestconversationsrequestconversationconfig_1.GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig)
    ], GoogleCloudContactcenterinsightsV1IngestConversationsRequest.prototype, "conversationConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gcsSource" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1ingestconversationsrequestgcssource_1.GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource)
    ], GoogleCloudContactcenterinsightsV1IngestConversationsRequest.prototype, "gcsSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1IngestConversationsRequest.prototype, "parent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transcriptObjectConfig" }),
        __metadata("design:type", googlecloudcontactcenterinsightsv1ingestconversationsrequesttranscriptobjectconfig_1.GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig)
    ], GoogleCloudContactcenterinsightsV1IngestConversationsRequest.prototype, "transcriptObjectConfig", void 0);
    return GoogleCloudContactcenterinsightsV1IngestConversationsRequest;
}(utils_1.SpeakeasyBase));
exports.GoogleCloudContactcenterinsightsV1IngestConversationsRequest = GoogleCloudContactcenterinsightsV1IngestConversationsRequest;
