import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TokenResourceAttributesTokenTypeEnum {
    Bearer = "bearer"
}
export declare class TokenResourceAttributes extends SpeakeasyBase {
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
    tokenType: TokenResourceAttributesTokenTypeEnum;
}
export declare enum TokenResourceRelationshipsGroupsDataTypeEnum {
    Group = "group"
}
export declare class TokenResourceRelationshipsGroupsData extends SpeakeasyBase {
    id: string;
    type: TokenResourceRelationshipsGroupsDataTypeEnum;
}
export declare class TokenResourceRelationshipsGroupsLinks extends SpeakeasyBase {
    related: string;
}
export declare class TokenResourceRelationshipsGroups extends SpeakeasyBase {
    data: TokenResourceRelationshipsGroupsData[];
    links: TokenResourceRelationshipsGroupsLinks;
}
export declare enum TokenResourceRelationshipsOrganizationDataTypeEnum {
    Organization = "organization"
}
export declare class TokenResourceRelationshipsOrganizationData extends SpeakeasyBase {
    id: string;
    type: TokenResourceRelationshipsOrganizationDataTypeEnum;
}
export declare class TokenResourceRelationshipsOrganizationLinks extends SpeakeasyBase {
    related: string;
}
export declare class TokenResourceRelationshipsOrganization extends SpeakeasyBase {
    data: TokenResourceRelationshipsOrganizationData;
    links: TokenResourceRelationshipsOrganizationLinks;
}
export declare class TokenResourceRelationships extends SpeakeasyBase {
    groups?: TokenResourceRelationshipsGroups;
    organization?: TokenResourceRelationshipsOrganization;
}
export declare enum TokenResourceTypeEnum {
    Token = "token"
}
export declare class TokenResource extends SpeakeasyBase {
    attributes?: TokenResourceAttributes;
    id: string;
    relationships?: TokenResourceRelationships;
    type: TokenResourceTypeEnum;
}
