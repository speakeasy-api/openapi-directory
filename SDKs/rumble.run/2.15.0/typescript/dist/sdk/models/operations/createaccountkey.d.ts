import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAccountKeySecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class CreateAccountKeyResponse extends SpeakeasyBase {
    /**
     * key details
     */
    apiKey?: shared.APIKey;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
