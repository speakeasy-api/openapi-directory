import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugMembersMemberSlugSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class GetWorkspaceSlugMembersMemberSlugRequest extends SpeakeasyBase {
    memberSlug: string;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugMembersMemberSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
