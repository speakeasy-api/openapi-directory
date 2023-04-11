import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LicensesSFXSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class LicensesSFXResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    licenseSFXResultDataList?: shared.LicenseSFXResultDataList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
