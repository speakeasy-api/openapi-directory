import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmAdminEventsRequest extends SpeakeasyBase {
    authClient?: string;
    authIpAddress?: string;
    authRealm?: string;
    /**
     * user id
     */
    authUser?: string;
    dateFrom?: string;
    dateTo?: string;
    first?: number;
    /**
     * Maximum results size (defaults to 100)
     */
    max?: number;
    operationTypes?: string[];
    /**
     * realm name (not id!)
     */
    realm: string;
    resourcePath?: string;
    resourceTypes?: string[];
}
export declare class GetRealmAdminEventsResponse extends SpeakeasyBase {
    /**
     * success
     */
    adminEventRepresentations?: shared.AdminEventRepresentation[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
