import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveLoyaltyProgramSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveLoyaltyProgramRequest extends SpeakeasyBase {
    /**
     * The ID of the loyalty program or the keyword `main`. Either value can be used to retrieve the single loyalty program that belongs to the seller.
     */
    programId: string;
}
export declare class RetrieveLoyaltyProgramResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveLoyaltyProgramResponse?: shared.RetrieveLoyaltyProgramResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
