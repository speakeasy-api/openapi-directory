import { SpeakeasyBase } from "../../../internal/utils";
export declare class CadenceMembershipCounts extends SpeakeasyBase {
    /**
     * The number of times emails sent from the cadence to the person bounced
     */
    bounces?: number;
    /**
     * The number of times a call was logged from the cadence to the person
     */
    calls?: number;
    /**
     * The number of times emails sent from the cadence to the person were clicked
     */
    clicks?: number;
    /**
     * The number of times emails sent from the cadence to the person were replied to
     */
    replies?: number;
    /**
     * The number of times emails were sent from the cadence to the person
     */
    sentEmails?: number;
    /**
     * The number of times emails sent from the cadence to the person were opened
     */
    views?: number;
}
