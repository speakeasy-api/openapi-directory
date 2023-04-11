import { SpeakeasyBase } from "../../../internal/utils";
import { PayorAddressV2 } from "./payoraddressv2";
import { TransmissionTypes2 } from "./transmissiontypes2";
/**
 * Get Payor Details
 */
export declare class PayorV2 extends SpeakeasyBase {
    address?: PayorAddressV2;
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
    includesReports?: boolean;
    /**
     * The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC
     */
    kycState?: string;
    /**
     * The payor’s language preference. Must be one of [EN, FR]
     */
    language?: string;
    managingPayees?: boolean;
    /**
     * Whether or not the payor has been manually locked by the backoffice.
     */
    manualLockout?: boolean;
    maxMasterPayorAdmins?: number;
    /**
     * Is Open Banking supported for this payor
     */
    openBankingEnabled?: boolean;
    /**
     * The grace period for paying payees in days.
     */
    payeeGracePeriodDays?: number;
    /**
     * Whether grace period processing is enabled.
     */
    payeeGracePeriodProcessingEnabled?: boolean;
    /**
     * The id of the payment rails
     */
    paymentRails?: string;
    payorId: string;
    /**
     * The name of the payor.
     */
    payorName: string;
    /**
     * A unique identifier that an external system uses to reference the payor in their system
     */
    payorXid?: string;
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
     * The source of the payorXid, default is null which means Velo
     */
    provider?: string;
    /**
     * Whether or not the payor has opted-out of reminder emails being sent.
     */
    reminderEmailsOptOut?: boolean;
    /**
     * The payor’s supported remote systems by id
     */
    remoteSystemIds?: string[];
    /**
     * The payor’s support contact email address.
     */
    supportContact?: string;
    transmissionTypes?: TransmissionTypes2;
    /**
     * USD in minor units
     */
    usdTxnValueReportingThreshold?: number;
    wuCustomerId?: string;
}
