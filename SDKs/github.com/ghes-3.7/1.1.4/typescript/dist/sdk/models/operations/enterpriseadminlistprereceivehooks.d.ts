import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The property to sort the results by.
 */
export declare enum EnterpriseAdminListPreReceiveHooksSortEnum {
    Created = "created",
    Updated = "updated",
    Name = "name"
}
export declare class EnterpriseAdminListPreReceiveHooksRequest extends SpeakeasyBase {
    /**
     * The direction to sort the results by.
     */
    direction?: shared.DirectionEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The property to sort the results by.
     */
    sort?: EnterpriseAdminListPreReceiveHooksSortEnum;
}
export declare class EnterpriseAdminListPreReceiveHooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    preReceiveHooks?: shared.PreReceiveHook[];
}
