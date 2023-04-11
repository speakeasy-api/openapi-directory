import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLanguagesRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
}
export declare class GetLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getLanguagesResponse?: shared.GetLanguagesResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
