import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetActivitiesRequest extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetActivitiesResponse extends SpeakeasyBase {
    /**
     * A list of activity models
     */
    activityList?: shared.ActivityList;
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
