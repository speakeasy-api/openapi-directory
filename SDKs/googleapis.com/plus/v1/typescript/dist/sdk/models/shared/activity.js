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
exports.Activity = exports.ActivityProvider = exports.ActivityObject = exports.ActivityObjectResharers = exports.ActivityObjectReplies = exports.ActivityObjectPlusoners = exports.ActivityObjectAttachments = exports.ActivityObjectAttachmentsThumbnails = exports.ActivityObjectAttachmentsThumbnailsImage = exports.ActivityObjectAttachmentsImage = exports.ActivityObjectAttachmentsFullImage = exports.ActivityObjectAttachmentsEmbed = exports.ActivityObjectActor = exports.ActivityObjectActorVerification = exports.ActivityObjectActorImage = exports.ActivityObjectActorClientSpecificActorInfo = exports.ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo = exports.ActivityActor = exports.ActivityActorVerification = exports.ActivityActorName = exports.ActivityActorImage = exports.ActivityActorClientSpecificActorInfo = exports.ActivityActorClientSpecificActorInfoYoutubeActorInfo = void 0;
var utils_1 = require("../../../internal/utils");
var acl_1 = require("./acl");
var place_1 = require("./place");
// ActivityActorClientSpecificActorInfoYoutubeActorInfo
/**
 * Actor info specific to YouTube clients.
**/
var ActivityActorClientSpecificActorInfoYoutubeActorInfo = /** @class */ (function (_super) {
    __extends(ActivityActorClientSpecificActorInfoYoutubeActorInfo, _super);
    function ActivityActorClientSpecificActorInfoYoutubeActorInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], ActivityActorClientSpecificActorInfoYoutubeActorInfo.prototype, "channelId", void 0);
    return ActivityActorClientSpecificActorInfoYoutubeActorInfo;
}(utils_1.SpeakeasyBase));
exports.ActivityActorClientSpecificActorInfoYoutubeActorInfo = ActivityActorClientSpecificActorInfoYoutubeActorInfo;
// ActivityActorClientSpecificActorInfo
/**
 * Actor info specific to particular clients.
**/
var ActivityActorClientSpecificActorInfo = /** @class */ (function (_super) {
    __extends(ActivityActorClientSpecificActorInfo, _super);
    function ActivityActorClientSpecificActorInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=youtubeActorInfo" }),
        __metadata("design:type", ActivityActorClientSpecificActorInfoYoutubeActorInfo)
    ], ActivityActorClientSpecificActorInfo.prototype, "youtubeActorInfo", void 0);
    return ActivityActorClientSpecificActorInfo;
}(utils_1.SpeakeasyBase));
exports.ActivityActorClientSpecificActorInfo = ActivityActorClientSpecificActorInfo;
// ActivityActorImage
/**
 * The image representation of the actor.
**/
var ActivityActorImage = /** @class */ (function (_super) {
    __extends(ActivityActorImage, _super);
    function ActivityActorImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityActorImage.prototype, "url", void 0);
    return ActivityActorImage;
}(utils_1.SpeakeasyBase));
exports.ActivityActorImage = ActivityActorImage;
// ActivityActorName
/**
 * An object representation of the individual components of name.
**/
var ActivityActorName = /** @class */ (function (_super) {
    __extends(ActivityActorName, _super);
    function ActivityActorName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], ActivityActorName.prototype, "familyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=givenName" }),
        __metadata("design:type", String)
    ], ActivityActorName.prototype, "givenName", void 0);
    return ActivityActorName;
}(utils_1.SpeakeasyBase));
exports.ActivityActorName = ActivityActorName;
// ActivityActorVerification
/**
 * Verification status of actor.
**/
var ActivityActorVerification = /** @class */ (function (_super) {
    __extends(ActivityActorVerification, _super);
    function ActivityActorVerification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adHocVerified" }),
        __metadata("design:type", String)
    ], ActivityActorVerification.prototype, "adHocVerified", void 0);
    return ActivityActorVerification;
}(utils_1.SpeakeasyBase));
exports.ActivityActorVerification = ActivityActorVerification;
// ActivityActor
/**
 * The person who performed this activity.
**/
var ActivityActor = /** @class */ (function (_super) {
    __extends(ActivityActor, _super);
    function ActivityActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientSpecificActorInfo" }),
        __metadata("design:type", ActivityActorClientSpecificActorInfo)
    ], ActivityActor.prototype, "clientSpecificActorInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ActivityActor.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ActivityActor.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", ActivityActorImage)
    ], ActivityActor.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", ActivityActorName)
    ], ActivityActor.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityActor.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification" }),
        __metadata("design:type", ActivityActorVerification)
    ], ActivityActor.prototype, "verification", void 0);
    return ActivityActor;
}(utils_1.SpeakeasyBase));
exports.ActivityActor = ActivityActor;
// ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo
/**
 * Actor info specific to YouTube clients.
**/
var ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo = /** @class */ (function (_super) {
    __extends(ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo, _super);
    function ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo.prototype, "channelId", void 0);
    return ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo = ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo;
// ActivityObjectActorClientSpecificActorInfo
/**
 * Actor info specific to particular clients.
**/
var ActivityObjectActorClientSpecificActorInfo = /** @class */ (function (_super) {
    __extends(ActivityObjectActorClientSpecificActorInfo, _super);
    function ActivityObjectActorClientSpecificActorInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=youtubeActorInfo" }),
        __metadata("design:type", ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo)
    ], ActivityObjectActorClientSpecificActorInfo.prototype, "youtubeActorInfo", void 0);
    return ActivityObjectActorClientSpecificActorInfo;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectActorClientSpecificActorInfo = ActivityObjectActorClientSpecificActorInfo;
// ActivityObjectActorImage
/**
 * The image representation of the original actor.
**/
var ActivityObjectActorImage = /** @class */ (function (_super) {
    __extends(ActivityObjectActorImage, _super);
    function ActivityObjectActorImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityObjectActorImage.prototype, "url", void 0);
    return ActivityObjectActorImage;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectActorImage = ActivityObjectActorImage;
// ActivityObjectActorVerification
/**
 * Verification status of actor.
**/
var ActivityObjectActorVerification = /** @class */ (function (_super) {
    __extends(ActivityObjectActorVerification, _super);
    function ActivityObjectActorVerification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=adHocVerified" }),
        __metadata("design:type", String)
    ], ActivityObjectActorVerification.prototype, "adHocVerified", void 0);
    return ActivityObjectActorVerification;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectActorVerification = ActivityObjectActorVerification;
// ActivityObjectActor
/**
 * If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
**/
var ActivityObjectActor = /** @class */ (function (_super) {
    __extends(ActivityObjectActor, _super);
    function ActivityObjectActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientSpecificActorInfo" }),
        __metadata("design:type", ActivityObjectActorClientSpecificActorInfo)
    ], ActivityObjectActor.prototype, "clientSpecificActorInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ActivityObjectActor.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ActivityObjectActor.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", ActivityObjectActorImage)
    ], ActivityObjectActor.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityObjectActor.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verification" }),
        __metadata("design:type", ActivityObjectActorVerification)
    ], ActivityObjectActor.prototype, "verification", void 0);
    return ActivityObjectActor;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectActor = ActivityObjectActor;
