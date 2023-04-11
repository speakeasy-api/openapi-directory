import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSipIpAccessControlListServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSipIpAccessControlListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSipIpAccessControlListRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the resource to delete.
     */
    sid: string;
}
export declare class DeleteSipIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
