import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContributorSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetContributorRequest extends SpeakeasyBase {
    /**
     * Contributor ID
     */
    contributorId: string;
}
export declare class GetContributorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    contributorProfile?: shared.ContributorProfile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
