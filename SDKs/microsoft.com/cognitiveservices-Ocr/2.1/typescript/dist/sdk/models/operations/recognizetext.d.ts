import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecognizeTextQueryParams extends SpeakeasyBase {
    mode: shared.TextRecognitionModeEnum;
}
export declare class RecognizeTextRequest extends SpeakeasyBase {
    queryParams: RecognizeTextQueryParams;
    request: shared.ImageUrl;
}
export declare class RecognizeTextResponse extends SpeakeasyBase {
    computerVisionError?: shared.ComputerVisionError;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
