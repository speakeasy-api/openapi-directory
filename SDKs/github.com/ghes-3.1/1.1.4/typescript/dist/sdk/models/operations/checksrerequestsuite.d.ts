import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ChecksRerequestSuiteRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the check suite.
     */
    checkSuiteId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ChecksRerequestSuiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    checksRerequestSuite201ApplicationJSONObject?: Record<string, any>;
}
