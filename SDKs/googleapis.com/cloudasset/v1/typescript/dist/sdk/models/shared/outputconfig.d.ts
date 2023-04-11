import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDestination } from "./bigquerydestination";
import { GcsDestination } from "./gcsdestination";
/**
 * Output configuration for export assets destination.
 */
export declare class OutputConfig extends SpeakeasyBase {
    /**
     * A BigQuery destination for exporting assets to.
     */
    bigqueryDestination?: BigQueryDestination;
    /**
     * A Cloud Storage location.
     */
    gcsDestination?: GcsDestination;
}
