import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRelationByENSGIDRequest extends SpeakeasyBase {
    /**
     * An Ensembl gene identifier.
     */
    target: string;
}
export declare class GetRelationByENSGIDResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
