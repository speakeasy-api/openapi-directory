import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostWorkspaceSlugActivitiesSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class PostWorkspaceSlugActivitiesRequest extends SpeakeasyBase {
    activityAndIdentity?: shared.ActivityAndIdentity;
    workspaceSlug: string;
}
export declare class PostWorkspaceSlugActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
