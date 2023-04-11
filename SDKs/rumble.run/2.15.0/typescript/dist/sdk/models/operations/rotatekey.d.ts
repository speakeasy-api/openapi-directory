import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RotateKeyResponse extends SpeakeasyBase {
    /**
     * api key details
     */
    apiKey?: shared.APIKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
