import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportServicesJSONSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportServicesJSONRequest extends SpeakeasyBase {
    /**
     * an optional list of fields to export, comma-separated
     */
    fields?: string;
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportServicesJSONResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * filtered service results
     */
    services?: shared.Service[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
