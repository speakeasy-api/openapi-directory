import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TaxonomyClassesRequest extends SpeakeasyBase {
    classifierName: string;
}
export declare class TaxonomyClassesResponse extends SpeakeasyBase {
    /**
     * Available plans
     */
    apiClassifierTaxonomyOut?: shared.APIClassifierTaxonomyOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
