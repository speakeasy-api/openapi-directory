import { SpeakeasyBase } from "../../../internal/utils";
export declare class Edge extends SpeakeasyBase {
    /**
     * metadata about the Edge
     */
    meta?: Record<string, any>;
    /**
     * Object (target) Node ID
     */
    obj?: string;
    /**
     * Predicate (relation) ID
     */
    pred?: string;
    /**
     * Subject (source) Node ID
     */
    sub?: string;
}
