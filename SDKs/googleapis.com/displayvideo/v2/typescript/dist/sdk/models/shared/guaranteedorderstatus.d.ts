import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether or not the guaranteed order is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`.
 */
export declare enum GuaranteedOrderStatusEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * The status settings of the guaranteed order.
 */
export declare class GuaranteedOrderStatusInput extends SpeakeasyBase {
    /**
     * The user-provided reason for pausing this guaranteed order. Must be UTF-8 encoded with a maximum length of 100 bytes. Only applicable when entity_status is set to `ENTITY_STATUS_PAUSED`.
     */
    entityPauseReason?: string;
    /**
     * Whether or not the guaranteed order is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`.
     */
    entityStatus?: GuaranteedOrderStatusEntityStatusEnum;
}
/**
 * Output only. The configuration status of the guaranteed order. Acceptable values are `PENDING` and `COMPLETED`. A guaranteed order must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve. Currently the configuration action can only be performed via UI.
 */
export declare enum GuaranteedOrderStatusConfigStatusEnum {
    GuaranteedOrderConfigStatusUnspecified = "GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Completed = "COMPLETED"
}
/**
 * The status settings of the guaranteed order.
 */
export declare class GuaranteedOrderStatus extends SpeakeasyBase {
    /**
     * Output only. The configuration status of the guaranteed order. Acceptable values are `PENDING` and `COMPLETED`. A guaranteed order must be configured (fill in the required fields, choose creatives, and select a default campaign) before it can serve. Currently the configuration action can only be performed via UI.
     */
    configStatus?: GuaranteedOrderStatusConfigStatusEnum;
    /**
     * The user-provided reason for pausing this guaranteed order. Must be UTF-8 encoded with a maximum length of 100 bytes. Only applicable when entity_status is set to `ENTITY_STATUS_PAUSED`.
     */
    entityPauseReason?: string;
    /**
     * Whether or not the guaranteed order is servable. Acceptable values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. Default value is `ENTITY_STATUS_ACTIVE`.
     */
    entityStatus?: GuaranteedOrderStatusEntityStatusEnum;
}
