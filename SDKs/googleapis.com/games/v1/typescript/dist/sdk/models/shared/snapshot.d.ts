import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotImage } from "./snapshotimage";
/**
 * The type of this snapshot.
 */
export declare enum SnapshotTypeEnum {
    SnapshotTypeUnspecified = "SNAPSHOT_TYPE_UNSPECIFIED",
    SaveGame = "SAVE_GAME"
}
/**
 * An snapshot object.
 */
export declare class Snapshot extends SpeakeasyBase {
    /**
     * An image of a snapshot.
     */
    coverImage?: SnapshotImage;
    /**
     * The description of this snapshot.
     */
    description?: string;
    /**
     * The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller.
     */
    driveId?: string;
    /**
     * The duration associated with this snapshot, in millis.
     */
    durationMillis?: string;
    /**
     * The ID of the snapshot.
     */
    id?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshot`.
     */
    kind?: string;
    /**
     * The timestamp (in millis since Unix epoch) of the last modification to this snapshot.
     */
    lastModifiedMillis?: string;
    /**
     * The progress value (64-bit integer set by developer) associated with this snapshot.
     */
    progressValue?: string;
    /**
     * The title of this snapshot.
     */
    title?: string;
    /**
     * The type of this snapshot.
     */
    type?: SnapshotTypeEnum;
    /**
     * The unique name provided when the snapshot was created.
     */
    uniqueName?: string;
}
