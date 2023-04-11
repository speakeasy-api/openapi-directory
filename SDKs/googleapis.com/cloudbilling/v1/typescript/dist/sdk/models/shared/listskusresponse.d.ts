import { SpeakeasyBase } from "../../../internal/utils";
import { Sku } from "./sku";
/**
 * Response message for `ListSkus`.
 */
export declare class ListSkusResponse extends SpeakeasyBase {
    /**
     * A token to retrieve the next page of results. To retrieve the next page, call `ListSkus` again with the `page_token` field set to this value. This field is empty if there are no more results to retrieve.
     */
    nextPageToken?: string;
    /**
     * The list of public SKUs of the given service.
     */
    skus?: Sku[];
}
