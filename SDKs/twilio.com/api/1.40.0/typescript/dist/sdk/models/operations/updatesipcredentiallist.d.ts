import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSipCredentialListServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSipCredentialListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSipCredentialListUpdateSipCredentialListRequest extends SpeakeasyBase {
    /**
     * A human readable descriptive text for a CredentialList, up to 64 characters long.
     */
    friendlyName: string;
}
export declare class UpdateSipCredentialListRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    requestBody?: UpdateSipCredentialListUpdateSipCredentialListRequest;
    /**
     * The credential list Sid that uniquely identifies this resource
     */
    sid: string;
}
export declare class UpdateSipCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipCredentialList?: shared.ApiV2010AccountSipSipCredentialList;
}
