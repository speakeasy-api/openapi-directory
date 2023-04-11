import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateTrustProductServerList: readonly ["https://trusthub.twilio.com"];
export declare class UpdateTrustProductSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateTrustProductUpdateTrustProductRequest extends SpeakeasyBase {
    /**
     * The email address that will receive updates when the Customer-Profile resource changes status.
     */
    email?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    status?: shared.TrustProductEnumStatusEnum;
    /**
     * The URL we call to inform your application of status changes.
     */
    statusCallback?: string;
}
export declare class UpdateTrustProductRequest extends SpeakeasyBase {
    requestBody?: UpdateTrustProductUpdateTrustProductRequest;
    /**
     * The unique string that we created to identify the Customer-Profile resource.
     */
    sid: string;
}
export declare class UpdateTrustProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1TrustProduct?: shared.TrusthubV1TrustProduct;
}
