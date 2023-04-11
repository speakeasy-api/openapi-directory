import { SpeakeasyBase } from "../../../internal/utils";
/**
 * State.
 */
export declare enum GoogleCloudConnectorsV1ConnectionStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING",
    Error = "ERROR",
    AuthorizationRequired = "AUTHORIZATION_REQUIRED"
}
/**
 * ConnectionStatus indicates the state of the connection.
 */
export declare class GoogleCloudConnectorsV1ConnectionStatus extends SpeakeasyBase {
    /**
     * Description.
     */
    description?: string;
    /**
     * State.
     */
    state?: GoogleCloudConnectorsV1ConnectionStatusStateEnum;
    /**
     * Status provides detailed information for the state.
     */
    status?: string;
}
