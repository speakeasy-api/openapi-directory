import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTeamMemberOfProjectRawRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    projectId: string;
    workgroupId: string;
}
export declare class PostTeamMemberOfProjectRawResponse extends SpeakeasyBase {
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
    v1x1InvitedTeamMemberResultsVO?: shared.V1x1InvitedTeamMemberResultsVO;
}
