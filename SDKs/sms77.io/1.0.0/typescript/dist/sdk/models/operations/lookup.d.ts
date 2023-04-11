import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LookupRequest extends SpeakeasyBase {
    /**
     * Determines whether the response shall be returned in JSON format. Does not work with type "format".
     */
    json?: string;
    /**
     * The phone number to look up.
     */
    number: string[];
    /**
     * Allowed values are "cnam", "format", "hlr" and "mnp".
     */
    type: string;
}
export declare class LookupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
