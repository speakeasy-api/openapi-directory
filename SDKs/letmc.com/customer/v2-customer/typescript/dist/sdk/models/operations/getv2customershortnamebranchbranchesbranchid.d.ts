import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2CustomerShortNameBranchBranchesBranchIDRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Branch
     */
    branchID: string;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class GetV2CustomerShortNameBranchBranchesBranchIDResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    branchModel?: shared.BranchModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
