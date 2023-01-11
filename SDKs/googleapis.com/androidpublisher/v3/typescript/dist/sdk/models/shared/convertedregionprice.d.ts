import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare class ConvertedRegionPrice extends SpeakeasyBase {
    price?: Money;
    regionCode?: string;
    taxAmount?: Money;
}
