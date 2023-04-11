import { SpeakeasyBase } from "../../../internal/utils";
export declare class InvitedVendor extends SpeakeasyBase {
    /**
     * Action to be taken
     */
    action?: string;
    /**
     * Email opening rate of the vendor
     */
    emailOpenRate?: number;
    /**
     * Did the vendor enter the given project
     */
    isEntered?: boolean;
    /**
     * Is vendor get ever paid?
     */
    isGetPaid?: boolean;
    /**
     * Did the vendor work on the given project
     */
    isWorked?: boolean;
    /**
     * Vendors working status in any project
     */
    isWorkedInAnyProject?: boolean;
    /**
     * Last project date
     */
    lastProjectDate?: Date;
    /**
     * Project translation percentage when interacted with the vendor
     */
    projectStatusWhenInteracted?: number;
    /**
     * Registration date
     */
    registrationDate?: Date;
    /**
     * Responsiveness of the vendor
     */
    responsiveness?: number;
    /**
     * Id in the Users
     */
    userId?: number;
    /**
     * Id in the Vendors
     */
    vendorId?: number;
    /**
     * The name of the vendor
     */
    vendorName?: string;
    /**
     * Type of the vendor in the given project namely translator or proofreader
     */
    vendorType?: string;
}
