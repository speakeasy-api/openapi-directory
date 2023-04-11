import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsPastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    /**
     * past offerings
     */
    offeringMetadataResponses?: shared.OfferingMetadataResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
