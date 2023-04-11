import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LicenseVideosSecurity extends SpeakeasyBase {
    customerAccessCode: string;
}
/**
 * The size of the video to license
 */
export declare enum LicenseVideosSizeEnum {
    Web = "web",
    Sd = "sd",
    Hd = "hd",
    Fourk = "4k"
}
export declare class LicenseVideosRequest extends SpeakeasyBase {
    /**
     * List of videos to request licenses for and information about each license transaction; these values override the defaults in the query parameters
     */
    licenseVideoRequest: shared.LicenseVideoRequest;
    /**
     * The Search ID that led to this licensing event
     */
    searchId?: string;
    /**
     * The size of the video to license
     */
    size?: LicenseVideosSizeEnum;
    /**
     * The subscription ID to use for licensing
     */
    subscriptionId?: string;
}
export declare class LicenseVideosResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    licenseVideoResultDataList?: shared.LicenseVideoResultDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
