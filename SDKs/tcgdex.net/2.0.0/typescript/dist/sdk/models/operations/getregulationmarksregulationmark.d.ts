import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRegulationMarksRegulationMarkRequest extends SpeakeasyBase {
    regulationMark: string;
}
export declare class GetRegulationMarksRegulationMarkResponse extends SpeakeasyBase {
    /**
     * Get every cards respecting the specified regulation-mark
     */
    cardResumes?: shared.CardResume[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
