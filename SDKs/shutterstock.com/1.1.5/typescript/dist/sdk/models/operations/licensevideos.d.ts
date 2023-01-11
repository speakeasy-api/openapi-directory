import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum LicenseVideosSizeEnum {
    Web = "web",
    Sd = "sd",
    Hd = "hd",
    Fourk = "4k"
}
export declare class LicenseVideosQueryParams extends SpeakeasyBase {
    searchId?: string;
    size?: LicenseVideosSizeEnum;
    subscriptionId?: string;
}
export declare class LicenseVideosSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class LicenseVideosRequest extends SpeakeasyBase {
    queryParams: LicenseVideosQueryParams;
    request: shared.LicenseVideoRequest;
    security: LicenseVideosSecurity;
}
export declare class LicenseVideosResponse extends SpeakeasyBase {
    contentType: string;
    licenseVideoResultDataList?: any;
    statusCode: number;
}
