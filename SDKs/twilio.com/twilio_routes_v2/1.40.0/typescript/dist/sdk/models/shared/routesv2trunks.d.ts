import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class RoutesV2Trunks extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * The date that this SIP Trunk was assigned an Inbound Processing Region, given in ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * The date that the Inbound Processing Region was updated for this SIP Trunk, given in ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * A human readable description of the Inbound Processing Region assignments for this SIP Trunk, up to 64 characters.
     */
    friendlyName?: string;
    /**
     * A 34 character string that uniquely identifies the Inbound Processing Region assignments for this SIP Trunk.
     */
    sid?: string;
    /**
     * The absolute URL of the SIP Trunk
     */
    sipTrunkDomain?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * The Inbound Processing Region used for this SIP Trunk for voice.
     */
    voiceRegion?: string;
}
