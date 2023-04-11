import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInteractionServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateInteractionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInteractionCreateInteractionRequest extends SpeakeasyBase {
    /**
     * The Interaction's channel.
     */
    channel: any;
    /**
     * The Interaction's routing logic.
     */
    routing: any;
}
export declare class CreateInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1Interaction?: shared.FlexV1Interaction;
}
