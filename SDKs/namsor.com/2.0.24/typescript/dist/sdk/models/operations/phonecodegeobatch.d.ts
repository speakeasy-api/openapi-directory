import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PhoneCodeGeoBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class PhoneCodeGeoBatchResponse extends SpeakeasyBase {
    /**
     * A list of genderized names.
     */
    batchFirstLastNamePhoneCodedOut?: shared.BatchFirstLastNamePhoneCodedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
