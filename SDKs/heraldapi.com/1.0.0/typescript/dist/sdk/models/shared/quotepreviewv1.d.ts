import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A quote preview provides information about a quote within a submission.
 */
export declare class QuotePreviewV1 extends SpeakeasyBase {
    productId: string;
    /**
     * `id` for a specific quote, retrievable using the [/quotes](../reference/HeraldAPI.v1.yaml/paths/~1quotes~1{quote_id}/get)
     */
    quoteId: string;
}
