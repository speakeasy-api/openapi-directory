import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for elastic access
 */
export declare class ElasticConfig extends SpeakeasyBase {
    /**
     * URL of the elastic cluster
     */
    clusterUri: string;
    /**
     * Additionnal http headers
     */
    headers: Record<string, string>;
    /**
     * Index for events. Default is otoroshi-events
     */
    index: string;
    /**
     * Optional password
     */
    password: string;
    /**
     * Type of events. Default is event
     */
    type: string;
    /**
     * Optional user
     */
    user: string;
}
