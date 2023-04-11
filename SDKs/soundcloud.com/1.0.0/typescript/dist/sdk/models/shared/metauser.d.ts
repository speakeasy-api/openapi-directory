import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SoundCloud User object.
 */
export declare class MetaUser extends SpeakeasyBase {
    /**
     * URL to a JPEG image
     */
    avatarUrl?: string;
    /**
     * profile creation datetime
     */
    createdAt?: Date;
    /**
     * unique identifier
     */
    id?: number;
    /**
     * kind of resource
     */
    kind?: string;
    /**
     * last modified datetime
     */
    lastModified?: Date;
    /**
     * permalink of the resource
     */
    permalink?: string;
    /**
     * URL to the SoundCloud.com page
     */
    permalinkUrl?: string;
    /**
     * API resource URL
     */
    uri?: string;
    /**
     * username
     */
    username?: string;
}
