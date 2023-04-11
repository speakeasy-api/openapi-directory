import { SpeakeasyBase } from "../../../internal/utils";
import { CreateOrUpdateMetaResponse } from "./createorupdatemetaresponse";
import { RewardProgramResource } from "./rewardprogramresource";
/**
 * OK
 */
export declare class CreateRewardProgramResponse extends SpeakeasyBase {
    data: RewardProgramResource;
    meta?: CreateOrUpdateMetaResponse;
}
