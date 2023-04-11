import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CheckSpellingRussianRequestBody extends SpeakeasyBase {
    langCode?: string;
    text?: string;
}
export declare class CheckSpellingRussianRequest extends SpeakeasyBase {
    requestBody?: CheckSpellingRussianRequestBody;
    xRapidAPIKey?: string;
}
export declare class CheckSpellingRussianResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
