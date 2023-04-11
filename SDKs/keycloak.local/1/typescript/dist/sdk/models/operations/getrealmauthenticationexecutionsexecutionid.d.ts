import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationExecutionsExecutionIdRequest extends SpeakeasyBase {
    /**
     * Execution id
     */
    executionId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationExecutionsExecutionIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
