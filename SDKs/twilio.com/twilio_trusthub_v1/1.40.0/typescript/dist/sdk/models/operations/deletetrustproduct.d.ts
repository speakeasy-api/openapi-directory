import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteTrustProductServerList: readonly ["https://trusthub.twilio.com"];
export declare class DeleteTrustProductSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteTrustProductRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Customer-Profile resource.
     */
    sid: string;
}
export declare class DeleteTrustProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
