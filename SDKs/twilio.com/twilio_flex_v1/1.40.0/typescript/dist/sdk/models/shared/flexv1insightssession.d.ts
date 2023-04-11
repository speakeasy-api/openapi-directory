import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class FlexV1InsightsSession extends SpeakeasyBase {
    /**
     * The base URL to fetch reports and dashboards
     */
    baseUrl?: string;
    /**
     * The session expiry date and time, given in ISO 8601 format.
     */
    sessionExpiry?: string;
    /**
     * The unique ID for the session
     */
    sessionId?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
    /**
     * Unique ID to identify the user's workspace
     */
    workspaceId?: string;
}
