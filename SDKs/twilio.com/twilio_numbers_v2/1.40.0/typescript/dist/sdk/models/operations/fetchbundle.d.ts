import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchBundleServerList: readonly ["https://numbers.twilio.com"];
export declare class FetchBundleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchBundleRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    sid: string;
}
export declare class FetchBundleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    numbersV2RegulatoryComplianceBundle?: shared.NumbersV2RegulatoryComplianceBundle;
}
