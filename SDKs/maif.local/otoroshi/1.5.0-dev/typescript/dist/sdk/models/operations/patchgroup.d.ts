import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchGroupSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PatchGroupRequest extends SpeakeasyBase {
    requestBody?: shared.Patch[];
    /**
     * The service group id
     */
    serviceGroupId: string;
}
export declare class PatchGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    group?: shared.Group;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
