import { SpeakeasyBase } from "../../../internal/utils";
export declare class ArtifactWorkflowRun extends SpeakeasyBase {
    headBranch?: string;
    headRepositoryId?: number;
    headSha?: string;
    id?: number;
    repositoryId?: number;
}
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
    workflowRun?: ArtifactWorkflowRun;
}
