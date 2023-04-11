import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDiseaseByIdRequest extends SpeakeasyBase {
    /**
     * An EFO identifier.
     */
    disease: string;
}
export declare class GetDiseaseByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
