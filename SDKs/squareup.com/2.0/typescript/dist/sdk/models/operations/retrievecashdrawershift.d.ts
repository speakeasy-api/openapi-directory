import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveCashDrawerShiftSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveCashDrawerShiftRequest extends SpeakeasyBase {
    /**
     * The ID of the location to retrieve cash drawer shifts from.
     */
    locationId: string;
    /**
     * The shift ID.
     */
    shiftId: string;
}
export declare class RetrieveCashDrawerShiftResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveCashDrawerShiftResponse?: shared.RetrieveCashDrawerShiftResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
