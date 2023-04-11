import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2PhoneNumbersRecordingSettingsIdJsonRequest extends SpeakeasyBase {
    /**
     * E.164 Phone Number
     */
    id: string;
}
export declare class GetV2PhoneNumbersRecordingSettingsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
