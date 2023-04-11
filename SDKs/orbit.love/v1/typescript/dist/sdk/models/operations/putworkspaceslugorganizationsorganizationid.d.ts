import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWorkspaceSlugOrganizationsOrganizationIdSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PutWorkspaceSlugOrganizationsOrganizationIdRequest extends SpeakeasyBase {
    organization?: shared.Organization;
    organizationId: string;
    workspaceSlug: string;
}
export declare class PutWorkspaceSlugOrganizationsOrganizationIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
