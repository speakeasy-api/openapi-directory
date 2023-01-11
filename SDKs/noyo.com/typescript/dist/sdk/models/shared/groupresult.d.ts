import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GroupResultBusinessDetailsEmployerTypeEnum {
    ForeignGovernment = "foreign_government",
    PrivateSector = "private_sector",
    ReligiousEmployer = "religious_employer",
    StateGovernment = "state_government",
    TribalGovernment = "tribal_government"
}
export declare enum GroupResultBusinessDetailsEntityTypeEnum {
    CCorp = "c_corp",
    Llc = "llc",
    Llp = "llp",
    Partnership = "partnership",
    SCorp = "s_corp"
}
/**
 * Details about business or industry of the group
**/
export declare class GroupResultBusinessDetails extends SpeakeasyBase {
    companyDescription?: string;
    dateEstablished?: string;
    employerType?: GroupResultBusinessDetailsEmployerTypeEnum;
    entityType?: GroupResultBusinessDetailsEntityTypeEnum;
}
/**
 * General details about the group insurance offerings
**/
export declare class GroupResultInsuranceDetails extends SpeakeasyBase {
    isErisaCompliant?: boolean;
    isErisaSubject?: boolean;
}
export declare class GroupResult extends SpeakeasyBase {
    businessDetails?: GroupResultBusinessDetails;
    created: number;
    dbaName?: string;
    federalEin?: string;
    id: string;
    insuranceDetails?: GroupResultInsuranceDetails;
    modified: number;
    name: string;
    organizationId: string;
    sicCode?: string;
    version: string;
}
