import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignManagerIds } from "./campaignmanagerids";
import { Dv3Ids } from "./dv3ids";
/**
 * The type of event to insert.
 */
export declare enum CustomEventInsertInsertEventTypeEnum {
    Unknown = "UNKNOWN",
    Impression = "IMPRESSION",
    Click = "CLICK"
}
/**
 * Custom event to be inserted.
 */
export declare class CustomEventInsert extends SpeakeasyBase {
    /**
     * Campaign Manager IDs related to the custom event.
     */
    cmDimensions?: CampaignManagerIds;
    /**
     * DV360 IDs related to the custom event.
     */
    dv3Dimensions?: Dv3Ids;
    /**
     * The type of event to insert.
     */
    insertEventType?: CustomEventInsertInsertEventTypeEnum;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventInsert".
     */
    kind?: string;
    /**
     * The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with mobileDeviceId, and at least one of the two fields is required.
     */
    matchId?: string;
    /**
     * The mobile device ID. This field is mutually exclusive with matchId, and at least one of the two fields is required.
     */
    mobileDeviceId?: string;
}
