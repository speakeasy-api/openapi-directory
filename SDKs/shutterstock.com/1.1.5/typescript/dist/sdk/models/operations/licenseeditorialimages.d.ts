import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicenseEditorialImagesSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class LicenseEditorialImagesRequest extends SpeakeasyBase {
    request: shared.LicenseEditorialContentRequest;
    security: LicenseEditorialImagesSecurity;
}
export declare class LicenseEditorialImagesResponse extends SpeakeasyBase {
    contentType: string;
    licenseEditorialContentResults?: any;
    statusCode: number;
}
