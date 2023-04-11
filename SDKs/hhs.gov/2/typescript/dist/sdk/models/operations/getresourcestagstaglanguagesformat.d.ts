import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesTagsTagLanguagesFormatRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    format: string;
}
export declare class GetResourcesTagsTagLanguagesFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the list of TagLanguages
     */
    tagLanguageMarshallerWrappeds?: shared.TagLanguageMarshallerWrapped[];
}
