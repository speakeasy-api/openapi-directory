import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesTagsIdMediaFormatRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    format: string;
    /**
     * The id of the tag to look up
     */
    id: number;
    /**
     * The maximum number of records to return
     */
    max?: number;
    /**
     * Return records starting at the offset index.
     */
    offset?: number;
    /**
     * The name of the property to which sorting will be applied
     */
    sort?: string;
}
export declare class GetResourcesTagsIdMediaFormatResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the list of MediaItems associated with the Tag identified by the 'id'.
     */
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
