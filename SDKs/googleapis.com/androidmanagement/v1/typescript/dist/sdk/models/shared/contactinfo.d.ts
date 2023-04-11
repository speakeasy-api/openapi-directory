import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contact details for managed Google Play enterprises.
 */
export declare class ContactInfo extends SpeakeasyBase {
    /**
     * Email address for a point of contact, which will be used to send important announcements related to managed Google Play.
     */
    contactEmail?: string;
    /**
     * The email of the data protection officer. The email is validated but not verified.
     */
    dataProtectionOfficerEmail?: string;
    /**
     * The name of the data protection officer.
     */
    dataProtectionOfficerName?: string;
    /**
     * The phone number of the data protection officer The phone number is validated but not verified.
     */
    dataProtectionOfficerPhone?: string;
    /**
     * The email of the EU representative. The email is validated but not verified.
     */
    euRepresentativeEmail?: string;
    /**
     * The name of the EU representative.
     */
    euRepresentativeName?: string;
    /**
     * The phone number of the EU representative. The phone number is validated but not verified.
     */
    euRepresentativePhone?: string;
}
