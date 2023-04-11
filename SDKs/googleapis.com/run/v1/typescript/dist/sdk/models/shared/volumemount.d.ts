import { SpeakeasyBase } from "../../../internal/utils";
/**
 * VolumeMount describes a mounting of a Volume within a container.
 */
export declare class VolumeMount extends SpeakeasyBase {
    /**
     * Required. Path within the container at which the volume should be mounted. Must not contain ':'.
     */
    mountPath?: string;
    /**
     * Required. The name of the volume. There must be a corresponding Volume with the same name.
     */
    name?: string;
    /**
     * Only true is accepted for Secret Volumes. Defaults to true for Secrets Volumes.
     */
    readOnly?: boolean;
    /**
     * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
     */
    subPath?: string;
}
