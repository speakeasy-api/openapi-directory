import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPatientEnteredObservationHeadingsRequest extends SpeakeasyBase {
    /**
     * userId
     */
    userId: number;
}
export declare class GetPatientEnteredObservationHeadingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    observationHeadings?: shared.ObservationHeading[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
