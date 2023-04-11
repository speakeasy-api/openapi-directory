import { SpeakeasyBase } from "../../../internal/utils";
import { Lake } from "./lake";
/**
 * Specifies how metastore metadata should be integrated with the Dataplex service.
 */
export declare class DataplexConfig extends SpeakeasyBase {
    /**
     * A reference to the Lake resources that this metastore service is attached to. The key is the lake resource name. Example: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.
     */
    lakeResources?: Record<string, Lake>;
}
