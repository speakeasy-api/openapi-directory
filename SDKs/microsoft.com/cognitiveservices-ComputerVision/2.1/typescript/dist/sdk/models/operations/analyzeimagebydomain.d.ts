import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyzeImageByDomainRequest extends SpeakeasyBase {
    /**
     * A JSON document with a URL pointing to the image that is to be analyzed.
     */
    imageUrl: shared.ImageUrl;
    /**
     * The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
     */
    language?: shared.ServiceLanguageEnum;
    /**
     * The domain-specific content to recognize.
     */
    model: string;
}
export declare class AnalyzeImageByDomainResponse extends SpeakeasyBase {
    /**
     * Error response.
     */
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    /**
     * Analysis result based on the domain model.
     */
    domainModelResults?: shared.DomainModelResults;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
