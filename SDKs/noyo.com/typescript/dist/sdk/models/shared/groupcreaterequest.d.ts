import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GroupCreateRequestBusinessDetailsEmployerTypeEnum {
    ForeignGovernment = "foreign_government",
    PrivateSector = "private_sector",
    ReligiousEmployer = "religious_employer",
    StateGovernment = "state_government",
    TribalGovernment = "tribal_government"
}
export declare enum GroupCreateRequestBusinessDetailsEntityTypeEnum {
    CCorp = "c_corp",
    Llc = "llc",
    Llp = "llp",
    Partnership = "partnership",
    SCorp = "s_corp"
}
/**
 * Details about business or industry of the group
**/
export declare class GroupCreateRequestBusinessDetails extends SpeakeasyBase {
    companyDescription?: string;
    dateEstablished?: Date;
    employerType?: GroupCreateRequestBusinessDetailsEmployerTypeEnum;
    entityType?: GroupCreateRequestBusinessDetailsEntityTypeEnum;
}
/**
 * General details about the group insurance offerings
**/
export declare class GroupCreateRequestInsuranceDetails extends SpeakeasyBase {
    isErisaCompliant?: boolean;
    isErisaSubject?: boolean;
}
export declare class GroupCreateRequest extends SpeakeasyBase {
    businessDetails?: GroupCreateRequestBusinessDetails;
    dbaName?: string;
    federalEin?: string;
    insuranceDetails?: GroupCreateRequestInsuranceDetails;
    name: string;
    organizationId?: string;
    sicCode?: string;
}
