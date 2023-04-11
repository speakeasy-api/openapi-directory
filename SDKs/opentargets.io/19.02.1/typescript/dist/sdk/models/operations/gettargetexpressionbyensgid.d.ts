import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetExpressionByENSGIDRequest extends SpeakeasyBase {
    /**
     * An Ensembl gene identifier.
     */
    gene: string;
}
export declare class GetTargetExpressionByENSGIDResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
