import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiaryControllerSearchGuestRequest extends SpeakeasyBase {
    branchID: string;
    count: number;
    emailaddress: string;
    forename: string;
    offset: number;
    shortname: string;
    surname: string;
}
export declare class DiaryControllerSearchGuestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    guestDiaryParametersResultsModel?: shared.GuestDiaryParametersResultsModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
