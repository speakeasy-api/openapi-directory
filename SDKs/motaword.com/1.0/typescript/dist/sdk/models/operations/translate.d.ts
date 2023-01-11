import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranslatePathParams extends SpeakeasyBase {
    id: number;
    targetLanguage: string;
}
export declare class TranslateRequestBody extends SpeakeasyBase {
    contents?: string[];
    documents?: shared.FileAsData[];
    meta?: Record<string, any>;
}
export declare class Translate200ApplicationJson extends SpeakeasyBase {
    results?: any;
}
export declare class TranslateRequest extends SpeakeasyBase {
    pathParams: TranslatePathParams;
    request?: TranslateRequestBody;
}
export declare class TranslateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    translate200ApplicationJSONObject?: Translate200ApplicationJson;
}
