import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PicoSettingsGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class PicoSettingsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    picoSettingsDto?: shared.PicoSettingsDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
