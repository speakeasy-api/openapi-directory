import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCredentialAwsServerList: readonly ["https://accounts.twilio.com"];
export declare class DeleteCredentialAwsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCredentialAwsRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the AWS resource to delete.
     */
    sid: string;
}
export declare class DeleteCredentialAwsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
