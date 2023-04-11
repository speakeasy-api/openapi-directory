import { SpeakeasyBase } from "../../../internal/utils";
import { Guardian } from "./guardian";
/**
 * Response when listing guardians.
 */
export declare class ListGuardiansResponse extends SpeakeasyBase {
    /**
     * Guardians on this page of results that met the criteria specified in the request.
     */
    guardians?: Guardian[];
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
}
