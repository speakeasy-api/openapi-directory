import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDistributionsRequest extends SpeakeasyBase {
    /**
     * The survey for which to load the distributions
     */
    surveyId: string;
}
export declare class GetDistributionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Distributions
     */
    distributionsResponse?: shared.DistributionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
