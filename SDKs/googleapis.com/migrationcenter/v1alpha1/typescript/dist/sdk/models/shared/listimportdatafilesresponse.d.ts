import { SpeakeasyBase } from "../../../internal/utils";
import { ImportDataFile } from "./importdatafile";
/**
 * Response for listing payload files of an import job.
 */
export declare class ListImportDataFilesResponse extends SpeakeasyBase {
    /**
     * The list of import data files.
     */
    importDataFiles?: ImportDataFile[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
