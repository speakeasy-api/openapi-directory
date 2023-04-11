import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostUsersUserEmailOfferingsRequest extends SpeakeasyBase {
    /**
     * offering ids
     */
    requestBody: string[];
    /**
     * user's email
     */
    userEmail: string;
}
export declare class PostUsersUserEmailOfferingsResponse extends SpeakeasyBase {
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
