import { SpeakeasyBase } from "../../../internal/utils";
import { MobileDevice } from "./mobiledevice";
/**
 * Successful response
 */
export declare class MobileDevices extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * Kind of resource this is.
     */
    kind?: string;
    /**
     * A list of Mobile Device objects.
     */
    mobiledevices?: MobileDevice[];
    /**
     * Token used to access next page of this result.
     */
    nextPageToken?: string;
}
