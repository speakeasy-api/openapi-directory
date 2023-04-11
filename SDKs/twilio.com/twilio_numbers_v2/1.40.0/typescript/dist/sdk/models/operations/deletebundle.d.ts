import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteBundleServerList: readonly ["https://numbers.twilio.com"];
export declare class DeleteBundleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteBundleRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    sid: string;
}
export declare class DeleteBundleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
