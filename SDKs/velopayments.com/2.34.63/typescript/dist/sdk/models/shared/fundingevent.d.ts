import { SpeakeasyBase } from "../../../internal/utils";
export declare class FundingEvent extends SpeakeasyBase {
    eventDateTime?: Date;
    eventId?: string;
    /**
     * Funding event type. One of the following values: PAYOR_FUNDING_DETECTED, PAYOR_FUNDING_REQUESTED, PAYOR_FUNDING_RETURN_RECEIVED, FUNDING_RETURN_DETECTED, PAYOR_FUNDING_REQUEST_SUBMITTED, PAYOR_FUNDING_ENTRY_DETAIL_RECEIVED, FUNDING_DEALLOCATED
     */
    fundingEventType?: string;
    principal?: string;
}
