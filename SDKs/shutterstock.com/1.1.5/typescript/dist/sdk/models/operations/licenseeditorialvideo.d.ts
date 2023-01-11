import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicenseEditorialVideoSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class LicenseEditorialVideoRequest extends SpeakeasyBase {
    request: shared.LicenseEditorialVideoContentRequest;
    security: LicenseEditorialVideoSecurity;
}
export declare class LicenseEditorialVideoResponse extends SpeakeasyBase {
    contentType: string;
    licenseEditorialContentResults?: any;
    statusCode: number;
}
