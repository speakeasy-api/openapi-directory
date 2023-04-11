import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMemberElectionRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the member election
     */
    memberElectionId: string;
}
export declare class GetMemberElectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response - Returns the member elections
     */
    memberElectionResult?: shared.MemberElectionResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
