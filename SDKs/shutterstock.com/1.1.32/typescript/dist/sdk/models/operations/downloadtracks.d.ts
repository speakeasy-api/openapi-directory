import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadTracksSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DownloadTracksRequest extends SpeakeasyBase {
    /**
     * License ID
     */
    id: string;
}
export declare class DownloadTracksResponse extends SpeakeasyBase {
    /**
     * OK
     */
    audioUrl?: shared.AudioUrl;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
