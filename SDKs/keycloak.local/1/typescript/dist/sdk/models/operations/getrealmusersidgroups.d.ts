import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmUsersIdGroupsRequest extends SpeakeasyBase {
    briefRepresentation?: boolean;
    first?: number;
    /**
     * User id
     */
    id: string;
    max?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
    search?: string;
}
export declare class GetRealmUsersIdGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    groupRepresentations?: shared.GroupRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
