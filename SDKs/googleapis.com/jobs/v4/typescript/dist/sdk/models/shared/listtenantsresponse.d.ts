import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseMetadata } from "./responsemetadata";
import { Tenant } from "./tenant";
/**
 * The List tenants response object.
 */
export declare class ListTenantsResponse extends SpeakeasyBase {
    /**
     * Additional information returned to client, such as debugging information.
     */
    metadata?: ResponseMetadata;
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * Tenants for the current client.
     */
    tenants?: Tenant[];
}
