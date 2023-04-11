import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugActivitiesIdSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class GetWorkspaceSlugActivitiesIdRequest extends SpeakeasyBase {
    id: string;
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugActivitiesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
