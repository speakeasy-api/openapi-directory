import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMemberElectionPathParams extends SpeakeasyBase {
    planId: string;
}
export declare class CreateMemberElectionRequest extends SpeakeasyBase {
    pathParams: CreateMemberElectionPathParams;
    request: shared.MemberElectionCreateRequest;
}
export declare class CreateMemberElectionResponse extends SpeakeasyBase {
    contentType: string;
    memberElectionResult?: shared.MemberElectionResult;
    statusCode: number;
}
