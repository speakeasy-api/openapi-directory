import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.
 */
export declare class ManualScaling extends SpeakeasyBase {
    /**
     * Number of instances to assign to the service at the start. This number can later be altered by using the Modules API (https://cloud.google.com/appengine/docs/python/modules/functions) set_num_instances() function.
     */
    instances?: number;
}
