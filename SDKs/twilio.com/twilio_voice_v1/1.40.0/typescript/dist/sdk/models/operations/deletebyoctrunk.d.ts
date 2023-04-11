import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteByocTrunkServerList: readonly ["https://voice.twilio.com"];
export declare class DeleteByocTrunkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteByocTrunkRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the BYOC Trunk resource to delete.
     */
    sid: string;
}
export declare class DeleteByocTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
