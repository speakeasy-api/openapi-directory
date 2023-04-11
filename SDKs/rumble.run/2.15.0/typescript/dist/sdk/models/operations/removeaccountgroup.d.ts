import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveAccountGroupSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveAccountGroupRequest extends SpeakeasyBase {
    /**
     * UUID of the group
     */
    groupId: string;
}
export declare class RemoveAccountGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
