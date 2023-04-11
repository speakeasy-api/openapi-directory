import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort order for the response collection.
 */
export declare enum EnterpriseAdminListPreReceiveHooksForOrgSortEnum {
    Created = "created",
    Updated = "updated",
    Name = "name"
}
export declare class EnterpriseAdminListPreReceiveHooksForOrgRequest extends SpeakeasyBase {
    /**
     * One of `asc` (ascending) or `desc` (descending).
     */
    direction?: shared.DirectionEnum;
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * The sort order for the response collection.
     */
    sort?: EnterpriseAdminListPreReceiveHooksForOrgSortEnum;
}
export declare class EnterpriseAdminListPreReceiveHooksForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    orgPreReceiveHooks?: shared.OrgPreReceiveHook[];
}
