import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export declare class DeleteSourceIpMappingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSourceIpMappingRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the IP Record resource to delete.
     */
    sid: string;
}
export declare class DeleteSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
