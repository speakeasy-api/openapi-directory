import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a dynamically loaded cluster via the CDS API.
**/
export declare class DynamicCluster extends SpeakeasyBase {
    cluster?: Record<string, any>;
    lastUpdated?: string;
    versionInfo?: string;
}
