import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersUserEmailOfferingsRequest extends SpeakeasyBase {
    /**
     * user's email
     */
    userEmail: string;
}
export declare class GetUsersUserEmailOfferingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    /**
     * user's offerings
     */
    offeringMetadataResponses?: shared.OfferingMetadataResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
