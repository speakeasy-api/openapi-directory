import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceServerList: readonly ["https://serverless.twilio.com"];
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the Service resource. It can be a maximum of 255 characters.
     */
    friendlyName?: string;
    /**
     * Whether to inject Account credentials into a function invocation context.
     */
    includeCredentials?: boolean;
    /**
     * Whether the Service resource's properties and subresources can be edited via the UI. The default value is `false`.
     */
    uiEditable?: boolean;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    requestBody?: UpdateServiceUpdateServiceRequest;
    /**
     * The `sid` or `unique_name` of the Service resource to update.
     */
    sid: string;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    serverlessV1Service?: shared.ServerlessV1Service;
}
