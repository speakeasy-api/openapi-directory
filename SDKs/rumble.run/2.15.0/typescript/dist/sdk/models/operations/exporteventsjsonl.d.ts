import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportEventsJSONLSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportEventsJSONLRequest extends SpeakeasyBase {
    /**
     * an optional list of fields to export, comma-separated
     */
    fields?: string;
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportEventsJSONLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * filtered event results
     */
    events?: shared.Event[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
