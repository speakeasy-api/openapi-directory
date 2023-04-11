import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostWorkspaceSlugMembersMemberSlugActivitiesSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PostWorkspaceSlugMembersMemberSlugActivitiesRequest extends SpeakeasyBase {
    requestBody?: any;
    memberSlug: string;
    workspaceSlug: string;
}
export declare class PostWorkspaceSlugMembersMemberSlugActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
