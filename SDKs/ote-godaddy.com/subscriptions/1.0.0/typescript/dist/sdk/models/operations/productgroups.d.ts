import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductGroupsRequest extends SpeakeasyBase {
    /**
     * The market that the response should be formatted for
     */
    xMarketId?: string;
    /**
     * Shopper ID to return data for when not using JWT
     */
    xShopperId?: string;
}
export declare class ProductGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    /**
     * Too many requests received within interval
     */
    errorLimit?: shared.ErrorLimit;
    /**
     * Request was successful
     */
    productGroups?: shared.ProductGroup[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
