import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAnnotationScoreRequest extends SpeakeasyBase {
    /**
     * absent phenotype (eg HP:0002828)
     */
    absentId?: string[];
    /**
     * Phenotype identifier (eg HP:0004935)
     */
    id?: string[];
}
export declare class GetAnnotationScoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    sufficiencyOutput?: shared.SufficiencyOutput;
}
