import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAutomaticInvitationListRequest extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetAutomaticInvitationListResponse extends SpeakeasyBase {
    /**
     * Successful retrieval
     */
    automaticInvitationsListVO?: shared.AutomaticInvitationsListVO;
    body?: Uint8Array;
    contentType: string;
    /**
     * Internal server error
     */
    httpStatusVO?: shared.HTTPStatusVO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
