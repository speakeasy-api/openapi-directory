import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Carries information about a particular disk mount inside a container.
 */
export declare class Mount extends SpeakeasyBase {
    /**
     * The name of the disk to mount, as specified in the resources section.
     */
    disk?: string;
    /**
     * The path to mount the disk inside the container.
     */
    path?: string;
    /**
     * If true, the disk is mounted read-only inside the container.
     */
    readOnly?: boolean;
}
