import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditMemberElectionPathParams extends SpeakeasyBase {
    memberElectionId: string;
    version: string;
}
export declare class EditMemberElectionRequest extends SpeakeasyBase {
    pathParams: EditMemberElectionPathParams;
    request: shared.MemberElectionEditRequest;
}
export declare class EditMemberElectionResponse extends SpeakeasyBase {
    contentType: string;
    memberElectionResult?: shared.MemberElectionResult;
    statusCode: number;
}
