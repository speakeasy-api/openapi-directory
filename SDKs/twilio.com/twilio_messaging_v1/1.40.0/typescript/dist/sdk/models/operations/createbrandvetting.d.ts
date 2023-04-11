import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateBrandVettingServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateBrandVettingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateBrandVettingCreateBrandVettingRequest extends SpeakeasyBase {
    /**
     * The unique ID of the vetting
     */
    vettingId?: string;
    vettingProvider: shared.BrandVettingEnumVettingProviderEnum;
}
export declare class CreateBrandVettingRequest extends SpeakeasyBase {
    /**
     * The SID of the Brand Registration resource of the vettings to create .
     */
    brandSid: string;
    requestBody?: CreateBrandVettingCreateBrandVettingRequest;
}
export declare class CreateBrandVettingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    messagingV1BrandRegistrationsBrandVetting?: shared.MessagingV1BrandRegistrationsBrandVetting;
}
