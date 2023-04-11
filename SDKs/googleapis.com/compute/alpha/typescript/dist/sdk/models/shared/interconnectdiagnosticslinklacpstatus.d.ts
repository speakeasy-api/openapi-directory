import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of a LACP link, which can take one of the following values: - ACTIVE: The link is configured and active within the bundle. - DETACHED: The link is not configured within the bundle. This means that the rest of the object should be empty.
 */
export declare enum InterconnectDiagnosticsLinkLACPStatusStateEnum {
    Active = "ACTIVE",
    Detached = "DETACHED"
}
export declare class InterconnectDiagnosticsLinkLACPStatus extends SpeakeasyBase {
    /**
     * System ID of the port on Google's side of the LACP exchange.
     */
    googleSystemId?: string;
    /**
     * System ID of the port on the neighbor's side of the LACP exchange.
     */
    neighborSystemId?: string;
    /**
     * The state of a LACP link, which can take one of the following values: - ACTIVE: The link is configured and active within the bundle. - DETACHED: The link is not configured within the bundle. This means that the rest of the object should be empty.
     */
    state?: InterconnectDiagnosticsLinkLACPStatusStateEnum;
}
