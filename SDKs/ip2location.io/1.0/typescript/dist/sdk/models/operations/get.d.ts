import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Format of the response message.
 */
export declare enum GetFormatEnum {
    Json = "json",
    Xml = "xml"
}
/**
 * Translation information. The translation only applicable for continent, country, region and city name. This parameter is only available for Plus and Security plan only.
 */
export declare enum GetLangEnum {
    Ar = "ar",
    Cs = "cs",
    Da = "da",
    De = "de",
    En = "en",
    Es = "es",
    Et = "et",
    Fi = "fi",
    Fr = "fr",
    Ga = "ga",
    It = "it",
    Ja = "ja",
    Ko = "ko",
    Ms = "ms",
    Nl = "nl",
    Pt = "pt",
    Ru = "ru",
    Sv = "sv",
    Tr = "tr",
    Vi = "vi",
    ZhCn = "zh-cn",
    ZhTw = "zh-tw"
}
export declare class GetRequest extends SpeakeasyBase {
    /**
     * Format of the response message.
     */
    format?: GetFormatEnum;
    /**
     * IP address (IPv4 or IPv6) for reverse IP location lookup purposes. If not present, the server IP address will be used for the location lookup.
     */
    ip: string;
    /**
     * API key.
     */
    key: string;
    /**
     * Translation information. The translation only applicable for continent, country, region and city name. This parameter is only available for Plus and Security plan only.
     */
    lang?: GetLangEnum;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
