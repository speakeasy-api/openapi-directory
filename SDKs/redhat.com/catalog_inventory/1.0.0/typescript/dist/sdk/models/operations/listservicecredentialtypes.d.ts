import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListServiceCredentialTypesRequest extends SpeakeasyBase {
    /**
     * Filter for querying collections.
     */
    filter?: Record<string, any>;
    /**
     * The numbers of items to return per page.
     */
    limit?: number;
    /**
     * The number of items to skip before starting to collect the result set.
     */
    offset?: number;
    /**
     * The list of attribute and order to sort the result set by.
     */
    sortBy?: Record<string, any>;
}
export declare class ListServiceCredentialTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ServiceCredentialTypes collection
     */
    serviceCredentialTypesCollection?: shared.ServiceCredentialTypesCollection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
