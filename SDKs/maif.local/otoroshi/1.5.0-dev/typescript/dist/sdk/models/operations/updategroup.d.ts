import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateGroupRequest extends SpeakeasyBase {
    group?: shared.Group;
    /**
     * The service group id
     */
    serviceGroupId: string;
}
export declare class UpdateGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
