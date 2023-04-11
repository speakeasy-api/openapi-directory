import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe CSV and similar semi-structured data formats.
 */
export declare class GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions extends SpeakeasyBase {
    /**
     * Optional. The delimiter being used to separate values. This defaults to ','.
     */
    delimiter?: string;
    /**
     * Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.
     */
    disableTypeInference?: boolean;
    /**
     * Optional. The character encoding of the data. The default is UTF-8.
     */
    encoding?: string;
    /**
     * Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.
     */
    headerRows?: number;
}
