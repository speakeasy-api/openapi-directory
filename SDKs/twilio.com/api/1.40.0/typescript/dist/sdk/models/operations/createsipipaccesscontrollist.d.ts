import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSipIpAccessControlListServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipIpAccessControlListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSipIpAccessControlListCreateSipIpAccessControlListRequest extends SpeakeasyBase {
    /**
     * A human readable descriptive text that describes the IpAccessControlList, up to 255 characters long.
     */
    friendlyName: string;
}
export declare class CreateSipIpAccessControlListRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    requestBody?: CreateSipIpAccessControlListCreateSipIpAccessControlListRequest;
}
export declare class CreateSipIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountSipSipIpAccessControlList?: shared.ApiV2010AccountSipSipIpAccessControlList;
}
