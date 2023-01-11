import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadVideosPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DownloadVideosSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class DownloadVideosRequest extends SpeakeasyBase {
    pathParams: DownloadVideosPathParams;
    request: shared.RedownloadVideo;
    security: DownloadVideosSecurity;
}
export declare class DownloadVideosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    url?: shared.Url;
}
