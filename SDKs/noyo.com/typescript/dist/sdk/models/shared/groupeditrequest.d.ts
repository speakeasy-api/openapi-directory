import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GroupEditRequestBusinessDetailsEmployerTypeEnum {
    ForeignGovernment = "foreign_government",
    PrivateSector = "private_sector",
    ReligiousEmployer = "religious_employer",
    StateGovernment = "state_government",
    TribalGovernment = "tribal_government"
}
export declare enum GroupEditRequestBusinessDetailsEntityTypeEnum {
    CCorp = "c_corp",
    Llc = "llc",
    Llp = "llp",
    Partnership = "partnership",
    SCorp = "s_corp"
}
/**
 * Details about business or industry of the group
**/
export declare class GroupEditRequestBusinessDetails extends SpeakeasyBase {
    companyDescription?: string;
    dateEstablished?: Date;
    employerType?: GroupEditRequestBusinessDetailsEmployerTypeEnum;
    entityType?: GroupEditRequestBusinessDetailsEntityTypeEnum;
}
/**
 * General details about the group insurance offerings
**/
export declare class GroupEditRequestInsuranceDetails extends SpeakeasyBase {
    isErisaCompliant?: boolean;
    isErisaSubject?: boolean;
}
export declare class GroupEditRequest extends SpeakeasyBase {
    businessDetails?: GroupEditRequestBusinessDetails;
    dbaName?: string;
    federalEin?: string;
    insuranceDetails?: GroupEditRequestInsuranceDetails;
    name?: string;
    sicCode?: string;
}
