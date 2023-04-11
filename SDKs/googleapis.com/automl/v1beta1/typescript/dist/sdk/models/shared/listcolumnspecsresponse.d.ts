import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnSpec } from "./columnspec";
/**
 * Response message for AutoMl.ListColumnSpecs.
 */
export declare class ListColumnSpecsResponse extends SpeakeasyBase {
    /**
     * The column specs read.
     */
    columnSpecs?: ColumnSpec[];
    /**
     * A token to retrieve next page of results. Pass to ListColumnSpecsRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
}
