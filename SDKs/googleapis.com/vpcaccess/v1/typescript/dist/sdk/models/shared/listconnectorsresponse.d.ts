import { SpeakeasyBase } from "../../../internal/utils";
import { Connector } from "./connector";
/**
 * Response for listing Serverless VPC Access connectors.
 */
export declare class ListConnectorsResponse extends SpeakeasyBase {
    /**
     * List of Serverless VPC Access connectors.
     */
    connectors?: Connector[];
    /**
     * Continuation token.
     */
    nextPageToken?: string;
}
