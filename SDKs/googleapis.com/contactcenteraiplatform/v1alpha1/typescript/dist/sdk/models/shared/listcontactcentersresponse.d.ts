import { SpeakeasyBase } from "../../../internal/utils";
import { ContactCenter } from "./contactcenter";
/**
 * Message for response to listing ContactCenters
 */
export declare class ListContactCentersResponse extends SpeakeasyBase {
    /**
     * The list of ContactCenter
     */
    contactCenters?: ContactCenter[];
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
