import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export declare class FetchSourceIpMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSourceIpMappingRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to fetch.
     */
    sid: string;
}
export declare class FetchSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
