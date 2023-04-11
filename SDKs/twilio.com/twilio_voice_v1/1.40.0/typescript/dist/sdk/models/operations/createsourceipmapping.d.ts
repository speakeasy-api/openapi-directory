import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export declare class CreateSourceIpMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSourceIpMappingCreateSourceIpMappingRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to map from.
     */
    ipRecordSid: string;
    /**
     * The SID of the SIP Domain that the IP Record should be mapped to.
     */
    sipDomainSid: string;
}
export declare class CreateSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
