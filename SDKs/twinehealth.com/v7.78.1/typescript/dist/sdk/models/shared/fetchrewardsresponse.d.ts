import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { RewardResource } from "./rewardresource";
/**
 * OK
 */
export declare class FetchRewardsResponse extends SpeakeasyBase {
    data: RewardResource[];
    meta?: FetchMetaResponse;
}
