import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportWirelessJSONSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportWirelessJSONRequest extends SpeakeasyBase {
    /**
     * an optional list of fields to export, comma-separated
     */
    fields?: string;
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportWirelessJSONResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * filtered wireless results
     */
    wirelesses?: shared.Wireless[];
}
