import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamRolesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this role.
     */
    id: number;
}
export declare class IpamRolesReadResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
