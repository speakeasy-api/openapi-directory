import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostStringsRequestBody extends SpeakeasyBase {
    contents?: string[];
    sourceLanguage?: string;
    targetLanguages?: string[];
}
export declare class PostStringsRequest extends SpeakeasyBase {
    request?: PostStringsRequestBody;
}
export declare class PostStringsResponse extends SpeakeasyBase {
    contentType: string;
    machineTranslatedStrings?: shared.MachineTranslatedStrings;
    statusCode: number;
}
