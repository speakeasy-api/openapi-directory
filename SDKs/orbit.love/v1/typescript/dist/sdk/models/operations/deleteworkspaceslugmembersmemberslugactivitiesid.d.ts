import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWorkspaceSlugMembersMemberSlugActivitiesIdSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class DeleteWorkspaceSlugMembersMemberSlugActivitiesIdRequest extends SpeakeasyBase {
    id: string;
    memberSlug: string;
    workspaceSlug: string;
}
export declare class DeleteWorkspaceSlugMembersMemberSlugActivitiesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
