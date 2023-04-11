import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TranslateRequest extends SpeakeasyBase {
    instantTranslationRequest?: shared.InstantTranslationRequest;
    /**
     * Continuous project ID
     */
    id: number;
    /**
     * Target language that you want to instantly translate your file into.
     */
    targetLanguage: string;
}
export declare class TranslateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Instant translation result. It may return a list of translated strings, or a list of translated files.
     */
    instantTranslationResult?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
