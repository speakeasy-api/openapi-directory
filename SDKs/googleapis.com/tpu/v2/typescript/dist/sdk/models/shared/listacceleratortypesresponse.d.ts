import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorType } from "./acceleratortype";
/**
 * Response for ListAcceleratorTypes.
 */
export declare class ListAcceleratorTypesResponse extends SpeakeasyBase {
    /**
     * The listed nodes.
     */
    acceleratorTypes?: AcceleratorType[];
    /**
     * The next page token or empty if none.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
