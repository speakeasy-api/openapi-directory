import { SpeakeasyBase } from "../../../internal/utils";
import { FetchMetaResponse } from "./fetchmetaresponse";
import { RewardEarningFulfillmentResource } from "./rewardearningfulfillmentresource";
/**
 * OK
 */
export declare class FetchRewardEarningFulfillmentsResponse extends SpeakeasyBase {
    data: RewardEarningFulfillmentResource[];
    meta?: FetchMetaResponse;
}
