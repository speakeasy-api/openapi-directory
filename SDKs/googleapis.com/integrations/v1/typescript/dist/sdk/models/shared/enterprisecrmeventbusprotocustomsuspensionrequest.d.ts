import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest } from "./googleinternalcloudcrmeventbusv3posttoqueuewithtriggeridrequest";
export declare class EnterpriseCrmEventbusProtoCustomSuspensionRequest extends SpeakeasyBase {
    /**
     * Use this request to post all workflows associated with a given trigger id. Next available id: 10
     */
    postToQueueWithTriggerIdRequest?: GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest;
    /**
     * In the fired event, set the SuspensionInfo message as the value for this key.
     */
    suspensionInfoEventParameterKey?: string;
}
