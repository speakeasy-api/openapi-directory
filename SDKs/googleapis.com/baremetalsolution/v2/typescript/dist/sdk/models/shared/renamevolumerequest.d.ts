import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message requesting rename of a server.
 */
export declare class RenameVolumeRequest extends SpeakeasyBase {
    /**
     * Required. The new `id` of the volume.
     */
    newVolumeId?: string;
}
