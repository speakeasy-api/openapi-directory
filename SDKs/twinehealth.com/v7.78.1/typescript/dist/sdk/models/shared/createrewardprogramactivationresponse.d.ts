import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { RewardProgramActivationResource } from "./rewardprogramactivationresource";
/**
 * OK
 */
export declare class CreateRewardProgramActivationResponse extends SpeakeasyBase {
    data: RewardProgramActivationResource;
    meta?: CreateOrUpdateMetaResponse;
}
