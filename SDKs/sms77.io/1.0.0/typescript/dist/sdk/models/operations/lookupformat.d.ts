import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LookupFormatRequest extends SpeakeasyBase {
    /**
     * The phone number to look up.
     */
    number: string[];
}
export declare class LookupFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
