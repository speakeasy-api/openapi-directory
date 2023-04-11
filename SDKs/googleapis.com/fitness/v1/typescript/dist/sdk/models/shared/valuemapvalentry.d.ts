import { SpeakeasyBase } from "../../../internal/utils";
import { MapValue } from "./mapvalue";
export declare class ValueMapValEntry extends SpeakeasyBase {
    key?: string;
    /**
     * Holder object for the value of an entry in a map field of a data point. A map value supports a subset of the formats that the regular Value supports.
     */
    value?: MapValue;
}
