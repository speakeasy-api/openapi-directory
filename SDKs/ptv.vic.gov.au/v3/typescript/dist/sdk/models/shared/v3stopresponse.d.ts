import { SpeakeasyBase } from "../../../internal/utils";
import { V3Disruption } from "./v3disruption";
import { V3Status } from "./v3status";
import { V3StopDetails } from "./v3stopdetails";
export declare class V3StopResponse extends SpeakeasyBase {
    disruptions?: Record<string, V3Disruption>;
    status?: V3Status;
    stop?: V3StopDetails;
}
