import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRunService } from "./cloudrunservice";
/**
 * Represents a target of an invocation over HTTP.
 */
export declare class Destination extends SpeakeasyBase {
    /**
     * Represents a Cloud Run service destination.
     */
    cloudRunService?: CloudRunService;
}
