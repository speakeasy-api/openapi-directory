import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyResourceFile } from "./ospolicyresourcefile";
/**
 * Required. Desired state of the file.
 */
export declare enum OSPolicyResourceFileResourceStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED",
    Present = "PRESENT",
    Absent = "ABSENT",
    ContentsMatch = "CONTENTS_MATCH"
}
/**
 * A resource that manages the state of a file.
 */
export declare class OSPolicyResourceFileResource extends SpeakeasyBase {
    /**
     * A a file with this content. The size of the content is limited to 32KiB.
     */
    content?: string;
    /**
     * A remote or local file.
     */
    file?: OSPolicyResourceFile;
    /**
     * Required. The absolute path of the file within the VM.
     */
    path?: string;
    /**
     * Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
     */
    permissions?: string;
    /**
     * Required. Desired state of the file.
     */
    state?: OSPolicyResourceFileResourceStateEnum;
}
