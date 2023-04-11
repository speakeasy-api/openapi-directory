import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApiKeyInfoResponse extends SpeakeasyBase {
    /**
     * Read API Key (uncached, i.e. DB read)
     */
    apiKeyOut?: shared.APIKeyOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
