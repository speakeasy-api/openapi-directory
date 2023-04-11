import { SpeakeasyBase } from "../../../internal/utils";
import { ExfilResource } from "./exfilresource";
/**
 * Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.
 */
export declare class Exfiltration extends SpeakeasyBase {
    /**
     * If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source.
     */
    sources?: ExfilResource[];
    /**
     * If there are multiple targets, each target would get a complete copy of the "joined" source data.
     */
    targets?: ExfilResource[];
}
