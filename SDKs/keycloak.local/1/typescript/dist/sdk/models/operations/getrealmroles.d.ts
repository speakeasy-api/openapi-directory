import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmRolesRequest extends SpeakeasyBase {
    briefRepresentation?: boolean;
    first?: number;
    max?: number;
    /**
     * realm name (not id!)
     */
    realm: string;
    search?: string;
}
export declare class GetRealmRolesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    roleRepresentations?: shared.RoleRepresentation[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
