import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaTypesFormatRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    format: string;
}
export declare class GetResourcesMediaTypesFormatResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the list of available MediaTypes.
     */
    mediaTypeHolderWrappeds?: shared.MediaTypeHolderWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
