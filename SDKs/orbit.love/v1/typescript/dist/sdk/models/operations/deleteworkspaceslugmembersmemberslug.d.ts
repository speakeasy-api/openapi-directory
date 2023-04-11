import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWorkspaceSlugMembersMemberSlugSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class DeleteWorkspaceSlugMembersMemberSlugRequest extends SpeakeasyBase {
    memberSlug: string;
    workspaceSlug: string;
}
export declare class DeleteWorkspaceSlugMembersMemberSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
