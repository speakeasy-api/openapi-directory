import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An artifact
 */
export declare class Artifact extends SpeakeasyBase {
    archiveDownloadUrl: string;
    createdAt: Date;
    /**
     * Whether or not the artifact has expired.
     */
    expired: boolean;
    expiresAt: Date;
    id: number;
    /**
     * The name of the artifact.
     */
    name: string;
    nodeId: string;
    /**
     * The size in bytes of the artifact.
     */
    sizeInBytes: number;
    updatedAt: Date;
    url: string;
}
