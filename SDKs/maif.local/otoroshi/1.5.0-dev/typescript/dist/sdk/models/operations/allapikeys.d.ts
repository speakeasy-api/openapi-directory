import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AllApiKeysResponse extends SpeakeasyBase {
    /**
     * Successful operation
     */
    apiKeys?: shared.ApiKey[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
