import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServiceGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ServiceGroupRequest extends SpeakeasyBase {
    /**
     * The service group id
     */
    serviceGroupId: string;
}
export declare class ServiceGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
