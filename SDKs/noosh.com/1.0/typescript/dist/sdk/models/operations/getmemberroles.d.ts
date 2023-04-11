import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMemberRolesRequest extends SpeakeasyBase {
    projectId: string;
    userId: string;
    workgroupId: string;
}
export declare class GetMemberRolesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * There are not any result matching your search condition
     */
    httpStatusVO?: shared.HTTPStatusVO;
    /**
     * Successful retrieval
     */
    roleListVO?: shared.RoleListVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
