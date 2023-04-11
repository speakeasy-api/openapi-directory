import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDocumentationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The API document for this version of the API
     */
    getDocumentation200ApplicationJSONObject?: Record<string, any>;
}
