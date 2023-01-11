import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadImagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DownloadImageSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class DownloadImageRequest extends SpeakeasyBase {
    pathParams: DownloadImagePathParams;
    request: shared.RedownloadImage;
    security: DownloadImageSecurity;
}
export declare class DownloadImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    url?: shared.Url;
}
