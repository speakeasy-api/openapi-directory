import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeImageRequest extends SpeakeasyBase {
    /**
     * A JSON document with a URL pointing to the image that is to be analyzed.
     */
    imageUrl: shared.ImageUrl;
    /**
     * The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
     */
    language?: shared.ServiceLanguageEnum;
    /**
     * Maximum number of candidate descriptions to be returned.  The default is 1.
     */
    maxCandidates?: number;
}
export declare class DescribeImageResponse extends SpeakeasyBase {
    /**
     * Error response.
     */
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    /**
     * Image description object.
     */
    imageDescription?: shared.ImageDescription;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
