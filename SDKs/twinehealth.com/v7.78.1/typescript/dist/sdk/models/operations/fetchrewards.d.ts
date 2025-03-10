import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchRewardsRequest extends SpeakeasyBase {
    /**
     * Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
     *
     * @remarks
     *
     */
    filterGroups?: string;
    /**
     * Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
     *
     * @remarks
     *
     */
    filterOrganization?: string;
    /**
     * Patient identifier. Note that one of the following filters must be specified: `filter[patient]`, `filter[groups]`, `filter[organization]`.
     *
     * @remarks
     *
     */
    filterPatient?: string;
    /**
     * Reward program activation identifier
     */
    filterRewardProgramActivation?: string;
    /**
     * Thread identifier
     */
    filterThread?: string;
}
export declare class FetchRewardsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchRewardsResponse?: shared.FetchRewardsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
