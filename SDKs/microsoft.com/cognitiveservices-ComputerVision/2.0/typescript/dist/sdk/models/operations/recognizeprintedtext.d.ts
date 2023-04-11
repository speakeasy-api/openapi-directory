import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RecognizePrintedTextRequest extends SpeakeasyBase {
    /**
     * A JSON document with a URL pointing to the image that is to be analyzed.
     */
    imageUrl: shared.ImageUrl;
    /**
     * Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down).
     */
    detectOrientation: boolean;
    /**
     * The BCP-47 language code of the text to be detected in the image. The default value is 'unk'.
     */
    language?: shared.OcrLanguageEnum;
}
export declare class RecognizePrintedTextResponse extends SpeakeasyBase {
    /**
     * Error response.
     */
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    /**
     * The OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words. The angle, in degrees, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly.
     */
    ocrResult?: shared.OcrResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
