import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateBreakTypeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateBreakTypeRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateBreakTypeRequest: shared.UpdateBreakTypeRequest;
    /**
     *  The UUID for the `BreakType` being updated.
     */
    id: string;
}
export declare class UpdateBreakTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateBreakTypeResponse?: shared.UpdateBreakTypeResponse;
}
