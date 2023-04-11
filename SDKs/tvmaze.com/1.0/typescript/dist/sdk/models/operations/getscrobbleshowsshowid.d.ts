import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Embed full episode info
 */
export declare enum GetScrobbleShowsShowIdEmbedEnum {
    Episode = "episode"
}
export declare class GetScrobbleShowsShowIdRequest extends SpeakeasyBase {
    /**
     * Embed full episode info
     */
    embed?: GetScrobbleShowsShowIdEmbedEnum;
    /**
     * ID of the target show
     */
    showId: number;
}
export declare class GetScrobbleShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of marked episodes
     */
    markedEpisodes?: shared.MarkedEpisode[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
