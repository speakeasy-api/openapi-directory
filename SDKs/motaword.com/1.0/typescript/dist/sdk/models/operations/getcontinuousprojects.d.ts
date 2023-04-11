import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Type of continuous project.
 */
export declare enum GetContinuousProjectsTypeEnum {
    Active = "active"
}
export declare class GetContinuousProjectsRequest extends SpeakeasyBase {
    /**
     * Type of continuous project.
     */
    type?: GetContinuousProjectsTypeEnum;
}
export declare class GetContinuousProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Newly created continuous project
     */
    continuousProjectsList?: shared.ContinuousProjectsList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
