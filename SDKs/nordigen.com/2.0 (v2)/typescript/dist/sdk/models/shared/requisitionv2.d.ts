import { SpeakeasyBase } from "../../../internal/utils";
/**
 * status of this requisition
 */
export declare enum RequisitionV2RequisitionStatusEnum {
    Cr = "CR",
    Id = "ID",
    Ln = "LN",
    Rj = "RJ",
    Er = "ER",
    Su = "SU",
    Ex = "EX",
    Gc = "GC",
    Ua = "UA",
    Ga = "GA",
    Sa = "SA"
}
/**
 * RequisitionV2Serializer.
 */
export declare class RequisitionV2 extends SpeakeasyBase {
    /**
     * option to enable account selection view for the end user
     */
    accountSelection?: boolean;
    /**
     * array of account IDs retrieved within a scope of this requisition
     */
    accounts?: string[];
    /**
     * EUA associated with this requisition
     */
    agreement?: string;
    /**
     * The date & time at which the requisition was created.
     */
    created?: Date;
    id?: string;
    /**
     * an Institution ID for this Requisition
     */
    institutionId: string;
    /**
     * link to initiate authorization with Institution
     */
    link?: string;
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
     * status of this requisition
     */
    status?: RequisitionV2RequisitionStatusEnum;
    /**
     * A two-letter country code (ISO 639-1)
     */
    userLanguage?: string;
}
