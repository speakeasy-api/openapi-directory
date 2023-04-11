import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type or classification of the group as an employer
 */
export declare enum GroupCreateRequestBusinessDetailsEmployerTypeEnum {
    ForeignGovernment = "foreign_government",
    PrivateSector = "private_sector",
    ReligiousEmployer = "religious_employer",
    StateGovernment = "state_government",
    TribalGovernment = "tribal_government"
}
/**
 * Type of legal or business entity
 */
export declare enum GroupCreateRequestBusinessDetailsEntityTypeEnum {
    CCorp = "c_corp",
    Llc = "llc",
    Llp = "llp",
    Partnership = "partnership",
    SCorp = "s_corp"
}
/**
 * Details about business or industry of the group
 */
export declare class GroupCreateRequestBusinessDetails extends SpeakeasyBase {
    /**
     * General description of the type of business
     */
    companyDescription?: string;
    /**
     * Date the company was established
     */
    dateEstablished?: Date;
    /**
     * Type or classification of the group as an employer
     */
    employerType?: GroupCreateRequestBusinessDetailsEmployerTypeEnum;
    /**
     * Type of legal or business entity
     */
    entityType?: GroupCreateRequestBusinessDetailsEntityTypeEnum;
}
/**
 * General details about the group insurance offerings
 */
export declare class GroupCreateRequestInsuranceDetails extends SpeakeasyBase {
    /**
     * True if the group is compliant with ERISA regulation
     */
    isErisaCompliant?: boolean;
    /**
     * True if company is subject to ERISA regulation
     */
    isErisaSubject?: boolean;
}
export declare class GroupCreateRequest extends SpeakeasyBase {
    /**
     * Details about business or industry of the group
     */
    businessDetails?: GroupCreateRequestBusinessDetails;
    /**
     * DBA name for the company, if applicable
     */
    dbaName?: string;
    /**
     * Federal Employer Identification Number for the group/company
     */
    federalEin?: string;
    /**
     * General details about the group insurance offerings
     */
    insuranceDetails?: GroupCreateRequestInsuranceDetails;
    /**
     * Name of the group/company
     */
    name: string;
    /**
     * Unique identifier of the platform or broker organization in the Noyo system
     */
    organizationId?: string;
    /**
     * SIC Code for the group/company
     */
    sicCode?: string;
}
