import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFeaturesWithinResourcePathParams extends SpeakeasyBase {
    begin: string;
    build: string;
    end: string;
    reference: string;
}
export declare class GetFeaturesWithinResourceRequest extends SpeakeasyBase {
    pathParams: GetFeaturesWithinResourcePathParams;
}
export declare class GetFeaturesWithinResourceResponse extends SpeakeasyBase {
    contentType: string;
    sequenceFeatures?: shared.SequenceFeature[];
    statusCode: number;
}
