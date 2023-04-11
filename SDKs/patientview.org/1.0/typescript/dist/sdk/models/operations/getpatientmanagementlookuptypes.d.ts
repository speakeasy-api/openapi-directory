import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPatientManagementLookupTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    lookupTypes?: shared.LookupType[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
