import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export declare class UpdateSourceIpMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSourceIpMappingUpdateSourceIpMappingRequest extends SpeakeasyBase {
    /**
     * The SID of the SIP Domain that the IP Record should be mapped to.
     */
    sipDomainSid: string;
}
export declare class UpdateSourceIpMappingRequest extends SpeakeasyBase {
    requestBody?: UpdateSourceIpMappingUpdateSourceIpMappingRequest;
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to update.
     */
    sid: string;
}
export declare class UpdateSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
