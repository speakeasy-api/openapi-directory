import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateShiftSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateShiftRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateShiftRequest: shared.UpdateShiftRequest;
    /**
     * The ID of the object being updated.
     */
    id: string;
}
export declare class UpdateShiftResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateShiftResponse?: shared.UpdateShiftResponse;
}
