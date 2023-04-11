import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrievedistributionlinksRequest extends SpeakeasyBase {
    /**
     * ID of the distribution list
     */
    distributionId: string;
    /**
     * ID of the survey (eg: SV_123)
     */
    surveyId: string;
}
export declare class RetrievedistributionlinksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Generated list of links
     */
    retrieveDistributionLinksResponse?: shared.RetrieveDistributionLinksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
