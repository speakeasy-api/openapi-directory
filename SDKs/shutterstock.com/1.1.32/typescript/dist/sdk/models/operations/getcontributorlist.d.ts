import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetContributorListSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class GetContributorListRequest extends SpeakeasyBase {
    /**
     * One or more contributor IDs
     */
    id: string[];
}
export declare class GetContributorListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    contributorProfileDataList?: shared.ContributorProfileDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
