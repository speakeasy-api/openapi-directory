import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateMemberElectionRequest extends SpeakeasyBase {
    memberElectionCreateRequest: shared.MemberElectionCreateRequest;
    /**
     * The unique identifier of the coverage plan in Noyo
     */
    planId: string;
}
export declare class CreateMemberElectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the new Member Election
     */
    memberElectionResult?: shared.MemberElectionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
