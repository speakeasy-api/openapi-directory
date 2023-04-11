import { SpeakeasyBase } from "../../../internal/utils";
import { Acl } from "./acl";
import { Place } from "./place";
/**
 * Actor info specific to YouTube clients.
 */
export declare class ActivityActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
    /**
     * ID of the YouTube channel owned by the Actor.
     */
    channelId?: string;
}
/**
 * Actor info specific to particular clients.
 */
export declare class ActivityActorClientSpecificActorInfo extends SpeakeasyBase {
    /**
     * Actor info specific to YouTube clients.
     */
    youtubeActorInfo?: ActivityActorClientSpecificActorInfoYoutubeActorInfo;
}
/**
 * The image representation of the actor.
 */
export declare class ActivityActorImage extends SpeakeasyBase {
    /**
     * The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.
     */
    url?: string;
}
/**
 * An object representation of the individual components of name.
 */
export declare class ActivityActorName extends SpeakeasyBase {
    /**
     * The family name ("last name") of the actor.
     */
    familyName?: string;
    /**
     * The given name ("first name") of the actor.
     */
    givenName?: string;
}
/**
 * Verification status of actor.
 */
export declare class ActivityActorVerification extends SpeakeasyBase {
    /**
     * Verification for one-time or manual processes.
     */
    adHocVerified?: string;
}
/**
 * The person who performed this activity.
 */
export declare class ActivityActor extends SpeakeasyBase {
    /**
     * Actor info specific to particular clients.
     */
    clientSpecificActorInfo?: ActivityActorClientSpecificActorInfo;
    /**
     * The name of the actor, suitable for display.
     */
    displayName?: string;
    /**
     * The ID of the actor's Person resource.
     */
    id?: string;
    /**
     * The image representation of the actor.
     */
    image?: ActivityActorImage;
    /**
     * An object representation of the individual components of name.
     */
    name?: ActivityActorName;
    /**
     * The link to the actor's Google profile.
     */
    url?: string;
    /**
     * Verification status of actor.
     */
    verification?: ActivityActorVerification;
}
/**
 * Actor info specific to YouTube clients.
 */
export declare class ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
    /**
     * ID of the YouTube channel owned by the Actor.
     */
    channelId?: string;
}
/**
 * Actor info specific to particular clients.
 */
export declare class ActivityObjectActorClientSpecificActorInfo extends SpeakeasyBase {
    /**
     * Actor info specific to YouTube clients.
     */
    youtubeActorInfo?: ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo;
}
/**
 * The image representation of the original actor.
 */
export declare class ActivityObjectActorImage extends SpeakeasyBase {
    /**
     * A URL that points to a thumbnail photo of the original actor.
     */
    url?: string;
}
/**
 * Verification status of actor.
 */
export declare class ActivityObjectActorVerification extends SpeakeasyBase {
    /**
     * Verification for one-time or manual processes.
     */
    adHocVerified?: string;
}
/**
 * If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
 */
export declare class ActivityObjectActor extends SpeakeasyBase {
    /**
     * Actor info specific to particular clients.
     */
    clientSpecificActorInfo?: ActivityObjectActorClientSpecificActorInfo;
    /**
     * The original actor's name, which is suitable for display.
     */
    displayName?: string;
    /**
     * ID of the original actor.
     */
    id?: string;
    /**
     * The image representation of the original actor.
     */
    image?: ActivityObjectActorImage;
    /**
     * A link to the original actor's Google profile.
     */
    url?: string;
    /**
     * Verification status of actor.
     */
    verification?: ActivityObjectActorVerification;
}
/**
 * If the attachment is a video, the embeddable link.
 */
export declare class ActivityObjectAttachmentsEmbed extends SpeakeasyBase {
    /**
     * Media type of the link.
     */
    type?: string;
    /**
     * URL of the link.
     */
    url?: string;
}
/**
 * The full image URL for photo attachments.
 */
export declare class ActivityObjectAttachmentsFullImage extends SpeakeasyBase {
    /**
     * The height, in pixels, of the linked resource.
     */
    height?: number;
    /**
     * Media type of the link.
     */
    type?: string;
    /**
     * URL of the image.
     */
    url?: string;
    /**
     * The width, in pixels, of the linked resource.
     */
    width?: number;
}
/**
 * The preview image for photos or videos.
 */
export declare class ActivityObjectAttachmentsImage extends SpeakeasyBase {
    /**
     * The height, in pixels, of the linked resource.
     */
    height?: number;
    /**
     * Media type of the link.
     */
    type?: string;
    /**
     * Image URL.
     */
    url?: string;
    /**
     * The width, in pixels, of the linked resource.
     */
    width?: number;
}
/**
 * Image resource.
 */
