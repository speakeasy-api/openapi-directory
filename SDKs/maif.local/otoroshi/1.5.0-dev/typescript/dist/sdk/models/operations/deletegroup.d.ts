import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteGroupRequest extends SpeakeasyBase {
    /**
     * The service group id
     */
    serviceGroupId: string;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
