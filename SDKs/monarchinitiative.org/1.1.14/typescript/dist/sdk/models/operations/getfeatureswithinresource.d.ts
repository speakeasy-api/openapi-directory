import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFeaturesWithinResourceRequest extends SpeakeasyBase {
    begin: string;
    build: string;
    end: string;
    reference: string;
}
export declare class GetFeaturesWithinResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    sequenceFeatures?: shared.SequenceFeature[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
