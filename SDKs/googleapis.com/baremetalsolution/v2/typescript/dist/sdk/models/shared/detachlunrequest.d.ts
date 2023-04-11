import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message for detach specific LUN from an Instance.
 */
export declare class DetachLunRequest extends SpeakeasyBase {
    /**
     * Required. Name of the Lun to detach.
     */
    lun?: string;
    /**
     * If true, performs lun unmapping without instance reboot.
     */
    skipReboot?: boolean;
}
