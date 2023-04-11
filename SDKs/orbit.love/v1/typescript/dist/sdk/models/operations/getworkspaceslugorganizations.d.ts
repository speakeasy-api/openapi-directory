import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugOrganizationsSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare enum GetWorkspaceSlugOrganizationsDirectionEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare enum GetWorkspaceSlugOrganizationsItemsEnum {
    Ten = "10",
    Fifty = "50",
    OneHundred = "100"
}
export declare enum GetWorkspaceSlugOrganizationsSortEnum {
    Name = "name",
    Website = "website",
    MembersCount = "members_count",
    EmployeesCount = "employees_count"
}
export declare class GetWorkspaceSlugOrganizationsRequest extends SpeakeasyBase {
    direction?: GetWorkspaceSlugOrganizationsDirectionEnum;
    items?: GetWorkspaceSlugOrganizationsItemsEnum;
    page?: string;
    query?: string;
    sort?: GetWorkspaceSlugOrganizationsSortEnum;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
