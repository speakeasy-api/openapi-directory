import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { RewardProgramResource } from "./rewardprogramresource";
/**
 * OK
 */
export declare class FetchRewardProgramsResponse extends SpeakeasyBase {
    data: RewardProgramResource[];
    meta?: FetchMetaResponse;
}
