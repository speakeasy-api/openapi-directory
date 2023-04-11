import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleApiServiceusageV1Service } from "./googleapiserviceusagev1service";
/**
 * Response message for the `BatchGetServices` method.
 */
export declare class BatchGetServicesResponse extends SpeakeasyBase {
    /**
     * The requested Service states.
     */
    services?: GoogleApiServiceusageV1Service[];
}
