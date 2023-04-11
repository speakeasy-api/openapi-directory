import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.
 */
export declare class Version extends SpeakeasyBase {
    /**
     * When the version was created.
     */
    createTime?: string;
    /**
     * The description for this version.
     */
    description?: string;
    /**
     * The script project's Drive ID.
     */
    scriptId?: string;
    /**
     * The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.
     */
    versionNumber?: number;
}
