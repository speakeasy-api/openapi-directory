import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetByENSGIDRequest extends SpeakeasyBase {
    /**
     * An Ensembl gene ID for the target of interest.
     */
    target: string;
}
export declare class GetTargetByENSGIDResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
