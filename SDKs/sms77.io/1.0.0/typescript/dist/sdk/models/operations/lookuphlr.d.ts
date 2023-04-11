import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LookupHlrRequest extends SpeakeasyBase {
    /**
     * The phone number to look up.
     */
    number: string[];
}
export declare class LookupHlrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
