import { SpeakeasyBase } from "../../../internal/utils";
import { MarketingEventPublicDefaultResponse } from "./marketingeventpublicdefaultresponse";
import { StandardError } from "./standarderror";
export declare enum BatchResponseMarketingEventPublicDefaultResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
/**
 * successful operation
 */
export declare class BatchResponseMarketingEventPublicDefaultResponse extends SpeakeasyBase {
    completedAt: Date;
    errors?: StandardError[];
    links?: Record<string, string>;
    numErrors?: number;
    requestedAt?: Date;
    results: MarketingEventPublicDefaultResponse[];
    startedAt: Date;
    status: BatchResponseMarketingEventPublicDefaultResponseStatusEnum;
}
