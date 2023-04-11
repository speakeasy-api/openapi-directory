import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAvailableObservationHeadingsRequest extends SpeakeasyBase {
    /**
     * userId
     */
    userId: number;
}
export declare class GetAvailableObservationHeadingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    observationHeadings?: shared.ObservationHeading[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
