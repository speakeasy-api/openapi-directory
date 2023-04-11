import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugOrganizationsOrganizationIdMembersSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare enum GetWorkspaceSlugOrganizationsOrganizationIdMembersItemsEnum {
    Ten = "10",
    Fifty = "50",
    OneHundred = "100"
}
export declare class GetWorkspaceSlugOrganizationsOrganizationIdMembersRequest extends SpeakeasyBase {
    items?: GetWorkspaceSlugOrganizationsOrganizationIdMembersItemsEnum;
    organizationId: string;
    page?: string;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugOrganizationsOrganizationIdMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
