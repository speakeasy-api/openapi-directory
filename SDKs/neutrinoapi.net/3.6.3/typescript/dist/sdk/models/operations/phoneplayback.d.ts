import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PhonePlaybackRequestBody extends SpeakeasyBase {
    /**
     * A URL to a valid audio file. Accepted audio formats are: <ul> <li>MP3</li> <li>WAV</li> <li>OGG</li> </ul>You can use the following MP3 URL for testing: <br>https://www.neutrinoapi.com/test-files/test1.mp3
     */
    audioUrl: string;
    /**
     * Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned
     */
    limit?: number;
    /**
     * Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)
     */
    limitTtl?: number;
    /**
     * The phone number to call. Must be in valid international format
     */
    number: string;
}
export declare class PhonePlaybackResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    phonePlaybackResponse?: shared.PhonePlaybackResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
