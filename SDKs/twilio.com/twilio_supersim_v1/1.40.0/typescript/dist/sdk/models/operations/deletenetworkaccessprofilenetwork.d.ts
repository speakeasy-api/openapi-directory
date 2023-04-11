import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteNetworkAccessProfileNetworkServerList: readonly ["https://supersim.twilio.com"];
export declare class DeleteNetworkAccessProfileNetworkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteNetworkAccessProfileNetworkRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Network Access Profile resource.
     */
    networkAccessProfileSid: string;
    /**
     * The SID of the Network resource to be removed from the Network Access Profile resource.
     */
    sid: string;
}
export declare class DeleteNetworkAccessProfileNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