// ActivityObjectAttachmentsEmbed
/**
 * If the attachment is a video, the embeddable link.
**/
var ActivityObjectAttachmentsEmbed = /** @class */ (function (_super) {
    __extends(ActivityObjectAttachmentsEmbed, _super);
    function ActivityObjectAttachmentsEmbed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachmentsEmbed.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachmentsEmbed.prototype, "url", void 0);
    return ActivityObjectAttachmentsEmbed;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectAttachmentsEmbed = ActivityObjectAttachmentsEmbed;
// ActivityObjectAttachmentsFullImage
/**
 * The full image URL for photo attachments.
**/
var ActivityObjectAttachmentsFullImage = /** @class */ (function (_super) {
    __extends(ActivityObjectAttachmentsFullImage, _super);
    function ActivityObjectAttachmentsFullImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], ActivityObjectAttachmentsFullImage.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachmentsFullImage.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachmentsFullImage.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], ActivityObjectAttachmentsFullImage.prototype, "width", void 0);
    return ActivityObjectAttachmentsFullImage;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectAttachmentsFullImage = ActivityObjectAttachmentsFullImage;
// ActivityObjectAttachmentsImage
/**
 * The preview image for photos or videos.
**/
var ActivityObjectAttachmentsImage = /** @class */ (function (_super) {
    __extends(ActivityObjectAttachmentsImage, _super);
    function ActivityObjectAttachmentsImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], ActivityObjectAttachmentsImage.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachmentsImage.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachmentsImage.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], ActivityObjectAttachmentsImage.prototype, "width", void 0);
    return ActivityObjectAttachmentsImage;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectAttachmentsImage = ActivityObjectAttachmentsImage;
