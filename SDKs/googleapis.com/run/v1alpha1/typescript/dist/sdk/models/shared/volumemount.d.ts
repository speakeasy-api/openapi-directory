import { SpeakeasyBase } from "../../../internal/utils";
/**
 * VolumeMount describes a mounting of a Volume within a container.
 */
export declare class VolumeMount extends SpeakeasyBase {
    /**
     * Path within the container at which the volume should be mounted. Must not contain ':'.
     */
    mountPath?: string;
    /**
     * The name of the volume. There must be a corresponding Volume with the same name.
     */
    name?: string;
    /**
     * (Optional) Only true is accepted. Defaults to true.
     */
    readOnly?: boolean;
    /**
     * (Optional) Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
     */
    subPath?: string;
}
