import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateCredentialAwsServerList: readonly ["https://accounts.twilio.com"];
export declare class UpdateCredentialAwsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateCredentialAwsUpdateCredentialAwsRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateCredentialAwsRequest extends SpeakeasyBase {
    requestBody?: UpdateCredentialAwsUpdateCredentialAwsRequest;
    /**
     * The Twilio-provided string that uniquely identifies the AWS resource to update.
     */
    sid: string;
}
export declare class UpdateCredentialAwsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    accountsV1CredentialCredentialAws?: shared.AccountsV1CredentialCredentialAws;
}
