import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeServiceRequest extends SpeakeasyBase {
    /**
     * Service ID of the service to describe.
     */
    serviceId: string;
}
export declare class DescribeServiceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A single service description
     */
    describeServiceResponse?: shared.DescribeServiceResponse;
    /**
     * Error response
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
