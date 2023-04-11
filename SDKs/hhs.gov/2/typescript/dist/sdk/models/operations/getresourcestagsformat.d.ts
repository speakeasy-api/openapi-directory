import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesTagsFormatRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    format: string;
    /**
     * The maximum number of records to return
     */
    max?: number;
    /**
     * Return tags associated with the supplied media id.
     */
    mediaId?: number;
    /**
     * Return tags[s] matching the supplied name
     */
    name?: string;
    /**
     * Return tags which contain the supplied partial name.
     */
    nameContains?: string;
    /**
     * Return records starting at the offset index.
     */
    offset?: number;
    /**
     * The name of the property to which sorting will be applied
     */
    sort?: string;
    /**
     * Return tags belonging to the supplied tag type id.
     */
    typeId?: number;
    /**
     * Return tags belonging to the supplied tag type name.
     */
    typeName?: string;
}
export declare class GetResourcesTagsFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the list of Tags matching the specified query parameters in the specified 'format'.
     */
    tagMarshallerWrappeds?: shared.TagMarshallerWrapped[];
}
