import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadEphemeralImageSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class UploadEphemeralImageRequest extends SpeakeasyBase {
    request: shared.ImageCreateRequest;
    security: UploadEphemeralImageSecurity;
}
export declare class UploadEphemeralImageResponse extends SpeakeasyBase {
    contentType: string;
    imageCreateResponse?: shared.ImageCreateResponse;
    statusCode: number;
}
