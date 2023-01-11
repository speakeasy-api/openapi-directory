import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum LicenseImagesFormatEnum {
    Eps = "eps",
    Jpg = "jpg"
}
export declare enum LicenseImagesSizeEnum {
    Small = "small",
    Medium = "medium",
    Huge = "huge",
    Vector = "vector",
    Custom = "custom"
}
export declare class LicenseImagesQueryParams extends SpeakeasyBase {
    format?: LicenseImagesFormatEnum;
    searchId?: string;
    size?: LicenseImagesSizeEnum;
    subscriptionId?: string;
}
export declare class LicenseImagesSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class LicenseImagesRequest extends SpeakeasyBase {
    queryParams: LicenseImagesQueryParams;
    request: shared.LicenseImageRequest;
    security: LicenseImagesSecurity;
}
export declare class LicenseImagesResponse extends SpeakeasyBase {
    contentType: string;
    licenseImageResultDataList?: any;
    statusCode: number;
}
