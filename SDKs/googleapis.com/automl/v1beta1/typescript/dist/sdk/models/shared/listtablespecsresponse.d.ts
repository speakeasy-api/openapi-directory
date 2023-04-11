import { SpeakeasyBase } from "../../../internal/utils";
import { TableSpec } from "./tablespec";
/**
 * Response message for AutoMl.ListTableSpecs.
 */
export declare class ListTableSpecsResponse extends SpeakeasyBase {
    /**
     * A token to retrieve next page of results. Pass to ListTableSpecsRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
    /**
     * The table specs read.
     */
    tableSpecs?: TableSpec[];
}
