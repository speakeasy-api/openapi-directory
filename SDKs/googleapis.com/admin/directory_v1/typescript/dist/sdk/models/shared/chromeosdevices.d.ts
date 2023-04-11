import { SpeakeasyBase } from "../../../internal/utils";
import { ChromeOsDevice } from "./chromeosdevice";
/**
 * Successful response
 */
export declare class ChromeOsDevices extends SpeakeasyBase {
    /**
     * A list of Chrome OS Device objects.
     */
    chromeosdevices?: ChromeOsDevice[];
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * Token used to access the next page of this result. To access the next page, use this token's value in the `pageToken` query string of this request.
     */
    nextPageToken?: string;
}
