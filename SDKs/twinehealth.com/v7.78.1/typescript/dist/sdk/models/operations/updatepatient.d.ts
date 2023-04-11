import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdatePatientRequest extends SpeakeasyBase {
    updatePatientRequestInput: shared.UpdatePatientRequestInput;
    /**
     * Patient identifier
     */
    id: string;
}
export declare class UpdatePatientResponse extends SpeakeasyBase {
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
    updatePatientResponse?: shared.UpdatePatientResponse;
}
