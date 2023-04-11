import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchTrustProductServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchTrustProductSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchTrustProductRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Customer-Profile resource.
     */
    sid: string;
}
export declare class FetchTrustProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1TrustProduct?: shared.TrusthubV1TrustProduct;
}
