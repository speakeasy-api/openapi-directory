import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAdvisorynotificationsV1CsvCsvRow } from "./googlecloudadvisorynotificationsv1csvcsvrow";
/**
 * A representation of a CSV file attachment, as a list of column headers and a list of data rows.
 */
export declare class GoogleCloudAdvisorynotificationsV1Csv extends SpeakeasyBase {
    /**
     * The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string.
     */
    dataRows?: GoogleCloudAdvisorynotificationsV1CsvCsvRow[];
    /**
     * The list of headers for data columns in a CSV file.
     */
    headers?: string[];
}
