import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { RewardEarningResource } from "./rewardearningresource";
/**
 * OK
 */
export declare class FetchRewardEarningResponse extends SpeakeasyBase {
    data: RewardEarningResource;
    meta?: FetchMetaResponse;
}
