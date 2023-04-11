import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminListProvisionedGroupsEnterpriseRequest extends SpeakeasyBase {
    /**
     * Used for pagination: the number of results to return per page.
     */
    count?: number;
    /**
     * Excludes the specified attribute from being returned in the results. Using this parameter can speed up response time.
     */
    excludedAttributes?: string;
    /**
     * If specified, only results that match the specified filter will be returned. Multiple filters are not supported. Possible filters are `externalId`, `id`, and `displayName`. For example, `?filter="externalId eq '9138790-10932-109120392-12321'"`.
     */
    filter?: string;
    /**
     * Used for pagination: the starting index of the first result to return when paginating through values.
     */
    startIndex?: number;
}
export declare class EnterpriseAdminListProvisionedGroupsEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success, either groups were found or not found
     */
    scimEnterpriseGroupList?: shared.ScimEnterpriseGroupList;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
}
