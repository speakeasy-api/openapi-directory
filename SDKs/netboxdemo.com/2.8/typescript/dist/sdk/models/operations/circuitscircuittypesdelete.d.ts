import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CircuitsCircuitTypesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this circuit type.
     */
    id: number;
}
export declare class CircuitsCircuitTypesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
