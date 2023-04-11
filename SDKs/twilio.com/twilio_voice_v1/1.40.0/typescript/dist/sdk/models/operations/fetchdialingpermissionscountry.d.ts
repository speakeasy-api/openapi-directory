import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchDialingPermissionsCountryServerList: readonly ["https://voice.twilio.com"];
export declare class FetchDialingPermissionsCountrySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchDialingPermissionsCountryRequest extends SpeakeasyBase {
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the DialingPermissions Country resource to fetch
     */
    isoCode: string;
}
export declare class FetchDialingPermissionsCountryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voiceV1DialingPermissionsDialingPermissionsCountryInstance?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance;
}
