import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RequisitionV2Serializer.
 */
export declare class RequisitionV2Request extends SpeakeasyBase {
    /**
     * option to enable account selection view for the end user
     */
    accountSelection?: boolean;
    /**
     * EUA associated with this requisition
     */
    agreement?: string;
    /**
     * an Institution ID for this Requisition
     */
    institutionId: string;
    /**
     * redirect URL to your application after end-user authorization with ASPSP
     */
    redirect: string;
    /**
     * enable redirect back to the client after account list received
     */
    redirectImmediate?: boolean;
    /**
     * additional ID to identify the end user
     */
    reference?: string;
    /**
     * optional SSN field to verify ownership of the account
     */
    ssn?: string;
    /**
     * A two-letter country code (ISO 639-1)
     */
    userLanguage?: string;
}
