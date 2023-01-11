import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dataproc job config.
**/
export declare class JobPlacement extends SpeakeasyBase {
    clusterLabels?: Record<string, string>;
    clusterName?: string;
    clusterUuid?: string;
}
/**
 * Dataproc job config.
**/
export declare class JobPlacementInput extends SpeakeasyBase {
    clusterLabels?: Record<string, string>;
    clusterName?: string;
}
