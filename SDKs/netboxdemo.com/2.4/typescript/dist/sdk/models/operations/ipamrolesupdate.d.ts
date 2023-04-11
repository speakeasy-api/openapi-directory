import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamRolesUpdateRequest extends SpeakeasyBase {
    roleInput: shared.RoleInput;
    /**
     * A unique integer value identifying this role.
     */
    id: number;
}
export declare class IpamRolesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
