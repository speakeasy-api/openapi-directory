import { SpeakeasyBase } from "../../../internal/utils";
import { ExchangeConfig } from "./exchangeconfig";
import { PartnerAdServerConfig } from "./partneradserverconfig";
import { PartnerDataAccessConfig } from "./partnerdataaccessconfig";
import { PartnerGeneralConfig } from "./partnergeneralconfig";
/**
 * Output only. The status of the partner.
 */
export declare enum PartnerEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * A single partner in Display & Video 360 (DV360).
 */
export declare class Partner extends SpeakeasyBase {
    /**
     * Ad server related settings of a partner.
     */
    adServerConfig?: PartnerAdServerConfig;
    /**
     * Settings that control how partner related data may be accessed.
     */
    dataAccessConfig?: PartnerDataAccessConfig;
    /**
     * The display name of the partner. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Output only. The status of the partner.
     */
    entityStatus?: PartnerEntityStatusEnum;
    /**
     * Settings that control which exchanges are enabled for a partner.
     */
    exchangeConfig?: ExchangeConfig;
    /**
     * General settings of a partner.
     */
    generalConfig?: PartnerGeneralConfig;
    /**
     * Output only. The resource name of the partner.
     */
    name?: string;
    /**
     * Output only. The unique ID of the partner. Assigned by the system.
     */
    partnerId?: string;
    /**
     * Output only. The timestamp when the partner was last updated. Assigned by the system.
     */
    updateTime?: string;
}
