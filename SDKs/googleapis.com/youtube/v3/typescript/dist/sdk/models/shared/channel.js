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
exports.Channel = void 0;
var utils_1 = require("../../../internal/utils");
var channelauditdetails_1 = require("./channelauditdetails");
var channelbrandingsettings_1 = require("./channelbrandingsettings");
var channelcontentdetails_1 = require("./channelcontentdetails");
var channelcontentownerdetails_1 = require("./channelcontentownerdetails");
var channelconversionpings_1 = require("./channelconversionpings");
var channellocalization_1 = require("./channellocalization");
var channelsnippet_1 = require("./channelsnippet");
var channelstatistics_1 = require("./channelstatistics");
var channelstatus_1 = require("./channelstatus");
var channeltopicdetails_1 = require("./channeltopicdetails");
// Channel
/**
 * A *channel* resource contains information about a YouTube channel.
**/
var Channel = /** @class */ (function (_super) {
    __extends(Channel, _super);
    function Channel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auditDetails" }),
        __metadata("design:type", channelauditdetails_1.ChannelAuditDetails)
    ], Channel.prototype, "auditDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brandingSettings" }),
        __metadata("design:type", channelbrandingsettings_1.ChannelBrandingSettings)
    ], Channel.prototype, "brandingSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentDetails" }),
        __metadata("design:type", channelcontentdetails_1.ChannelContentDetails)
    ], Channel.prototype, "contentDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contentOwnerDetails" }),
        __metadata("design:type", channelcontentownerdetails_1.ChannelContentOwnerDetails)
    ], Channel.prototype, "contentOwnerDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=conversionPings" }),
        __metadata("design:type", channelconversionpings_1.ChannelConversionPings)
    ], Channel.prototype, "conversionPings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Channel.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Channel.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Channel.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=localizations", elemType: channellocalization_1.ChannelLocalization }),
        __metadata("design:type", Object)
    ], Channel.prototype, "localizations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snippet" }),
        __metadata("design:type", channelsnippet_1.ChannelSnippet)
    ], Channel.prototype, "snippet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=statistics" }),
        __metadata("design:type", channelstatistics_1.ChannelStatistics)
    ], Channel.prototype, "statistics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", channelstatus_1.ChannelStatus)
    ], Channel.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=topicDetails" }),
        __metadata("design:type", channeltopicdetails_1.ChannelTopicDetails)
    ], Channel.prototype, "topicDetails", void 0);
    return Channel;
}(utils_1.SpeakeasyBase));
exports.Channel = Channel;
