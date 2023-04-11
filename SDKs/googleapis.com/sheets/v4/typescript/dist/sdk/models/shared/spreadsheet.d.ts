import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { DataSourceRefreshSchedule } from "./datasourcerefreshschedule";
import { DeveloperMetadata } from "./developermetadata";
import { NamedRange } from "./namedrange";
import { Sheet } from "./sheet";
import { SpreadsheetProperties } from "./spreadsheetproperties";
/**
 * Resource that represents a spreadsheet.
 */
export declare class Spreadsheet extends SpeakeasyBase {
    /**
     * Output only. A list of data source refresh schedules.
     */
    dataSourceSchedules?: DataSourceRefreshSchedule[];
    /**
     * A list of external data sources connected with the spreadsheet.
     */
    dataSources?: DataSource[];
    /**
     * The developer metadata associated with a spreadsheet.
     */
    developerMetadata?: DeveloperMetadata[];
    /**
     * The named ranges defined in a spreadsheet.
     */
    namedRanges?: NamedRange[];
    /**
     * Properties of a spreadsheet.
     */
    properties?: SpreadsheetProperties;
    /**
     * The sheets that are part of a spreadsheet.
     */
    sheets?: Sheet[];
    /**
     * The ID of the spreadsheet. This field is read-only.
     */
    spreadsheetId?: string;
    /**
     * The url of the spreadsheet. This field is read-only.
     */
    spreadsheetUrl?: string;
}
/**
 * Resource that represents a spreadsheet.
 */
export declare class SpreadsheetInput extends SpeakeasyBase {
    /**
     * A list of external data sources connected with the spreadsheet.
     */
    dataSources?: DataSource[];
    /**
     * The developer metadata associated with a spreadsheet.
     */
    developerMetadata?: DeveloperMetadata[];
    /**
     * The named ranges defined in a spreadsheet.
     */
    namedRanges?: NamedRange[];
    /**
     * Properties of a spreadsheet.
     */
    properties?: SpreadsheetProperties;
    /**
     * The sheets that are part of a spreadsheet.
     */
    sheets?: Sheet[];
    /**
     * The ID of the spreadsheet. This field is read-only.
     */
    spreadsheetId?: string;
    /**
     * The url of the spreadsheet. This field is read-only.
     */
    spreadsheetUrl?: string;
}
