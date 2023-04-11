import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class HeadUnsecuredSmeLoansRequest extends SpeakeasyBase {
    /**
     * Used for conditional request, to retrieve data only if modified since a given date
     */
    ifModifiedSince?: string;
    /**
     * Used for conditional request, to retrieve data only if the given Etag value does not match
     */
    ifNoneMatch?: string;
}
export declare class HeadUnsecuredSmeLoansResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No response
     */
    noResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
