import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV3DiaryShortNameCompanyBranchesBranchIDRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Branch
     */
    branchID: string;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class GetV3DiaryShortNameCompanyBranchesBranchIDResponse extends SpeakeasyBase {
    /**
     * OK
     */
    advertisingBranchModel?: shared.AdvertisingBranchModel;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
