import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * extension
 */
export declare enum GetQueryExtensionExtensionEnum {
    Atom = "atom",
    Rss = "rss",
    Html = "html",
    Json = "json"
}
export declare class GetQueryExtensionRequest extends SpeakeasyBase {
    count?: number;
    /**
     * extension
     */
    extension: GetQueryExtensionExtensionEnum;
    inUrlPrefixes?: string;
    q: string;
    start?: number;
    subdomains?: string;
}
export declare class GetQueryExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
