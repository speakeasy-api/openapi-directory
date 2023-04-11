import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveCustomerSegmentSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveCustomerSegmentRequest extends SpeakeasyBase {
    /**
     * The Square-issued ID of the customer segment.
     */
    segmentId: string;
}
export declare class RetrieveCustomerSegmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveCustomerSegmentResponse?: shared.RetrieveCustomerSegmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