// ActivityObjectAttachmentsThumbnailsImage
/**
 * Image resource.
**/
var ActivityObjectAttachmentsThumbnailsImage = /** @class */ (function (_super) {
    __extends(ActivityObjectAttachmentsThumbnailsImage, _super);
    function ActivityObjectAttachmentsThumbnailsImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], ActivityObjectAttachmentsThumbnailsImage.prototype, "height", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachmentsThumbnailsImage.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachmentsThumbnailsImage.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=width" }),
        __metadata("design:type", Number)
    ], ActivityObjectAttachmentsThumbnailsImage.prototype, "width", void 0);
    return ActivityObjectAttachmentsThumbnailsImage;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectAttachmentsThumbnailsImage = ActivityObjectAttachmentsThumbnailsImage;
var ActivityObjectAttachmentsThumbnails = /** @class */ (function (_super) {
    __extends(ActivityObjectAttachmentsThumbnails, _super);
    function ActivityObjectAttachmentsThumbnails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachmentsThumbnails.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", ActivityObjectAttachmentsThumbnailsImage)
    ], ActivityObjectAttachmentsThumbnails.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachmentsThumbnails.prototype, "url", void 0);
    return ActivityObjectAttachmentsThumbnails;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectAttachmentsThumbnails = ActivityObjectAttachmentsThumbnails;
var ActivityObjectAttachments = /** @class */ (function (_super) {
    __extends(ActivityObjectAttachments, _super);
    function ActivityObjectAttachments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachments.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachments.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embed" }),
        __metadata("design:type", ActivityObjectAttachmentsEmbed)
    ], ActivityObjectAttachments.prototype, "embed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fullImage" }),
        __metadata("design:type", ActivityObjectAttachmentsFullImage)
    ], ActivityObjectAttachments.prototype, "fullImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachments.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", ActivityObjectAttachmentsImage)
    ], ActivityObjectAttachments.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachments.prototype, "objectType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumbnails", elemType: ActivityObjectAttachmentsThumbnails }),
        __metadata("design:type", Array)
    ], ActivityObjectAttachments.prototype, "thumbnails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityObjectAttachments.prototype, "url", void 0);
    return ActivityObjectAttachments;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectAttachments = ActivityObjectAttachments;
// ActivityObjectPlusoners
/**
 * People who +1'd this activity.
**/
var ActivityObjectPlusoners = /** @class */ (function (_super) {
    __extends(ActivityObjectPlusoners, _super);
    function ActivityObjectPlusoners() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], ActivityObjectPlusoners.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalItems" }),
        __metadata("design:type", Number)
    ], ActivityObjectPlusoners.prototype, "totalItems", void 0);
    return ActivityObjectPlusoners;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectPlusoners = ActivityObjectPlusoners;
