import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmAuthenticationExecutionsExecutionIdRaisePriorityRequest extends SpeakeasyBase {
    /**
     * Execution id
     */
    executionId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmAuthenticationExecutionsExecutionIdRaisePriorityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
