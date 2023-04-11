import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { RewardEarningResource } from "./rewardearningresource";
/**
 * OK
 */
export declare class CreateRewardEarningResponse extends SpeakeasyBase {
    data: RewardEarningResource;
    meta?: CreateOrUpdateMetaResponse;
}
