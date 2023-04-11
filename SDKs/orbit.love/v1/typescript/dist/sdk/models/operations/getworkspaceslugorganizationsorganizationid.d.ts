import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugOrganizationsOrganizationIdSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class GetWorkspaceSlugOrganizationsOrganizationIdRequest extends SpeakeasyBase {
    organizationId: string;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugOrganizationsOrganizationIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
