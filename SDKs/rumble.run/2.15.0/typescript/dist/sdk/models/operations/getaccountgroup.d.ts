import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountGroupSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountGroupRequest extends SpeakeasyBase {
    /**
     * UUID of the group
     */
    groupId: string;
}
export declare class GetAccountGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
