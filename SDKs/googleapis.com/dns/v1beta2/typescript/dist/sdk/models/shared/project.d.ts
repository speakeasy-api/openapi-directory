import { SpeakeasyBase } from "../../../internal/utils";
import { Quota } from "./quota";
/**
 * A project resource. The project is a top level container for resources including Cloud DNS ManagedZones. Projects can be created only in the APIs console. Next tag: 7.
 */
export declare class Project extends SpeakeasyBase {
    /**
     * User assigned unique identifier for the resource (output only).
     */
    id?: string;
    kind?: string;
    /**
     * Unique numeric identifier for the resource; defined by the server (output only).
     */
    number?: string;
    /**
     * Limits associated with a Project.
     */
    quota?: Quota;
}
