import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedChart } from "./embeddedchart";
/**
 * Adds a chart to a sheet in the spreadsheet.
 */
export declare class AddChartRequest extends SpeakeasyBase {
    /**
     * A chart embedded in a sheet.
     */
    chart?: EmbeddedChart;
}
