import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UploadImageSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class UploadImageRequest extends SpeakeasyBase {
    request: shared.ImageCreateRequest;
    security: UploadImageSecurity;
}
export declare class UploadImageResponse extends SpeakeasyBase {
    computerVisionImageCreateResponse?: shared.ComputerVisionImageCreateResponse;
    contentType: string;
    statusCode: number;
}
