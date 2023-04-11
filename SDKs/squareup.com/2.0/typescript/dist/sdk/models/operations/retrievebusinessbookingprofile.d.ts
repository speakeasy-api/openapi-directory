import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveBusinessBookingProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveBusinessBookingProfileResponse?: shared.RetrieveBusinessBookingProfileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
