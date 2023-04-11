import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IpamRolesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this role.
     */
    id: number;
}
export declare class IpamRolesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
