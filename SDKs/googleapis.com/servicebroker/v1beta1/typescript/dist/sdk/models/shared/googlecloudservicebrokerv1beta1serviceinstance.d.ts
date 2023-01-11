import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message describing inputs to Provision and Update Service instance requests.
**/
export declare class GoogleCloudServicebrokerV1beta1ServiceInstance extends SpeakeasyBase {
    context?: Record<string, any>;
    createTime?: string;
    deploymentName?: string;
    description?: string;
    instanceId?: string;
    organizationGuid?: string;
    parameters?: Record<string, any>;
    planId?: string;
    previousValues?: Record<string, any>;
    resourceName?: string;
    serviceId?: string;
    spaceGuid?: string;
}
