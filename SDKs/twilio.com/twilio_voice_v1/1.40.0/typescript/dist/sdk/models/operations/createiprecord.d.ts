import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateIpRecordServerList: readonly ["https://voice.twilio.com"];
export declare class CreateIpRecordSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateIpRecordCreateIpRecordRequest extends SpeakeasyBase {
    /**
     * An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32.
     */
    cidrPrefixLength?: number;
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * An IP address in dotted decimal notation, IPv4 only.
     */
    ipAddress: string;
}
export declare class CreateIpRecordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    voiceV1IpRecord?: shared.VoiceV1IpRecord;
}
