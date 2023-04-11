import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeActionRequest extends SpeakeasyBase {
    /**
     * Action ID of the action to describe.
     */
    actionId: string;
    /**
     * Service ID of the service supporting the action.
     */
    serviceId: string;
}
export declare class DescribeActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A single action description
     */
    describeActionResponse?: shared.DescribeActionResponse;
    /**
     * Error response
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
