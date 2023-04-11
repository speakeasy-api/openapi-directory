import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWorkspaceSlugMembersMemberSlugActivitiesIdSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PutWorkspaceSlugMembersMemberSlugActivitiesIdRequest extends SpeakeasyBase {
    activity?: shared.Activity;
    id: string;
    memberSlug: string;
    workspaceSlug: string;
}
export declare class PutWorkspaceSlugMembersMemberSlugActivitiesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
