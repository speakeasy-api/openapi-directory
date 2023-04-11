import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PhoneCodeBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class PhoneCodeBatchResponse extends SpeakeasyBase {
    /**
     * A list of genderized names.
     */
    batchFirstLastNamePhoneCodedOut?: shared.BatchFirstLastNamePhoneCodedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
