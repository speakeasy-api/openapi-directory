import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesTagsIdRelatedFormatRequest extends SpeakeasyBase {
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
export declare class GetResourcesTagsIdRelatedFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the list of Tags related to the Tag identified by the 'id' in the specified format.
     */
    tagMarshallerWrappeds?: shared.TagMarshallerWrapped[];
}
