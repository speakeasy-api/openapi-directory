import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesTagsIdFormatRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    format: string;
    /**
     * The id of the record to look up
     */
    id: number;
}
export declare class GetResourcesTagsIdFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the Tag identified by the 'id' in the specified 'format'.
     */
    tagMarshallerWrappeds?: shared.TagMarshallerWrapped[];
}
