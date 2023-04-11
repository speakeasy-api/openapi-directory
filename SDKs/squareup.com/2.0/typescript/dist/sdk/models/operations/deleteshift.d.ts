import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteShiftSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteShiftRequest extends SpeakeasyBase {
    /**
     * The UUID for the `Shift` being deleted.
     */
    id: string;
}
export declare class DeleteShiftResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteShiftResponse?: shared.DeleteShiftResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
