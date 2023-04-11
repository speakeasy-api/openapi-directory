import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchBrandVettingServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchBrandVettingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchBrandVettingRequest extends SpeakeasyBase {
    /**
     * The SID of the Brand Registration resource of the vettings to read .
     */
    brandSid: string;
    /**
     * The Twilio SID of the third-party vetting record.
     */
    brandVettingSid: string;
}
export declare class FetchBrandVettingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1BrandRegistrationsBrandVetting?: shared.MessagingV1BrandRegistrationsBrandVetting;
}
