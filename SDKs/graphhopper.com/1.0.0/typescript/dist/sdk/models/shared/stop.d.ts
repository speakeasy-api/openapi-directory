import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { TimeWindow } from "./timewindow";
export declare class Stop extends SpeakeasyBase {
    address?: Address;
    /**
     * Specifies the duration of the pickup or delivery in seconds, e.g. how long it takes unload items at the customer site.
     */
    duration?: number;
    /**
     * Group this stop belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this.
     */
    group?: string;
    /**
     * Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once.
     */
    preparationTime?: number;
    /**
     * Specifies an array of time window objects (see time window object below). For example, if an item needs to be delivered between 7am and 10am then specify the array as follows: [ { "earliest": 25200, "latest" : 32400 } ] (starting the day from 0 in seconds).
     */
    timeWindows?: TimeWindow[];
}
