import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POSIX Group definition to represent a group in a POSIX compliant system.
 */
export declare class PosixGroup extends SpeakeasyBase {
    /**
     * GID of the POSIX group.
     */
    gid?: string;
    /**
     * Name of the POSIX group.
     */
    name?: string;
    /**
     * System identifier for which group name and gid apply to. If not specified it will default to empty value.
     */
    systemId?: string;
}
