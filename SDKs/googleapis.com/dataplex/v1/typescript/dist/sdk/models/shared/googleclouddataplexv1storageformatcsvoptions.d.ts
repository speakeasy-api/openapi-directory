import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes CSV and similar semi-structured data formats.
 */
export declare class GoogleCloudDataplexV1StorageFormatCsvOptions extends SpeakeasyBase {
    /**
     * Optional. The delimiter used to separate values. Defaults to ','.
     */
    delimiter?: string;
    /**
     * Optional. The character encoding of the data. Accepts "US-ASCII", "UTF-8", and "ISO-8859-1". Defaults to UTF-8 if unspecified.
     */
    encoding?: string;
    /**
     * Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. Defaults to 0.
     */
    headerRows?: number;
    /**
     * Optional. The character used to quote column values. Accepts '"' (double quotation mark) or ''' (single quotation mark). Defaults to '"' (double quotation mark) if unspecified.
     */
    quote?: string;
}
