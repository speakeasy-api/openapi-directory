import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Tags are custom labels that can be associated with transactions
 *
 * @remarks
 * on Up. Within the Up application, tags provide additional insight
 * into spending. For example, you could have a "Take Away" tag that
 * you apply to purchases from food delivery services. The Up API
 * allows you to manage the tags associated with transactions. Each
 * transaction may have up to 6 tags.
 *
 * Tags are identified by their labels, which are unique strings,
 * so the tag "Holiday" has also the `id` `"Holiday"`.
 *
 */
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove tags from transaction
     *
     * @remarks
     * Disassociates one or more tags from a specific transaction. Tags that are
     * not associated are silently ignored. An HTTP `204` is returned on
     * success. The associated tags, along with this request URL, are also
     * exposed via the `tags` relationship on the transaction resource returned
     * from `/transactions/{id}`.
     *
     */
    deleteTransactionsTransactionIdRelationshipsTags(req: operations.DeleteTransactionsTransactionIdRelationshipsTagsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransactionsTransactionIdRelationshipsTagsResponse>;
    /**
     * List tags
     *
     * @remarks
     * Retrieve a list of all tags currently in use. The returned list is
     * [paginated](#pagination) and can be scrolled by following the `next`
     * and `prev` links where present. Results are ordered lexicographically.
     * The `transactions` relationship for each tag exposes a link
     * to get the transactions with the given tag.
     *
     */
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * Add tags to transaction
     *
     * @remarks
     * Associates one or more tags with a specific transaction. No more than 6
     * tags may be present on any single transaction. Duplicate tags are
     * silently ignored. An HTTP `204` is returned on success. The associated
     * tags, along with this request URL, are also exposed via the `tags`
     * relationship on the transaction resource returned from
     * `/transactions/{id}`.
     *
     */
    postTransactionsTransactionIdRelationshipsTags(req: operations.PostTransactionsTransactionIdRelationshipsTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostTransactionsTransactionIdRelationshipsTagsResponse>;
}
