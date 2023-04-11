import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Embed full webchannel info
 */
export declare enum GetUserFollowsWebchannelsEmbedEnum {
    Webchannel = "webchannel"
}
export declare class GetUserFollowsWebchannelsRequest extends SpeakeasyBase {
    /**
     * Embed full webchannel info
     */
    embed?: GetUserFollowsWebchannelsEmbedEnum;
}
export declare class GetUserFollowsWebchannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of followed webchannels
     */
    webchannelFollows?: shared.WebchannelFollow[];
}
