import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTrustProductServerList: readonly ["https://trusthub.twilio.com"];
export declare class CreateTrustProductSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTrustProductCreateTrustProductRequest extends SpeakeasyBase {
    /**
     * The email address that will receive updates when the Customer-Profile resource changes status.
     */
    email: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName: string;
    /**
     * The unique string of a policy that is associated to the Customer-Profile resource.
     */
    policySid: string;
    /**
     * The URL we call to inform your application of status changes.
     */
    statusCallback?: string;
}
export declare class CreateTrustProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trusthubV1TrustProduct?: shared.TrusthubV1TrustProduct;
}
