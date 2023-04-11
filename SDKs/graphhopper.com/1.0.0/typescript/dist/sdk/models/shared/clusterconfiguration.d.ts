import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfigurationClustering } from "./clusterconfigurationclustering";
import { ClusterConfigurationRouting } from "./clusterconfigurationrouting";
export declare class ClusterConfiguration extends SpeakeasyBase {
    clustering?: ClusterConfigurationClustering;
    /**
     * Specifies the response format. You can either choose `geojson` or `json`.
     */
    responseType?: string;
    routing?: ClusterConfigurationRouting;
}
