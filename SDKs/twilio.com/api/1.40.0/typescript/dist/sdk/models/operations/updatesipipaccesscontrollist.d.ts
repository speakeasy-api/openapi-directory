import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSipIpAccessControlListServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSipIpAccessControlListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest extends SpeakeasyBase {
    /**
     * A human readable descriptive text, up to 255 characters long.
     */
    friendlyName: string;
}
export declare class UpdateSipIpAccessControlListRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    requestBody?: UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest;
    /**
     * A 34 character string that uniquely identifies the resource to udpate.
     */
    sid: string;
}
export declare class UpdateSipIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipIpAccessControlList?: shared.ApiV2010AccountSipSipIpAccessControlList;
}
