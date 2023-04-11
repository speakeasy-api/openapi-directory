import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LearnableRequest extends SpeakeasyBase {
    learnable: boolean;
    /**
     * The API Key to set as learnable/non learnable.
     */
    source: string;
    token: string;
}
export declare class LearnableResponse extends SpeakeasyBase {
    /**
     * Set learning from source.
     */
    apiKeyOut?: shared.APIKeyOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
