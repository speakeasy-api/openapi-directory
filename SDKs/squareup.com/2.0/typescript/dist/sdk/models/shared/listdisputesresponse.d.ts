import { SpeakeasyBase } from "../../../internal/utils";
import { Dispute } from "./dispute";
import { ErrorT } from "./error";
/**
 * Defines fields in a `ListDisputes` response.
 */
export declare class ListDisputesResponse extends SpeakeasyBase {
    /**
     * The pagination cursor to be used in a subsequent request.
     *
     * @remarks
     * If unset, this is the final response. For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * The list of disputes.
     */
    disputes?: Dispute[];
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
}
