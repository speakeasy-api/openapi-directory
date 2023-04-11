import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpsertPatientResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * OK
     */
    createPatientResponse?: shared.CreatePatientResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
