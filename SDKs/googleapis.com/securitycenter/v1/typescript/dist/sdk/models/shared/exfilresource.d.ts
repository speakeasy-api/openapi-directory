import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Resource that has been exfiltrated or exfiltrated_to.
 */
export declare class ExfilResource extends SpeakeasyBase {
    /**
     * Subcomponents of the asset that is exfiltrated - these could be URIs used during exfiltration, table names, databases, filenames, etc. For example, multiple tables may be exfiltrated from the same CloudSQL instance, or multiple files from the same Cloud Storage bucket.
     */
    components?: string[];
    /**
     * Resource's URI (https://google.aip.dev/122#full-resource-names)
     */
    name?: string;
}
