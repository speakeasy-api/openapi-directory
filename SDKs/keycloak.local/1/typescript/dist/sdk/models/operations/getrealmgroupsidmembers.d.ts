import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmGroupsIdMembersRequest extends SpeakeasyBase {
    /**
     * Only return basic information (only guaranteed to return id, username, created, first and last name,
     *
     * @remarks
     *  email, enabled state, email verification state, federation link, and access.
     *  Note that it means that namely user attributes, required actions, and not before are not returned.)
     */
    briefRepresentation?: boolean;
    /**
     * Pagination offset
     */
    first?: number;
    id: string;
    /**
     * Maximum results size (defaults to 100)
     */
    max?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmGroupsIdMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    userRepresentations?: shared.UserRepresentation[];
}
