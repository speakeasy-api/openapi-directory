import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListDeploymentServerList: readonly ["https://serverless.twilio.com"];
export declare class ListDeploymentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListDeploymentRequest extends SpeakeasyBase {
    /**
     * The SID of the Environment used by the Deployment resources to read.
     */
    environmentSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The SID of the Service to read the Deployment resources from.
     */
    serviceSid: string;
}
export declare class ListDeploymentListDeploymentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListDeploymentListDeploymentResponse extends SpeakeasyBase {
    deployments?: shared.ServerlessV1ServiceEnvironmentDeployment[];
    meta?: ListDeploymentListDeploymentResponseMeta;
}
export declare class ListDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listDeploymentResponse?: ListDeploymentListDeploymentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
