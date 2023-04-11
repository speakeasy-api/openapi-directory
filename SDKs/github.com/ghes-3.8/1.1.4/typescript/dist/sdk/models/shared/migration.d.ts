import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Repository } from "./repository";
/**
 * A migration.
 */
export declare class Migration extends SpeakeasyBase {
    archiveUrl?: string;
    createdAt: Date;
    exclude?: any[];
    excludeAttachments: boolean;
    excludeGitData: boolean;
    excludeMetadata: boolean;
    excludeOwnerProjects: boolean;
    excludeReleases: boolean;
    guid: string;
    id: number;
    lockRepositories: boolean;
    nodeId: string;
    orgMetadataOnly: boolean;
    /**
     * A GitHub user.
     */
    owner: NullableSimpleUser;
    /**
     * The repositories included in the migration. Only returned for export migrations.
     */
    repositories: Repository[];
    state: string;
    updatedAt: Date;
    url: string;
}
