import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWorkspaceSlugMembersMemberSlugSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PutWorkspaceSlugMembersMemberSlugRequest extends SpeakeasyBase {
    member?: shared.Member;
    memberSlug: string;
    workspaceSlug: string;
}
export declare class PutWorkspaceSlugMembersMemberSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
