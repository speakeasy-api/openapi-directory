import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBreakTypeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GetBreakTypeRequest extends SpeakeasyBase {
    /**
     * The UUID for the `BreakType` being retrieved.
     */
    id: string;
}
export declare class GetBreakTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getBreakTypeResponse?: shared.GetBreakTypeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
