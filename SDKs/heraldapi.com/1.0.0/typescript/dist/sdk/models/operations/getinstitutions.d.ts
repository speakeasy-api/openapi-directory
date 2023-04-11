import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * OK
 */
export declare class GetInstitutions200ApplicationJSON extends SpeakeasyBase {
    institutions?: shared.InstitutionV1[];
}
export declare class GetInstitutionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getInstitutions200ApplicationJSONObject?: GetInstitutions200ApplicationJSON;
}
