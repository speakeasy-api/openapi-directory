import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaMostPopularMediaFormatRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    format: string;
    /**
     * The maximum number of records to return
     */
    max?: number;
    /**
     * The offset of the records set to return for pagination.
     */
    offset?: number;
}
export declare class GetResourcesMediaMostPopularMediaFormatResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the list of MediaItems with the highest ratings.
     */
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
