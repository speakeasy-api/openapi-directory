import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnnotationScoreQueryParams extends SpeakeasyBase {
    absentId?: string[];
    id?: string[];
}
export declare class GetAnnotationScoreRequest extends SpeakeasyBase {
    queryParams: GetAnnotationScoreQueryParams;
}
export declare class GetAnnotationScoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sufficiencyOutput?: shared.SufficiencyOutput;
}
