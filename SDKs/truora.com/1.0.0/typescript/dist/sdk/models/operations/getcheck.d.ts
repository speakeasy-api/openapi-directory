import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCheckSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetCheckRequest extends SpeakeasyBase {
    /**
     * Check ID
     */
    checkId: string;
}
export declare class GetCheckResponse extends SpeakeasyBase {
    checkOutput?: shared.CheckOutput;
    contentType: string;
    /**
     * The Check was not found with the given ID
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
