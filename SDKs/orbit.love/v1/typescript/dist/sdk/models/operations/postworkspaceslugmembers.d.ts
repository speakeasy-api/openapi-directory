import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWorkspaceSlugMembersSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PostWorkspaceSlugMembersRequest extends SpeakeasyBase {
    memberAndIdentity?: shared.MemberAndIdentity;
    workspaceSlug: string;
}
export declare class PostWorkspaceSlugMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
