import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationResponse } from "./applicationresponse";
/**
 * A list of applications matching your existing filters
 */
export declare class ApplicationResponseCollectionEmbedded extends SpeakeasyBase {
    applications?: ApplicationResponse[];
}
/**
 * Success
 */
export declare class ApplicationResponseCollection extends SpeakeasyBase {
    /**
     * A list of applications matching your existing filters
     */
    embedded?: ApplicationResponseCollectionEmbedded;
    /**
     * The current page number (starts at 1)
     */
    page?: number;
    /**
     * The number of applications per page
     */
    pageSize?: number;
    /**
     * The total number of applications
     */
    totalItems?: number;
    /**
     * The total number of pages returned
     */
    totalPages?: number;
}
