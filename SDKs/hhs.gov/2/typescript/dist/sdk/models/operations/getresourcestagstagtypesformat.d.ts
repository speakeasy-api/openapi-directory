import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesTagsTagTypesFormatRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    format: string;
}
export declare class GetResourcesTagsTagTypesFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Renders the list of MediaItems associated with the Tag identified by the 'id'.
     */
    tagTypeMarshallerWrappeds?: shared.TagTypeMarshallerWrapped[];
}
