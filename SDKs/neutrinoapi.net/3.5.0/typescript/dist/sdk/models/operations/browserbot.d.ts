import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BrowserBotRequestBodyOutputCaseEnum {
    Camel = "camel"
}
export declare class BrowserBotRequestBody extends SpeakeasyBase {
    delay?: number;
    exec?: string[];
    ignoreCertificateErrors?: boolean;
    outputCase?: BrowserBotRequestBodyOutputCaseEnum;
    selector?: string;
    timeout?: number;
    url: string;
    userAgent?: string;
}
export declare class BrowserBotRequest extends SpeakeasyBase {
    request?: BrowserBotRequestBody;
}
export declare class BrowserBotResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    browserBotResponse?: shared.BrowserBotResponse;
    contentType: string;
    statusCode: number;
}
