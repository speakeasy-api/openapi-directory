import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LookupMnpRequest extends SpeakeasyBase {
    /**
     * Determines whether the response shall be returned in JSON format.
     */
    json?: string;
    /**
     * The phone number to look up.
     */
    number: string[];
}
export declare class LookupMnpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
