import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmRolesRequest extends SpeakeasyBase {
    roleRepresentation: shared.RoleRepresentation;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
