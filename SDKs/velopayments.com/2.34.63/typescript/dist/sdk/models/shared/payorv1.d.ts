import { SpeakeasyBase } from "../../../internal/utils";
import { PayorAddress } from "./payoraddress";
import { TransmissionTypes } from "./transmissiontypes";
/**
 * Get Payor Details
 */
export declare class PayorV1 extends SpeakeasyBase {
    address?: PayorAddress;
    /**
     * Whether or not the payor allows language choice in the UI.
     */
    allowsLanguageChoice?: boolean;
    /**
     * How the payor has chosen to refer to payees.
     */
    collectiveAlias?: string;
    /**
     * The payor’s 'Doing Business As' name.
     */
    dbaName?: string;
    /**
     * The funding account name to be used for the payor.
     */
    fundingAccountAccountName?: string;
    /**
     * The funding account number to be used for the payor.
     */
    fundingAccountAccountNumber?: string;
    /**
     * The funding account routing number to be used for the payor.
     */
    fundingAccountRoutingNumber?: string;
    includesReports?: boolean;
    /**
     * The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC
     */
    kycState?: string;
    /**
     * The payor’s language preference. Must be one of [EN, FR].
     */
    language?: string;
    /**
     * Whether or not the payor has been manually locked by the backoffice.
     */
    manualLockout?: boolean;
    maxMasterPayorAdmins?: number;
    /**
     * The grace period for paying payees in days.
     */
    payeeGracePeriodDays?: number;
    /**
     * Whether grace period processing is enabled.
     */
    payeeGracePeriodProcessingEnabled?: boolean;
    payorId?: string;
    /**
     * The name of the payor.
     */
    payorName: string;
    /**
     * Primary contact email for the payor.
     */
    primaryContactEmail?: string;
    /**
     * Name of primary contact for the payor.
     */
    primaryContactName?: string;
    /**
     * Primary contact phone number for the payor.
     */
    primaryContactPhone?: string;
    /**
     * Whether or not the payor has opted-out of reminder emails being sent.
     */
    reminderEmailsOptOut?: boolean;
    /**
     * The payor’s support contact email address.
     */
    supportContact?: string;
    transmissionTypes?: TransmissionTypes;
}
