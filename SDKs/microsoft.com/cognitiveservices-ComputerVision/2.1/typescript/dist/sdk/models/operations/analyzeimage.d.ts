import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AnalyzeImageDetailsEnum {
    Celebrities = "Celebrities",
    Landmarks = "Landmarks"
}
export declare class AnalyzeImageRequest extends SpeakeasyBase {
    /**
     * A JSON document with a URL pointing to the image that is to be analyzed.
     */
    imageUrl: shared.ImageUrl;
    /**
     * Turn off specified domain models when generating the description.
     */
    descriptionExclude?: shared.DescriptionExcludeEnum[];
    /**
     * A string indicating which domain-specific details to return. Multiple values should be comma-separated. Valid visual feature types include: Celebrities - identifies celebrities if detected in the image, Landmarks - identifies notable landmarks in the image.
     */
    details?: AnalyzeImageDetailsEnum[];
    /**
     * The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese.
     */
    language?: shared.ServiceLanguageEnum;
    /**
     * A string indicating what visual feature types to return. Multiple values should be comma-separated. Valid visual feature types include: Categories - categorizes image content according to a taxonomy defined in documentation. Tags - tags the image with a detailed list of words related to the image content. Description - describes the image content with a complete English sentence. Faces - detects if faces are present. If present, generate coordinates, gender and age. ImageType - detects if image is clipart or a line drawing. Color - determines the accent color, dominant color, and whether an image is black&white. Adult - detects if the image is pornographic in nature (depicts nudity or a sex act), or is gory (depicts extreme violence or blood). Sexually suggestive content (aka racy content) is also detected. Objects - detects various objects within an image, including the approximate location. The Objects argument is only available in English. Brands - detects various brands within an image, including the approximate location. The Brands argument is only available in English.
     */
    visualFeatures?: shared.VisualFeaturesEnum[];
}
export declare class AnalyzeImageResponse extends SpeakeasyBase {
    /**
     * Error response.
     */
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    /**
     * The response include the extracted features in JSON format. Here is the definitions for enumeration types:
     *
     * @remarks
     *  ClipartType
     *  Non - clipart = 0, ambiguous = 1, normal - clipart = 2, good - clipart = 3. LineDrawingTypeNon - LineDrawing = 0, LineDrawing = 1.
     */
    imageAnalysis?: shared.ImageAnalysis;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
