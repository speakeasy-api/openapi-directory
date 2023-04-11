import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValuePairStringString } from "./keyvaluepairstringstring";
/**
 * Class for a group of entries.
 */
export declare class LandlordProfitLossRowModel extends SpeakeasyBase {
    /**
     * Month Totals
     */
    monthTotals?: KeyValuePairStringString[];
    /**
     * Nominal Code
     */
    nominalCode?: string;
    /**
     * Title of the values.
     */
    title?: string;
    /**
     * Total for all months.
     */
    total?: string;
}
