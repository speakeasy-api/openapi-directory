import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for sessions created for this environment.
 */
export declare class GoogleCloudDataplexV1EnvironmentSessionSpec extends SpeakeasyBase {
    /**
     * Optional. If True, this causes sessions to be pre-created and available for faster startup to enable interactive exploration use-cases. This defaults to False to avoid additional billed charges. These can only be set to True for the environment with name set to "default", and with default configuration.
     */
    enableFastStartup?: boolean;
    /**
     * Optional. The idle time configuration of the session. The session will be auto-terminated at the end of this period.
     */
    maxIdleDuration?: string;
}
