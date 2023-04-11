import { SpeakeasyBase } from "../../../internal/utils";
import { MobileApp } from "./mobileapp";
/**
 * Mobile app List Response
 */
export declare class MobileAppsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileAppsListResponse".
     */
    kind?: string;
    /**
     * Mobile apps collection.
     */
    mobileApps?: MobileApp[];
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
