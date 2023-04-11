import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditMemberElectionRequest extends SpeakeasyBase {
    memberElectionEditRequest: shared.MemberElectionEditRequest;
    /**
     * The unique identifier of the member election in Noyo
     */
    memberElectionId: string;
    /**
     * The current version identifier of the member election
     */
    version: string;
}
export declare class EditMemberElectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the modified Member Election
     */
    memberElectionResult?: shared.MemberElectionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
