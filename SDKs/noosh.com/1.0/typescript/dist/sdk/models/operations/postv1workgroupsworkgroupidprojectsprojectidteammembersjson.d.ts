import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonRequest extends SpeakeasyBase {
    contactUserVO?: shared.ContactUserVO;
    projectId: string;
    workgroupId: string;
}
export declare class PostV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersJsonResponse extends SpeakeasyBase {
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
