import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VerifyRequestWithPsd2Request extends SpeakeasyBase {
    /**
     * The response format.
     */
    format: shared.FormatEnum;
    psd2Request: shared.Psd2Request;
}
export declare class VerifyRequestWithPsd2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyRequestWithPsd2200ApplicationJSONOneOf?: any;
}
