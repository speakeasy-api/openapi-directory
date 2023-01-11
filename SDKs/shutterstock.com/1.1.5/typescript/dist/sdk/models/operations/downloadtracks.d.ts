import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadTracksPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DownloadTracksSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class DownloadTracksRequest extends SpeakeasyBase {
    pathParams: DownloadTracksPathParams;
    security: DownloadTracksSecurity;
}
export declare class DownloadTracksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    url?: shared.Url;
}
