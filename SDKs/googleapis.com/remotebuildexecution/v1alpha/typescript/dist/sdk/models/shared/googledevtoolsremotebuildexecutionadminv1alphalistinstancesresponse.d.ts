import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance } from "./googledevtoolsremotebuildexecutionadminv1alphainstance";
/**
 * The response used for `ListInstances`.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse extends SpeakeasyBase {
    /**
     * The list of instances in a given project.
     */
    instances?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance[];
    /**
     * Unreachable regions.
     */
    unreachable?: string[];
}
