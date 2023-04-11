import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSipCredentialListServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipCredentialListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSipCredentialListCreateSipCredentialListRequest extends SpeakeasyBase {
    /**
     * A human readable descriptive text that describes the CredentialList, up to 64 characters long.
     */
    friendlyName: string;
}
export declare class CreateSipCredentialListRequest extends SpeakeasyBase {
    /**
     * The unique id of the Account that is responsible for this resource.
     */
    accountSid: string;
    requestBody?: CreateSipCredentialListCreateSipCredentialListRequest;
}
export declare class CreateSipCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountSipSipCredentialList?: shared.ApiV2010AccountSipSipCredentialList;
}
