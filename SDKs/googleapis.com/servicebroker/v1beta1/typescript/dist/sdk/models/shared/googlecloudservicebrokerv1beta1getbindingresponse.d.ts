import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the `GetBinding()` method.
**/
export declare class GoogleCloudServicebrokerV1beta1GetBindingResponse extends SpeakeasyBase {
    credentials?: Record<string, any>;
    deploymentName?: string;
    description?: string;
    resourceName?: string;
    routeServiceUrl?: string;
    syslogDrainUrl?: string;
    volumeMounts?: Record<string, any>[];
}
