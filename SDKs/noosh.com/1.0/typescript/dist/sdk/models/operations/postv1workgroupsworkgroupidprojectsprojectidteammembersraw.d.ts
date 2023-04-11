import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    projectId: string;
    workgroupId: string;
}
export declare class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Invalid data
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful retrieval
     */
    teamMemberBaseInfVO?: shared.TeamMemberBaseInfVO;
}
