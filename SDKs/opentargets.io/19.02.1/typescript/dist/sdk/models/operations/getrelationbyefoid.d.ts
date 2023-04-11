import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRelationByEFOIDRequest extends SpeakeasyBase {
    /**
     * An EFO gene identifier.
     */
    disease: string;
}
export declare class GetRelationByEFOIDResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
