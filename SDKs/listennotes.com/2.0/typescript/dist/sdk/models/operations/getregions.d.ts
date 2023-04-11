import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRegionsRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
}
export declare class GetRegionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getRegionsResponse?: shared.GetRegionsResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
