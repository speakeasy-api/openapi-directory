import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteTrunkServerList: readonly ["https://trunking.twilio.com"];
export declare class DeleteTrunkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteTrunkRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Trunk resource to delete.
     */
    sid: string;
}
export declare class DeleteTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
