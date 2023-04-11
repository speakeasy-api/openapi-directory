import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteOriginationUrlServerList: readonly ["https://trunking.twilio.com"];
export declare class DeleteOriginationUrlSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteOriginationUrlRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the OriginationUrl resource to delete.
     */
    sid: string;
    /**
     * The SID of the Trunk from which to delete the OriginationUrl.
     */
    trunkSid: string;
}
export declare class DeleteOriginationUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
