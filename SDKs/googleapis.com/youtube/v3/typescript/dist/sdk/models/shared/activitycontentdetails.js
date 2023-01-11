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
exports.ActivityContentDetails = void 0;
var utils_1 = require("../../../internal/utils");
var activitycontentdetailsbulletin_1 = require("./activitycontentdetailsbulletin");
var activitycontentdetailschannelitem_1 = require("./activitycontentdetailschannelitem");
var activitycontentdetailscomment_1 = require("./activitycontentdetailscomment");
var activitycontentdetailsfavorite_1 = require("./activitycontentdetailsfavorite");
var activitycontentdetailslike_1 = require("./activitycontentdetailslike");
var activitycontentdetailsplaylistitem_1 = require("./activitycontentdetailsplaylistitem");
var activitycontentdetailspromoteditem_1 = require("./activitycontentdetailspromoteditem");
var activitycontentdetailsrecommendation_1 = require("./activitycontentdetailsrecommendation");
var activitycontentdetailssocial_1 = require("./activitycontentdetailssocial");
var activitycontentdetailssubscription_1 = require("./activitycontentdetailssubscription");
var activitycontentdetailsupload_1 = require("./activitycontentdetailsupload");
// ActivityContentDetails
/**
 * Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
**/
var ActivityContentDetails = /** @class */ (function (_super) {
    __extends(ActivityContentDetails, _super);
    function ActivityContentDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bulletin" }),
        __metadata("design:type", activitycontentdetailsbulletin_1.ActivityContentDetailsBulletin)
    ], ActivityContentDetails.prototype, "bulletin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelItem" }),
        __metadata("design:type", activitycontentdetailschannelitem_1.ActivityContentDetailsChannelItem)
    ], ActivityContentDetails.prototype, "channelItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", activitycontentdetailscomment_1.ActivityContentDetailsComment)
    ], ActivityContentDetails.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=favorite" }),
        __metadata("design:type", activitycontentdetailsfavorite_1.ActivityContentDetailsFavorite)
    ], ActivityContentDetails.prototype, "favorite", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=like" }),
        __metadata("design:type", activitycontentdetailslike_1.ActivityContentDetailsLike)
    ], ActivityContentDetails.prototype, "like", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=playlistItem" }),
        __metadata("design:type", activitycontentdetailsplaylistitem_1.ActivityContentDetailsPlaylistItem)
    ], ActivityContentDetails.prototype, "playlistItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=promotedItem" }),
        __metadata("design:type", activitycontentdetailspromoteditem_1.ActivityContentDetailsPromotedItem)
    ], ActivityContentDetails.prototype, "promotedItem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommendation" }),
        __metadata("design:type", activitycontentdetailsrecommendation_1.ActivityContentDetailsRecommendation)
    ], ActivityContentDetails.prototype, "recommendation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=social" }),
        __metadata("design:type", activitycontentdetailssocial_1.ActivityContentDetailsSocial)
    ], ActivityContentDetails.prototype, "social", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=subscription" }),
        __metadata("design:type", activitycontentdetailssubscription_1.ActivityContentDetailsSubscription)
    ], ActivityContentDetails.prototype, "subscription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=upload" }),
        __metadata("design:type", activitycontentdetailsupload_1.ActivityContentDetailsUpload)
    ], ActivityContentDetails.prototype, "upload", void 0);
    return ActivityContentDetails;
}(utils_1.SpeakeasyBase));
exports.ActivityContentDetails = ActivityContentDetails;