export declare class ActivityObjectAttachmentsThumbnailsImage extends SpeakeasyBase {
    /**
     * The height, in pixels, of the linked resource.
     */
    height?: number;
    /**
     * Media type of the link.
     */
    type?: string;
    /**
     * Image url.
     */
    url?: string;
    /**
     * The width, in pixels, of the linked resource.
     */
    width?: number;
}
export declare class ActivityObjectAttachmentsThumbnails extends SpeakeasyBase {
    /**
     * Potential name of the thumbnail.
     */
    description?: string;
    /**
     * Image resource.
     */
    image?: ActivityObjectAttachmentsThumbnailsImage;
    /**
     * URL of the webpage containing the image.
     */
    url?: string;
}
export declare class ActivityObjectAttachments extends SpeakeasyBase {
    /**
     * If the attachment is an article, this property contains a snippet of text from the article. It can also include descriptions for other types.
     */
    content?: string;
    /**
     * The title of the attachment, such as a photo caption or an article title.
     */
    displayName?: string;
    /**
     * If the attachment is a video, the embeddable link.
     */
    embed?: ActivityObjectAttachmentsEmbed;
    /**
     * The full image URL for photo attachments.
     */
    fullImage?: ActivityObjectAttachmentsFullImage;
    /**
     * The ID of the attachment.
     */
    id?: string;
    /**
     * The preview image for photos or videos.
     */
    image?: ActivityObjectAttachmentsImage;
    /**
     * The type of media object. Possible values include, but are not limited to, the following values:
     *
     * @remarks
     * - "photo" - A photo.
     * - "album" - A photo album.
     * - "video" - A video.
     * - "article" - An article, specified by a link.
     */
    objectType?: string;
    /**
     * If the attachment is an album, this property is a list of potential additional thumbnails from the album.
     */
    thumbnails?: ActivityObjectAttachmentsThumbnails[];
    /**
     * The link to the attachment, which should be of type text/html.
     */
    url?: string;
}
/**
 * People who +1'd this activity.
 */
export declare class ActivityObjectPlusoners extends SpeakeasyBase {
    /**
     * The URL for the collection of people who +1'd this activity.
     */
    selfLink?: string;
    /**
     * Total number of people who +1'd this activity.
     */
    totalItems?: number;
}
/**
 * Comments in reply to this activity.
 */
export declare class ActivityObjectReplies extends SpeakeasyBase {
    /**
     * The URL for the collection of comments in reply to this activity.
     */
    selfLink?: string;
    /**
     * Total number of comments on this activity.
     */
    totalItems?: number;
}
/**
 * People who reshared this activity.
 */
export declare class ActivityObjectResharers extends SpeakeasyBase {
    /**
     * The URL for the collection of resharers.
     */
    selfLink?: string;
    /**
     * Total number of people who reshared this activity.
     */
    totalItems?: number;
}
/**
 * The object of this activity.
 */
export declare class ActivityObject extends SpeakeasyBase {
    /**
     * If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
     */
    actor?: ActivityObjectActor;
    /**
     * The media objects attached to this activity.
     */
    attachments?: ActivityObjectAttachments[];
    /**
     * The HTML-formatted content, which is suitable for display.
     */
    content?: string;
    /**
     * The ID of the object. When resharing an activity, this is the ID of the activity that is being reshared.
     */
    id?: string;
    /**
     * The type of the object. Possible values include, but are not limited to, the following values:
     *
     * @remarks
     * - "note" - Textual content.
     * - "activity" - A Google+ activity.
     */
    objectType?: string;
    /**
     * The content (text) as provided by the author, which is stored without any HTML formatting. When creating or updating an activity, this value must be supplied as plain text in the request.
     */
    originalContent?: string;
    /**
     * People who +1'd this activity.
     */
    plusoners?: ActivityObjectPlusoners;
    /**
     * Comments in reply to this activity.
     */
    replies?: ActivityObjectReplies;
    /**
     * People who reshared this activity.
     */
    resharers?: ActivityObjectResharers;
    /**
     * The URL that points to the linked resource.
     */
    url?: string;
}
/**
 * The service provider that initially published this activity.
 */
export declare class ActivityProvider extends SpeakeasyBase {
    /**
     * Name of the service provider.
     */
    title?: string;
}
/**
 * Successful response
 */
export declare class Activity extends SpeakeasyBase {
    access?: Acl;
    /**
     * The person who performed this activity.
     */
    actor?: ActivityActor;
    /**
     * Street address where this activity occurred.
     */
    address?: string;
    /**
     * Additional content added by the person who shared this activity, applicable only when resharing an activity.
     */
    annotation?: string;
    /**
     * If this activity is a crosspost from another system, this property specifies the ID of the original activity.
     */
    crosspostSource?: string;
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated.
     */
    geocode?: string;
    /**
     * The ID of this activity.
     */
    id?: string;
    /**
     * Identifies this resource as an activity. Value: "plus#activity".
     */
    kind?: string;
    location?: Place;
    /**
     * The object of this activity.
     */
    object?: ActivityObject;
    /**
     * ID of the place where this activity occurred.
     */
    placeId?: string;
    /**
     * Name of the place where this activity occurred.
     */
    placeName?: string;
    /**
     * The service provider that initially published this activity.
     */
    provider?: ActivityProvider;
    /**
     * The time at which this activity was initially published. Formatted as an RFC 3339 timestamp.
     */
    published?: Date;
    /**
     * Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode.
     */
    radius?: string;
    /**
     * Title of this activity.
     */
    title?: string;
    /**
     * The time at which this activity was last updated. Formatted as an RFC 3339 timestamp.
     */
    updated?: Date;
    /**
     * The link to this activity.
     */
    url?: string;
    /**
     * This activity's verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:
     *
     * @remarks
     * - "post" - Publish content to the stream.
     * - "share" - Reshare an activity.
     */
    verb?: string;
}
