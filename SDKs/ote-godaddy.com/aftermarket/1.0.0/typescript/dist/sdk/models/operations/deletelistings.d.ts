import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteListingsRequest extends SpeakeasyBase {
    /**
     * A comma separated list of domain names
     */
    domains: string[];
}
export declare class DeleteListingsResponse extends SpeakeasyBase {
    /**
     * Request was successful
     */
    aftermarketListingAction?: shared.AftermarketListingAction;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
