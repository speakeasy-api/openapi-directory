import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Per-project settings for the Tool Results service.
 */
export declare class ProjectSettings extends SpeakeasyBase {
    /**
     * The name of the Google Cloud Storage bucket to which results are written. By default, this is unset. In update request: optional In response: optional
     */
    defaultBucket?: string;
    /**
     * The name of the project's settings. Always of the form: projects/{project-id}/settings In update request: never set In response: always set
     */
    name?: string;
}
