import { SpeakeasyBase } from "../../../internal/utils";
export declare class DatafeedFormat extends SpeakeasyBase {
    /**
     * Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`pipe`" - "`tab`" - "`tilde`"
     */
    columnDelimiter?: string;
    /**
     * Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected. Acceptable values are: - "`latin-1`" - "`utf-16be`" - "`utf-16le`" - "`utf-8`" - "`windows-1252`"
     */
    fileEncoding?: string;
    /**
     * Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`normal character`" - "`value quoting`"
     */
    quotingMode?: string;
}
