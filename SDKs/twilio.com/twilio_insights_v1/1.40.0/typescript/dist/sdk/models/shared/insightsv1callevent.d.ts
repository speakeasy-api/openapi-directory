import { SpeakeasyBase } from "../../../internal/utils";
import { EventEnumLevelEnum } from "./eventenumlevelenum";
import { EventEnumTwilioEdgeEnum } from "./eventenumtwilioedgeenum";
export declare class InsightsV1CallEvent extends SpeakeasyBase {
    accountSid?: string;
    callSid?: string;
    carrierEdge?: any;
    clientEdge?: any;
    edge?: EventEnumTwilioEdgeEnum;
    group?: string;
    level?: EventEnumLevelEnum;
    name?: string;
    sdkEdge?: any;
    sipEdge?: any;
    timestamp?: string;
}
