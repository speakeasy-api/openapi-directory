import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportAssetsJSONSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ExportAssetsJSONRequest extends SpeakeasyBase {
    /**
     * an optional list of fields to export, comma-separated
     */
    fields?: string;
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class ExportAssetsJSONResponse extends SpeakeasyBase {
    /**
     * filtered asset results
     */
    assets?: shared.Asset[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
