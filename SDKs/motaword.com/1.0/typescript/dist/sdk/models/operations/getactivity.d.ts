import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetActivityRequest extends SpeakeasyBase {
    /**
     * Activity ID
     */
    activityId: number;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class GetActivityResponse extends SpeakeasyBase {
    /**
     * Activity model
     */
    activity?: shared.Activity;
    contentType: string;
    /**
     * ProjectActivityNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
