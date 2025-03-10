import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { RewardProgramActivationResource } from "./rewardprogramactivationresource";
/**
 * OK
 */
export declare class FetchRewardProgramActivationsResponse extends SpeakeasyBase {
    data: RewardProgramActivationResource[];
    meta?: FetchMetaResponse;
}
