import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCredentialAwsServerList: readonly ["https://accounts.twilio.com"];
export declare class FetchCredentialAwsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCredentialAwsRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the AWS resource to fetch.
     */
    sid: string;
}
export declare class FetchCredentialAwsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    accountsV1CredentialCredentialAws?: shared.AccountsV1CredentialCredentialAws;
}
