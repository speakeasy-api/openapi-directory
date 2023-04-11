import { SpeakeasyBase } from "../../../internal/utils";
export declare class MemcacheParametersInput extends SpeakeasyBase {
    /**
     * User defined set of parameters to use in the memcached process.
     */
    params?: Record<string, string>;
}
export declare class MemcacheParameters extends SpeakeasyBase {
    /**
     * Output only. The unique ID associated with this set of parameters. Users can use this id to determine if the parameters associated with the instance differ from the parameters associated with the nodes. A discrepancy between parameter ids can inform users that they may need to take action to apply parameters on nodes.
     */
    id?: string;
    /**
     * User defined set of parameters to use in the memcached process.
     */
    params?: Record<string, string>;
}
