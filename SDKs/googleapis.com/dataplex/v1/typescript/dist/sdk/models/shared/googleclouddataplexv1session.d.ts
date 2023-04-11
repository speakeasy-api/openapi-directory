import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. State of Session
 */
export declare enum GoogleCloudDataplexV1SessionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    ActionRequired = "ACTION_REQUIRED"
}
/**
 * Represents an active analyze session running for a user.
 */
export declare class GoogleCloudDataplexV1Session extends SpeakeasyBase {
    /**
     * Output only. Session start time.
     */
    createTime?: string;
    /**
     * Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}/sessions/{session_id}
     */
    name?: string;
    /**
     * Output only. State of Session
     */
    state?: GoogleCloudDataplexV1SessionStateEnum;
    /**
     * Output only. Email of user running the session.
     */
    userId?: string;
}