// ActivityObjectReplies
/**
 * Comments in reply to this activity.
**/
var ActivityObjectReplies = /** @class */ (function (_super) {
    __extends(ActivityObjectReplies, _super);
    function ActivityObjectReplies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], ActivityObjectReplies.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalItems" }),
        __metadata("design:type", Number)
    ], ActivityObjectReplies.prototype, "totalItems", void 0);
    return ActivityObjectReplies;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectReplies = ActivityObjectReplies;
// ActivityObjectResharers
/**
 * People who reshared this activity.
**/
var ActivityObjectResharers = /** @class */ (function (_super) {
    __extends(ActivityObjectResharers, _super);
    function ActivityObjectResharers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], ActivityObjectResharers.prototype, "selfLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalItems" }),
        __metadata("design:type", Number)
    ], ActivityObjectResharers.prototype, "totalItems", void 0);
    return ActivityObjectResharers;
}(utils_1.SpeakeasyBase));
exports.ActivityObjectResharers = ActivityObjectResharers;
// ActivityObject
/**
 * The object of this activity.
**/
var ActivityObject = /** @class */ (function (_super) {
    __extends(ActivityObject, _super);
    function ActivityObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actor" }),
        __metadata("design:type", ActivityObjectActor)
    ], ActivityObject.prototype, "actor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attachments", elemType: ActivityObjectAttachments }),
        __metadata("design:type", Array)
    ], ActivityObject.prototype, "attachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], ActivityObject.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ActivityObject.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], ActivityObject.prototype, "objectType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originalContent" }),
        __metadata("design:type", String)
    ], ActivityObject.prototype, "originalContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plusoners" }),
        __metadata("design:type", ActivityObjectPlusoners)
    ], ActivityObject.prototype, "plusoners", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replies" }),
        __metadata("design:type", ActivityObjectReplies)
    ], ActivityObject.prototype, "replies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resharers" }),
        __metadata("design:type", ActivityObjectResharers)
    ], ActivityObject.prototype, "resharers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ActivityObject.prototype, "url", void 0);
    return ActivityObject;
}(utils_1.SpeakeasyBase));
exports.ActivityObject = ActivityObject;
// ActivityProvider
/**
 * The service provider that initially published this activity.
**/
var ActivityProvider = /** @class */ (function (_super) {
    __extends(ActivityProvider, _super);
    function ActivityProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ActivityProvider.prototype, "title", void 0);
    return ActivityProvider;
}(utils_1.SpeakeasyBase));
exports.ActivityProvider = ActivityProvider;
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=access" }),
        __metadata("design:type", acl_1.Acl)
    ], Activity.prototype, "access", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=actor" }),
        __metadata("design:type", ActivityActor)
    ], Activity.prototype, "actor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], Activity.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=annotation" }),
        __metadata("design:type", String)
    ], Activity.prototype, "annotation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=crosspostSource" }),
        __metadata("design:type", String)
    ], Activity.prototype, "crosspostSource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Activity.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=geocode" }),
        __metadata("design:type", String)
    ], Activity.prototype, "geocode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Activity.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Activity.prototype, "kind", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", place_1.Place)
    ], Activity.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=object" }),
        __metadata("design:type", ActivityObject)
    ], Activity.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=placeId" }),
        __metadata("design:type", String)
    ], Activity.prototype, "placeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=placeName" }),
        __metadata("design:type", String)
    ], Activity.prototype, "placeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=provider" }),
        __metadata("design:type", ActivityProvider)
    ], Activity.prototype, "provider", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published" }),
        __metadata("design:type", Date)
    ], Activity.prototype, "published", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=radius" }),
        __metadata("design:type", String)
    ], Activity.prototype, "radius", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Activity.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Activity.prototype, "updated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Activity.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=verb" }),
        __metadata("design:type", String)
    ], Activity.prototype, "verb", void 0);
    return Activity;
}(utils_1.SpeakeasyBase));
exports.Activity = Activity;
