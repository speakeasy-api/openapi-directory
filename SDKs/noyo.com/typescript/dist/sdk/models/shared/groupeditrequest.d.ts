import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type or classification of the group as an employer
 */
export declare enum GroupEditRequestBusinessDetailsEmployerTypeEnum {
    ForeignGovernment = "foreign_government",
    PrivateSector = "private_sector",
    ReligiousEmployer = "religious_employer",
    StateGovernment = "state_government",
    TribalGovernment = "tribal_government"
}
/**
 * Type of legal or business entity
 */
export declare enum GroupEditRequestBusinessDetailsEntityTypeEnum {
    CCorp = "c_corp",
    Llc = "llc",
    Llp = "llp",
    Partnership = "partnership",
    SCorp = "s_corp"
}
/**
 * Details about business or industry of the group
 */
export declare class GroupEditRequestBusinessDetails extends SpeakeasyBase {
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
    employerType?: GroupEditRequestBusinessDetailsEmployerTypeEnum;
    /**
     * Type of legal or business entity
     */
    entityType?: GroupEditRequestBusinessDetailsEntityTypeEnum;
}
/**
 * General details about the group insurance offerings
 */
export declare class GroupEditRequestInsuranceDetails extends SpeakeasyBase {
    /**
     * True if the group is compliant with ERISA regulation
     */
    isErisaCompliant?: boolean;
    /**
     * True if company is subject to ERISA regulation
     */
    isErisaSubject?: boolean;
}
export declare class GroupEditRequest extends SpeakeasyBase {
    /**
     * Details about business or industry of the group
     */
    businessDetails?: GroupEditRequestBusinessDetails;
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
    insuranceDetails?: GroupEditRequestInsuranceDetails;
    /**
     * Name of the group/company
     */
    name?: string;
    /**
     * SIC Code for the group/company
     */
    sicCode?: string;
}
