import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicenseEditorialImageSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class LicenseEditorialImageRequest extends SpeakeasyBase {
    request: shared.LicenseEditorialContentRequest;
    security: LicenseEditorialImageSecurity;
}
export declare class LicenseEditorialImageResponse extends SpeakeasyBase {
    contentType: string;
    licenseEditorialContentResults?: any;
    statusCode: number;
}
