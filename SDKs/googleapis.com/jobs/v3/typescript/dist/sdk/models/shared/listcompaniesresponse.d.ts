import { SpeakeasyBase } from "../../../internal/utils";
import { Company } from "./company";
import { ResponseMetadata } from "./responsemetadata";
/**
 * Output only. The List companies response object.
 */
export declare class ListCompaniesResponse extends SpeakeasyBase {
    /**
     * Companies for the current client.
     */
    companies?: Company[];
    /**
     * Output only. Additional information returned to client, such as debugging information.
     */
    metadata?: ResponseMetadata;
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
}
