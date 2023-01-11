import { SpeakeasyBase } from "../../../internal/utils";
export declare class BrowserBotResponse extends SpeakeasyBase {
    content: string;
    elements: string[];
    errorMessage: string;
    execResults: string[];
    httpRedirectUrl: string;
    httpStatusCode: number;
    httpStatusMessage: string;
    isError: boolean;
    isHttpOk: boolean;
    isHttpRedirect: boolean;
    isSecure: boolean;
    isTimeout: boolean;
    languageCode: string;
    loadTime: number;
    mimeType: string;
    responseHeaders: Record<string, string>;
    securityDetails: Record<string, string>;
    serverIp: string;
    title: string;
    url: string;
}
