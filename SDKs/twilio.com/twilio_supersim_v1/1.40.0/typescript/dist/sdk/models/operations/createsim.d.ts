import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSimServerList: readonly ["https://supersim.twilio.com"];
export declare class CreateSimSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSimCreateSimRequest extends SpeakeasyBase {
    /**
     * The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) of the Super SIM to be added to your Account.
     */
    iccid: string;
    /**
     * The 10-digit code required to claim the Super SIM for your Account.
     */
    registrationCode: string;
}
export declare class CreateSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    supersimV1Sim?: shared.SupersimV1Sim;
}
