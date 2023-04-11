import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class RoutesV2PhoneNumber extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * The date that this phone number was assigned an Inbound Processing Region, given in ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * The date that the Inbound Processing Region was updated for this phone number, given in ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * A human readable description of the Inbound Processing Region assignments for this phone number, up to 64 characters.
     */
    friendlyName?: string;
    /**
     * The phone number in E.164 format
     */
    phoneNumber?: string;
    /**
     * A 34 character string that uniquely identifies the Inbound Processing Region assignments for this phone number.
     */
    sid?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * The Inbound Processing Region used for this phone number for voice.
     */
    voiceRegion?: string;
}
