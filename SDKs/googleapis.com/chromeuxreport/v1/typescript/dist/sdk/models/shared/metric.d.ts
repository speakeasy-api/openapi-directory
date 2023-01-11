import { SpeakeasyBase } from "../../../internal/utils";
import { Bin } from "./bin";
import { Percentiles } from "./percentiles";
export declare class Metric extends SpeakeasyBase {
    histogram?: Bin[];
    percentiles?: Percentiles;
}
