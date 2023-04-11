import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateIpRecordServerList: readonly ["https://voice.twilio.com"];
export declare class UpdateIpRecordSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateIpRecordUpdateIpRecordRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateIpRecordRequest extends SpeakeasyBase {
    requestBody?: UpdateIpRecordUpdateIpRecordRequest;
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to update.
     */
    sid: string;
}
export declare class UpdateIpRecordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voiceV1IpRecord?: shared.VoiceV1IpRecord;
}
