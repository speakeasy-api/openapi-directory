import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountKeysResponse extends SpeakeasyBase {
    /**
     * array of keys
     */
    apiKeys?: shared.APIKey[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
