import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrganizationResourceAttributes extends SpeakeasyBase {
    name: string;
}
export declare class OrganizationResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare enum OrganizationResourceTypeEnum {
    Organization = "organization"
}
export declare class OrganizationResource extends SpeakeasyBase {
    attributes: OrganizationResourceAttributes;
    id: string;
    links?: OrganizationResourceLinks;
    type: OrganizationResourceTypeEnum;
}
