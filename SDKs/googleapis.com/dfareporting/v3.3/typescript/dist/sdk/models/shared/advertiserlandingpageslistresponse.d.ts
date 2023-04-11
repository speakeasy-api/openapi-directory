import { SpeakeasyBase } from "../../../internal/utils";
import { LandingPage } from "./landingpage";
/**
 * Landing Page List Response
 */
export declare class AdvertiserLandingPagesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserLandingPagesListResponse".
     */
    kind?: string;
    /**
     * Landing page collection
     */
    landingPages?: LandingPage[];
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
