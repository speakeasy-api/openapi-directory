import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAnnotationScoreRequest extends SpeakeasyBase {
    request: shared.SufficiencyPostInput;
}
export declare class PostAnnotationScoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sufficiencyOutput?: shared.SufficiencyOutput;
}
