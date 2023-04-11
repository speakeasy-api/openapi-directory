import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateBundleServerList: readonly ["https://numbers.twilio.com"];
export declare class CreateBundleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateBundleCreateBundleRequest extends SpeakeasyBase {
    /**
     * The email address that will receive updates when the Bundle resource changes status.
     */
    email: string;
    endUserType?: shared.BundleEnumEndUserTypeEnum;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName: string;
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle's phone number country ownership request.
     */
    isoCountry?: string;
    /**
     * The type of phone number of the Bundle's ownership request. Can be `local`, `mobile`, `national`, or `toll free`.
     */
    numberType?: string;
    /**
     * The unique string of a regulation that is associated to the Bundle resource.
     */
    regulationSid?: string;
    /**
     * The URL we call to inform your application of status changes.
     */
    statusCallback?: string;
}
export declare class CreateBundleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    numbersV2RegulatoryComplianceBundle?: shared.NumbersV2RegulatoryComplianceBundle;
}
