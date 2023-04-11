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
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
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
