import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type or classification of the group as an employer
 */
export declare enum GroupResultBusinessDetailsEmployerTypeEnum {
    ForeignGovernment = "foreign_government",
    PrivateSector = "private_sector",
    ReligiousEmployer = "religious_employer",
    StateGovernment = "state_government",
    TribalGovernment = "tribal_government"
}
/**
 * Type of legal or business entity
 */
export declare enum GroupResultBusinessDetailsEntityTypeEnum {
    CCorp = "c_corp",
    Llc = "llc",
    Llp = "llp",
    Partnership = "partnership",
    SCorp = "s_corp"
}
/**
 * Details about business or industry of the group
 */
export declare class GroupResultBusinessDetails extends SpeakeasyBase {
    /**
     * General description of the type of business
     */
    companyDescription?: string;
    /**
     * Date the company was established
     */
    dateEstablished?: string;
    /**
     * Type or classification of the group as an employer
     */
    employerType?: GroupResultBusinessDetailsEmployerTypeEnum;
    /**
     * Type of legal or business entity
     */
    entityType?: GroupResultBusinessDetailsEntityTypeEnum;
}
/**
 * General details about the group insurance offerings
 */
export declare class GroupResultInsuranceDetails extends SpeakeasyBase {
    /**
     * True if the group is compliant with ERISA regulation
     */
    isErisaCompliant?: boolean;
    /**
     * True if company is subject to ERISA regulation
     */
    isErisaSubject?: boolean;
}
/**
 * Successful Response - Returns the new Group
 */
export declare class GroupResult extends SpeakeasyBase {
    /**
     * Details about business or industry of the group
     */
    businessDetails?: GroupResultBusinessDetails;
    /**
     * The date the record was created
     */
    created: number;
    /**
     * DBA name for the company, if applicable
     */
    dbaName?: string;
    /**
     * Federal Employer Identification Number for the group/company
     */
    federalEin?: string;
    /**
     * Unique identifier of the record in Noyo
     */
    id: string;
    /**
     * General details about the group insurance offerings
     */
    insuranceDetails?: GroupResultInsuranceDetails;
    /**
     * The date the record was last updated
     */
    modified: number;
    /**
     * Name of the group/company
     */
    name: string;
    /**
     * Unique identifier of the platform or broker organization in the Noyo system
     */
    organizationId: string;
    /**
     * SIC Code for the group/company
     */
    sicCode?: string;
    /**
     * Current version of the record
     */
    version: string;
}
