import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePatientPlanSummaryRequest extends SpeakeasyBase {
    updatePatientPlanSummaryRequestInput: shared.UpdatePatientPlanSummaryRequestInput;
    /**
     * Plan summary identifier
     */
    id: string;
}
export declare class UpdatePatientPlanSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updatePatientPlanSummaryResponse?: shared.UpdatePatientPlanSummaryResponse;
}
