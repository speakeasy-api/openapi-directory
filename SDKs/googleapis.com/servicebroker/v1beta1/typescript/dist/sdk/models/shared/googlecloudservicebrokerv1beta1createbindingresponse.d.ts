import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the `CreateBinding()` method.
**/
export declare class GoogleCloudServicebrokerV1beta1CreateBindingResponse extends SpeakeasyBase {
    credentials?: Record<string, any>;
    description?: string;
    operation?: string;
    routeServiceUrl?: string;
    syslogDrainUrl?: string;
    volumeMounts?: Record<string, any>[];
}
