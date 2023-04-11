import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteIpRecordServerList: readonly ["https://voice.twilio.com"];
export declare class DeleteIpRecordSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteIpRecordRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to delete.
     */
    sid: string;
}
export declare class DeleteIpRecordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
