import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GetAddonEnum {
    Continent = "continent",
    Country = "country",
    Region = "region",
    City = "city",
    Geotargeting = "geotargeting",
    CountryGroupings = "country_groupings",
    TimeZoneInfo = "time_zone_info"
}
/**
 * Format of the response message.
 */
export declare enum GetFormatEnum {
    Json = "json",
    Xml = "xml"
}
/**
 * Translation information. The translation only applicable for continent, country, region and city name for the addon package.
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
/**
 * Web service package of different granularity of return information.
 */
export declare enum GetPackageEnum {
    Ws1 = "WS1",
    Ws2 = "WS2",
    Ws3 = "WS3",
    Ws4 = "WS4",
    Ws5 = "WS5",
    Ws6 = "WS6",
    Ws7 = "WS7",
    Ws8 = "WS8",
    Ws9 = "WS9",
    Ws10 = "WS10",
    Ws11 = "WS11",
    Ws12 = "WS12",
    Ws13 = "WS13",
    Ws14 = "WS14",
    Ws15 = "WS15",
    Ws16 = "WS16",
    Ws17 = "WS17",
    Ws18 = "WS18",
    Ws19 = "WS19",
    Ws20 = "WS20",
    Ws21 = "WS21",
    Ws22 = "WS22",
    Ws23 = "WS23",
    Ws24 = "WS24",
    Ws25 = "WS25"
}
export declare class GetRequest extends SpeakeasyBase {
    /**
     * Extra information in addition to the above selected package.
     */
    addon?: GetAddonEnum[];
    /**
     * Format of the response message.
     */
    format?: GetFormatEnum;
    /**
     * IP address (IPv4 or IPv6) for reverse IP location lookup purpose. If not present, the server IP address will be used for the location lookup.
     */
    ip: string;
    /**
     * API Key. Please sign up free trial license key at ip2location.com
     */
    key: string;
    /**
     * Translation information. The translation only applicable for continent, country, region and city name for the addon package.
     */
    lang?: GetLangEnum;
    /**
     * Web service package of different granularity of return information.
     */
    package?: GetPackageEnum;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get response from IP lookup
     */
    get200ApplicationJSONString?: string;
}
