import { SpeakeasyBase } from "../../../internal/utils";
import { AssetVersionEnumVisibilityEnum } from "./assetversionenumvisibilityenum";
/**
 * OK
 */
export declare class ServerlessV1ServiceAssetAssetVersion extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Asset Version resource.
     */
    accountSid?: string;
    /**
     * The SID of the Asset resource that is the parent of the Asset Version.
     */
    assetSid?: string;
    /**
     * The date and time in GMT when the Asset Version resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The URL-friendly string by which the Asset Version can be referenced. It can be a maximum of 255 characters. All paths begin with a forward slash ('/'). If an Asset Version creation request is submitted with a path not containing a leading slash, the path will automatically be prepended with one.
     */
    path?: string;
    /**
     * The SID of the Service that the Asset Version resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Asset Version resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Asset Version resource.
     */
    url?: string;
    visibility?: AssetVersionEnumVisibilityEnum;
}
