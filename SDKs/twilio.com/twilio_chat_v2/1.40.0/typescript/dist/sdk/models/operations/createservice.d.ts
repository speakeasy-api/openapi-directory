import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateServiceServerList: readonly ["https://chat.twilio.com"];
export declare class CreateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateServiceCreateServiceRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the new resource.
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
    chatV2Service?: shared.ChatV2Service;
}
