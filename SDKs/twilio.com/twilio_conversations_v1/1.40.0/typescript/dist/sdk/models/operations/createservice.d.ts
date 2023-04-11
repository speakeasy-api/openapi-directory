import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateServiceServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateServiceCreateServiceRequest extends SpeakeasyBase {
    /**
     * The human-readable name of this service, limited to 256 characters. Optional.
     */
    friendlyName: string;
}
export declare class CreateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    conversationsV1Service?: shared.ConversationsV1Service;
}
