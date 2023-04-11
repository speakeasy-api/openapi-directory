import { SpeakeasyBase } from "../../../internal/utils";
import { BiddingStrategy } from "./biddingstrategy";
import { FrequencyCap } from "./frequencycap";
import { InsertionOrderBudget } from "./insertionorderbudget";
import { IntegrationDetails } from "./integrationdetails";
import { Pacing } from "./pacing";
import { PartnerCost } from "./partnercost";
import { PerformanceGoal } from "./performancegoal";
/**
 * Immutable. The billable outcome of the insertion order.
 */
export declare enum InsertionOrderBillableOutcomeEnum {
    BillableOutcomeUnspecified = "BILLABLE_OUTCOME_UNSPECIFIED",
    BillableOutcomePayPerImpression = "BILLABLE_OUTCOME_PAY_PER_IMPRESSION",
    BillableOutcomePayPerClick = "BILLABLE_OUTCOME_PAY_PER_CLICK",
    BillableOutcomePayPerViewableImpression = "BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION"
}
/**
 * Required. Controls whether or not the insertion order can spend its budget and bid on inventory. * For CreateInsertionOrder method, only `ENTITY_STATUS_DRAFT` is allowed. To activate an insertion order, use UpdateInsertionOrder method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * An insertion order cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * An insertion order cannot be set to `ENTITY_STATUS_ACTIVE` if its parent campaign is not active.
 */
export declare enum InsertionOrderEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * The type of insertion order. If this field is unspecified in creation, the value defaults to `RTB`.
 */
export declare enum InsertionOrderInsertionOrderTypeEnum {
    InsertionOrderTypeUnspecified = "INSERTION_ORDER_TYPE_UNSPECIFIED",
    Rtb = "RTB",
    OverTheTop = "OVER_THE_TOP"
}
/**
 * A single insertion order.
 */
export declare class InsertionOrderInput extends SpeakeasyBase {
    /**
     * Settings that control the bid strategy. Bid strategy determines the bid price.
     */
    bidStrategy?: BiddingStrategy;
    /**
     * Immutable. The billable outcome of the insertion order.
     */
    billableOutcome?: InsertionOrderBillableOutcomeEnum;
    /**
     * Settings that control how insertion order budget is allocated.
     */
    budget?: InsertionOrderBudget;
    /**
     * Required. Immutable. The unique ID of the campaign that the insertion order belongs to.
     */
    campaignId?: string;
    /**
     * Required. The display name of the insertion order. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Controls whether or not the insertion order can spend its budget and bid on inventory. * For CreateInsertionOrder method, only `ENTITY_STATUS_DRAFT` is allowed. To activate an insertion order, use UpdateInsertionOrder method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * An insertion order cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * An insertion order cannot be set to `ENTITY_STATUS_ACTIVE` if its parent campaign is not active.
     */
    entityStatus?: InsertionOrderEntityStatusEnum;
    /**
     * Settings that control the number of times a user may be shown with the same ad during a given time period.
     */
    frequencyCap?: FrequencyCap;
    /**
     * The type of insertion order. If this field is unspecified in creation, the value defaults to `RTB`.
     */
    insertionOrderType?: InsertionOrderInsertionOrderTypeEnum;
    /**
     * Integration details of an entry.
     */
    integrationDetails?: IntegrationDetails;
    /**
     * Settings that control the rate at which a budget is spent.
     */
    pacing?: Pacing;
    /**
     * The partner costs associated with the insertion order. If absent or empty in CreateInsertionOrder method, the newly created insertion order will inherit partner costs from the partner settings.
     */
    partnerCosts?: PartnerCost[];
    /**
     * Settings that control the performance goal of a campaign or insertion order.
     */
    performanceGoal?: PerformanceGoal;
}
/**
 * Output only. The reservation type of the insertion order.
 */
export declare enum InsertionOrderReservationTypeEnum {
    ReservationTypeUnspecified = "RESERVATION_TYPE_UNSPECIFIED",
    ReservationTypeNotGuaranteed = "RESERVATION_TYPE_NOT_GUARANTEED",
    ReservationTypeProgrammaticGuaranteed = "RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED",
    ReservationTypeTagGuaranteed = "RESERVATION_TYPE_TAG_GUARANTEED",
    ReservationTypePetraViral = "RESERVATION_TYPE_PETRA_VIRAL",
    ReservationTypeInstantReserve = "RESERVATION_TYPE_INSTANT_RESERVE"
}
/**
 * A single insertion order.
 */
export declare class InsertionOrder extends SpeakeasyBase {
    /**
     * Output only. The unique ID of the advertiser the insertion order belongs to.
     */
    advertiserId?: string;
    /**
     * Settings that control the bid strategy. Bid strategy determines the bid price.
     */
    bidStrategy?: BiddingStrategy;
    /**
     * Immutable. The billable outcome of the insertion order.
     */
    billableOutcome?: InsertionOrderBillableOutcomeEnum;
    /**
     * Settings that control how insertion order budget is allocated.
     */
    budget?: InsertionOrderBudget;
    /**
     * Required. Immutable. The unique ID of the campaign that the insertion order belongs to.
     */
    campaignId?: string;
    /**
     * Required. The display name of the insertion order. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Controls whether or not the insertion order can spend its budget and bid on inventory. * For CreateInsertionOrder method, only `ENTITY_STATUS_DRAFT` is allowed. To activate an insertion order, use UpdateInsertionOrder method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * An insertion order cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * An insertion order cannot be set to `ENTITY_STATUS_ACTIVE` if its parent campaign is not active.
     */
    entityStatus?: InsertionOrderEntityStatusEnum;
    /**
     * Settings that control the number of times a user may be shown with the same ad during a given time period.
     */
    frequencyCap?: FrequencyCap;
    /**
     * Output only. The unique ID of the insertion order. Assigned by the system.
     */
    insertionOrderId?: string;
    /**
     * The type of insertion order. If this field is unspecified in creation, the value defaults to `RTB`.
     */
    insertionOrderType?: InsertionOrderInsertionOrderTypeEnum;
    /**
     * Integration details of an entry.
     */
    integrationDetails?: IntegrationDetails;
    /**
     * Output only. The resource name of the insertion order.
     */
    name?: string;
    /**
     * Settings that control the rate at which a budget is spent.
     */
    pacing?: Pacing;
    /**
     * The partner costs associated with the insertion order. If absent or empty in CreateInsertionOrder method, the newly created insertion order will inherit partner costs from the partner settings.
     */
    partnerCosts?: PartnerCost[];
    /**
     * Settings that control the performance goal of a campaign or insertion order.
     */
    performanceGoal?: PerformanceGoal;
    /**
     * Output only. The reservation type of the insertion order.
     */
    reservationType?: InsertionOrderReservationTypeEnum;
    /**
     * Output only. The timestamp when the insertion order was last updated. Assigned by the system.
     */
    updateTime?: string;
}
