import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigFile } from "./configfile";
import { ImportFile } from "./importfile";
/**
 * Successful response
 */
export declare class Manifest extends SpeakeasyBase {
    config?: ConfigFile;
    /**
     * Output only. The fully-expanded configuration file, including any templates and references.
     */
    expandedConfig?: string;
    id?: string;
    /**
     * Output only. The imported files for this manifest.
     */
    imports?: ImportFile[];
    /**
     * Output only. Creation timestamp in RFC3339 text format.
     */
    insertTime?: string;
    /**
     * Output only. The YAML layout for this manifest.
     */
    layout?: string;
    /**
     * Output only. The computed size of the fully expanded manifest.
     */
    manifestSizeBytes?: string;
    /**
     * Output only. The size limit for expanded manifests in the project.
     */
    manifestSizeLimitBytes?: string;
    /**
     * Output only. The name of the manifest.
     */
    name?: string;
    /**
     * Output only. Self link for the manifest.
     */
    selfLink?: string;
}
