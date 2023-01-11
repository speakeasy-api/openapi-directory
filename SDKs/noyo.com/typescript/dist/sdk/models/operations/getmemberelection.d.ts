import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMemberElectionPathParams extends SpeakeasyBase {
    memberElectionId: string;
}
export declare class GetMemberElectionRequest extends SpeakeasyBase {
    pathParams: GetMemberElectionPathParams;
}
export declare class GetMemberElectionResponse extends SpeakeasyBase {
    contentType: string;
    memberElectionResult?: shared.MemberElectionResult;
    statusCode: number;
}
