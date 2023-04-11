import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmUsersRequest extends SpeakeasyBase {
    briefRepresentation?: boolean;
    email?: string;
    first?: number;
    firstName?: string;
    lastName?: string;
    /**
     * Maximum results size (defaults to 100)
     */
    max?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * A String contained in username, first or last name, or email
     */
    search?: string;
    username?: string;
}
export declare class GetRealmUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    userRepresentations?: shared.UserRepresentation[];
}
