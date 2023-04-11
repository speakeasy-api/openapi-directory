import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ContentNotebook } from "./googleclouddataplexv1contentnotebook";
import { GoogleCloudDataplexV1ContentSqlScript } from "./googleclouddataplexv1contentsqlscript";
/**
 * Content represents a user-visible notebook or a sql script
 */
export declare class GoogleCloudDataplexV1Content extends SpeakeasyBase {
    /**
     * Output only. Content creation time.
     */
    createTime?: string;
    /**
     * Required. Content data in string format.
     */
    dataText?: string;
    /**
     * Optional. Description of the content.
     */
    description?: string;
    /**
     * Optional. User defined labels for the content.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/content/{content_id}
     */
    name?: string;
    /**
     * Configuration for Notebook content.
     */
    notebook?: GoogleCloudDataplexV1ContentNotebook;
    /**
     * Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes.
     */
    path?: string;
    /**
     * Configuration for the Sql Script content.
     */
    sqlScript?: GoogleCloudDataplexV1ContentSqlScript;
    /**
     * Output only. System generated globally unique ID for the content. This ID will be different if the content is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the content was last updated.
     */
    updateTime?: string;
}
/**
 * Content represents a user-visible notebook or a sql script
 */
export declare class GoogleCloudDataplexV1ContentInput extends SpeakeasyBase {
    /**
     * Required. Content data in string format.
     */
    dataText?: string;
    /**
     * Optional. Description of the content.
     */
    description?: string;
    /**
     * Optional. User defined labels for the content.
     */
    labels?: Record<string, string>;
    /**
     * Configuration for Notebook content.
     */
    notebook?: GoogleCloudDataplexV1ContentNotebook;
    /**
     * Required. The path for the Content file, represented as directory structure. Unique within a lake. Limited to alphanumerics, hyphens, underscores, dots and slashes.
     */
    path?: string;
    /**
     * Configuration for the Sql Script content.
     */
    sqlScript?: GoogleCloudDataplexV1ContentSqlScript;
}
