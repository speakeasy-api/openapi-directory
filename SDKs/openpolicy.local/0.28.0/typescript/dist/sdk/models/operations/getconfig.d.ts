import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConfigRequest extends SpeakeasyBase {
    /**
     * If true, response will be in a human-readable format.
     */
    pretty?: boolean;
}
export declare class GetConfigResponse extends SpeakeasyBase {
    /**
     * Success
     */
    twoHundredSingleResult?: shared.TwoHundredSingleResult;
    /**
     * Server error
     */
    fourHundred?: shared.FourHundred;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
