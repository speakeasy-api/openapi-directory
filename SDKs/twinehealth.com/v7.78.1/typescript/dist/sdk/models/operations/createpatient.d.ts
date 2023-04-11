import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreatePatientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * Created
     */
    createPatientResponse?: shared.CreatePatientResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
