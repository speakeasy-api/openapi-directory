import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { RewardResource } from "./rewardresource";
/**
 * OK
 */
export declare class CreateRewardResponse extends SpeakeasyBase {
    data: RewardResource;
    meta?: CreateOrUpdateMetaResponse;
}
