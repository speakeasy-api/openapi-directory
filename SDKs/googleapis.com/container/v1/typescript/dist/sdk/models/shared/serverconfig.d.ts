import { SpeakeasyBase } from "../../../internal/utils";
import { ReleaseChannelConfig } from "./releasechannelconfig";
/**
 * Kubernetes Engine service configuration.
 */
export declare class ServerConfig extends SpeakeasyBase {
    /**
     * List of release channel configurations.
     */
    channels?: ReleaseChannelConfig[];
    /**
     * Version of Kubernetes the service deploys by default.
     */
    defaultClusterVersion?: string;
    /**
     * Default image type.
     */
    defaultImageType?: string;
    /**
     * List of valid image types.
     */
    validImageTypes?: string[];
    /**
     * List of valid master versions, in descending order.
     */
    validMasterVersions?: string[];
    /**
     * List of valid node upgrade target versions, in descending order.
     */
    validNodeVersions?: string[];
}
