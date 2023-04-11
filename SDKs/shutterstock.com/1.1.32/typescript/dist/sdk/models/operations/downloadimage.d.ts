import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadImageSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
export declare class DownloadImageRequest extends SpeakeasyBase {
    /**
     * Information about the images to redownload
     */
    redownloadImage: shared.RedownloadImage;
    /**
     * License ID
     */
    id: string;
}
export declare class DownloadImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    url?: shared.Url;
}
