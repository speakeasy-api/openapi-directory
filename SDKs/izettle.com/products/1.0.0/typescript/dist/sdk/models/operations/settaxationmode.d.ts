import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetTaxationModeSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class SetTaxationModeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid request body
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Updated tax settings
     */
    taxSettingsResponse?: shared.TaxSettingsResponse;
}
