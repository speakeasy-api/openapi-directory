import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseEngineInfo } from "./databaseengineinfo";
/**
 * The main conversion workspace resource entity.
 */
export declare class ConversionWorkspace extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the workspace resource was created.
     */
    createTime?: string;
    /**
     * The type and version of a source or destination database.
     */
    destination?: DatabaseEngineInfo;
    /**
     * The display name for the workspace.
     */
    displayName?: string;
    /**
     * A generic list of settings for the workspace. The settings are database pair dependant and can indicate default behavior for the mapping rules engine or turn on or off specific features. Such examples can be: convert_foreign_key_to_interleave=true, skip_triggers=false, ignore_non_table_synonyms=true
     */
    globalSettings?: Record<string, string>;
    /**
     * Output only. Whether the workspace has uncommitted changes (changes which were made after the workspace was committed).
     */
    hasUncommittedChanges?: boolean;
    /**
     * Output only. The latest commit ID.
     */
    latestCommitId?: string;
    /**
     * Output only. The timestamp when the workspace was committed.
     */
    latestCommitTime?: string;
    /**
     * Full name of the workspace resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     */
    name?: string;
    /**
     * The type and version of a source or destination database.
     */
    source?: DatabaseEngineInfo;
    /**
     * Output only. The timestamp when the workspace resource was last updated.
     */
    updateTime?: string;
}
/**
 * The main conversion workspace resource entity.
 */
export declare class ConversionWorkspaceInput extends SpeakeasyBase {
    /**
     * The type and version of a source or destination database.
     */
    destination?: DatabaseEngineInfo;
    /**
     * The display name for the workspace.
     */
    displayName?: string;
    /**
     * A generic list of settings for the workspace. The settings are database pair dependant and can indicate default behavior for the mapping rules engine or turn on or off specific features. Such examples can be: convert_foreign_key_to_interleave=true, skip_triggers=false, ignore_non_table_synonyms=true
     */
    globalSettings?: Record<string, string>;
    /**
     * Full name of the workspace resource, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     */
    name?: string;
    /**
     * The type and version of a source or destination database.
     */
    source?: DatabaseEngineInfo;
}
