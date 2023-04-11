import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";
/**
 * Successful response
 */
export declare class ReturnaddressListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressListResponse`".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of addresses.
     */
    nextPageToken?: string;
    resources?: ReturnAddress[];
}
