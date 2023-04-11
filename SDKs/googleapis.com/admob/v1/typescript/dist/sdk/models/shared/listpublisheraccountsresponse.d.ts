import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherAccount } from "./publisheraccount";
/**
 * Response for the publisher account list request.
 */
export declare class ListPublisherAccountsResponse extends SpeakeasyBase {
    /**
     * Publisher that the client credentials can access.
     */
    account?: PublisherAccount[];
    /**
     * If not empty, indicates that there might be more accounts for the request; you must pass this value in a new `ListPublisherAccountsRequest`.
     */
    nextPageToken?: string;
}
