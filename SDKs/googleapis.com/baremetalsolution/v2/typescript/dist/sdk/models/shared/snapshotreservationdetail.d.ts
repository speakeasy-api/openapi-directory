import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about snapshot space reservation and usage on the storage volume.
 */
export declare class SnapshotReservationDetail extends SpeakeasyBase {
    /**
     * The space on this storage volume reserved for snapshots, shown in GiB.
     */
    reservedSpaceGib?: string;
    /**
     * Percent of the total Volume size reserved for snapshot copies. Enabling snapshots requires reserving 20% or more of the storage volume space for snapshots. Maximum reserved space for snapshots is 40%. Setting this field will effectively set snapshot_enabled to true.
     */
    reservedSpacePercent?: number;
    /**
     * The amount, in GiB, of available space in this storage volume's reserved snapshot space.
     */
    reservedSpaceRemainingGib?: string;
    /**
     * The percent of snapshot space on this storage volume actually being used by the snapshot copies. This value might be higher than 100% if the snapshot copies have overflowed into the data portion of the storage volume.
     */
    reservedSpaceUsedPercent?: number;
}
