import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShiftSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetShiftRequest extends SpeakeasyBase {
    /**
     * The UUID for the `Shift` being retrieved.
     */
    id: string;
}
export declare class GetShiftResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getShiftResponse?: shared.GetShiftResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
