import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchRewardProgramGroupRequest extends SpeakeasyBase {
    /**
     * Reward program identifier
     */
    id: string;
}
export declare class FetchRewardProgramGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchGroupsResponse?: shared.FetchGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
