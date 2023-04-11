import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnonymizeRequest extends SpeakeasyBase {
    anonymized: boolean;
    source: string;
    token: string;
}
export declare class AnonymizeResponse extends SpeakeasyBase {
    /**
     * Anonymization of a source.
     */
    apiKeyOut?: shared.APIKeyOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
