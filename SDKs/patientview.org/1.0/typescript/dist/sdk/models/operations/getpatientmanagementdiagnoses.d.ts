import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPatientManagementDiagnosesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    codes?: shared.Code[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
