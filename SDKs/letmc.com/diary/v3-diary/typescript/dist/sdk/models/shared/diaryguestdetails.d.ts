import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Submission Model - Structure to submit appointment guest details
 */
export declare class DiaryGuestDetails extends SpeakeasyBase {
    /**
     * Marketing Correspondence Preferences
     */
    allowMarketingCorrespondence?: boolean;
    /**
     * Email address
     */
    emailAddress?: string;
    /**
     * Forename
     */
    forename?: string;
    /**
     * Mobile phone
     */
    mobilePhone?: string;
    /**
     * The unique identifier of a user, only submit this is known
     */
    oid?: string;
    /**
     * Surname
     */
    surname?: string;
}
