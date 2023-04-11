import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A securely stored value.
 */
export declare class Secret extends SpeakeasyBase {
    /**
     * The relative resource name of a Secret Manager secret version, in the following form:projects/{project_number}/secrets/{secret_id}/versions/{version_id}.
     */
    cloudSecret?: string;
}
