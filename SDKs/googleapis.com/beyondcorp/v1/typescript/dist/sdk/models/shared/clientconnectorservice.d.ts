import { SpeakeasyBase } from "../../../internal/utils";
import { Egress } from "./egress";
import { Ingress } from "./ingress";
/**
 * Message describing ClientConnectorService object.
 */
export declare class ClientConnectorServiceInput extends SpeakeasyBase {
    /**
     * Optional. User-provided name. The display name should follow certain format. * Must be 6 to 30 characters in length. * Can only contain lowercase letters, numbers, and hyphens. * Must start with a letter.
     */
    displayName?: string;
    /**
     * The details of the egress info. One of the following options should be set.
     */
    egress?: Egress;
    /**
     * Settings of how to connect to the ClientGateway. One of the following options should be set.
     */
    ingress?: Ingress;
    /**
     * Required. Name of resource. The name is ignored during creation.
     */
    name?: string;
}
/**
 * Output only. The operational state of the ClientConnectorService.
 */
export declare enum ClientConnectorServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Running = "RUNNING",
    Down = "DOWN",
    Error = "ERROR"
}
/**
 * Message describing ClientConnectorService object.
 */
export declare class ClientConnectorService extends SpeakeasyBase {
    /**
     * Output only. [Output only] Create time stamp.
     */
    createTime?: string;
    /**
     * Optional. User-provided name. The display name should follow certain format. * Must be 6 to 30 characters in length. * Can only contain lowercase letters, numbers, and hyphens. * Must start with a letter.
     */
    displayName?: string;
    /**
     * The details of the egress info. One of the following options should be set.
     */
    egress?: Egress;
    /**
     * Settings of how to connect to the ClientGateway. One of the following options should be set.
     */
    ingress?: Ingress;
    /**
     * Required. Name of resource. The name is ignored during creation.
     */
    name?: string;
    /**
     * Output only. The operational state of the ClientConnectorService.
     */
    state?: ClientConnectorServiceStateEnum;
    /**
     * Output only. [Output only] Update time stamp.
     */
    updateTime?: string;
}
