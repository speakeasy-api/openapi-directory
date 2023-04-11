import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadVideosSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DownloadVideosRequest extends SpeakeasyBase {
    /**
     * Information about the videos to redownload
     */
    redownloadVideo: shared.RedownloadVideo;
    /**
     * The license ID of the item to (re)download. The download links in the response are valid for 8 hours.
     */
    id: string;
}
export declare class DownloadVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    url?: shared.Url;
}
