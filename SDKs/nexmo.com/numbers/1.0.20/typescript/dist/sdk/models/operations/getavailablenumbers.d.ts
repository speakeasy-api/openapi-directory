import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Available features are `SMS`, `VOICE` and `MMS`. To look for numbers that support multiple features, use a comma-separated value: `SMS,MMS,VOICE`.
 */
export declare enum GetAvailableNumbersFeaturesEnum {
    Sms = "SMS",
    Voice = "VOICE",
    SmsVoice = "SMS,VOICE",
    Mms = "MMS",
    SmsMms = "SMS,MMS",
    VoiceMms = "VOICE,MMS",
    SmsMmsVoice = "SMS,MMS,VOICE"
}
export declare class GetAvailableNumbersRequest extends SpeakeasyBase {
    /**
     * The two character country code to filter on (in ISO 3166-1 alpha-2 format)
     */
    country: string;
    /**
     * Available features are `SMS`, `VOICE` and `MMS`. To look for numbers that support multiple features, use a comma-separated value: `SMS,MMS,VOICE`.
     */
    features?: GetAvailableNumbersFeaturesEnum;
    /**
     * Page index
     */
    index?: number;
    /**
     * The number pattern you want to search for. Use in conjunction with `search_pattern`.
     */
    pattern?: string;
    /**
     * The strategy you want to use for matching:
     *
     * @remarks
     *
     *
     * * `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)
     * * `1` - Search for numbers that contain `pattern`
     * * `2` - Search for numbers that end with `pattern`
     *
     */
    searchPattern?: shared.SearchPatternEnum;
    /**
     * Page size
     */
    size?: number;
    /**
     * Set this parameter to filter the type of number, such as mobile or landline
     */
    type?: shared.TypeEnum;
}
export declare class GetAvailableNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    accountUnauthorized?: shared.AccountUnauthorized;
    /**
     * OK
     */
    availableNumbers?: shared.AvailableNumbers;
}
