import { SpeakeasyBase } from "../../../internal/utils";
import { AdUnit } from "./adunit";
/**
 * Response for the ad units list request.
 */
export declare class ListAdUnitsResponse extends SpeakeasyBase {
    /**
     * The resulting ad units for the requested account.
     */
    adUnits?: AdUnit[];
    /**
     * If not empty, indicates that there may be more ad units for the request; this value should be passed in a new `ListAdUnitsRequest`.
     */
    nextPageToken?: string;
}
