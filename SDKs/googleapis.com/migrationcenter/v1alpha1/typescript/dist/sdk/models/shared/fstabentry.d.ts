import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Single fstab entry.
 */
export declare class FstabEntry extends SpeakeasyBase {
    /**
     * The mount point for the filesystem.
     */
    file?: string;
    /**
     * Used by dump to determine which filesystems need to be dumped.
     */
    freq?: number;
    /**
     * Mount options associated with the filesystem.
     */
    mntops?: string;
    /**
     * Used by the fsck(8) program to determine the order in which filesystem checks are done at reboot time.
     */
    passno?: number;
    /**
     * The block special device or remote filesystem to be mounted.
     */
    spec?: string;
    /**
     * The type of the filesystem.
     */
    vfstype?: string;
}
