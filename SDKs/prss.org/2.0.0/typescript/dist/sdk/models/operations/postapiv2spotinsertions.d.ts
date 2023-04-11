import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV2SpotinsertionsSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class PostApiV2SpotinsertionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is missing required data or invalid.
     */
    error?: shared.ErrorT;
    /**
     * The created spot insertion with fields populated.
     */
    spotInsertion?: shared.SpotInsertion;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
