import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateCredentialAwsServerList: readonly ["https://accounts.twilio.com"];
export declare class CreateCredentialAwsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCredentialAwsCreateCredentialAwsRequest extends SpeakeasyBase {
    /**
     * The SID of the Subaccount that this Credential should be associated with. Must be a valid Subaccount of the account issuing the request.
     */
    accountSid?: string;
    /**
     * A string that contains the AWS access credentials in the format `<AWS_ACCESS_KEY_ID>:<AWS_SECRET_ACCESS_KEY>`. For example, `AKIAIOSFODNN7EXAMPLE:wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
     */
    credentials: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
}
export declare class CreateCredentialAwsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    accountsV1CredentialCredentialAws?: shared.AccountsV1CredentialCredentialAws;
}
