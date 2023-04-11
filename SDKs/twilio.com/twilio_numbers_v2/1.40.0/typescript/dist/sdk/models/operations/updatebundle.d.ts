import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateBundleServerList: readonly ["https://numbers.twilio.com"];
export declare class UpdateBundleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateBundleUpdateBundleRequest extends SpeakeasyBase {
    /**
     * The email address that will receive updates when the Bundle resource changes status.
     */
    email?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    status?: shared.BundleEnumStatusEnum;
    /**
     * The URL we call to inform your application of status changes.
     */
    statusCallback?: string;
}
export declare class UpdateBundleRequest extends SpeakeasyBase {
    requestBody?: UpdateBundleUpdateBundleRequest;
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    sid: string;
}
export declare class UpdateBundleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    numbersV2RegulatoryComplianceBundle?: shared.NumbersV2RegulatoryComplianceBundle;
}
