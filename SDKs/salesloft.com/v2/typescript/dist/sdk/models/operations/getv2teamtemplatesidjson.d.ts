import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2TeamTemplatesIdJsonRequest extends SpeakeasyBase {
    /**
     * Team Template ID
     */
    id: string;
    /**
     * Optionally will return the templates with the current user's email signature
     */
    includeSignature?: boolean;
}
export declare class GetV2TeamTemplatesIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
