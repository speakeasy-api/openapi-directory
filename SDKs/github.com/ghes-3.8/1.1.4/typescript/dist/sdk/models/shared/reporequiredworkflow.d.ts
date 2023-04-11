import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
export declare enum RepoRequiredWorkflowStateEnum {
    Active = "active",
    Deleted = "deleted"
}
/**
 * A GitHub Actions required workflow
 */
export declare class RepoRequiredWorkflow extends SpeakeasyBase {
    badgeUrl: string;
    createdAt: Date;
    htmlUrl: string;
    id: number;
    name: string;
    nodeId: string;
    path: string;
    /**
     * Minimal Repository
     */
    sourceRepository: MinimalRepository;
    state: RepoRequiredWorkflowStateEnum;
    updatedAt: Date;
    url: string;
}
