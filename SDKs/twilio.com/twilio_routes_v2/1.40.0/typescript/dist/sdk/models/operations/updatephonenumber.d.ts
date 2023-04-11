import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdatePhoneNumberServerList: readonly ["https://routes.twilio.com"];
export declare class UpdatePhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdatePhoneNumberUpdatePhoneNumberRequest extends SpeakeasyBase {
    /**
     * A human readable description of this resource, up to 64 characters.
     */
    friendlyName?: string;
    /**
     * The Inbound Processing Region used for this phone number for voice
     */
    voiceRegion?: string;
}
export declare class UpdatePhoneNumberRequest extends SpeakeasyBase {
    /**
     * The phone number in E.164 format
     */
    phoneNumber: string;
    requestBody?: UpdatePhoneNumberUpdatePhoneNumberRequest;
}
export declare class UpdatePhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    routesV2PhoneNumber?: shared.RoutesV2PhoneNumber;
}
