import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Selects and configures the service controller used by the service. Example: control: environment: servicecontrol.googleapis.com
 */
export declare class Control extends SpeakeasyBase {
    /**
     * The service controller environment to use. If empty, no control plane feature (like quota and billing) will be enabled. The recommended value for most services is servicecontrol.googleapis.com
     */
    environment?: string;
}
