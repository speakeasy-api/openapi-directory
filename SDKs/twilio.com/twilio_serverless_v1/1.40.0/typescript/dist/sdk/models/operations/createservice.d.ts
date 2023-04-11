import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateServiceServerList: readonly ["https://serverless.twilio.com"];
export declare class CreateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateServiceCreateServiceRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the Service resource. It can be a maximum of 255 characters.
     */
    friendlyName: string;
    /**
     * Whether to inject Account credentials into a function invocation context. The default value is `true`.
     */
    includeCredentials?: boolean;
    /**
     * Whether the Service's properties and subresources can be edited via the UI. The default value is `false`.
     */
    uiEditable?: boolean;
    /**
     * A user-defined string that uniquely identifies the Service resource. It can be used as an alternative to the `sid` in the URL path to address the Service resource. This value must be 50 characters or less in length and be unique.
     */
    uniqueName: string;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    serverlessV1Service?: shared.ServerlessV1Service;
}
